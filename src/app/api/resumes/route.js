import sql from "@/app/api/utils/sql";

export async function GET(request) {
  try {
    const resumes = await sql`
      SELECT * FROM resumes ORDER BY is_latest DESC, created_at DESC
    `;

    return Response.json({ data: resumes });
  } catch (error) {
    console.error("Error fetching resumes:", error);
    return Response.json({ error: "Failed to fetch resumes" }, { status: 500 });
  }
}

export async function POST(request) {
  try {
    const body = await request.json();
    const { title, fileUrl, description, isLatest } = body;

    if (!title || !fileUrl) {
      return Response.json(
        { error: "Title and file URL required" },
        { status: 400 },
      );
    }

    // If this is marked as latest, unmark others
    if (isLatest) {
      await sql`
        UPDATE resumes SET is_latest = false WHERE is_latest = true
      `;
    }

    const result = await sql`
      INSERT INTO resumes (title, file_url, description, is_latest)
      VALUES (${title}, ${fileUrl}, ${description || null}, ${isLatest || false})
      RETURNING *
    `;

    return Response.json({ data: result[0] });
  } catch (error) {
    console.error("Error creating resume:", error);
    return Response.json({ error: "Failed to create resume" }, { status: 500 });
  }
}

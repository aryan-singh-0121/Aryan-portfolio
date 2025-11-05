import sql from "@/app/api/utils/sql";

export async function GET(request) {
  try {
    const certificates = await sql`
      SELECT * FROM certificates ORDER BY issued_date DESC
    `;

    return Response.json({ data: certificates });
  } catch (error) {
    console.error("Error fetching certificates:", error);
    return Response.json(
      { error: "Failed to fetch certificates" },
      { status: 500 },
    );
  }
}

export async function POST(request) {
  try {
    const body = await request.json();
    const {
      title,
      description,
      imageUrl,
      downloadUrl,
      certificateType,
      issuedDate,
    } = body;

    if (!title || !imageUrl) {
      return Response.json(
        { error: "Title and image URL required" },
        { status: 400 },
      );
    }

    const result = await sql`
      INSERT INTO certificates (title, description, image_url, download_url, certificate_type, issued_date)
      VALUES (${title}, ${description || null}, ${imageUrl}, ${downloadUrl || null}, ${certificateType || "general"}, ${issuedDate || new Date().toISOString().split("T")[0]})
      RETURNING *
    `;

    return Response.json({ data: result[0] });
  } catch (error) {
    console.error("Error creating certificate:", error);
    return Response.json(
      { error: "Failed to create certificate" },
      { status: 500 },
    );
  }
}

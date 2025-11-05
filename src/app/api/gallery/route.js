import sql from "@/app/api/utils/sql";

// Add gallery image
export async function POST(request) {
  try {
    const body = await request.json();
    const { imageUrl, title } = body;

    if (!imageUrl) {
      return Response.json({ error: "Image URL is required" }, { status: 400 });
    }

    const result = await sql`
      INSERT INTO gallery_uploads (image_url, title, uploaded_by)
      VALUES (${imageUrl}, ${title || "Untitled"}, 'Aryan Singh')
      RETURNING id, image_url, title, created_at
    `;

    return Response.json({
      success: true,
      message: "Image added to gallery",
      data: result[0],
    });
  } catch (error) {
    console.error("Error adding to gallery:", error);
    return Response.json({ error: "Failed to add image" }, { status: 500 });
  }
}

// Get all gallery images
export async function GET() {
  try {
    const data = await sql`
      SELECT id, image_url, title, created_at 
      FROM gallery_uploads 
      ORDER BY created_at DESC
    `;

    return Response.json({ data });
  } catch (error) {
    console.error("Error fetching gallery:", error);
    return Response.json({ error: "Failed to fetch gallery" }, { status: 500 });
  }
}

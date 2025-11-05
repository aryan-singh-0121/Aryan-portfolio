import sql from "@/app/api/utils/sql";

// Create project request
export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, projectDetails, phoneNumber } = body;

    if (!name || !email || !projectDetails) {
      return Response.json(
        { error: "Missing required fields" },
        { status: 400 },
      );
    }

    const result = await sql`
      INSERT INTO project_requests (name, email, project_details, phone_number)
      VALUES (${name}, ${email}, ${projectDetails}, ${phoneNumber || null})
      RETURNING id, name, email, created_at
    `;

    return Response.json({
      success: true,
      message: "Project request submitted successfully",
      data: result[0],
    });
  } catch (error) {
    console.error("Error creating request:", error);
    return Response.json(
      { error: "Failed to submit request" },
      { status: 500 },
    );
  }
}

// Get all requests
export async function GET() {
  try {
    const data = await sql`
      SELECT id, name, email, project_details, phone_number, created_at 
      FROM project_requests 
      ORDER BY created_at DESC
    `;

    return Response.json({ data });
  } catch (error) {
    console.error("Error fetching requests:", error);
    return Response.json(
      { error: "Failed to fetch requests" },
      { status: 500 },
    );
  }
}

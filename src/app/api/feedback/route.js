import sql from "@/app/api/utils/sql";

// Create feedback
export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, message, feedbackType } = body;

    if (!name || !email || !message) {
      return Response.json(
        { error: "Missing required fields" },
        { status: 400 },
      );
    }

    const result = await sql`
      INSERT INTO user_feedback (name, email, message, feedback_type)
      VALUES (${name}, ${email}, ${message}, ${feedbackType || "general"})
      RETURNING id, name, email, created_at
    `;

    return Response.json({
      success: true,
      message: "Feedback submitted successfully",
      data: result[0],
    });
  } catch (error) {
    console.error("Error creating feedback:", error);
    return Response.json(
      { error: "Failed to submit feedback" },
      { status: 500 },
    );
  }
}

// Get all feedback
export async function GET() {
  try {
    const data = await sql`
      SELECT id, name, email, message, feedback_type, created_at 
      FROM user_feedback 
      ORDER BY created_at DESC
    `;

    return Response.json({ data });
  } catch (error) {
    console.error("Error fetching feedback:", error);
    return Response.json(
      { error: "Failed to fetch feedback" },
      { status: 500 },
    );
  }
}

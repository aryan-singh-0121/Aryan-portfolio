import sql from "@/app/api/utils/sql";

// Get current engagement counts
export async function GET() {
  try {
    const data = await sql`
      SELECT action_type, count FROM user_engagement 
      WHERE action_type IN ('likes', 'follows', 'comments')
      ORDER BY action_type
    `;

    const response = {
      likes: data.find((d) => d.action_type === "likes")?.count || 319,
      follows: data.find((d) => d.action_type === "follows")?.count || 213,
      comments: data.find((d) => d.action_type === "comments")?.count || 0,
    };

    return Response.json(response);
  } catch (error) {
    console.error("Error fetching engagement:", error);
    return Response.json(
      { error: "Failed to fetch engagement data" },
      { status: 500 },
    );
  }
}

// Increment engagement (like, follow, or comment)
export async function POST(request) {
  try {
    const body = await request.json();
    const { action } = body;

    if (!["likes", "follows", "comments"].includes(action)) {
      return Response.json({ error: "Invalid action" }, { status: 400 });
    }

    const result = await sql`
      UPDATE user_engagement 
      SET count = count + 1, updated_at = CURRENT_TIMESTAMP
      WHERE action_type = ${action}
      RETURNING count
    `;

    if (result.length === 0) {
      return Response.json({ error: "Action not found" }, { status: 404 });
    }

    return Response.json({
      action,
      count: result[0].count,
    });
  } catch (error) {
    console.error("Error updating engagement:", error);
    return Response.json(
      { error: "Failed to update engagement" },
      { status: 500 },
    );
  }
}

import sql from "@/app/api/utils/sql";

export async function GET(request) {
  try {
    const url = new URL(request.url);
    const sessionId = url.searchParams.get("sessionId");

    if (!sessionId) {
      return Response.json({ error: "Session ID required" }, { status: 400 });
    }

    const result = await sql`
      SELECT * FROM user_interactions WHERE user_session_id = ${sessionId}
    `;

    if (result.length === 0) {
      return Response.json({
        hasLiked: false,
        hasFollowed: false,
      });
    }

    return Response.json({
      hasLiked: result[0].has_liked,
      hasFollowed: result[0].has_followed,
    });
  } catch (error) {
    console.error("Error fetching user interaction:", error);
    return Response.json(
      { error: "Failed to fetch interaction status" },
      { status: 500 },
    );
  }
}

export async function POST(request) {
  try {
    const body = await request.json();
    const { sessionId, action } = body;

    if (!sessionId || !action) {
      return Response.json(
        { error: "Session ID and action required" },
        { status: 400 },
      );
    }

    // Check if user already has this interaction
    const existing = await sql`
      SELECT * FROM user_interactions WHERE user_session_id = ${sessionId}
    `;

    if (existing.length === 0) {
      // Create new interaction record
      await sql`
        INSERT INTO user_interactions (user_session_id, has_liked, has_followed)
        VALUES (${sessionId}, ${action === "likes" ? true : false}, ${
          action === "follows" ? true : false
        })
      `;
    } else {
      // Update existing record
      if (action === "likes" && !existing[0].has_liked) {
        await sql`
          UPDATE user_interactions 
          SET has_liked = true, liked_at = CURRENT_TIMESTAMP
          WHERE user_session_id = ${sessionId}
        `;
      } else if (action === "follows" && !existing[0].has_followed) {
        await sql`
          UPDATE user_interactions 
          SET has_followed = true, followed_at = CURRENT_TIMESTAMP
          WHERE user_session_id = ${sessionId}
        `;
      } else {
        return Response.json(
          { error: "You have already done this action!" },
          { status: 400 },
        );
      }
    }

    // Update engagement count
    const engagementResult = await sql`
      SELECT * FROM user_engagement WHERE action_type = ${action}
    `;

    let count = 1;
    if (engagementResult.length > 0) {
      count = engagementResult[0].count + 1;
      await sql`
        UPDATE user_engagement 
        SET count = ${count}, updated_at = CURRENT_TIMESTAMP
        WHERE action_type = ${action}
      `;
    } else {
      await sql`
        INSERT INTO user_engagement (action_type, count)
        VALUES (${action}, 1)
      `;
    }

    return Response.json({ count, success: true });
  } catch (error) {
    console.error("Error updating interaction:", error);
    return Response.json(
      { error: "Failed to update interaction" },
      { status: 500 },
    );
  }
}

export async function POST(request) {
  try {
    const body = await request.json();
    const { password } = body;

    // Your download password - change this to what you want
    const DOWNLOAD_PASSWORD = "aryan@2025";

    if (!password) {
      return Response.json({ error: "Password required" }, { status: 400 });
    }

    if (password === DOWNLOAD_PASSWORD) {
      return Response.json({
        success: true,
        token: Buffer.from(password).toString("base64"),
        message: "Password correct! ✅",
      });
    } else {
      return Response.json(
        { error: "Incorrect password! ❌", success: false },
        { status: 401 },
      );
    }
  } catch (error) {
    console.error("Error validating password:", error);
    return Response.json(
      { error: "Failed to validate password" },
      { status: 500 },
    );
  }
}

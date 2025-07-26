export default async function handler(req, res) {
  try {
    const { messages } = req.body;

    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": "Bearer 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",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        model: "gpt-4o",
        messages: messages
      })
    });

    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    console.error("UmbraAI Proxy error:", error);
    res.status(500).json({ error: "OpenAI call failed" });
  }
}

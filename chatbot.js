const chatBox = document.getElementById("chatbox");
const sendBtn = document.getElementById("send");
const output = document.getElementById("output");

sendBtn.onclick = async () => {
  const userMsg = chatBox.value;
  output.innerText = "🔮 Reading your fate...";

  try {
    const response = await fetch("/api/openai-proxy", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        messages: [
          { role: "system", content: "You are TarotGoldAI, a mystical tarot and alchemy reader." },
          { role: "user", content: userMsg }
        ]
      })
    });

    const result = await response.json();

    if (result.choices && result.choices[0]) {
      output.innerText = result.choices[0].message.content;
    } else {
      output.innerText = "⚠️ No response from the oracle.";
      console.error("OpenAI returned no choices:", result);
    }
  } catch (err) {
    output.innerText = "🧨 An error occurred.";
    console.error("Fetch failed:", err);
  }
};

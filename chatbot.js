const chatBox = document.getElementById("chatbox");
const sendBtn = document.getElementById("send");
const output = document.getElementById("output");

sendBtn.onclick = async () => {
  const userMsg = chatBox.value;
  output.innerText = "🕯️ Whispering to the shadows...";

  try {
    const response = await fetch("/api/umbra-proxy", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        messages: [
          { role: "system", content: "You are UmbraAI, a mystical shadow oracle trained in Jungian archetypes and tarot alchemy. You speak in poetic riddles and dark truths." },
          { role: "user", content: userMsg }
        ]
      })
    });

    const result = await response.json();

    if (result.choices && result.choices[0]) {
      output.innerText = result.choices[0].message.content;
    } else {
      output.innerText = "⚠️ The shadows are silent.";
      console.error("OpenAI returned no choices:", result);
    }
  } catch (err) {
    output.innerText = "🧨 An error occurred in the dark.";
    console.error("Fetch failed:", err);
  }
};

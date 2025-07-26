const chatBox = document.getElementById("chatbox");
const sendBtn = document.getElementById("send");
sendBtn.onclick = async () => {
    const userMsg = chatBox.value;
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
            "Authorization": "Bearer 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"
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            model: "gpt-4o",
            messages: [
                { role: "system", content: "You are TarotGoldAI, master of hermetic insight..." },
                { role: "user", content: userMsg }
            ]
        })
    });
    const result = await response.json();
    document.getElementById("output").innerText = result.choices[0].message.content;
};

const chatBox = document.getElementById("chatbox");
const sendBtn = document.getElementById("send");
sendBtn.onclick = async () => {
    const userMsg = chatBox.value;
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
            "Authorization": "Bearer " 
            "Content-Type": "application/json"
        },fetch("/api/openai-proxy", {
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

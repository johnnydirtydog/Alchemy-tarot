
function drawCards(count) {
    const spread = document.querySelector('.card-spread');
    const reading = document.getElementById('reading');
    spread.innerHTML = '';
    reading.innerHTML = '';
    const drawn = [];
    while (drawn.length < count) {
        const i = Math.floor(Math.random() * cards.length);
        if (!drawn.includes(i)) drawn.push(i);
    }
    drawn.forEach(index => {
        const card = cards[index];
        const div = document.createElement('div');
        div.className = 'card';
        div.innerHTML = `<h2>${card.name}</h2><p>${card.meaning}</p>`;
        spread.appendChild(div);
    });
}

function getAIResponse() {
    const input = document.getElementById("userInput").value;
    const responseDiv = document.getElementById("aiResponse");
    // Simulate AI response (replace with OpenAI call for production)
    responseDiv.innerText = `The cards whisper: "${input}" holds deep lessons... (AI insight goes here)`;
}

function speakResponse(text) {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.pitch = 0.8;
    utterance.rate = 0.95;
    utterance.volume = 0.8;
    utterance.voice = speechSynthesis.getVoices().find(v => v.name.includes("Whisper") || v.name.includes("Female"));
    speechSynthesis.speak(utterance);
}

function getAIResponse() {
    const input = document.getElementById("userInput").value;
    const responseDiv = document.getElementById("aiResponse");
    const fakeReply = `Mmm... your energy speaks of longing. Let me read deeper... *${input}* reveals secrets best whispered in candlelight.`;
    responseDiv.innerText = fakeReply;
    speakResponse(fakeReply);
}

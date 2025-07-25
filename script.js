
const cards = [
  "The Fool", "The Magician", "The High Priestess", "The Empress", "The Emperor",
  "The Hierophant", "The Lovers", "The Chariot", "Strength", "The Hermit",
  "Wheel of Fortune", "Justice", "The Hanged Man", "Death", "Temperance",
  "The Devil", "The Tower", "The Star", "The Moon", "The Sun",
  "Judgement", "The World"
];

function drawCard() {
  const card = cards[Math.floor(Math.random() * cards.length)];
  document.getElementById("card-output").textContent = "🔮 You drew: " + card;
}

function chatbotResponse() {
  const userInput = document.getElementById("chat-input").value;
  const card = document.getElementById("card-output").textContent;
  const response = "The spirits whisper: '" + userInput + "' aligns with " + card.split(": ")[1] + "... interpret with care.";
  document.getElementById("chat-output").textContent = response;
}

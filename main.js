
const cards = Array.from({ length: 78 }, (_, i) => `Card ${i + 1}: Mysterious Meaning`);
function drawCard() {
  const card = cards[Math.floor(Math.random() * cards.length)];
  document.getElementById("cardDisplay").innerText = card;
}

async function drawCard() {
  const card = document.getElementById('card');
  card.classList.remove('flipped');
  document.getElementById('card-back').innerText = 'Shuffling...';
  const res = await fetch('/tarot', { method: 'POST' });
  const data = await res.json();
  setTimeout(() => {
    document.getElementById('card-back').innerText = `${data.card.name}: ${data.card.meaning}`;
    card.classList.add('flipped');
  }, 1000);
}

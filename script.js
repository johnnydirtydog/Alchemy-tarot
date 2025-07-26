async function drawCard() {
  const card = document.getElementById('card');
  card.classList.remove('flipped');
  document.getElementById('card-text').innerText = 'Shuffling...';
  document.getElementById('card-img').src = 'img/card.png';
  const res = await fetch(window.location.origin + '/tarot', { method: 'POST' });
  const data = await res.json();
  setTimeout(() => {
    const imagePath = `img/${data.card.name}.png`;
    document.getElementById('card-img').src = imagePath;
    document.getElementById('card-text').innerText = `${data.card.name}: ${data.card.meaning}`;
    card.classList.add('flipped');
  }, 1000);
}

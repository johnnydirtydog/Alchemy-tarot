
function animateDraw(cardId) {
    const card = document.getElementById(cardId);
    if (!card) return;
    card.classList.add("drawn");
    setTimeout(() => {
        card.classList.remove("drawn");
    }, 1500);
}

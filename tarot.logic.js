const meanings = {
  "The Fool": "New beginnings, spontaneity, a free spirit.",
  "The Magician": "Manifestation, resourcefulness, power, inspired action.",
  "The High Priestess": "Intuition, sacred knowledge, divine feminine.",
  "The Empress": "Fertility, beauty, nature, nurturing.",
  "The Emperor": "Authority, structure, control, fatherhood.",
  "The Lovers": "Love, harmony, relationships, values alignment.",
  "Death": "Endings, transformation, transition.",
  "The Tower": "Sudden upheaval, chaos, revelation, awakening.",
  "The Star": "Hope, faith, rejuvenation, purpose.",
  "The Moon": "Illusion, fear, anxiety, subconscious, intuition.",
  "The Sun": "Positivity, fun, warmth, success, vitality.",
  "Judgement": "Reflection, reckoning, inner voice.",
  "The World": "Completion, integration, accomplishment, travel."
};

function read(cards) {
  return cards.map(card => ({
    card,
    meaning: meanings[card] || "Unknown card."
  }));
}

module.exports = { read };

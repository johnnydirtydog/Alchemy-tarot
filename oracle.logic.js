function reduceToDigit(n) {
  while (n > 9) {
    n = n.toString().split('').reduce((a, b) => a + parseInt(b), 0);
  }
  return n;
}

const tarot = {
  "The Tower": { number: 16, meaning: "Destruction, ego collapse", stage: "calcination", sign: "Mars in Scorpio" },
  "The Moon": { number: 18, meaning: "Illusion, subconscious fear", stage: "dissolution", sign: "Pisces / Neptune" },
  "The Star": { number: 17, meaning: "Hope, inspiration, cosmic clarity", stage: "fermentation", sign: "Aquarius" },
  "Death": { number: 13, meaning: "Endings, transformation", stage: "fermentation", sign: "Scorpio" },
  "Temperance": { number: 14, meaning: "Balance, moderation", stage: "distillation", sign: "Sagittarius" },
  "The Sun": { number: 19, meaning: "Joy, success, vitality", stage: "coagulation", sign: "Leo / Sun" }
};

const alchemyMeanings = {
  calcination: "Fire. Burn illusion. Ego death.",
  dissolution: "Water. Surrender and melt.",
  separation: "Air. Clarify and refine.",
  conjunction: "Earth. Merge opposites.",
  fermentation: "Aether. Rebirth of spirit.",
  distillation: "Spirit. Vaporize and purify.",
  coagulation: "Gold. Manifest. Completion."
};

const affirmations = {
  calcination: "Let the fire consume what no longer serves.",
  dissolution: "Flow into the unknown. You are water becoming truth.",
  fermentation: "From rot comes spirit. Trust in the decay.",
  distillation: "Your thoughts clarify the soul. Breathe the essence.",
  coagulation: "You are whole. You are gold."
};

function generate(name, birthdate, cards = []) {
  const birth = new Date(birthdate);
  const lifePath = reduceToDigit(birth.getFullYear() + birth.getMonth() + 1 + birth.getDate());

  const spread = cards.map((card) => {
    const info = tarot[card] || { number: 0, meaning: "Unknown", stage: "unknown", sign: "unknown" };
    return {
      card,
      number: info.number,
      tarotMeaning: info.meaning,
      alchemyStage: info.stage,
      alchemyMeaning: alchemyMeanings[info.stage] || "No data.",
      astrologyLink: info.sign,
      numerology: reduceToDigit(info.number),
      affirmation: affirmations[info.stage] || "You are in transition."
    };
  });

  return {
    name,
    birthdate,
    lifePath,
    soulArchetype: `Life Path ${lifePath}`,
    spread,
    ritualMessage: `${name}, your spiritual cycle is one of integration, transformation, and divine rebirth. Honor the journey.`
  };
}

module.exports = { generate };

const express = require('express');
const { Configuration, OpenAIApi } = require('openai');
const tarotDeck = require('./tarotDeck.json');
const app = express();
app.use(express.json());

const config = new Configuration({ apiKey: process.env.OPENAI_API_KEY });
const openai = new OpenAIApi(config);

function drawCard() {
  const card = tarotDeck[Math.floor(Math.random() * tarotDeck.length)];
  return card;
}

app.post('/tarot', async (req, res) => {
  const card = drawCard();
  const response = await openai.createChatCompletion({
    model: 'gpt-4',
    messages: [
      { role: 'system', content: 'You are Scubaaai, an underwater tarot oracle.' },
      { role: 'user', content: `Interpret the card ${card.name}: ${card.meaning}` }
    ],
  });
  res.json({ card, oracleMessage: response.data.choices[0].message.content });
});

app.listen(3000, () => console.log('Scubaaai is listening from the depths... 🌊🔮'));


const express = require('express');
const fs = require('fs');
const cors = require('cors');
const path = require('path');
const app = express();
app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

const deck = require('./tarotDeck.json');

app.post('/tarot', (req, res) => {
  const card = deck[Math.floor(Math.random() * deck.length)];
  res.json({ card });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

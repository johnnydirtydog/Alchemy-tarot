const express = require('express');
const bodyParser = require('body-parser');
const oracle = require('./oracle.logic.js');

const app = express();
app.use(bodyParser.json());

app.post('/oracle', (req, res) => {
  const { name, birthdate, cards } = req.body;
  const result = oracle.generate(name, birthdate, cards);
  res.json(result);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Fusion Oracle AI running on port ${PORT}`);
});

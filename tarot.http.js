module.exports = {
  path: '/tarot',
  method: 'POST',
  handler(req, res) {
    const tarot = require('./tarot.logic.js');
    const cards = req.body.cards || ['The Fool'];
    const reading = tarot.read(cards);
    res.json({ reading });
  }
};
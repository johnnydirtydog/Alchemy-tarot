module.exports = {
  path: '/ai-agent',
  method: 'POST',
  handler(req, res) {
    const command = req.body.command || 'none';
    res.json({ message: `Rogue AI received: ${command}` });
  }
};

const express = require('express');
const router = express.Router();
const { Configuration, OpenAIApi } = require('openai');

router.post('/read', async (req, res) => {
    const prompt = req.body.prompt;
    const config = new Configuration({ apiKey: process.env.OPENAI_API_KEY });
    const openai = new OpenAIApi(config);
    const response = await openai.createChatCompletion({
        model: "gpt-4",
        messages: [{ role: "user", content: prompt }]
    });
    res.json({ reply: response.data.choices[0].message.content });
});

module.exports = router;

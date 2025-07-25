
async function fetchTarotReading(prompt) {
    const response = await fetch('/api/read', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt })
    });
    const result = await response.json();
    return result.reply;
}

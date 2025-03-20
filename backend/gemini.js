import fetch from 'node-fetch';
import 'dotenv/config';

export async function generateGeminiRoast(playlistData) {
    const { name, tracks } = playlistData;
    const trackList = tracks
        .map((t) => `"${t.name}" by ${t.artist}`)
        .join(', ');

    const prompt = `
        Roast this Spotify playlist. Be witty, funny, and borderline brutal but lighthearted.
        Playlist name: "${name}".
        Top 5 Tracks: ${trackList}
        Respond with 2-3 sentences.
    `;

    const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-pro:generateContent?key=${process.env.GEMINI_API_KEY}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            contents: [{
                parts: [{ text: prompt }]
            }]
        })
    });    

    if (!response.ok) {
        throw new Error(`Failed to fetch roast: ${response.statusText}`);
    }

    const data = await response.json();

    const roast = data?.candidates?.[0]?.content?.parts?.[0]?.text || '🔥 Gemini didn’t feel like roasting this time.';
    return roast.trim();
}
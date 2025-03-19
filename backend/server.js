import express from 'express';
import cors from 'cors';
import { getPlaylistData } from './spotify.js';
import { generateGeminiRoast } from './gemini.js';

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Backend server is running.');
});

app.post('/roast-playlist', async (req, res) => {
    try {
        const { playlistUrl } = req.body;
        if (!playlistUrl) {
            return res.status(400).json({ error: 'No playlist URL provided' });
        }

        const playlistData = await getPlaylistData(playlistUrl);

        const roast = await generateGeminiRoast({
            name: `Playlist from ${playlistUrl}`,
            tracks: playlistData,
        });

        res.json({ roast });
    } catch (err) {
        console.error('Backend error:', err);
        res.status(500).json({ error: 'Something went wrong with roasting the playlist!' });
    }
});

app.listen(3000, () => console.log('Server running on http://localhost:3000'));

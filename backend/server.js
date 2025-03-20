import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import { getPlaylistData } from './spotify.js';
import { generateGeminiRoast } from './gemini.js';

const app = express();
app.use(cors());
app.use(express.json());

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, '../public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

app.post('/roast-playlist', async (req, res) => {
    try {
        const { playlistUrl } = req.body;
        if (!playlistUrl) {
            return res.status(400).json({ error: 'No playlist link provided!' });
        }

        const playlistData = await getPlaylistData(playlistUrl);
        const roast = await generateGeminiRoast({
            name: `Playlist from ${playlistUrl}`,
            tracks: playlistData,
        });

        res.json({ roast });
    } catch (err) {
        console.error('Backend error:', err);
        res.status(500).json({
            error: 'Something went wrong with roasting the playlist.\nMake sure the playlist is public and the link is valid!',
        });
    }
});

app.listen(3000, () => console.log('Server running on http://localhost:3000'));

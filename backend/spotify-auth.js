import fetch from 'node-fetch';
import dotenv from 'dotenv';
dotenv.config();

export async function getSpotifyAccessToken() {
    const clientId = process.env.SPOTIFY_CLIENT_ID;
    const clientSecret = process.env.SPOTIFY_CLIENT_SECRET;

    const response = await fetch('https://accounts.spotify.com/api/token', {
        method: 'POST',
        headers: {
            'Authorization': 'Basic ' + Buffer.from(`${clientId}:${clientSecret}`).toString('base64'),
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: 'grant_type=client_credentials'
    });

    const data = await response.json();

    if (!response.ok) {
        console.error('Spotify Token Error:', data);
        throw new Error('Failed to get Spotify access token');
    }

    return data.access_token;
}
import fetch from 'node-fetch';
import { getSpotifyAccessToken } from './spotify-auth.js';

export async function getPlaylistData(playlistUrl) {
    const match = playlistUrl.match(/playlist\/([a-zA-Z0-9]+)(\?.*)?/);
    if (!match) throw new Error('Invalid playlist URL');
    const playlistId = match[1];

    const token = await getSpotifyAccessToken();

    const res = await fetch(`https://api.spotify.com/v1/playlists/${playlistId}`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });

    if (!res.ok) {
        const errorData = await res.json();
        console.error('Spotify API Error:', errorData);
        throw new Error(`Spotify API returned status ${res.status}`);
    }

    const data = await res.json();

    if (!data.tracks || !data.tracks.items) {
        console.error('Unexpected Spotify API response:', data);
        throw new Error('Failed to fetch playlist tracks');
    }

    const tracks = data.tracks.items
        .filter(item => item.track)
        .map(item => ({
            name: item.track.name,
            artist: item.track.artists.map(artist => artist.name).join(', ')
        }));

    return tracks;
}

import { useState } from 'react';

export default function RoastForm({ onRoastGenerated }) {
  const [playlistLink, setPlaylistLink] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch('http://localhost:3000/api/roast', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ playlist: playlistLink }),
    });

    const data = await response.json();
    onRoastGenerated(data);
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <input
        type="text"
        placeholder="Paste your Spotify playlist link"
        value={playlistLink}
        onChange={(e) => setPlaylistLink(e.target.value)}
        style={{
          padding: '1rem',
          borderRadius: '50px',
          fontSize: '1.2rem',
          border: '2px solid orange'
        }}
      />
      <button type="submit" style={{ padding: '1rem', borderRadius: '25px', background: 'orange', color: 'white', fontWeight: 'bold' }}>
        Roast me 🔥
      </button>
    </form>
  );
}

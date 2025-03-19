export default function RoastDisplay({ playlistData, roast }) {
    if (!playlistData) return null;
  
    return (
      <div style={{ 
        marginTop: '2rem', 
        color: 'white', 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        textAlign: 'center', 
        fontFamily: 'Inter, sans-serif' 
      }}>
        <h2 style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>{playlistData.name}</h2>
        <ul style={{ listStyle: 'none', padding: 0, marginBottom: '1rem' }}>
          {playlistData.tracks.map((track, i) => (
            <li key={i} style={{ margin: '0.3rem 0' }}>{track}</li>
          ))}
        </ul>
        {roast && <p style={{ marginTop: '1rem', color: 'orange', maxWidth: '600px', fontSize: '1.2rem' }}>{roast}</p>}
      </div>
    );
  }
  
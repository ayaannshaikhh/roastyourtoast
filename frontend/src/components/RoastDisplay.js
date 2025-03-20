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
        {roast && (
            <p
              style={{
                marginTop: '0.5rem', // closer to the button
                color: '#A84300',
                fontFamily: 'Inter, sans-serif',
                maxWidth: '500px',
                textAlign: 'center',
                marginLeft: 'auto',
                marginRight: 'auto',
                fontWeight: '600',
                fontSize: '1rem',
                lineHeight: '1.3',
                letterSpacing: '-0.25px',
                padding: '0', // no padding
              }}
            >
              {roast}
            </p>
          )}
      </div>
    );
  }
  
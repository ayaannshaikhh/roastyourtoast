import { useState } from 'react';
import RoastForm from './components/RoastForm';
import RoastDisplay from './components/RoastDisplay';

function App() {
  const [playlistData, setPlaylistData] = useState(null);
  const [roast, setRoast] = useState('');

  const handleRoastGenerated = (data) => {
    setPlaylistData(data.playlistData);
    setRoast(data.roast);
  };

  return (
    <div className="App" style={{ padding: '2rem', background: 'black', minHeight: '100vh' }}>
      <h1 style={{ color: 'white' }}>🔥 Roast Your Playlist 🔥</h1>
      <RoastForm onRoastGenerated={handleRoastGenerated} />
      <RoastDisplay playlistData={playlistData} roast={roast} />
    </div>
  );
}

export default App;

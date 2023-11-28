import { useEffect,useState,useuseState } from 'react';
import axios from 'axios';
import './App.css';
import React from 'react';

//function App() {
//const[message , setMessage] = useState('');
const App = () => {
  // Sample state for the connected device
  const connectedDevice = { name: 'Bluetooth Device 1' }; // Set to null if no device is connected


useEffect(() => {
  //http://localhost:5001 (absolute path) , api (another path)
    axios.get('/api')
      .then((response) => {
      console.log({response});
      })
    
},[]);};

const AudioPlayer = () => {
    const [volume, setVolume] = useState(0.5); // Initial volume set to 50%
useEffect(() => {
    // This function will be called whenever the 'volume' state changes
    const updateVolume = () => {
      const audioElement = document.getElementById('audioPlayer');
      if (audioElement) {
        audioElement.volume = volume;
      }
    };

    // Call the updateVolume function initially to set the initial volume
    updateVolume();

    // Add an event listener for changes to the 'volume' state
    window.addEventListener('volumechange', updateVolume);
    return () => {
        window.removeEventListener('volumechange', updateVolume);
      };
    }, [volume]);
  return (
    <>
    
    {/* Audio Playback Screen */}
    <div style={styles.container}>
                <h2 style={styles.heading}>Audio Playback Screen</h2>

                {/* Display Current Song Information */}
                <div style={styles.currentSong}>
                    <h3>Title: <span style={styles.songDetail}>Song Title</span></h3>
                    <p>Artist: <span style={styles.songDetail}>Artist Name</span></p>
                    <img style={styles.albumArt} src="album-art.jpg" alt="Album Art" />
                </div>

                {/* Playback Controls */}
                <div style={styles.controls}>
                    <button style={styles.controlButton}>Play/Pause</button>
                    <br />
                    <button style={styles.controlButton} disabled={!isPlaying}>Stop</button>
                    <br />
                    <button style={styles.controlButton}>{isLooping ? 'Disable Loop' : 'Enable Loop'}</button>
                    <br />
                    <button style={styles.controlButton}>Next Track</button>
                    <button style={styles.controlButton}>Restart Track</button>
                </div>

                {/* Volume Control */}
                <div style={styles.volumeControl}>
                    <button style={styles.controlButton}>Volume Up</button>
                    <button style={styles.controlButton}>Volume Down</button>
                    <button style={styles.controlButton}>{isMuted ? 'Unmute' : 'Mute'}</button>
                    <p style={styles.volumeLevel}>Volume: <span style={styles.volumeLevelValue}>5</span></p>
                </div>

                
                    <audio id="audioPlayer" controls>
                        {/* Add your audio source here */}
                        <source src="your-audio-file.mp3" type="audio/mp3" />
                        Your browser does not support the audio element.
                    </audio>

                    <div>
                        <label>Volume:</label>
                        <input
                        type="range"
                        min="0"
                        max="1"
                        step="0.01"
                        value={volume}
                        onChange={(e) => setVolume(parseFloat(e.target.value))}
                        />
                        <span>{(volume * 100).toFixed(0)}%</span>
                    </div>
                
                {/* Bluetooth Button */}
                <button style={styles.bluetoothButton} onClick={() => console.log('Bluetooth Button Clicked')}>
                    Bluetooth
                </button>
                {/*Connect/Disconnect Buttons*/}
                <button id="connectButton">Connect</button>
                <button id="disconnectButton">Disconnect</button>
                
                {/*Back Button */}
                <button id="backButton">Back to Audio Playback</button>
                <p style={styles.connectedDevice}>Connected Bluetooth Device: <span>{connectedDevice ? connectedDevice.name : 'N/A'}</span></p>
            </div>
  
    </>
  )
}

// Define your styles as a JavaScript object
const styles = {
  container: {
      maxWidth: '600px',
      margin: '20px auto',
      padding: '20px',
      backgroundColor: '#fff',
      borderRadius: '8px',
      boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  },
  heading: {
      color: '#333',
      textAlign: 'center',
  },
  currentSong: {
      marginBottom: '20px',
      textAlign: 'center',
  },
  songDetail: {
      fontWeight: 'bold',
  },
  albumArt: {
      maxWidth: '100%',
      height: 'auto',
      borderRadius: '8px',
  },
  controls: {
      marginTop: '20px',
      display: 'flex',
      justifyContent: 'space-around',
  },
  controlButton: {
      padding: '10px',
      cursor: 'pointer',
      backgroundColor: '#4caf50',
      color: '#fff',
      border: 'none',
      borderRadius: '4px',
      //flex: '1',
      display: 'block',
      
  },
  volumeControl: {
      marginTop: '20px',
      display: 'flex',
      justifyContent: 'space-around',
  },
  volumeLevel: {
      fontWeight: 'bold',
      marginLeft: '5px',
  },
  volumeLevelValue: {
      fontWeight: 'bold',
  },
  bluetoothButton: {
      marginTop: '20px',
      padding: '10px',
      cursor: 'pointer',
      backgroundColor: '#4285f4',
      color: '#fff',
      border: 'none',
      borderRadius: '4px',
  },
  connectedDevice: {
      fontWeight: 'bold',
      color: '#4285f4',
  },
};


export default App;

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

// Sample data for Bluetooth devices
const bluetoothDevices = [
  { id: 'device1', name: 'Bluetooth Device 1' },
  { id: 'device2', name: 'Bluetooth Device 2' },
  { id: 'device3', name: 'Bluetooth Device 3' }
];



// Sample data
let isPlaying = false;
let isLooping = false;
let currentTrackIndex = 0;
let volumeLevel = 5;
let isMuted = false;
let connectedDevice = null;

// Function to update UI based on current state
function updateUI() {
    document.getElementById('playPauseButton').innerText = isPlaying ? 'Pause' : 'Play';
    document.getElementById('stopButton').disabled = !isPlaying;
    document.getElementById('loopButton').innerText = isLooping ? 'Disable Loop' : 'Enable Loop';
    document.getElementById('volumeLevel').innerText = volumeLevel;
    document.getElementById('muteButton').innerText = isMuted ? 'Unmute' : 'Mute';
    document.getElementById('connectedDevice').innerText = connectedDevice ? connectedDevice.name : 'N/A';
}

// Function to get the selected device from a dropdown or list
function getSelectedDevice() {
  const deviceSelect = document.getElementById('bluetoothDeviceSelect'); // Assuming you have a select element with this ID
  const selectedDeviceId = deviceSelect.value;
  return bluetoothDevices.find(device => device.id === selectedDeviceId);
}           

document.getElementById('playPauseButton').addEventListener('click', () => {
    isPlaying = !isPlaying;
    updateUI();
});

document.getElementById('stopButton').addEventListener('click', () => {
    isPlaying = false;
    updateUI();
});

document.getElementById('loopButton').addEventListener('click', () => {
    isLooping = !isLooping;
    updateUI();
});

document.getElementById('nextTrackButton').addEventListener('click', () => {
    currentTrackIndex = (currentTrackIndex + 1) % totalTracks; // Assuming totalTracks is defined
    updateUI();
});

document.getElementById('restartTrackButton').addEventListener('click', () => {
    currentTrackIndex = 0;
    updateUI();
});

document.getElementById('volumeUpButton').addEventListener('click', () => {
  if (volumeLevel < 10) {
      volumeLevel++;
      updateUI();
  }
});

document.getElementById('volumeDownButton').addEventListener('click', () => {
  if (volumeLevel > 0) {
    volumeLevel--;
    updateUI();
  }
});

document.getElementById('muteButton').addEventListener('click', () => {
    isMuted = !isMuted;
    updateUI();
});

document.getElementById('bluetoothButton').addEventListener('click', () => {
  // Show Bluetooth Devices Screen
  document.getElementById('audioPlaybackScreen').style.display = 'none';
  document.getElementById('bluetoothDevicesScreen').style.display = 'block';
});

document.getElementById('backButton').addEventListener('click', () => {
  // Show Audio Playback Screen
  document.getElementById('audioPlaybackScreen').style.display = 'block';
  document.getElementById('bluetoothDevicesScreen').style.display = 'none';
});



// Connect Bluetooth device logic
document.getElementById('connectButton').addEventListener('click', () => {
  const selectedDevice = getSelectedDevice();
  if (selectedDevice) {
      connectedDevice = selectedDevice;
      updateUI();
      // Add logic to connect to the selected Bluetooth device
      console.log(`Connected to: ${selectedDevice.name}`);
  }
});




// Disconnect Bluetooth device logic
document.getElementById('disconnectButton').addEventListener('click', () => {
  connectedDevice = null;
  updateUI();
  // Add logic to disconnect from the connected Bluetooth device
  console.log('Disconnected from the connected Bluetooth device');
});




// Initial UI update on page load/refresh
updateUI();
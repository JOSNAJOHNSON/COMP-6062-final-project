import React, { useState, useEffect } from 'react';
import BluetoothDevices from './BluetoothDevices'; // Replace with the actual path

const InitialPage = () => {
  const [connectedDevice, setConnectedDevice] = useState(null);
  const [volume, setVolume] = useState(5);

  const simulateBluetoothConnection = async () => {
    try {
      // Replace this with your actual logic to connect to a Bluetooth device
      // For simplicity, we are using a delay to simulate the connection process
      await new Promise(resolve => setTimeout(resolve, 2000));

      // Simulated connected device information
      const simulatedDevice = {
        name: 'Simulated Device',
        id: 'simulated-device-id',
      };

      setConnectedDevice(simulatedDevice);
    } catch (error) {
      console.error('Error connecting to Bluetooth device:', error);
    }
  };

  useEffect(() => {
    simulateBluetoothConnection();

    const savedVolume = localStorage.getItem('lastSetVolume');
    setVolume(savedVolume ? parseInt(savedVolume, 10) : 5);
  }, []); // Empty dependency array ensures this effect runs only on mount

  const handleBackToPlaybackScreen = () => {
    // Navigate back to the Audio Playback Screen
    // You can use your preferred navigation method here (React Router, etc.).
    console.log('Navigating back to the Audio Playback Screen');
  };

  const handleVolumeChange = (newVolume) => {
    // Update the volume state and store it in localStorage
    setVolume(newVolume);
    localStorage.setItem('lastSetVolume', newVolume.toString());
  };

  return (
    <div>
      <h2>Audio Playback Screen</h2>
      <p>Connected Bluetooth device: {connectedDevice ? connectedDevice.name : 'n/a'}</p>
      <p>Volume: {volume}</p>

      {/* Your audio playback components go here */}
      <BluetoothDevices onBack={handleBackToPlaybackScreen} />
      <VolumeControl volume={volume} onVolumeChange={handleVolumeChange} />
    </div>
  );
};

// Example VolumeControl component
const VolumeControl = ({ volume, onVolumeChange }) => {
  const handleVolumeUp = () => {
    onVolumeChange(Math.min(volume + 1, 10));
  };

  const handleVolumeDown = () => {
    onVolumeChange(Math.max(volume - 1, 0));
  };

  return (
    <div>
      <button onClick={handleVolumeUp}>Volume Up</button>
      <button onClick={handleVolumeDown}>Volume Down</button>
    </div>
  );
};

export default InitialPage;

import React, { useState, useEffect } from 'react';

const BluetoothDevices = ({ onBack }) => {
  const [devices, setDevices] = useState([]);
  const [connectedDevice, setConnectedDevice] = useState(null);

  useEffect(() => {
    // Use the Web Bluetooth API to discover devices
    navigator.bluetooth.requestDevice({ acceptAllDevices: true })
      .then(device => {
        setDevices([device]);
      })
      .catch(error => {
        console.error('Error discovering devices:', error);
      });
  }, []);

  const connectToDevice = (device) => {
    // Connect to the selected device
    device.gatt.connect()
      .then(server => {
        // You can perform additional actions after connecting to the device
        console.log('Connected to device:', device);
        setConnectedDevice(device);
      })
      .catch(error => {
        console.error('Error connecting to device:', error);
      });
  };

  const disconnectDevice = () => {
    if (connectedDevice) {
      // Disconnect from the connected device
      connectedDevice.gatt.disconnect();
      setConnectedDevice(null);
    }
  };

  return (
    <div>
      <button onClick={onBack}>Back</button>
      <h2>Bluetooth Devices</h2>
      <ul>
        {devices.map(device => (
          <li key={device.id}>
            {device.name} ({device.id})
            <button onClick={() => connectToDevice(device)}>Connect</button>
          </li>
        ))}
      </ul>
      {connectedDevice && (
        <div>
          <p>Connected to: {connectedDevice.name} ({connectedDevice.id})</p>
          <button onClick={disconnectDevice}>Disconnect</button>
        </div>
      )}
    </div>
  );
};

export default BluetoothDevices;

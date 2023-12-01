import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const BluetoothControl = () => {
  const navigation = useNavigation();
  const [connectedDeviceName, setConnectedDeviceName] = useState(null);

  const handleBluetoothDevicesPress = () => {
    // Navigate to the Bluetooth Devices screen
    navigation.navigate('BluetoothDevicesScreen');
  };

  const getConnectedDeviceName = () => {
    // Replace this with your actual Bluetooth device connection logic
    // Get the name of the connected Bluetooth device
    // For example, if you are using a Bluetooth library, call a function to get the device name.
    // const connectedDeviceName = BluetoothLibrary.getConnectedDeviceName();
    // setConnectedDeviceName(connectedDeviceName);
  };

  // Call the function to get the connected device name on component mount
  useEffect(() => {
    getConnectedDeviceName();
  }, []);

  return (
    <View>
      <Button title="Bluetooth Devices" onPress={handleBluetoothDevicesPress} />
      <Text>Connected Device: {connectedDeviceName || 'None'}</Text>
    </View>
  );
};

export default BluetoothControl;

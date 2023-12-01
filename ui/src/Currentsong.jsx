import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const CurrentSongInfo = () => {
  // Replace these with the actual data from your application
  const currentSong = {
    title: 'Song Title',
    artist: 'Artist Name',
    albumArt: 'https://example.com/album-art.jpg', // Replace with your album art URL
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{currentSong.title}</Text>
      <Text style={styles.artist}>{currentSong.artist}</Text>
      <Image style={styles.albumArt} source={{ uri: currentSong.albumArt }} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 5,
  },
  artist: {
    fontSize: 16,
    marginVertical: 5,
  },
  albumArt: {
    width: 200,
    height: 200,
    marginVertical: 10,
  },
});

export default CurrentSongInfo;

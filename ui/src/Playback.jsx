import React, { useState, useEffect } from 'react';

const PlaybackControls = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLooping, setIsLooping] = useState(false);

  const handlePlayPause = () => {
    setIsPlaying((prevIsPlaying) => !prevIsPlaying);
  };

  const handleStop = () => {
    setIsPlaying(false);
  };

  const handleToggleLoop = () => {
    setIsLooping((prevIsLooping) => !prevIsLooping);
  };

  const handleNextTrack = () => {
    // This is a placeholder for querying the API to get the next song.
    console.log('Fetching next track from API...');
    // Replace the following line with actual API call logic.
    // For simplicity, it just toggles play/pause for demonstration purposes.
    handlePlayPause();
  };

  useEffect(() => {
    // You can perform additional actions when the playback state changes,
    // such as updating the UI or interacting with the audio player.
    console.log(`Playback is ${isPlaying ? 'playing' : 'paused'}`);
  }, [isPlaying]);

  return (
    <div>
      <button onClick={handlePlayPause}>{isPlaying ? 'Pause' : 'Play'}</button>
      <button onClick={handleStop}>Stop</button>
      <button onClick={handleToggleLoop}>{isLooping ? 'Disable Loop' : 'Enable Loop'}</button>
      <button onClick={handleNextTrack}>Next Track</button>
    </div>
  );
};

export default PlaybackControls;

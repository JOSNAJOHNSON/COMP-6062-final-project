import React, { useState } from 'react';

const VolumeControl = () => {
  const [volume, setVolume] = useState(5); // Default volume level
  const [isMuted, setIsMuted] = useState(false);

  const handleVolumeUp = () => {
    if (volume < 10) {
      setVolume((prevVolume) => prevVolume + 1);
      setIsMuted(false); // Unmute when adjusting volume
    }
  };

  const handleVolumeDown = () => {
    if (volume > 0) {
      setVolume((prevVolume) => prevVolume - 1);
      setIsMuted(false); // Unmute when adjusting volume
    }
  };

  const handleToggleMute = () => {
    setIsMuted((prevIsMuted) => !prevIsMuted);
    setVolume(0); // Set volume to 0 when muting
  };

  return (
    <div>
      <button onClick={handleVolumeUp}>Volume Up</button>
      <button onClick={handleVolumeDown}>Volume Down</button>
      <button onClick={handleToggleMute}>{isMuted ? 'Unmute' : 'Mute'}</button>
      <br />
      <p>Volume: {isMuted ? 'Muted' : volume}</p>
      {/* Visual indication of the volume level */}
      <div
        style={{
          width: '100px',
          height: '10px',
          backgroundColor: 'lightgray',
          position: 'relative',
        }}
      >
        <div
          style={{
            width: `${isMuted ? 0 : volume * 10}%`,
            height: '100%',
            backgroundColor: 'green',
            position: 'absolute',
          }}
        ></div>
      </div>
    </div>
  );
};

export default VolumeControl;

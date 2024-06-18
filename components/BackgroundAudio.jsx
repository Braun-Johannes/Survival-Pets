import { useEffect, useRef, useState } from "react";

export default function BackgroundAudio() {
  const audioRef = useRef(null);
  const [volume, setVolume] = useState(0.5); // Standardlautstärke auf 50%
  const [isPlaying, setIsPlaying] = useState(true); // Status der Wiedergabe
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.play();
      audioRef.current.volume = volume;
    }
  }, [volume]);
  const handleVolumeChange = (event) => {
    setVolume(event.target.value);
  };
  const togglePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };
  return (
    <div>
      <audio ref={audioRef} loop>
        <source src="/audio/BackgroundAudio.mp3" type="audio/mp3" />
        Your browser does not support the audio element.
      </audio>
      <div>
        <label htmlFor="volume">Volume: </label>
        <input
          id="volume"
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={volume}
          onChange={handleVolumeChange}
        />
      </div>
      <div>
        <button onClick={togglePlayPause}>
          {isPlaying ? "Pause" : "Play"}
        </button>
      </div>
    </div>
  );
}

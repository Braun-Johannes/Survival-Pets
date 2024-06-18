import { useEffect, useRef } from "react";
import useLocalStorageState from "use-local-storage-state";
import styled from "styled-components";
import SVGIcon from "./SVGIcon";

export default function BackgroundAudio() {
  const audioRef = useRef(null);
  const [volume, setVolume] = useLocalStorageState("audioVolume", {
    defaultValue: 0.3,
  }); // Lautstärke default 30%
  const [isPlaying, setIsPlaying] = useLocalStorageState("isPlaying", true);
  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      audio.volume = volume;
      if (isPlaying) {
        const playPromise = audio.play();
        if (playPromise !== undefined) {
          playPromise.catch((error) => {
            console.error("Autoplay was prevented:", error);
          });
        }
      }
    }
  }, [volume, isPlaying]);
  const handleVolumeChange = (event) => {
    setVolume(Number(event.target.value));
  };
  const togglePlayPause = () => {
    const audio = audioRef.current;
    if (audio) {
      if (isPlaying) {
        audio.pause();
      } else {
        const playPromise = audio.play();
        if (playPromise !== undefined) {
          playPromise.catch((error) => {
            console.error("Autoplay was prevented:", error);
          });
        }
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
      <StyledVolumeInput>
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
      </StyledVolumeInput>

      <StyledPlayButton onClick={togglePlayPause}>
        {isPlaying ? (
          <SVGIcon variant={"pause"} size={30} />
        ) : (
          <SVGIcon variant={"play"} size={30} />
        )}
      </StyledPlayButton>
    </div>
  );
}

const StyledVolumeInput = styled.div`
  position: absolute;
  top: 2px;
  right: 2px;
`;

const StyledPlayButton = styled.button`
  all: unset;
  position: absolute;
  top: 20px;
  right: 5px;
`;

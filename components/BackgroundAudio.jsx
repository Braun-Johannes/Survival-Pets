import { useEffect } from "react";
import useLocalStorageState from "use-local-storage-state";
import styled from "styled-components";
import useSound from "use-sound";
import SVGIcon from "./SVGIcon";

export default function BackgroundAudio() {
  const [volume, setVolume] = useLocalStorageState("audioVolume", {
    defaultValue: 0.3,
  }); // Lautstärke default 30%
  const [isPlaying, setIsPlaying] = useLocalStorageState("isPlaying", true);

  const [play, { sound }] = useSound("/audio/BackgroundAudio.mp3", {
    volume: volume,
    loop: true,
  });

  useEffect(() => {
    if (isPlaying && sound) {
      sound.play();
    } else if (sound) {
      sound.pause();
    }
  }, [isPlaying, sound]);

  useEffect(() => {
    if (sound) {
      sound.volume(volume);
    }
  }, [volume, sound]);

  const handleVolumeChange = (event) => {
    setVolume(Number(event.target.value));
  };

  const togglePlayPause = () => {
    if (isPlaying) {
      sound.pause();
    } else {
      sound.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div>
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

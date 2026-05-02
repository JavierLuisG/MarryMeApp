import { useRef, useState } from "react";

const BgMusic = ({ src, volume = 1 }) => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.volume = volume;
        audioRef.current.loop = true;
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div
      className={`container_music flex_column ${
        isPlaying ? "isMusic" : "outMusic"
      }`}
      onClick={togglePlayPause}
    >
      <audio ref={audioRef} src={src} preload="auto" />
      <img src="/music-notes.svg" />
    </div>
  );
};

export default BgMusic;

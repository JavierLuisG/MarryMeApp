import { useRef, useState, useEffect } from "react";

const BgMusic = ({ src, volume = 1, autoPlay = false }) => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  // Auto-play when envelope animation ends
  useEffect(() => {
    if (!autoPlay) return;
    const audio = audioRef.current;
    if (!audio) return;
    audio.volume = volume;
    audio.loop = true;
    audio.play().catch(() => {});
    setIsPlaying(true);
  }, [autoPlay]);

  // Pause when tab is hidden, resume when tab is visible (only if user had it playing)
  useEffect(() => {
    const handleVisibility = () => {
      const audio = audioRef.current;
      if (!audio) return;
      if (document.hidden) {
        if (!audio.paused) audio.pause();
      } else {
        if (isPlaying) audio.play().catch(() => {});
      }
    };
    document.addEventListener("visibilitychange", handleVisibility);
    return () => document.removeEventListener("visibilitychange", handleVisibility);
  }, [isPlaying]);

  const togglePlayPause = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (isPlaying) {
      audio.pause();
    } else {
      audio.volume = volume;
      audio.loop = true;
      audio.play().catch(() => {});
    }
    setIsPlaying(!isPlaying);
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

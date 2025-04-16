import { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVolumeUp, faVolumeMute } from "@fortawesome/free-solid-svg-icons";

const AudioPlayer = ({ autoPlay }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    // Create audio element
    audioRef.current = new Audio("./sounds/wedding-song.mp3");
    audioRef.current.loop = true;

    // Clean up when component unmounts
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  // Effect to handle auto-play when invitation is opened
  useEffect(() => {
    if (autoPlay && audioRef.current) {
      audioRef.current.play().catch((error) => {
        // Browser may block autoplay without user interaction
        console.error("Autoplay blocked:", error);
      });
      setIsPlaying(true);
    }
  }, [autoPlay]);

  // Function to toggle audio playing state
  const toggleAudio = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch((error) => {
          // Handle any errors (e.g., browser requiring user interaction before playing)
          console.error("Failed to play audio:", error);
        });
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div
      className="audio-control"
      onClick={toggleAudio}
      title={isPlaying ? "Silenciar música" : "Reproducir música"}
    >
      <FontAwesomeIcon icon={isPlaying ? faVolumeUp : faVolumeMute} size="lg" />
    </div>
  );
};

export default AudioPlayer;

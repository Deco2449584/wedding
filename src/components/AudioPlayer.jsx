import { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVolumeUp, faVolumeMute } from "@fortawesome/free-solid-svg-icons";

const AudioPlayer = ({ autoPlay }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    // Create audio element with playsInline attribute for iOS
    audioRef.current = new Audio("./assets/sounds/wedding-song.mp3");
    audioRef.current.loop = true;
    audioRef.current.playsInline = true; // Importante para iOS

    // Agregar atributos para mejorar compatibilidad con iOS
    if (audioRef.current) {
      audioRef.current.setAttribute("playsinline", "true");
      audioRef.current.setAttribute("webkit-playsinline", "true");
    }

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
    const playAudio = async () => {
      try {
        if (autoPlay && audioRef.current) {
          // En iOS, necesitamos esperar a que el usuario interactúe
          await audioRef.current.play();
          setIsPlaying(true);
        }
      } catch (error) {
        console.error("Autoplay blocked:", error);
        setIsPlaying(false);
      }
    };

    playAudio();
  }, [autoPlay]);

  // Function to toggle audio playing state
  const toggleAudio = async () => {
    if (audioRef.current) {
      try {
        if (isPlaying) {
          await audioRef.current.pause();
        } else {
          await audioRef.current.play();
        }
        setIsPlaying(!isPlaying);
      } catch (error) {
        console.error("Failed to toggle audio:", error);
      }
    }
  };

  return (
    <button
      className="audio-control"
      onClick={toggleAudio}
      title={isPlaying ? "Silenciar música" : "Reproducir música"}
      aria-label={isPlaying ? "Silenciar música" : "Reproducir música"}
    >
      <FontAwesomeIcon icon={isPlaying ? faVolumeUp : faVolumeMute} size="lg" />
    </button>
  );
};

export default AudioPlayer;

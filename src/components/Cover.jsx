import { useState } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faEnvelope,
  faCalendarDay,
} from "@fortawesome/free-solid-svg-icons";

const Cover = ({ onOpen }) => {
  const [isButtonClicked, setIsButtonClicked] = useState(false);

  const handleOpenClick = () => {
    setIsButtonClicked(true);
    // Habilitamos el scroll
    document.body.style.overflow = "auto";
    // Ocultamos la portada tras un breve retraso para que se vea la animación
    setTimeout(() => {
      const coverElement = document.querySelector(".cover");
      if (coverElement) {
        coverElement.style.display = "none";
      }
    }, 1000);
    // Llamamos a la función de apertura para activar efectos
    onOpen();
  };

  return (
    <div className={`cover ${isButtonClicked ? "clicked" : ""}`}>
      <motion.div
        className="cover-content"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.div
          className="cover-circles"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          <div className="circle circle-1"></div>
          <div className="circle circle-2"></div>
          <div className="circle circle-3"></div>
        </motion.div>

        <motion.div
          className="invitation-border"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          style={{
            backgroundImage:
              'linear-gradient(rgba(255, 255, 255, 0.25), rgba(255, 255, 255, 0.25)), url("/images/invitacion2.jpg")',
            backgroundSize: "cover",
            backgroundPosition: "center",
            border: "2px solid rgb(212, 175, 55)",
            boxShadow: "0 0 25px rgba(0, 0, 0, 0.3)",
            padding: "3.5rem 2.5rem",
            backdropFilter: "blur(1px)",
          }}
        >
          <motion.div
            className="invitation-icon"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.5, duration: 0.8, type: "spring" }}
            style={{
              backgroundColor: "rgba(212, 175, 55, 0.9)",
              borderRadius: "50%",
              width: "60px",
              height: "60px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: "1.5rem",
              border: "1px solid rgba(255, 255, 255, 0.7)",
            }}
          >
            <FontAwesomeIcon
              icon={faEnvelope}
              style={{ color: "white", fontSize: "24px" }}
            />
          </motion.div>

          <motion.h2
            className="invitation-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            style={{
              fontFamily:
                '"Playfair Display", "Cormorant Garamond", "Great Vibes", cursive',
              color: "#565f42",
              fontSize: "2.2rem",
              fontWeight: "400",
              marginBottom: "1.2rem",
              letterSpacing: "3px",
              textShadow: "2px 2px 4px rgba(165, 102, 7, 0.4)",
            }}
          >
            ¡Te invitamos a nuestra boda!
          </motion.h2>

          <motion.div
            className="names"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            style={{
              fontFamily: '"Playfair Display SC", "Cormorant Garamond", serif',
              color: "rgb(212, 175, 55)",
              fontSize: "4rem",
              fontWeight: "bold",
              marginBottom: "1.8rem",
              marginTop: "0.8rem",
              letterSpacing: "4px",
              textShadow: "3px 3px 6px rgba(0, 0, 0, 0.4)",
            }}
          >
            Daniel & Laura
          </motion.div>

          <motion.div
            className="photo-container"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
          >
            <video
              src="/assets/videos/video.mp4"
              alt="Daniel & Laura"
              className="couple-photo"
              autoPlay
              muted
              loop
              playsInline
              style={{
                border: "4px solid rgb(212, 175, 55)",
                boxShadow: "0 0 20px rgba(0, 0, 0, 0.3)",
                width: "220px",
                height: "220px",
              }}
            />
          </motion.div>

          <motion.div
            className="wedding-date-container"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginTop: "1.8rem",
            }}
          >
            <FontAwesomeIcon
              icon={faCalendarDay}
              style={{
                color: "rgb(212, 175, 55)",
                fontSize: "1.8rem",
                marginRight: "15px",
                filter: "drop-shadow(1px 1px 2px rgba(0, 0, 0, 0.5))",
              }}
            />
            <div
              style={{
                fontFamily: '"Cormorant Garamond", "Playfair Display", serif',
                color: "#565f42",
                fontSize: "1.8rem",
                letterSpacing: "3px",
                fontWeight: "500",
                textShadow: "2px 2px 4px rgba(165, 102, 7, 0.4)",
              }}
            >
              15 de Junio, 2025
            </div>
          </motion.div>

          <motion.div
            className="hearts-decoration"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4, duration: 0.8 }}
            style={{
              margin: "2rem 0",
              position: "relative",
              height: "35px",
            }}
          >
            <FontAwesomeIcon
              icon={faHeart}
              style={{
                position: "absolute",
                color: "rgb(212, 175, 55)",
                fontSize: "1.8rem",
                left: "33%",
                opacity: "0.85",
                filter: "drop-shadow(1px 1px 2px rgba(0, 0, 0, 0.5))",
              }}
            />
            <FontAwesomeIcon
              icon={faHeart}
              style={{
                position: "absolute",
                color: "rgb(212, 175, 55)",
                fontSize: "2.4rem",
                left: "50%",
                transform: "translateX(-50%)",
                opacity: "0.85",
                filter: "drop-shadow(1px 1px 2px rgba(0, 0, 0, 0.5))",
              }}
            />
            <FontAwesomeIcon
              icon={faHeart}
              style={{
                position: "absolute",
                color: "rgb(212, 175, 55)",
                fontSize: "1.8rem",
                right: "33%",
                opacity: "0.85",
                filter: "drop-shadow(1px 1px 2px rgba(0, 0, 0, 0.5))",
              }}
            />
          </motion.div>

          <motion.button
            className="open-invitation"
            onClick={handleOpenClick}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05 }}
            transition={{ delay: 1.6, duration: 0.8 }}
            disabled={isButtonClicked}
            style={{
              fontFamily: '"Cormorant Garamond", "Playfair Display", serif',
              backgroundColor: "rgb(212, 175, 55)",
              color: "white",
              border: "none",
              padding: "12px 30px",
              borderRadius: "30px",
              fontSize: "1.5rem",
              fontWeight: "600",
              boxShadow: "0 4px 15px rgba(0, 0, 0, 0.3)",
              marginTop: "1rem",
              cursor: "pointer",
              letterSpacing: "2px",
            }}
          >
            {isButtonClicked ? "Invitación Abierta" : "Abrir Invitación"}
          </motion.button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Cover;

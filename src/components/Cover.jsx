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
              'linear-gradient(rgba(255, 255, 255, 0.25), rgba(255, 255, 255, 0.25)), url("./assets/images/invitacion2.jpg")',
            backgroundSize: "cover",
            backgroundPosition: "center",
            border: "2px solid rgb(212, 175, 55)",
            boxShadow: "0 0 25px rgba(0, 0, 0, 0.3)",
            padding: "1rem 0.8rem", // Reducido aún más para móviles
            maxWidth: "92%",
            margin: "0 auto",
            maxHeight: "90vh", // Limitar altura máxima en móviles
            overflowY: "auto", // Permitir scroll si el contenido es muy alto
            "@media (min-width: 768px)": {
              padding: "2.5rem 2rem",
              maxWidth: "75%", // Aumentado para desktop
              maxHeight: "95vh", // Aumentado para desktop
              overflowY: "visible",
            },
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
              width: "50px",
              height: "50px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: "1.2rem",
              border: "1px solid rgba(255, 255, 255, 0.7)",
            }}
          >
            <FontAwesomeIcon
              icon={faEnvelope}
              style={{ color: "white", fontSize: "20px" }}
            />
          </motion.div>

          <motion.h2
            className="invitation-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            style={{
              fontFamily: '"Pinyon Script", "Great Vibes", cursive',
              color: "#3a3a3a",
              fontSize: "1.8rem", // Reducido aún más para móviles
              fontWeight: "500",
              marginBottom: "0.3rem",
              marginTop: "0.3rem",
              letterSpacing: "1px",
              textShadow: "2px 2px 4px rgba(165, 102, 7, 0.3)",
              "@media (min-width: 768px)": {
                fontSize: "2.8rem",
                marginBottom: "1rem",
                marginTop: "1rem",
              },
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
              fontFamily: '"Petit Formal Script", "Tangerine", cursive',
              color: "rgb(212, 175, 55)",
              fontSize: "2.4rem", // Reducido aún más para móviles
              fontWeight: "500",
              marginBottom: "0.2rem",
              marginTop: "0.2rem",
              marginLeft: "0.5rem",
              marginRight: "0.5rem",
              letterSpacing: "2px",
              textShadow: "3px 3px 6px rgba(0, 0, 0, 0.3)",
              lineHeight: "1.1",
              "@media (min-width: 768px)": {
                fontSize: "3.8rem",
                marginBottom: "0.5rem",
                marginTop: "0.5rem",
                marginLeft: "1rem",
                marginRight: "1rem",
                letterSpacing: "3px",
              },
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
              src="./assets/videos/video.mp4"
              alt="Daniel & Laura"
              className="couple-photo"
              autoPlay
              muted
              loop
              playsInline
              style={{
                border: "4px solid rgb(212, 175, 55)",
                boxShadow: "0 0 20px rgba(0, 0, 0, 0.3)",
                width: "120px", // Reducido aún más para móviles
                height: "120px",
                "@media (min-width: 768px)": {
                  width: "180px",
                  height: "180px",
                },
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
                fontSize: "1.5rem",
                marginRight: "12px",
                filter: "drop-shadow(1px 1px 2px rgba(0, 0, 0, 0.5))",
              }}
            />
            <div
              style={{
                fontFamily: '"Pinyon Script", "Great Vibes", cursive',
                color: "#565f42",
                fontSize: "2rem",
                letterSpacing: "1px",
                fontWeight: "500",
                textShadow: "1px 1px 3px rgba(165, 102, 7, 0.3)",
                marginLeft: "10px",
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
              margin: "1rem 0", // Reducido para móviles
              position: "relative",
              height: "25px", // Reducido para móviles
              "@media (min-width: 768px)": {
                margin: "2rem 0",
                height: "35px",
              },
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
            animate={{
              opacity: 1,
              y: 0,
              scale: [1, 1.05, 1],
              transition: {
                scale: {
                  repeat: Infinity,
                  duration: 2,
                  ease: "easeInOut",
                },
              },
            }}
            whileHover={{
              scale: 1.1,
              boxShadow: "0 8px 25px rgba(212, 175, 55, 0.4)",
              transition: { duration: 0.3 },
            }}
            transition={{ delay: 1.6, duration: 0.8 }}
            disabled={isButtonClicked}
            style={{
              fontFamily: '"Pinyon Script", "Great Vibes", cursive',
              backgroundColor: "rgba(232, 220, 205, 0.85)",
              color: "#3a3a3a",
              border: "none",
              padding: "12px 30px", // Reducido para móviles
              borderRadius: "30px",
              fontSize: "2.2rem", // Reducido para móviles
              fontWeight: "500",
              boxShadow: "0 4px 15px rgba(212, 175, 55, 0.3)",
              marginTop: "1rem",
              cursor: "pointer",
              letterSpacing: "2px",
              position: "relative",
              overflow: "hidden",
              "@media (min-width: 768px)": {
                padding: "15px 45px",
                fontSize: "2.8rem",
                letterSpacing: "3px",
                marginTop: "1.5rem",
              },
            }}
          >
            {isButtonClicked ? "Invitación Abierta" : "Abrir Invitación"}
          </motion.button>

          <style>
            {`
              @keyframes moveLight {
                0% {
                  transform: translateX(-100%) translateY(-100%);
                }
                50% {
                  transform: translateX(100%) translateY(100%);
                }
                100% {
                  transform: translateX(-100%) translateY(-100%);
                }
              }
              @media (min-width: 768px) {
                .cover-content {
                  padding: 1rem;
                  min-height: 95vh;
                  display: flex;
                  align-items: center;
                  justify-content: center;
                }
              }
              @media (max-width: 767px) {
                .cover-content {
                  padding: 0.5rem;
                  height: 100vh;
                  display: flex;
                  align-items: center;
                }
                .cover-circles {
                  transform: scale(0.7);
                }
                .wedding-date-container {
                  font-size: 1.4rem;
                  margin-top: 1rem !important;
                }
                .photo-container {
                  margin: 0.5rem 0;
                }
              }
            `}
          </style>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Cover;

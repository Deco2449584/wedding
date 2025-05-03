"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faEnvelope,
  faCalendarDay,
  faAnglesDown, // Añadir este import
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
        className="cover-content flex-center"
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
          className="invitation-border flex-column"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <motion.div
            className="icon-container"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.5, duration: 0.8, type: "spring" }}
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
          >
            ¡Te Invitamos a Nuestra Boda!
          </motion.h2>

          <motion.div
            className="names"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            style={{
              fontFamily: "Charm",
              fontSize: "2.8rem",
              fontWeight: "400",
              marginBottom: "0.2rem",
              marginTop: "0.2rem",
              marginLeft: "0.5rem",
              marginRight: "0.5rem",
              letterSpacing: "2px",
              textShadow: "3px 3px 6px rgba(0, 0, 0, 0.3)",
              lineHeight: "1.1",
              "@media (minWidth: 768px)": {
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
            <img
              src="./assets/images/timeline-wedding.jpg"
              alt="Daniel & Laura"
              className="photo-frame"
              style={{
                border: "4px solid rgb(229, 178, 137)",
                boxShadow: "0 0 20px rgba(0, 0, 0, 0.3)",
                width: "100px",
                height: "100px",
                objectFit: "cover",
                borderRadius: "50%",
                "@media screen and (maxHeight: 667px)": {
                  width: "90px",
                  height: "90px",
                },
                "@media screen and (minHeight: 668px) and (maxHeight: 896px)": {
                  width: "120px",
                  height: "120px",
                },
                "@media screen and (minHeight: 897px)": {
                  width: "140px",
                  height: "140px",
                },
                "@media screen and (minWidth: 768px)": {
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
                color: "rgb(229, 178, 137)",
                fontSize: "1.5rem",
                marginRight: "12px",
                filter: "drop-shadow(1px 1px 2px rgba(0, 0, 0, 0.5))",
              }}
            />
            <div
              style={{
                fontFamily: "Charm",
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
              "@media (minWidth: 768px)": {
                margin: "2rem 0",
                height: "35px",
              },
            }}
          >
            <FontAwesomeIcon
              icon={faHeart}
              style={{
                position: "absolute",
                color: "rgb(229, 178, 137)",
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
                color: "rgb(229, 178, 137)",
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
                color: "rgb(229, 178, 137)",
                fontSize: "1.8rem",
                right: "33%",
                opacity: "0.85",
                filter: "drop-shadow(1px 1px 2px rgba(0, 0, 0, 0.5))",
              }}
            />
          </motion.div>

          <motion.div
            className="arrows-container"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.8 }}
            style={{
              position: "relative",
              height: "80px",
              margin: "0.5rem 0",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "20px",
            }}
          >
            <motion.div
              animate={{
                y: [0, -15, 0],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
              style={{
                transform: "rotate(-20deg)",
              }}
            >
              <FontAwesomeIcon
                icon={faAnglesDown}
                style={{
                  fontSize: "2.5rem",
                  color: "rgb(89, 95, 72)",
                  filter: "drop-shadow(2px 2px 4px rgba(0,0,0,0.3))",
                }}
              />
            </motion.div>

            <motion.div
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.7, 1, 0.7],
              }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
              style={{
                fontFamily: "Charm",
                fontSize: "2.2rem",
                color: "rgb(229, 178, 137)",
                textShadow: "2px 2px 4px rgba(0,0,0,0.3)",
                margin: "0 10px",
              }}
            >
              Click
            </motion.div>

            <motion.div
              animate={{
                y: [0, -15, 0],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
              style={{
                transform: "rotate(20deg)",
              }}
            >
              <FontAwesomeIcon
                icon={faAnglesDown}
                style={{
                  fontSize: "2.5rem",
                  color: "rgb(89, 95, 72)",
                  filter: "drop-shadow(2px 2px 4px rgba(0,0,0,0.3))",
                }}
              />
            </motion.div>
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
                  repeat: Number.POSITIVE_INFINITY,
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
              fontFamily: "Charm",
              fontWeight: "500",
              backgroundColor: "rgba(232, 220, 205, 0.85)",
              color: "#3a3a3a",
              border: "none",
              width: "auto",
              padding: "0.8rem 1.5rem",
              borderRadius: "30px",
              fontSize: "1.8rem",
              boxShadow: "0 4px 15px rgba(212, 175, 55, 0.3)",
              marginTop: "0.5rem",
              marginBottom: "0.5rem", // Añadir margen inferior
              cursor: "pointer",
              letterSpacing: "1px",
              position: "relative",
              overflow: "hidden",
              WebkitTapHighlightColor: "transparent",
              "@media screen and (maxHeight: 667px)": {
                padding: "0.6rem 1.2rem",
                fontSize: "1.6rem",
                marginTop: "0.3rem",
                marginBottom: "0.3rem", // Añadir margen inferior
              },
              "@media screen and (minHeight: 668px) and (maxHeight: 896px)": {
                padding: "0.8rem 1.5rem",
                fontSize: "1.8rem",
                marginTop: "0.5rem",
                marginBottom: "0.5rem", // Añadir margen inferior
              },
              "@media screen and (minHeight: 897px)": {
                padding: "1rem 2rem",
                fontSize: "2rem",
                marginTop: "0.8rem",
                marginBottom: "0.8rem", // Añadir margen inferior
              },
              "@media screen and (minWidth: 768px)": {
                padding: "1.2rem 2.5rem",
                fontSize: "2.2rem",
                marginTop: "1rem",
                marginBottom: "1rem", // Añadir margen inferior
                letterSpacing: "2px",
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
              /* Móviles pequeños */
              .cover-content {
                padding: 0.3rem;
                height: 100vh;
                display: flex;
                align-items: center;
              }
              .cover-circles {
                transform: scale(0.6);
              }
              .wedding-date-container {
                font-size: 1.2rem;
                margin-top: 0.8rem !important;
              }
              .photo-container {
                margin: 0.3rem 0;
              }

              /* Móviles medianos */
              @media (minWidth: 360px) {
                .cover-content {
                  padding: 0.5rem;
                }
                .cover-circles {
                  transform: scale(0.7);
                }
                .wedding-date-container {
                  font-size: 1.4rem;
                  margin-top: 1rem !important;
                }
              }

              /* Tablets */
              @media (minWidth: 768px) {
                .cover-content {
                  padding: 1rem;
                  min-height: 95vh;
                  justify-content: center;
                }
                .cover-circles {
                  transform: scale(0.85);
                }
                .wedding-date-container {
                  font-size: 1.6rem;
                  margin-top: 1.5rem !important;
                }
                .photo-container {
                  margin: 1rem 0;
                }
              }

              /* Desktop */
              @media (minWidth: 1024px) {
                .cover-content {
                  padding: 1.5rem;
                }
                .cover-circles {
                  transform: scale(1);
                }
                .wedding-date-container {
                  font-size: 2rem;
                  margin-top: 2rem !important;
                }
              }

              /* Ajustes base para móviles pequeños */
              .cover-content {
                padding: 0.3rem;
                min-height: 100vh;
                display: flex;
                align-items: center;
              }

              .wedding-date-container {
                font-size: 1.2rem !important;
                margin-top: 0.5rem !important;
              }

              /* iPhone SE, 5, 5S (4-inch) */
              @media screen and (max-height: 568px) {
                .cover-content { padding: 0.2rem; }
                .wedding-date-container {
                  font-size: 1rem !important;
                  margin-top: 0.3rem !important;
                }
                .invitation-subtitle {
                  font-size: 1.6rem !important;
                }
                .names {
                  font-size: 2rem !important;
                }
              }

              /* iPhone 6, 6S, 7, 8 (4.7-inch) */
              @media screen and (min-height: 569px) and (max-height: 667px) {
                .cover-content { padding: 0.3rem; }
                .wedding-date-container {
                  font-size: 1.3rem !important;
                  margin-top: 0.4rem !important;
                }
                .invitation-subtitle {
                  font-size: 1.8rem !important;
                }
                .names {
                  font-size: 2.2rem !important;
                }
              }

              /* iPhone X, XS, 11 Pro, 12 Mini (5.8-inch) */
              @media screen and (min-height: 668px) and (max-height: 812px) {
                .cover-content { padding: 0.4rem; }
                .wedding-date-container {
                  font-size: 1.4rem !important;
                  margin-top: 0.6rem !important;
                }
                .invitation-subtitle {
                  font-size: 2rem !important;
                }
                .names {
                  font-size: 2.4rem !important;
                }
              }

              /* iPhone XR, 11, 12, 13 (6.1-inch) */
              @media screen and (min-height: 813px) and (max-height: 896px) {
                .cover-content { padding: 0.5rem; }
                .wedding-date-container {
                  font-size: 1.5rem !important;
                  margin-top: 0.8rem !important;
                }
                .invitation-subtitle {
                  font-size: 2.2rem !important;
                }
                .names {
                  font-size: 2.6rem !important;
                }
              }

              /* iPhone Pro Max y tablets */
              @media screen and (min-height: 897px) {
                .cover-content { padding: 0.6rem; }
                .wedding-date-container {
                  font-size: 1.6rem !important;
                  margin-top: 1rem !important;
                }
                .invitation-subtitle {
                  font-size: 2.4rem !important;
                }
                .names {
                  font-size: 2.8rem !important;
                }
              }

              /* Tablets y escritorio */
              @media screen and (min-width: 768px) {
                .cover-content {
                  padding: 1rem;
                }
                .wedding-date-container {
                  font-size: 2rem !important;
                  margin-top: 1.5rem !important;
                }
                .invitation-subtitle {
                  font-size: 2.8rem !important;
                }
                .names {
                  font-size: 3.2rem !important;
                }
              }

              /* Ajustes específicos para iPhone para asegurar que el botón sea visible */
              @media screen and (max-height: 667px) {
                .invitation-border {
                  padding: 0.5rem !important;
                  gap: 0.2rem !important;
                  maxHeight: 98vh !important;
                }
                .couple-photo {
                  width: 80px !important;
                  height: 80px !important;
                }
                .invitation-subtitle {
                  font-size: 1.4rem !important;
                  margin-bottom: 0.2rem !important;
                }
                .names {
                  font-size: 1.8rem !important;
                  margin: 0.2rem 0 !important;
                }
                .hearts-decoration {
                  margin: 0.5rem 0 !important;
                  height: 20px !important;
                }
                .wedding-date-container {
                  margin-top: 0.3rem !important;
                }
                .wedding-date-container div {
                  font-size: 1.5rem !important;
                }
                .arrows-container {
                  height: 50px !important;
                  margin: 0.3rem 0 !important;
                }
                .open-invitation {
                  padding: 0.5rem 1rem !important;
                  font-size: 1.4rem !important;
                  margin-top: 0.2rem !important;
                }
              }

              /* Ajustes para iPhone X, 11, 12, 13 */
              @media screen and (min-height: 668px) and (max-height: 812px) {
                .invitation-border {
                  padding: 0.7rem !important;
                  gap: 0.3rem !important;
                  maxHeight: 98vh !important;
                }
                .couple-photo {
                  width: 100px !important;
                  height: 100px !important;
                }
                .invitation-subtitle {
                  font-size: 1.8rem !important;
                  margin-bottom: 0.3rem !important;
                }
                .names {
                  font-size: 2.2rem !important;
                  margin: 0.3rem 0 !important;
                }
                .hearts-decoration {
                  margin: 0.6rem 0 !important;
                }
                .arrows-container {
                  height: 60px !important;
                  margin: 0.4rem 0 !important;
                }
                .open-invitation {
                  padding: 0.6rem 1.2rem !important;
                  font-size: 1.6rem !important;
                  margin-top: 0.3rem !important;
                }
              }

              /* Asegurar que el contenido sea scrollable en todos los dispositivos */
              .invitation-border {
                overflow-y: auto !important;
                -webkit-overflow-scrolling: touch !important;
              }
            `}
          </style>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Cover;

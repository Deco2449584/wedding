import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faMousePointer,
  faMouse,
} from "@fortawesome/free-solid-svg-icons";

const Welcome = () => {
  const isMobile = window.innerWidth <= 768;

  const scrollToTimeline = () => {
    const timelineSection = document.getElementById("timeline-section");
    timelineSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.div
      className="welcome-section"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      style={{
        minHeight: isMobile ? "90vh" : "100vh",
        position: "relative",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        padding: isMobile ? "1rem" : 0,
      }}
    >
      <div
        style={{
          background: "#faf4e7",
          padding: isMobile ? "2rem 1.5rem" : "3rem 4rem",
          borderRadius: "8px",
          boxShadow: "0 0 30px rgba(0, 0, 0, 0.2)",
          maxWidth: "800px",
          margin: isMobile ? "0 1rem" : "0 2rem",
          position: "relative",
          width: isMobile ? "100%" : "auto",
        }}
      >
        <motion.h2
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          style={{
            fontFamily: '"Pinyon Script", "Great Vibes", cursive',
            fontSize: isMobile ? "2.5rem" : "4rem",
            color: "#565f42",
            marginBottom: isMobile ? "1.5rem" : "2rem",
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.1)",
            textAlign: "center",
            lineHeight: isMobile ? "1.2" : "normal",
          }}
        >
          ¡Bienvenidos a nuestra invitación digital!
        </motion.h2>

        <motion.p
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
          style={{
            fontFamily: '"Petit Formal Script", cursive',
            fontSize: isMobile ? "1.2rem" : "1.6rem",
            lineHeight: "1.8",
            color: "#565f42",
            textAlign: "center",
            maxWidth: "600px",
            margin: "0 auto",
            letterSpacing: "1px",
          }}
        >
          Estamos muy emocionados de compartir este día especial con ustedes
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        onClick={scrollToTimeline}
        style={{
          position: "absolute",
          bottom: isMobile ? "2rem" : "3rem",
          left: "50%",
          transform: "translateX(-50%)",
          cursor: "pointer",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "15px",
        }}
      >
        <motion.p
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{
            color: "rgb(229, 178, 137)",
            fontSize: isMobile ? "0.8rem" : "1rem",
            fontWeight: "bold",
            fontFamily: '"Petit Formal Script", cursive',
            margin: 0,
          }}
        >
          Descubre nuestra historia
        </motion.p>

        <motion.div
          style={{
            width: isMobile ? "34px" : "40px",
            height: isMobile ? "50px" : "60px",
            border: "2px solid rgb(229, 178, 137)",
            borderRadius: "20px",
            position: "relative",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <motion.span
            animate={{
              y: [0, 15, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{
              width: "6px",
              height: "6px",
              backgroundColor: "rgb(229, 178, 137)",
              borderRadius: "50%",
              position: "absolute",
              top: "6px",
            }}
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Welcome;

import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

const Welcome = () => {
  return (
    <motion.div
      className="welcome-section"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      style={{
        minHeight: "90vh",
        position: "relative",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          background: "#faf4e7",
          padding: "3rem 4rem",
          borderRadius: "8px",
          boxShadow: "0 0 30px rgba(0, 0, 0, 0.2)",
          maxWidth: "800px",
          margin: "0 2rem",
          position: "relative",
        }}
      >
        <motion.h2
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          style={{
            fontFamily: '"Pinyon Script", "Great Vibes", cursive',
            fontSize: "4rem",
            color: "#565f42",
            marginBottom: "2rem",
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.1)",
            textAlign: "center",
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
            fontSize: "1.6rem",
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
        style={{
          position: "absolute",
          bottom: "3rem",
          left: "50%",
          transform: "translateX(-50%)",
          textAlign: "center",
          color: "white",
        }}
      >
        <div
          style={{
            fontFamily: '"Petit Formal Script", cursive',
            fontSize: "1.5rem",
            fontWeight: "bold",
            color: "rgb(229, 178, 137)",
            marginBottom: "1rem",
          }}
        >
          Descubre nuestra historia
        </div>
        <motion.div
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <FontAwesomeIcon
            icon={faChevronDown}
            style={{
              fontSize: "2.5rem",
              color: "rgb(229, 178, 137)",
            }}
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Welcome;

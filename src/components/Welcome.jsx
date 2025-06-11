import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import {
  faChevronDown,
  faMousePointer,
  faMouse,
} from "@fortawesome/free-solid-svg-icons";

const Welcome = () => {
  const [greetingGender, setGreetingGender] = useState("");
  const [guestNames, setGuestNames] = useState(null);
  const isMobile = useMediaQuery({ maxWidth: 768 });

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const namesFromUrl = urlParams.get("invitados");
    const genderFromUrl = urlParams.get("genero") || "os"; // Si no se especifica, usa "os"

    if (namesFromUrl) {
      const decodedNames = decodeURIComponent(namesFromUrl);
      setGuestNames(decodedNames);
      localStorage.setItem("guestNames", decodedNames);
    }

    // Guardar el género del saludo
    setGreetingGender(genderFromUrl);
    localStorage.setItem("greetingGender", genderFromUrl);
  }, []);

  const scrollToTimeline = () => {
    const timelineSection = document.getElementById("timeline-section");
    timelineSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.div
      className="welcome-section "
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      <div className="flex-column section-content">
        <motion.h2
          className="section-title"
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          {guestNames ? (
            <>
              ¡Bienvenid{greetingGender} {guestNames}!
              <br />
              <span className="subtitle-sm">Esta es su invitación digital</span>
            </>
          ) : (
            `¡Bienvenid${greetingGender} a nuestra invitación digital!`
          )}
        </motion.h2>

        <motion.p
          className="cursive-text"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
        >
          Estamos muy emocionados de compartir este día especial con ustedes
        </motion.p>
         <div style={{ marginTop: '2px', textAlign: 'center' }}>
          <span
            onClick={() => {
              const liveSection = document.getElementById('live');
              if (liveSection) {
                liveSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }
            }}
            role="button"
            tabIndex={0}
            onKeyPress={e => {
              if (e.key === 'Enter' || e.key === ' ') {
                const liveSection = document.getElementById('live');
                if (liveSection) {
                  liveSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
              }
            }}
            style={{
              color: '#d4a574',
              fontWeight: 500,
              fontFamily: "'Dancing Script', cursive",
              fontSize: '0.95rem',
              textDecoration: 'underline',
              cursor: 'pointer',
              transition: 'color 0.2s',
              display: 'inline-block',
              marginTop: '2px',
              letterSpacing: '0.5px',
              animation: 'bounce 2s infinite',
              outline: 'none'
            }}
          >
            👉 Click aquí para ver la transmisión en vivo
          </span>
        </div>
      </div>

      <motion.div
        className="scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        onClick={scrollToTimeline}
      >
        <motion.p
          className="scroll-text"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          Desplácese hacia abajo
        </motion.p>

        <motion.div className="scroll-dot-container">
          <motion.span
            className="scroll-dot"
            animate={{
              y: [0, 15, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Welcome;

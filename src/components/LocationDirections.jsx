import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClock,
  faTshirt,
  faCar,
  faCalendarCheck,
} from "@fortawesome/free-solid-svg-icons";

const LocationDirections = () => {
  const directions = [
    {
      icon: faClock,
      text: "La ceremonia comenzará puntualmente a las 12:00 pm.",
      color: "#e5b289", // var(--primary-color)
    },
    {
      icon: faTshirt,
      text: "Código de vestimenta: Formal",
      color: "#e5b289",
    },
    {
      icon: faCar,
      text: "Hay estacionamiento disponible en el lugar",
      color: "#e5b289",
    },
    {
      icon: faCalendarCheck,
      text: "Por favor, confirma tu asistencia antes del 15 de Mayo",
      color: "#e5b289",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.2 }}
      style={{
        background: `url('./assets/images/fondo_card.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
        padding: "3rem 2rem",
        borderRadius: "15px",
        boxShadow: "0 5px 15px rgba(208, 136, 12, 0.587)",
        marginTop: "2rem",
        marginBottom: "2rem",
        overflow: "hidden",
        opacity: 0.3,
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(255, 255, 255, 0.69)",
          zIndex: 0,
        }}
      ></div>
      <div style={{ position: "relative", zIndex: 1 }}>
        <h3
          style={{
            fontFamily: '"Pinyon Script", cursive',
            fontSize: "2.5rem",
            marginBottom: "2rem",
            color: "var(--secondary-color)",
            textAlign: "center",
          }}
        >
          Indicaciones importantes
        </h3>
        <ul
          style={{
            listStyle: "none",
            padding: 0,
            fontSize: "1.2rem",
            lineHeight: "1.8",
            display: "grid",
            gap: "1.5rem",
          }}
        >
          {directions.map((item, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "15px",
                padding: "0.8rem",
                borderRadius: "10px",
                background: "rgba(229, 178, 137, 0.05)",
                transition: "transform 0.3s ease",
              }}
              whileHover={{
                transform: "translateX(10px)",
                background: "rgba(229, 178, 137, 0.1)",
              }}
            >
              <div
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  backgroundColor: "var(--primary-color)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <FontAwesomeIcon
                  icon={item.icon}
                  style={{ color: "white", fontSize: "1.2rem" }}
                />
              </div>
              <span
                style={{
                  fontFamily: '"Pinyon Script", cursive',
                  color: "var(--secondary-color)",
                  fontSize: "1.5rem",
                  letterSpacing: "0.2px",
                }}
              >
                {item.text}
              </span>
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

export default LocationDirections;

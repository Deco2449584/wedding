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
      text: "La ceremonia comenzará puntualmente a las 16:00 hrs.",
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
        borderRadius: "15px",
        padding: "2rem",
        boxShadow: "0 4px 20px rgba(229, 178, 137, 0.15)",
        border: "1px solid var(--primary-color)",
        marginTop: "2rem",
        marginBottom: "2rem",
        background: "rgba(255, 255, 255, 0.9)",
      }}
    >
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
            <span style={{ color: "var(--secondary-color)" }}>{item.text}</span>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
};

export default LocationDirections;

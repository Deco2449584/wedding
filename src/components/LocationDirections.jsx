import { motion } from "framer-motion";

const LocationDirections = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.2 }}
      style={{
        background: "rgba(255, 255, 255, 0.95)",
        borderRadius: "15px",
        padding: "2rem",
        boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
        marginTop: "2rem",
      }}
    >
      <h3
        style={{
          fontFamily: '"Pinyon Script", cursive',
          fontSize: "2rem",
          marginBottom: "1.5rem",
          color: "var(--secondary-color)",
        }}
      >
        Indicaciones importantes
      </h3>
      <ul
        style={{
          listStyle: "none",
          padding: 0,
          fontSize: "1.1rem",
          lineHeight: "1.8",
        }}
      >
        <li
          style={{
            marginBottom: "1rem",
            display: "flex",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <span style={{ color: "var(--primary-color)", fontSize: "1.2rem" }}>
            •
          </span>
          La ceremonia comenzará puntualmente a las 16:00 hrs.
        </li>
        <li
          style={{
            marginBottom: "1rem",
            display: "flex",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <span style={{ color: "var(--primary-color)", fontSize: "1.2rem" }}>
            •
          </span>
          Código de vestimenta: Formal
        </li>
        <li
          style={{
            marginBottom: "1rem",
            display: "flex",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <span style={{ color: "var(--primary-color)", fontSize: "1.2rem" }}>
            •
          </span>
          Hay estacionamiento disponible en el lugar
        </li>
        <li
          style={{
            marginBottom: "1rem",
            display: "flex",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <span style={{ color: "var(--primary-color)", fontSize: "1.2rem" }}>
            •
          </span>
          Por favor, confirma tu asistencia antes del 15 de Mayo
        </li>
      </ul>
    </motion.div>
  );
};

export default LocationDirections;

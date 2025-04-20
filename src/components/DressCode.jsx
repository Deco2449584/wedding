import { motion } from "framer-motion";
import dressImage from "../assets/images/dress.png";

const DressCode = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.2 }}
      style={{
        background: "rgba(255, 255, 255, 0.85)",
        padding: "2rem",
        borderRadius: "15px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "1.5rem",
        boxShadow: "0 5px 15px rgba(208, 136, 12, 0.3)",
        width: "100%",
        maxWidth: "300px",
      }}
    >
      <h3
        style={{
          fontFamily: '"Pinyon Script", cursive',
          fontSize: "2.2rem",
          color: "var(--secondary-color)",
          textAlign: "center",
          fontWeight: "700",
          margin: 0,
        }}
      >
        Código de Vestimenta
      </h3>

      <img
        src={dressImage}
        alt="Código de vestimenta vintage"
        style={{
          width: "150px",
          height: "auto",
          objectFit: "contain",
        }}
      />

      <div
        style={{
          fontFamily: '"Pinyon Script", cursive',
          fontSize: "2rem",
          color: "var(--secondary-color)",
          textAlign: "center",
          fontWeight: "600",
          lineHeight: "1.4",
        }}
      >
        Vintage
        <div
          style={{
            fontSize: "1.4rem",
            color: "#666",
            marginTop: "0.5rem",
          }}
        >
          Te invitamos a vestir con elegancia y estilo de época
        </div>
      </div>
    </motion.div>
  );
};

export default DressCode;

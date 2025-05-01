import { motion } from "framer-motion";
import dressImage from "../assets/images/dress.png";

const DressCode = () => {
  // Colores para mostrar visualmente
  const colorChips = {
    avoid: [
      { name: "Blanco", color: "#FFFFFF", border: true },
      { name: "Crema", color: "#F5F5DC", border: true },
      { name: "Beige", color: "#F5F2D0", border: true },
      { name: "Rojo", color: "#FF0000" },
      { name: "Negro", color: "#000000" },
    ],
    recommended: [
      { name: "Azul", color: "#4682B4" },
      { name: "Verde", color: "#2E8B57" },
      { name: "Gris", color: "#708090" },
      { name: "Lila", color: "#C8A2C8" },
    ],
  };

  // Accesorios vintage con iconos y descripciones
  const vintageAccessories = [
    { icon: "./assets/icons/hat.png", name: "Sombrero", gender: "both" },
    { icon: "./assets/icons/tie.png", name: "Corbata/Pajarita", gender: "men" },
    { icon: "./assets/icons/jewel.png", name: "Broche/Joya", gender: "women" },
    { icon: "./assets/icons/glasses.png", name: "Gafas retro", gender: "both" },
    { icon: "./assets/icons/suspenders.png", name: "Tirantes", gender: "men" },
    {
      icon: "./assets/icons/handkerchief.png",
      name: "Pañuelo",
      gender: "both",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.2 }}
      style={{
        background: "rgba(255, 255, 255, 0.85)",
        padding: "1.5rem",
        borderRadius: "15px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "1rem",
        boxShadow: "0 5px 15px rgba(208, 136, 12, 0.3)",
        width: "100%",
        maxWidth: "400px",
        aspectRatio: "1 / 1.2", // Más cuadrado
      }}
    >
      <h3 className="cursive-title" style={{ marginBottom: "0.5rem" }}>
        Código de Vestimenta
      </h3>
      <div
        className="cursive-title"
        style={{ marginBottom: "0.5rem", fontSize: "1.8rem" }}
      >
        Elegante Campestre
      </div>

      <img
        src={dressImage || "/placeholder.svg"}
        alt="Código de vestimenta vintage"
        style={{
          width: "150px",
          height: "auto",
          objectFit: "contain",
        }}
      />

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "1rem",
          fontSize: "0.9rem",
          color: "#666",
          textAlign: "left",
          width: "100%",
        }}
      >
        <div>
          <h4 className="cursive-subtitle" style={{ marginBottom: "0.5rem" }}>
            Caballeros
          </h4>
          <ul
            className="cursive-text"
            style={{
              paddingLeft: "1rem",
              margin: 0,
              fontSize: "0.5rem !important",
              lineHeight: "1.3",
            }}
          >
            <li>Pantalón y saco formal</li>
            <li>Zapatos tipo mocasín</li>
          </ul>
        </div>
        <div>
          <h4 className="cursive-subtitle" style={{ marginBottom: "0.5rem" }}>
            Damas
          </h4>
          <ul
            className="cursive-text"
            style={{
              paddingLeft: "1rem",
              margin: 0,
              fontSize: "0.5rem !important",
              lineHeight: "1.3",
            }}
          >
            <li>Vestimenta formal</li>
            <li>Zapatos cómodos para campo</li>
          </ul>
        </div>
      </div>

      {/* Visualización de colores */}
      <div style={{ width: "100%", marginTop: "0.5rem" }}>
        <p
          className="cursive-subtitle"
          style={{
            textAlign: "center",
            margin: "0 0 0.5rem 0",
            fontSize: "1.5rem",
          }}
        >
          Evitar estos colores:
        </p>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "0.5rem",
            flexWrap: "wrap",
          }}
        >
          {colorChips.avoid.map((chip, index) => (
            <div
              key={`avoid-${index}`}
              style={{
                width: "25px",
                height: "25px",
                borderRadius: "50%",
                backgroundColor: chip.color,
                border: chip.border ? "1px solid #ccc" : "none",
                position: "relative",
                display: "inline-block",
              }}
              title={chip.name}
            />
          ))}
        </div>
      </div>

      {/* Sección de accesorios vintage */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        style={{
          width: "100%",
          marginTop: "0.8rem",
          padding: "0.8rem",
          borderRadius: "8px",
          backgroundColor: "rgba(229, 178, 137, 0.15)",
          border: "1px dashed var(--primary-color)",
        }}
      >
        <p
          className="cursive-subtitle"
          style={{
            textAlign: "center",
            margin: "0 0 0.8rem 0",
            fontSize: "1.5rem",
          }}
        >
          Incluye un accesorio vintage
        </p>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "0.8rem",
            flexWrap: "wrap",
          }}
        >
          {vintageAccessories.map((accessory, index) => (
            <motion.div
              key={`accessory-${index}`}
              whileHover={{ scale: 1.1, rotate: 5 }}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "0.3rem",
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
                  padding: "8px",
                }}
              >
                <img
                  src={accessory.icon}
                  alt={accessory.name}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                  }}
                />
              </div>
              <span style={{ fontSize: "0.7rem", textAlign: "center" }}>
                {accessory.name}
              </span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default DressCode;

import { motion } from "framer-motion";
import dressImage from "../assets/images/dress.png";

const DressCode = () => {
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
      className="dress-code-section card-base"
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      <h3 className="section-title">Código de Vestimenta</h3>
      <p className="dress-code-subtitle cursive-text">Elegante Campestre</p>

      <img
        src={dressImage || "/placeholder.svg"}
        alt="Código de vestimenta vintage"
        className="dress-code-image"
      />

      <div className="dress-code-details">
        <div className="dress-code-group">
          <h4 className="group-title cursive-text">Caballeros</h4>
          <ul className="dress-code-list cursive-text">
            <li>Pantalón y saco formal</li>
            <li>Zapatos elegantes o tipo mocasín</li>
          </ul>
        </div>
        <div className="dress-code-group">
          <h4 className="group-title cursive-text">Damas</h4>
          <ul className="dress-code-list cursive-text">
            <li>Vestimenta formal</li>
            <li>Zapatos cómodos para campo</li>
          </ul>
        </div>
      </div>

      <div className="color-section">
        <p className="section-subtitle cursive-text">Evitar estos colores:</p>
        <div className="color-chips">
          {colorChips.avoid.map((chip, index) => (
            <div
              key={`avoid-${index}`}
              className="color-chip"
              style={{
                backgroundColor: chip.color,
                border: chip.border ? "1px solid #ccc" : "none",
              }}
              title={chip.name}
            />
          ))}
        </div>
      </div>

      <motion.div
        className="vintage-accessories card-base"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        <p className="section-subtitle cursive-text">
          Incluye un accesorio vintage
        </p>

        <div className="accessories-grid">
          {vintageAccessories.map((accessory, index) => (
            <motion.div
              key={`accessory-${index}`}
              className="accessory-item"
              whileHover={{ scale: 1.1, rotate: 5 }}
            >
              <div className="accessory-icon">
                <img src={accessory.icon} alt={accessory.name} />
              </div>
              <span className="accessory-name">{accessory.name}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default DressCode;

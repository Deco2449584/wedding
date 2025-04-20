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
        maxWidth: "500px",
      }}
    >
      <h3 className="cursive-title">Código de Vestimenta</h3>

      <img
        src={dressImage}
        alt="Código de vestimenta vintage"
        style={{
          width: "150px",
          height: "auto",
          objectFit: "contain",
        }}
      />

      <div className="cursive-title" style={{ marginBottom: 0 }}>
        Elegante Campestre
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "2rem",
          fontSize: "1rem",
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
              paddingLeft: "1.2rem",
              margin: 0,
              fontSize: "1rem !important",
              lineHeight: "1",
            }}
          >
            <li>Pantalón y saco formal</li>
            <li>Evitar colores: blanco, crema, beige, rojo o negro</li>
            <li>Zapatos formales tipo mocasín</li>
          </ul>
        </div>
        <div>
          <h4 className="cursive-subtitle" style={{ marginBottom: "0.5rem" }}>
            Damas
          </h4>
          <ul
            className="cursive-text"
            style={{
              paddingLeft: "1.2rem",
              margin: 0,
              fontSize: "1rem !important",
              lineHeight: "1",
            }}
          >
            <li>Vestimenta formal en colores claros</li>
            <li>Evitar colores: blanco, beige, rojo y negro</li>
            <li>Zapatos elegantes y cómodos, aptos para lugar campestre</li>
          </ul>
        </div>
      </div>
      <div
        style={{
          width: "100%",
          textAlign: "center",
          marginTop: "1rem",
          fontSize: "1rem",
          color: "#666",
        }}
      >
        <p className="cursive-text" style={{ margin: 0 }}>
          Por favor incluye un accesorio o artículo vintage para que haga parte
          de tu atuendo
        </p>
      </div>
    </motion.div>
  );
};

export default DressCode;

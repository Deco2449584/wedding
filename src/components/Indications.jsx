import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClock,
  faCar,
  faCalendarCheck,
  faUserSlash,
  faGift,
  faBus,
  faMapMarkerAlt,
  faCamera,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import DressCode from "./DressCode";

const Indications = () => {
  const directions = [
    {
      icon: faClock,
      text: "La ceremonia comenzará a las 12:00 pm.",
      color: "#e5b289",
    },
    {
      icon: faMapMarkerAlt,
      text: "Hacienda Villa Claudia, km 5 vía Chía",
      color: "#e5b289",
    },
    {
      icon: faCar,
      text: "Estacionamiento disponible",
      color: "#e5b289",
    },
    {
      icon: faCalendarCheck,
      text: "Confirma tu asistencia antes del 15 de Mayo",
      color: "#e5b289",
    },
    {
      icon: faUserSlash,
      text: "Evento exclusivo para adultos",
      color: "#e5b289",
    },
    {
      icon: faCamera,
      text: "Comparte tus fotos con #BodasClaudiayJuan",
      color: "#e5b289",
    },
    {
      icon: faBus,
      text: "Transporte de regreso a Bogotá",
      color: "#e5b289",
      isSpecial: true,
      description:
        "Habrá transporte disponible desde la hacienda hasta Bogotá a las 8:00 pm y 11:00 pm. Por favor reserva tu cupo al confirmar asistencia.",
    },
    {
      icon: faGift,
      text: "Lluvia de sobres",
      color: "#e5b289",
      isSpecial: true,
      description:
        "Tu presencia es nuestro mejor regalo. Si deseas hacernos un obsequio, una contribución monetaria será muy apreciada.",
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
      <div
        style={{
          position: "relative",
          zIndex: 1,
          display: "flex",
          gap: "2rem",
          flexWrap: "wrap",
          justifyContent: "space-between",
        }}
      >
        <div style={{ flex: "1", minWidth: "300px" }}>
          <h3
            style={{
              fontFamily: '"Pinyon Script", cursive',
              fontSize: "2.5rem",
              marginBottom: "2rem",
              color: "var(--secondary-color)",
              textAlign: "center",
              fontWeight: "700",
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
                  flexDirection: "column",
                  gap: item.isSpecial ? "10px" : "0",
                  padding: "0.8rem",
                  borderRadius: "10px",
                  background: item.isSpecial
                    ? "rgba(229, 178, 137, 0.2)"
                    : "rgba(229, 178, 137, 0.1)",
                  transition: "transform 0.3s ease",
                  border: item.isSpecial
                    ? "2px dashed rgb(229, 178, 137)"
                    : "none",
                }}
                whileHover={{
                  transform: "translateX(10px)",
                  background: item.isSpecial
                    ? "rgba(229, 178, 137, 0.25)"
                    : "rgba(229, 178, 137, 0.13)",
                }}
              >
                <div
                  style={{ display: "flex", alignItems: "center", gap: "15px" }}
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
                      fontWeight: "600",
                    }}
                  >
                    {item.text}
                    {item.isSpecial && (
                      <FontAwesomeIcon
                        icon={faHeart}
                        style={{
                          color: "var(--primary-color)",
                          marginLeft: "10px",
                          fontSize: "1rem",
                        }}
                      />
                    )}
                  </span>
                </div>
                {item.isSpecial && item.description && (
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    style={{
                      margin: "0",
                      paddingLeft: "55px",
                      fontSize: "1.Zrem",
                      color: "#666",
                      fontFamily: '"Pinyon Script", cursive',
                    }}
                  >
                    {item.description}
                  </motion.p>
                )}
              </motion.li>
            ))}
          </ul>
        </div>
        <DressCode />
      </div>
    </motion.div>
  );
};

export default Indications;

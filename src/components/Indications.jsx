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
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import DressCode from "./DressCode";

const Indications = () => {
  const indications = [
    {
      icon: faClock,
      title: "La ceremonia comenzará a las 12:00 pm.",
      description: "",
    },
    {
      icon: faMapMarkerAlt,
      title: "Finca el Manantial, Vereda el Meusa, Sopó",
      description: "",
    },
    {
      icon: faCar,
      title: "Estacionamiento disponible",
      description: "",
    },
    {
      icon: faCalendarCheck,
      title: "Confirma tu asistencia antes del 15 de Mayo",
      description: "",
    },
    {
      icon: faUserSlash,
      title: "Evento exclusivo para adultos",
      description: "",
    },
    {
      icon: faBus,
      title: "Transporte ída y regreso",
      description:
        "Habrá transporte (Bus Privado) gratis disponible en frente de la terminal del salitre a las 10:00 am y regreso a las 8:00 pm. (Recuerda confirmar tu asistencia para el transporte privado).",
    },
    {
      icon: faGift,
      title: "Lluvia de sobres",
      description:
        "Tu presencia es nuestro mejor regalo. Si deseas hacernos un obsequio, una contribución monetaria será muy apreciada.",
      isSpecial: true,
    },
  ];

  return (
    <section className="timeline-content card-base" id="indications">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Indicaciones importantes
        </motion.h2>

        <div className="two-columns-grid">
          <div className="indications-container">
            <div className="indications-grid">
              {indications.map((item, index) => (
                <motion.div
                  key={index}
                  className={`indication-card card-base ${
                    item.isSpecial ? "special-card" : ""
                  }`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                >
                  <div className="indication-icon">
                    <FontAwesomeIcon icon={item.icon} />
                    {item.isSpecial && (
                      <motion.div
                        className="floating-heart"
                        animate={{
                          scale: [1, 1.2, 1],
                          transition: {
                            duration: 2,
                            repeat: Infinity,
                          },
                        }}
                      >
                        <FontAwesomeIcon
                          icon={faHeart}
                          className="heart-icon"
                        />
                      </motion.div>
                    )}
                  </div>
                  <div className="indication-content">
                    <h3 className="cursive-text">{item.title}</h3>
                    {item.description && (
                      <p className="cursive-text">{item.description}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          <div className="dresscode-container">
            <DressCode />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Indications;

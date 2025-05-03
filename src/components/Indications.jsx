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
    },
  ];

  return (
    <section className="indications-section" id="indications">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Información Importante
        </motion.h2>

        <div className="indications-grid">
          {indications.map((item, index) => (
            <motion.div
              key={index}
              className="indication-card card-base"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
            >
              <div className="indication-icon">
                <FontAwesomeIcon icon={item.icon} />
              </div>
              <div className="indication-content">
                <h3 className="indication-title cursive-text">{item.title}</h3>
                <p className="indication-description cursive-text">
                  {item.description}
                </p>
                {item.additional && (
                  <p className="indication-additional cursive-text">
                    {item.additional}
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="special-note card-base"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.h3 className="note-title cursive-text">
            ¿Desea hacernos un regalo?
          </motion.h3>
          <motion.p className="note-description cursive-text">
            Su presencia es nuestro mayor regalo. Sin embargo, si desea hacernos
            un presente, agradecemos su contribución para nuestra luna de miel.
          </motion.p>
          <div className="bank-details">
            <p className="cursive-text">Datos bancarios:</p>
            <p className="cursive-text">Bancolombia: 123456789</p>
            <p className="cursive-text">Nequi: 300 123 4567</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Indications;

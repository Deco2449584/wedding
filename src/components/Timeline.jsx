import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faGlassCheers,
  faRing,
  faCalendarDay,
  faUserFriends,
} from "@fortawesome/free-solid-svg-icons";

const Timeline = () => {
  const timelineEvents = [
    {
      year: "2018",
      title: "Nos conocimos",
      description:
        "Un encuentro casual que cambió nuestras vidas para siempre.",
      icon: faUserFriends,
      photo: "./assets/images/timeline-meet.jpg",
    },
    {
      year: "2019",
      title: "Nuestra primera cita",
      description:
        "Compartimos risas, historias y supimos que era el comienzo de algo especial.",
      icon: faGlassCheers,
      photo: "/images/timeline-date.jpg",
    },
    {
      year: "2020",
      title: "Nos hicimos novios",
      description: "Oficialmente comenzamos nuestro camino juntos.",
      icon: faHeart,
      photo: "./assets/images/timeline-couple.jpg",
    },
    {
      year: "2023",
      title: "La propuesta",
      description:
        "Con un anillo y muchas lágrimas de felicidad, dijimos sí a compartir el resto de nuestras vidas.",
      icon: faRing,
      photo: "./assets/images/timeline-proposal.jpg",
    },
    {
      year: "2025",
      title: "Nuestra boda",
      description:
        "¡El día más esperado ha llegado! Celebramos nuestro amor rodeados de las personas más importantes en nuestras vidas.",
      icon: faCalendarDay,
      photo: "./assets/images/timeline-wedding.jpg",
    },
  ];

  return (
    <section className="timeline-section" id="timeline">
      <div className="container">
        <motion.h2
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Nuestra Historia
        </motion.h2>

        <div className="timeline">
          {timelineEvents.map((event, index) => (
            <motion.div
              className="timeline-item"
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <FontAwesomeIcon
                  icon={event.icon}
                  className="timeline-icon"
                  size="3x"
                />
                <img
                  src={event.photo}
                  alt={event.title}
                  className="timeline-photo"
                  style={{
                    borderRadius: "50%",
                    width: "200px",
                    height: "200px",
                    objectFit: "cover",
                    border: "4px solid rgb(212, 175, 55)",
                    boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)",
                  }}
                />
                <div className="timeline-year">{event.year}</div>
                <h3>{event.title}</h3>
                <p>{event.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;

import { motion } from "framer-motion";

const Timeline = () => {
  const timelineEvents = [
    {
      year: "2018",
      title: "Nos conocimos",
      description:
        "Un encuentro casual que cambió nuestras vidas para siempre.",
      icon: "./assets/icons/icon1.png",
      photo: "./assets/images/timeline-meet.jpg",
    },
    {
      year: "2019",
      title: "Primera cita",
      description: "Comenzamos a escribir nuestra historia de amor.",
      icon: "./assets/icons/icon2.png",
      photo: "./assets/images/timeline-date.jpg",
    },
    {
      year: "2020",
      title: "Noviazgo",
      description: "Decidimos compartir nuestras vidas juntos.",
      icon: "./assets/icons/icon3.png",
      photo: "./assets/images/timeline-couple.jpg",
    },
    {
      year: "2024",
      title: "Compromiso",
      description:
        "Con un anillo y mucha felicidad, dijimos sí a compartir el resto de nuestras vidas.",
      icon: "./assets/icons/icon4.png",
      photo: "./assets/images/timeline-proposal.jpg",
    },
    {
      year: "2025",
      title: "Nuestra boda",
      description:
        "¡El día más esperado ha llegado! Celebramos nuestro amor rodeados de las personas más importantes en nuestras vidas.",
      icon: "./assets/icons/icon5.png",
      photo: "./assets/images/timeline-wedding.jpg",
    },
  ];

  return (
    <section className="timeline-section" id="timeline">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Nuestra Historia de Amor
        </motion.h2>

        <div className="timeline">
          {timelineEvents.map((event, index) => (
            <motion.div
              className={`timeline-item ${index % 2 === 0 ? "left" : "right"}`}
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <div className="timeline-dot" />
              <div className="timeline-content card-base">
                <img
                  src={event.icon}
                  alt={event.title}
                  className="timeline-icon"
                />
                <img
                  src={event.photo}
                  alt={event.title}
                  className="timeline-photo"
                />
                <div className="timeline-year">{event.year}</div>
                <h3 className="timeline-title cursive-text">{event.title}</h3>
                <p className="timeline-description cursive-text">
                  {event.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;

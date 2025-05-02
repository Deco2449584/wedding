import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faVideo,
  faHeart,
  faEnvelope,
  faClock,
  faCalendarDay,
} from "@fortawesome/free-solid-svg-icons";

const VideoMessage = () => {
  return (
    <section style={{ padding: "4rem 1rem" }}>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        style={{
          maxWidth: "800px",
          margin: "0 auto",
          textAlign: "center",
          position: "relative",
        }}
      >
        {/* Decoración de corazones flotantes */}
        <motion.div
          animate={{
            y: [-10, 10],
            transition: {
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse",
            },
          }}
          style={{
            position: "absolute",
            top: -20,
            left: "10%",
            color: "var(--primary-color)",
            opacity: 0.6,
            fontSize: "2rem",
          }}
        >
          <FontAwesomeIcon icon={faHeart} />
        </motion.div>
        <motion.div
          animate={{
            y: [10, -10],
            transition: {
              duration: 2.5,
              repeat: Infinity,
              repeatType: "reverse",
            },
          }}
          style={{
            position: "absolute",
            top: 20,
            right: "15%",
            color: "var(--primary-color)",
            opacity: 0.6,
            fontSize: "1.5rem",
          }}
        >
          <FontAwesomeIcon icon={faHeart} />
        </motion.div>

        {/* Contenido principal */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{
            background: "rgba(255, 255, 255, 0.95)",
            padding: "3rem",
            borderRadius: "20px",
            boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
            border: "1px solid rgba(229, 178, 137, 0.3)",
            backdropFilter: "blur(10px)",
          }}
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            style={{
              width: "80px",
              height: "80px",
              borderRadius: "50%",
              background: "var(--primary-color)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "0 auto 2rem",
            }}
          >
            <FontAwesomeIcon
              icon={faVideo}
              style={{ fontSize: "2rem", color: "white" }}
            />
          </motion.div>

          <h2
            style={{
              fontFamily: '"Pinyon Script", cursive',
              fontSize: "3rem",
              color: "var(--secondary-color)",
              marginBottom: "1.5rem",
              lineHeight: 1.2,
            }}
          >
            Comparte tus Bendiciones
          </h2>

          <p
            style={{
              fontSize: "1.8rem",
              color: "var(--secondary-color)",
              marginBottom: "2rem",
              fontFamily: '"Pinyon Script", cursive',
              lineHeight: 1.6,
            }}
          >
            Nos encantaría recibir un mensaje tuyo para nuestro día especial
          </p>

          {/* Tarjetas de información */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              gap: "2rem",
              margin: "3rem 0",
            }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              style={{
                padding: "1.5rem",
                borderRadius: "15px",
                background: "rgba(229, 178, 137, 0.1)",
                border: "1px dashed var(--primary-color)",
              }}
            >
              <FontAwesomeIcon
                icon={faClock}
                style={{
                  fontSize: "1.5rem",
                  color: "var(--primary-color)",
                  marginBottom: "1rem",
                }}
              />
              <h3
                style={{
                  fontFamily: '"Pinyon Script", cursive',
                  fontSize: "1.8rem",
                  color: "var(--secondary-color)",
                  marginBottom: "0.5rem",
                }}
              >
                Duración
              </h3>
              <p style={{ fontSize: "1.1rem", color: "#666" }}>
                10-15 segundos máximo
              </p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              style={{
                padding: "1.5rem",
                borderRadius: "15px",
                background: "rgba(229, 178, 137, 0.1)",
                border: "1px dashed var(--primary-color)",
              }}
            >
              <FontAwesomeIcon
                icon={faCalendarDay}
                style={{
                  fontSize: "1.5rem",
                  color: "var(--primary-color)",
                  marginBottom: "1rem",
                }}
              />
              <h3
                style={{
                  fontFamily: '"Pinyon Script", cursive',
                  fontSize: "1.8rem",
                  color: "var(--secondary-color)",
                  marginBottom: "0.5rem",
                }}
              >
                Fecha límite
              </h3>
              <p style={{ fontSize: "1.1rem", color: "#666" }}>
                Antes del 1 de junio
              </p>
            </motion.div>
          </div>

          {/* Botón de contacto */}
          <motion.a
            href="mailto:tucorreo@ejemplo.com"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              background: "var(--secondary-color)",
              color: "white",
              padding: "1rem 2rem",
              borderRadius: "50px",
              fontSize: "1.5rem",
              textDecoration: "none",
              fontFamily: '"Pinyon Script", cursive',
              border: "none",
              cursor: "pointer",
              boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)",
            }}
          >
            <FontAwesomeIcon icon={faEnvelope} />
            Enviar Video
          </motion.a>

          {/* Nota adicional */}
          <p
            style={{
              marginTop: "2rem",
              fontSize: "1.2rem",
              color: "#888",
              fontStyle: "italic",
            }}
          >
            * Tu mensaje será parte de un video especial que se reproducirá durante
            nuestra celebración
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default VideoMessage;
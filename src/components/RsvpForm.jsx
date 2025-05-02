import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";

// Configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCma1WH-SmDsFbdCH1Jq7E2O_W1mLPg8mM",
  authDomain: "wedding-9e948.firebaseapp.com",
  projectId: "wedding-9e948",
  storageBucket: "wedding-9e948.firebasestorage.app",
  messagingSenderId: "978494283095",
  appId: "1:978494283095:web:ab0cdcac3a7caabf817212",
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const RsvpForm = ({ onRsvpSubmit }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    comments: "",
    allergies: "",
    hasTransportation: "",
    willDrinkAlcohol: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showContinueButtons, setShowContinueButtons] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");

  // Componente de Alerta
  const Alert = ({ message }) => {
    if (!message) return null;

    return (
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          style={{
            position: "fixed",
            top: "20px",
            left: "50%",
            transform: "translateX(-50%)",
            zIndex: 1000,
            backgroundColor: "rgba(255, 255, 255, 0.95)",
            padding: "1.5rem 2rem",
            borderRadius: "15px",
            boxShadow: "0 4px 20px rgba(0, 0, 0, 0.15)",
            border: "2px solid var(--primary-color)",
            maxWidth: "90%",
            width: "400px",
            textAlign: "center",
          }}
        >
          <p
            style={{
              fontFamily: "Charm",
              fontSize: "1.8rem",
              color: "var(--secondary-color)",
              margin: 0,
              lineHeight: 1.4,
            }}
          >
            {message}
          </p>
        </motion.div>
      </AnimatePresence>
    );
  };

  const showAlert = (message) => {
    setAlertMessage(message);
    setTimeout(() => setAlertMessage(""), 3000);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validación de campos requeridos
    if (!formData.fullName.trim()) {
      showAlert("Por favor, ingresa tu nombre completo");
      return;
    }

    if (!formData.hasTransportation) {
      showAlert("Por favor, indica si cuentas con medio de transporte");
      return;
    }

    if (!formData.willDrinkAlcohol) {
      showAlert("Por favor, indica si vas a tomar bebida alcohólica");
      return;
    }

    try {
      // Guardar en Firebase
      const docRef = await addDoc(collection(db, "confirmaciones"), {
        ...formData,
        fechaConfirmacion: new Date(),
      });

      console.log("Confirmación guardada con ID: ", docRef.id);

      if (onRsvpSubmit) {
        onRsvpSubmit(formData);
      }

      setShowContinueButtons(true); // Mostrar botones antes del mensaje de éxito

      // No establecer isSubmitted aquí, esperar la decisión del usuario
    } catch (error) {
      console.error("Error al guardar la confirmación: ", error);
      showAlert(
        "Hubo un error al enviar tu confirmación. Por favor, intenta nuevamente."
      );
    }
  };

  const handleContinue = (shouldContinue) => {
    if (shouldContinue) {
      setFormData({
        fullName: "",
        comments: "",
        allergies: "",
        hasTransportation: "",
        willDrinkAlcohol: "",
      });
      setShowContinueButtons(false);
    } else {
      setIsSubmitted(true);
    }
  };

  return (
    <section className="rsvp" id="rsvp">
      <Alert message={alertMessage} />
      <div className="container">
        {!isSubmitted && !showContinueButtons && (
          <>
            <motion.h2
              className="text-center cursive-title"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Confirma la asistencia de los invitados en este formulario
            </motion.h2>

            <motion.p
              className="text-center cursive-text"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Para tener mayor precisión en la organización del evento, cada
              invitado debe responder individualmente este formulario.
            </motion.p>
          </>
        )}

        <motion.div
          className="form-container"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {isSubmitted ? (
            <div className="success-message">
              <video
                className="confirmation-video"
                autoPlay
                loop
                muted
                playsInline
                style={{
                  width: "200px",
                  height: "200px",
                  borderRadius: "50%",
                  objectFit: "cover",
                  marginBottom: "20px",
                }}
              >
                <source src="./assets/videos/video.mp4" type="video/mp4" />
              </video>
              <h3 className="cursive-subtitle">¡Gracias por confirmar!</h3>
              <p className="cursive-text">
                Estamos muy emocionados de compartir este día especial contigo.
              </p>
            </div>
          ) : showContinueButtons ? (
            <div className="continue-message">
              <h3
                className="cursive-subtitle"
                style={{
                  fontSize: "2.5rem",
                  color: "var(--secondary-color)",
                  marginBottom: "2rem",
                  fontFamily: "Charm",
                  textAlign: "center",
                }}
              >
                ¿Desea Registrar otro invitado?
              </h3>
              <div
                className="confirmation-buttons"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  gap: "20px",
                  marginTop: "20px",
                }}
              >
                <button
                  className="form-submit cursive-text"
                  onClick={() => handleContinue(true)}
                  style={{
                    backgroundColor: "var(--primary-color)",
                    fontSize: "1.8rem",
                    padding: "1rem 2rem",
                    minWidth: "250px",
                    fontFamily: "Charm",
                    textTransform: "none",
                    border: "none",
                    transition: "all 0.3s ease",
                    boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
                  }}
                >
                  Confirmar otro invitado
                </button>
                <button
                  className="form-submit cursive-text"
                  onClick={() => handleContinue(false)}
                  style={{
                    backgroundColor: "rgb(89, 95, 72)",
                    fontSize: "1.8rem",
                    padding: "1rem 2rem",
                    minWidth: "250px",
                    fontFamily: "Charm",
                    textTransform: "none",
                    border: "none",
                    transition: "all 0.3s ease",
                    boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
                  }}
                >
                  Finalizar
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <label htmlFor="fullName" className="form-label">
                Nombre Completo:
              </label>
              <div className="form-group">
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  className="form-input cursive-placeholder"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Escribe tu nombre completo..."
                  required
                />
              </div>

              <label htmlFor="allergies" className="form-label">
                ¿Eres alérgico a algo?
              </label>
              <div className="form-group">
                <input
                  type="text"
                  id="allergies"
                  name="allergies"
                  className="form-input cursive-placeholder"
                  value={formData.allergies}
                  onChange={handleChange}
                  placeholder="Indica si tienes alguna alergia..."
                />
              </div>

              <label htmlFor="hasTransportation" className="form-label">
                ¿Cuentas con medio de transporte?
              </label>
              <div className="form-group radio-group">
                <div className="radio-option">
                  <input
                    type="radio"
                    id="transportationYes"
                    name="hasTransportation"
                    value="yes"
                    checked={formData.hasTransportation === "yes"}
                    onChange={handleChange}
                    className="form-radio"
                  />
                  <label htmlFor="transportationYes" className="radio-label">
                    Sí
                  </label>
                </div>
                <div className="radio-option">
                  <input
                    type="radio"
                    id="transportationNo"
                    name="hasTransportation"
                    value="no"
                    checked={formData.hasTransportation === "no"}
                    onChange={handleChange}
                    className="form-radio"
                  />
                  <label htmlFor="transportationNo" className="radio-label">
                    No
                  </label>
                </div>
              </div>

              <label htmlFor="willDrinkAlcohol" className="form-label">
                ¿Vas a tomar bebida alcohólica?
              </label>
              <div className="form-group radio-group">
                <div className="radio-option">
                  <input
                    type="radio"
                    id="alcoholYes"
                    name="willDrinkAlcohol"
                    value="yes"
                    checked={formData.willDrinkAlcohol === "yes"}
                    onChange={handleChange}
                    className="form-radio"
                  />
                  <label htmlFor="alcoholYes" className="radio-label">
                    Sí
                  </label>
                </div>
                <div className="radio-option">
                  <input
                    type="radio"
                    id="alcoholNo"
                    name="willDrinkAlcohol"
                    value="no"
                    checked={formData.willDrinkAlcohol === "no"}
                    onChange={handleChange}
                    className="form-radio"
                  />
                  <label htmlFor="alcoholNo" className="radio-label">
                    No
                  </label>
                </div>
              </div>

              <label htmlFor="comments" className="form-label">
                Comentarios adicionales (opcional):
              </label>
              <div className="form-group">
                <textarea
                  id="comments"
                  name="comments"
                  className="form-textarea cursive-placeholder"
                  rows="4"
                  value={formData.comments}
                  onChange={handleChange}
                  placeholder="¿Tienes algún comentario adicional?"
                ></textarea>
              </div>

              <button type="submit" className="form-submit cursive-text">
                Confirmar Asistencia
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default RsvpForm;

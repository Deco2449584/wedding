import { useState, useEffect } from "react";
import { motion } from "framer-motion";
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
    numberOfGuests: "",
    comments: "",
    allergies: "",
    hasTransportation: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [hasSubmittedBefore, setHasSubmittedBefore] = useState(false);

  useEffect(() => {
    const previousSubmission = localStorage.getItem("rsvpSubmitted");
    if (previousSubmission) {
      setHasSubmittedBefore(true);
      setIsSubmitted(true);
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: name === "numberOfGuests" ? parseInt(value) || "" : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (hasSubmittedBefore) {
      alert("Ya has enviado una confirmación anteriormente.");
      return;
    }

    // Validación básica
    if (!formData.fullName.trim()) {
      alert("Por favor, ingresa tu nombre completo.");
      return;
    }

    if (!formData.numberOfGuests || formData.numberOfGuests <= 0) {
      alert("El número de invitados debe ser al menos 1.");
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

      localStorage.setItem("rsvpSubmitted", "true");
      setIsSubmitted(true);
      setHasSubmittedBefore(true);

      // Resetear formulario
      setFormData({
        fullName: "",
        numberOfGuests: "",
        comments: "",
        allergies: "",
        hasTransportation: "",
      });
    } catch (error) {
      console.error("Error al guardar la confirmación: ", error);
      alert(
        "Hubo un error al enviar tu confirmación. Por favor, intenta nuevamente."
      );
    }
  };

  return (
    <section className="rsvp" id="rsvp">
      <div className="container">
        <motion.h2
          className="text-center cursive-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Confirma tu Asistencia
        </motion.h2>

        <motion.div
          className="form-container"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {isSubmitted ? (
            <div className="success-message">
              <h3>¡Gracias por confirmar!</h3>
              <p>
                Estamos muy emocionados de compartir este día especial contigo.
              </p>
              {!hasSubmittedBefore && (
                <button
                  className="form-submit"
                  onClick={() => setIsSubmitted(false)}
                  style={{ marginTop: "1rem" }}
                >
                  Enviar otra confirmación
                </button>
              )}
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

              <label htmlFor="numberOfGuests" className="form-label">
                Número de Invitados:
              </label>
              <div className="form-group">
                <input
                  type="number"
                  id="numberOfGuests"
                  name="numberOfGuests"
                  className="form-input cursive-placeholder"
                  min="1"
                  max="10"
                  value={formData.numberOfGuests}
                  onChange={handleChange}
                  placeholder="¿Cuántos invitados asistirán?"
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

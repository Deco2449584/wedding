import { useState } from 'react';
import { motion } from 'framer-motion';

const RsvpForm = ({ onRsvpSubmit }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    numberOfGuests: 1,
    comments: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: name === 'numberOfGuests' ? parseInt(value) || 0 : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Basic validation
    if (!formData.fullName.trim()) {
      alert('Por favor, ingresa tu nombre completo.');
      return;
    }
    
    if (formData.numberOfGuests <= 0) {
      alert('El número de invitados debe ser al menos 1.');
      return;
    }

    // Submit form data
    onRsvpSubmit(formData);
    setIsSubmitted(true);
    
    // Reset form
    setFormData({
      fullName: '',
      numberOfGuests: 1,
      comments: ''
    });
  };

  return (
    <section className="rsvp" id="rsvp">
      <div className="container">
        <motion.h2 
          className="text-center"
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
              <p>Estamos muy emocionados de compartir este día especial contigo.</p>
              <button 
                className="form-submit" 
                onClick={() => setIsSubmitted(false)}
                style={{ marginTop: '1rem' }}
              >
                Enviar otra confirmación
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="fullName" className="form-label">Nombre Completo:</label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  className="form-input"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="numberOfGuests" className="form-label">Número de Invitados:</label>
                <input
                  type="number"
                  id="numberOfGuests"
                  name="numberOfGuests"
                  className="form-input"
                  min="1"
                  max="10"
                  value={formData.numberOfGuests}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="comments" className="form-label">Comentarios (opcional):</label>
                <textarea
                  id="comments"
                  name="comments"
                  className="form-textarea"
                  rows="4"
                  value={formData.comments}
                  onChange={handleChange}
                  placeholder="Indícanos si tienes alguna restricción alimentaria o necesidades especiales"
                ></textarea>
              </div>
              
              <button type="submit" className="form-submit">Confirmar Asistencia</button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default RsvpForm; 
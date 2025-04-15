import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faDirections } from '@fortawesome/free-solid-svg-icons';

const Location = () => {
  // Replace this with your actual venue coordinates and details
  const venueLocation = {
    latitude: 40.7128,
    longitude: -74.0060, // Example - NYC coordinates
    name: "Salón de Eventos El Jardín",
    address: "Av. Principal 123, Ciudad"
  };

  // Function to open Google Maps with directions
  const openDirections = () => {
    window.open(`https://www.google.com/maps/dir/?api=1&destination=${venueLocation.latitude},${venueLocation.longitude}`, '_blank');
  };

  return (
    <section className="location" id="location">
      <div className="container">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Lugar de la Ceremonia
        </motion.h2>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h3><FontAwesomeIcon icon={faMapMarkerAlt} /> {venueLocation.name}</h3>
          <p>{venueLocation.address}</p>
          
          <div className="map-container">
            <iframe 
              src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.2219901290355!2d${venueLocation.longitude}!3d${venueLocation.latitude}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQyJzQ2LjEiTiA3NMKwMDAnMjEuNiJX!5e0!3m2!1ses!2ses!4v1650000000000!5m2!1ses!2ses`} 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          
          <motion.button 
            className="directions-btn"
            onClick={openDirections}
            whileHover={{ scale: 1.05 }}
          >
            <FontAwesomeIcon icon={faDirections} /> ¿Cómo llegar?
          </motion.button>
        </motion.div>
        
        <motion.div
          className="venue-details"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3>Indicaciones importantes</h3>
          <ul>
            <li>La ceremonia comenzará puntualmente a las 16:00 hrs.</li>
            <li>Código de vestimenta: Formal</li>
            <li>Hay estacionamiento disponible en el lugar.</li>
            <li>Por favor, confirma tu asistencia antes del 15 de agosto.</li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default Location; 
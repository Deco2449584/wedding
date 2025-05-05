import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faDirections,
} from "@fortawesome/free-solid-svg-icons";

const Location = () => {
  const venueLocation = {
    place: "Le Papillon Eventos",
    address:
      "Finca el Manantial, Vereda el Meusa, Sopó, Cundinamarca, Colombia",
    coordinates: {
      lat: 4.856021824123811,
      lng: -73.9391762888429,
    },
  };

  const openDirections = () => {
    window.open(
      `https://www.google.com/maps/dir/?api=1&destination=${venueLocation.coordinates.lat},${venueLocation.coordinates.lng}`,
      "_blank"
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <h3 className="section-title">
        <FontAwesomeIcon icon={faMapMarkerAlt} /> {venueLocation.place}
      </h3>
      <p className="venue-address cursive-text">{venueLocation.address}</p>

      <div className="map-container">
        <iframe
          src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.4892857142855!2d${venueLocation.coordinates.lng}!3d${venueLocation.coordinates.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNMKwNTEnMjEuOSJOIDczwrA1NicyMS4xIlc!5e0!3m2!1ses!2sco!4v1708480160379!5m2!1ses!2sco`}
          className="map-iframe"
          width="100%"
          height="100%"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
        <div className="map-overlay"></div>
      </div>

      <motion.button
        className="directions-btn hover-scale"
        onClick={openDirections}
        whileHover={{ scale: 1.05 }}
      >
        <FontAwesomeIcon icon={faDirections} /> ¿Cómo llegar?
      </motion.button>
    </motion.div>
  );
};

export default Location;

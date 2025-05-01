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
      lat: 4.856093988412645,
      lng: -73.93920578925649,
    },
  };

  // Estilo vintage para el mapa
  const mapStyle = [
    {
      elementType: "geometry",
      stylers: [{ color: "#ebe3cd" }],
    },
    {
      elementType: "labels.text.fill",
      stylers: [{ color: "#523735" }],
    },
    {
      elementType: "labels.text.stroke",
      stylers: [{ color: "#f5f1e6" }],
    },
    {
      featureType: "administrative",
      elementType: "geometry.stroke",
      stylers: [{ color: "#c9b2a6" }],
    },
    {
      featureType: "administrative.land_parcel",
      elementType: "geometry.stroke",
      stylers: [{ color: "#dcd2be" }],
    },
    {
      featureType: "administrative.land_parcel",
      elementType: "labels.text.fill",
      stylers: [{ color: "#ae9e90" }],
    },
    {
      featureType: "landscape.natural",
      elementType: "geometry",
      stylers: [{ color: "#dfd2ae" }],
    },
    {
      featureType: "poi",
      elementType: "geometry",
      stylers: [{ color: "#dfd2ae" }],
    },
    {
      featureType: "poi",
      elementType: "labels.text.fill",
      stylers: [{ color: "#93817c" }],
    },
    {
      featureType: "poi.park",
      elementType: "geometry.fill",
      stylers: [{ color: "#a5b076" }],
    },
    {
      featureType: "poi.park",
      elementType: "labels.text.fill",
      stylers: [{ color: "#447530" }],
    },
    {
      featureType: "road",
      elementType: "geometry",
      stylers: [{ color: "#f5f1e6" }],
    },
    {
      featureType: "road.highway",
      elementType: "geometry",
      stylers: [{ color: "#f8c967" }],
    },
    {
      featureType: "road.highway",
      elementType: "geometry.stroke",
      stylers: [{ color: "#e9bc62" }],
    },
    {
      featureType: "water",
      elementType: "geometry.fill",
      stylers: [{ color: "#b9d3c2" }],
    },
  ];

  // Función para abrir Google Maps con direcciones
  const openDirections = () => {
    const encodedAddress = encodeURIComponent(
      `${venueLocation.coordinates.lat},${venueLocation.coordinates.lng}`
    );
    window.open(
      `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`,
      "_blank"
    );
  };

  return (
    <section className="location" id="location">
      <div className="container">
        {/* Tarjeta del Mapa */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3
            style={{
              fontFamily: '"Pinyon Script", "Great Vibes", cursive',
              fontSize: "3rem",
              marginBottom: "1rem",
            }}
          >
            <FontAwesomeIcon icon={faMapMarkerAlt} /> {venueLocation.place}
          </h3>
          <p
            style={{
              fontFamily: '"Pinyon Script", "Great Vibes", cursive',
              marginBottom: "1.5rem",
              fontSize: "2rem",
            }}
          >
            {venueLocation.address}
          </p>

          <div className="map-container" style={{}}>
            <iframe
              src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.4892857142855!2d${
                venueLocation.coordinates.lng
              }!3d${
                venueLocation.coordinates.lat
              }!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNMKwNTEnMjEuOSJOIDczwrA1NicyMS4xIlc!5e0!3m2!1ses!2sco!4v1708480160379!5m2!1ses!2sco&style=${encodeURIComponent(
                JSON.stringify(mapStyle)
              )}`}
              width="100%"
              height="100%"
              style={{
                border: 0,
                filter: "sepia(20%) brightness(95%)",
                WebkitFilter: "sepia(20%) brightness(95%)",
              }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                pointerEvents: "none",
                boxShadow: "inset 0 0 20px rgba(0,0,0,0.2)",
                border: "1px solid rgba(210, 180, 140, 0.3)",
              }}
            ></div>
          </div>

          <motion.button
            className="directions-btn"
            onClick={openDirections}
            whileHover={{ scale: 1.05 }}
            style={{
              marginTop: "1.5rem",
              background: "var(--primary-color)",
              color: "#fff",
              border: "none",
              padding: "12px 24px",
              borderRadius: "25px",
              fontSize: "1.8rem",
              cursor: "pointer",
              boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
              transition: "all 0.3s ease",
              fontFamily: '"Pinyon Script", cursive',
              fontWeight: "bold",
            }}
          >
            <FontAwesomeIcon icon={faDirections} /> ¿Cómo llegar?
          </motion.button>
        </motion.div>

        {/* Componente de Indicaciones */}
      </div>
    </section>
  );
};

export default Location;

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faEnvelope, faCalendarDay } from '@fortawesome/free-solid-svg-icons';

const Cover = ({ onOpen }) => {
  const [isButtonClicked, setIsButtonClicked] = useState(false);

  const handleOpenClick = () => {
    setIsButtonClicked(true);
    // Habilitamos el scroll
    document.body.style.overflow = 'auto';
    // Ocultamos la portada tras un breve retraso para que se vea la animación
    setTimeout(() => {
      const coverElement = document.querySelector('.cover');
      if (coverElement) {
        coverElement.style.display = 'none';
      }
    }, 1000);
    // Llamamos a la función de apertura para activar efectos
    onOpen();
  };

  return (
    <div className={`cover ${isButtonClicked ? 'clicked' : ''}`}>
      <motion.div 
        className="cover-content"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.div 
          className="cover-circles"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          <div className="circle circle-1"></div>
          <div className="circle circle-2"></div>
          <div className="circle circle-3"></div>
        </motion.div>
        
        <motion.div 
          className="invitation-border"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <motion.div
            className="invitation-icon"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.5, duration: 0.8, type: "spring" }}
          >
            <FontAwesomeIcon icon={faEnvelope} />
          </motion.div>
          
          <motion.h2
            className="invitation-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            ¡Te invitamos a nuestra boda!
          </motion.h2>
          
          <motion.div 
            className="names"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            Daniel & Laura
          </motion.div>
          
          <motion.div className="photo-container"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
          >
            <video 
              src="/assets/videos/video.mp4" 
              alt="Daniel & Laura" 
              className="couple-photo"
              autoPlay
              muted
              loop
              playsInline
            />
          </motion.div>
          
          <motion.div
            className="wedding-date-container"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            <FontAwesomeIcon icon={faCalendarDay} className="date-icon" />
            <div className="wedding-date">15 de Septiembre, 2025</div>
          </motion.div>
          
          <motion.div 
            className="hearts-decoration"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4, duration: 0.8 }}
          >
            <FontAwesomeIcon icon={faHeart} className="heart heart-1" />
            <FontAwesomeIcon icon={faHeart} className="heart heart-2" />
            <FontAwesomeIcon icon={faHeart} className="heart heart-3" />
          </motion.div>
          
          <motion.button 
            className="open-invitation"
            onClick={handleOpenClick}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05 }}
            transition={{ delay: 1.6, duration: 0.8 }}
            disabled={isButtonClicked}
          >
            {isButtonClicked ? "Invitación Abierta" : "Abrir Invitación"}
          </motion.button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Cover; 
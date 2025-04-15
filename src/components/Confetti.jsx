import { useState, useEffect } from 'react';

const Confetti = () => {
  const [confetti, setConfetti] = useState([]);

  useEffect(() => {
    // Crear confeti inicial
    createConfetti();

    // Configurar temporizador para añadir nuevo confeti
    const interval = setInterval(() => {
      addNewConfetti();
    }, 300);

    // Limpiar en desmontaje
    return () => clearInterval(interval);
  }, []);

  const createConfetti = () => {
    const initialConfetti = [];
    const confettiCount = 100;

    for (let i = 0; i < confettiCount; i++) {
      initialConfetti.push(createConfettiPiece());
    }

    setConfetti(initialConfetti);
  };

  const createConfettiPiece = () => {
    // Obtener propiedades aleatorias para el confeti
    const size = Math.random() * 10 + 5; // Entre 5-15px
    const left = Math.random() * 100; // Posición % aleatoria
    const animationDuration = Math.random() * 5 + 2; // Entre 2-7s
    const animationDelay = Math.random() * 5; // Entre 0-5s

    // Tipo de confeti aleatorio (usaremos diferentes colores)
    const confettiType = Math.floor(Math.random() * 6);
    const confettiColors = [
      '#d4af37', // Gold
      '#8a6d3b', // Brown
      '#f8c9d4', // Pink
      '#f6e6bc', // Cream
      '#d4ebf2', // Light Blue
      '#ffffff', // White
    ];
    const shape = Math.random() > 0.5 ? 'square' : 'rectangle';
    const width = shape === 'square' ? `${size}px` : `${size}px`;
    const height = shape === 'square' ? `${size}px` : `${size * 2}px`;

    // Usamos una combinación de timestamp y un número aleatorio muy específico para evitar colisiones
    const uniqueId = `${Date.now()}_${Math.random().toString(36).substring(2, 15)}_${Math.random().toString(36).substring(2, 15)}`;

    return {
      id: uniqueId,
      style: {
        left: `${left}%`,
        width: width,
        height: height,
        backgroundColor: confettiColors[confettiType],
        transform: `rotate(${Math.random() * 360}deg)`,
        animation: `confettiFall ${animationDuration}s linear ${animationDelay}s`,
        top: `-${size}px`,
      }
    };
  };

  const addNewConfetti = () => {
    setConfetti(prevConfetti => {
      // Eliminar un confeti aleatorio antiguo para evitar demasiados elementos
      if (prevConfetti.length > 150) {
        const randomIndex = Math.floor(Math.random() * prevConfetti.length);
        return [
          ...prevConfetti.slice(0, randomIndex),
          ...prevConfetti.slice(randomIndex + 1),
          createConfettiPiece()
        ];
      }
      return [...prevConfetti, createConfettiPiece()];
    });
  };

  return (
    <div className="confetti-container">
      <style>
        {`
          @keyframes confettiFall {
            0% {
              transform-origin: center;
              transform: translateY(0) rotate(0deg);
              opacity: 1;
            }
            100% {
              transform: translateY(100vh) rotate(720deg);
              opacity: 0;
            }
          }
        `}
      </style>
      {confetti.map(piece => (
        <div 
          key={piece.id} 
          className="confetti" 
          style={piece.style} 
        />
      ))}
    </div>
  );
};

export default Confetti; 
import { useEffect, useState } from 'react';

const FallingPetals = () => {
  const [petals, setPetals] = useState([]);

  useEffect(() => {
    // Crear pétalos iniciales
    createPetals();

    // Configurar intervalo para agregar más pétalos
    const interval = setInterval(() => {
      addNewPetal();
    }, 800);

    // Limpiar en desmontaje
    return () => clearInterval(interval);
  }, []);

  const createPetals = () => {
    const initialPetals = [];
    const petalCount = 15;

    for (let i = 0; i < petalCount; i++) {
      initialPetals.push(createPetal());
    }

    setPetals(initialPetals);
  };

  const createPetal = () => {
    // Propiedades aleatorias para el pétalo
    const size = Math.random() * 20 + 10; // Entre 10-30px
    const left = Math.random() * 100; // Posición % aleatoria
    const animationDuration = Math.random() * 10 + 10; // Entre 10-20s
    const animationDelay = Math.random() * 10; // Entre 0-10s

    // Selección aleatoria de imágenes de pétalos (puedes agregar más)
    const petalType = Math.floor(Math.random() * 4) + 1;
    
    // Generamos un ID único muy específico que combine el timestamp y múltiples números aleatorios
    const uniqueId = `petal_${Date.now()}_${Math.random().toString(36).substring(2, 15)}_${Math.random().toString(36).substring(2, 15)}`;

    return {
      id: uniqueId,
      style: {
        left: `${left}%`,
        width: `${size}px`,
        height: `${size}px`,
        animationDuration: `${animationDuration}s`,
        animationDelay: `${animationDelay}s`,
       // backgroundImage: `url('/images/petal-${petalType}.png')`
      }
    };
  };

  const addNewPetal = () => {
    setPetals(prevPetals => {
      // Eliminar un pétalo antiguo si hay demasiados para mantener el rendimiento
      if (prevPetals.length > 30) {
        const randomIndex = Math.floor(Math.random() * prevPetals.length);
        return [
          ...prevPetals.slice(0, randomIndex),
          ...prevPetals.slice(randomIndex + 1),
          createPetal()
        ];
      }
      return [...prevPetals, createPetal()];
    });
  };

  return (
    <div className="petals-container">
      <style>
        {`
          @keyframes petalFall {
            0% {
              transform: translateY(0) rotate(0deg) scale(0.8);
              opacity: 0.8;
            }
            50% {
              transform: translateY(50vh) rotate(180deg) scale(1);
              opacity: 0.9;
            }
            100% {
              transform: translateY(100vh) rotate(360deg) scale(0.8);
              opacity: 0.7;
            }
          }

          .petal {
            position: absolute;
            background-size: contain;
            background-repeat: no-repeat;
            top: -30px;
            opacity: 0.7;
            pointer-events: none;
            animation: petalFall linear forwards;
          }
        `}
      </style>
      {petals.map(petal => (
        <div key={petal.id} className="petal" style={petal.style} />
      ))}
    </div>
  );
};

export default FallingPetals; 
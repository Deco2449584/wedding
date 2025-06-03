import React, { useState } from 'react';
import { Music, Heart, Camera, Users, Cake, Gift, Clock } from 'lucide-react';
import '../App.css';

const CronogramaBoda = () => {
  const [expandedBlock, setExpandedBlock] = useState(null);

  const eventos = [
    {
      id: 1,
      hora: "12:00 - 1:00 p.m.",
      titulo: "Llegada de Invitados",
      descripcion: "Recepción con pasabocas y ambiente acogedor",
      ambiente: "Elegante, tranquilo, acogedor",
      musica: "Instrumental romántico, piano, jazz suave",
      canciones: [
        "River Flows in You – Yiruma",
        "Perfect (instrumental) – Ed Sheeran",
        "All of Me (instrumental) – John Legend",
        "La Vie En Rose – Edith Piaf"
      ],
      icon: Users,
    },
    {
      id: 2,
      hora: "1:00 - 2:00 p.m.",
      titulo: "Ceremonia Cristiana",
      descripcion: "Momento solemne con cortejo nupcial y votos",
      ambiente: "Solemne, emotivo",
      musica: "Instrumental clásico, canciones significativas",
      canciones: [
        "Canon in D – Pachelbel (entrada cortejo)",
        "A Thousand Years – Christina Perri (entrada novia)",
        "Perfect Symphony – Ed Sheeran & Andrea Bocelli",
        "You Raise Me Up – Josh Groban"
      ],
      icon: Heart,
    },
    {
      id: 3,
      hora: "2:00 - 2:30 p.m.",
      titulo: "Brindis & Pasaboca",
      descripcion: "Celebración con chiskay de maracuyá y oreo",
      ambiente: "Liviano, alegre, familiar",
      musica: "Pop romántico, soft rock, baladas felices",
      canciones: [
        "Love Story – Taylor Swift",
        "Por el Resto de Mi Vida – Andrés Cepeda",
        "Lucky – Jason Mraz & Colbie Caillat",
        "Besos en guerra – Morat & Juanes"
      ],
      icon: Gift,
    },
    {
      id: 4,
      hora: "2:30 - 3:00 p.m.",
      titulo: "Sesión de Fotos",
      descripcion: "Fotos familiares y con invitados",
      ambiente: "Divertido, casual, relajado",
      musica: "Pop internacional suave, alternativo romántico",
      canciones: [
        "Dandelions – Ruth B.",
        "Somewhere Only We Know – Keane",
        "Sugar – Maroon 5",
        "Safe and Sound – Capital Cities"
      ],
      icon: Camera,
    },
    {
      id: 5,
      hora: "3:00 - 4:00 p.m.",
      titulo: "Comida Principal",
      descripcion: "Menú #5 y menú infantil especial",
      ambiente: "Cálido, elegante, alegre pero tranquilo",
      musica: "Bossa nova, baladas pop, boleros suaves",
      canciones: [
        "Just The Way You Are – Bruno Mars",
        "La Camisa Negra – Juanes",
        "Yellow – Coldplay",
        "Caraluna – Bacilos"
      ],
      icon: Clock,
    },
    {
      id: 6,
      hora: "4:00 - 5:00 p.m.",
      titulo: "Primer Baile & Cócteles",
      descripcion: "Baile romántico y cócteles especiales",
      ambiente: "Alegre, fiesta empieza",
      musica: "Salsa suave, merengue, pop latino",
      canciones: [
        "Vivir Mi Vida – Marc Anthony",
        "La Bicicleta – Shakira & Carlos Vives",
        "Suavemente – Elvis Crespo",
        "Te Estás Pasando – Grupo Niche"
      ],
      icon: Music,
    },
    {
      id: 7,
      hora: "5:00 - 5:30 p.m.",
      titulo: "Actividad Grupal",
      descripcion: "Juegos y dinámicas divertidas",
      ambiente: "Divertido, interactivo",
      musica: "Cumbia, crossover, hits clásicos latinos",
      canciones: [
        "La Macarena – Los del Río",
        "Fiesta – Raffaella Carrà",
        "Baila Esta Cumbia – Selena",
        "Aserejé – Las Ketchup"
      ],
      icon: Users,
    },
    {
      id: 8,
      hora: "5:30 - 6:00 p.m.",
      titulo: "Torta & Rifa del Ramo",
      descripcion: "Corte de torta desnuda con flores y rifa",
      ambiente: "Emotivo + divertido",
      musica: "Romántico + festivo",
      canciones: [
        "Marry You – Bruno Mars",
        "Amor Eterno – Rocío Dúrcal",
        "Hasta Viejitos – Alejandro González",
        "You're The One That I Want – Grease"
      ],
      icon: Cake,
    },
    {
      id: 9,
      hora: "6:00 - 7:00 p.m.",
      titulo: "Lluvia de Deseos & Video",
      descripcion: "Mensajes especiales y video de los novios",
      ambiente: "Íntimo, tierno, nostálgico",
      musica: "Baladas, instrumentales, emotivas",
      canciones: [
        "The Power of Love – Celine Dion",
        "Thinking Out Loud – Ed Sheeran",
        "Can't Help Falling in Love – Elvis",
        "Fix You – Coldplay"
      ],
      icon: Heart,
    },
    {
      id: 10,
      hora: "7:00 - 7:30 p.m.",
      titulo: "Cierre del Evento",
      descripcion: "Despedida musical y último baile",
      ambiente: "Agradecimiento, amor, celebración final",
      musica: "Canciones de despedida, alegría moderada",
      canciones: [
        "Viva La Vida – Coldplay",
        "I Gotta Feeling – Black Eyed Peas",
        "Love Never Felt So Good – Michael Jackson",
        "Cali Pachanguero – Grupo Niche"
      ],
      icon: Music,
    }
  ];

  const toggleExpand = (id) => {
    setExpandedBlock(expandedBlock === id ? null : id);
  };

  return (
    <div className="section timeline-section">
      <div className="container">
        <div className="timeline-header-card">
          <h1 className="section-title">Cronograma Musical</h1>
          <h2 className="timeline-subtitle">Boda de Daniel y Laura</h2>
          <p className="timeline-date">📅 15 de junio de 2025 • ⏰ 12:00 p.m. - 7:30 p.m.</p>
        </div>

        <div className="timeline timeline-left-aligned">
          {eventos.map((evento, index) => {
            const IconComponent = evento.icon;
            const isExpanded = expandedBlock === evento.id;

            return (
              <div key={evento.id} className="timeline-item left-aligned">
                <div 
                  className={`timeline-content card ${isExpanded ? 'expanded' : ''}`}
                  onClick={() => toggleExpand(evento.id)}
                >
                  <div className="timeline-icon-container">
                    <div className="timeline-icon"><IconComponent size={24} /></div>
                    <div className="timeline-header-content">
                      <h3 className="timeline-title">{evento.titulo}</h3>
                      <span className="timeline-time">{evento.hora}</span>
                    </div>
                  </div>

                  <p className="timeline-description">{evento.descripcion}</p>

                  {isExpanded && (
                    <div className="timeline-details">
                      <div className="timeline-detail-block">
                        <h4>🎭 Ambiente:</h4>
                        <p>{evento.ambiente}</p>
                      </div>

                      <div className="timeline-detail-block">
                        <h4>🎵 Estilo Musical:</h4>
                        <p>{evento.musica}</p>
                      </div>

                      <div className="timeline-detail-block">
                        <h4>🎼 Canciones Destacadas:</h4>
                        <ul>
                          {evento.canciones.map((cancion, idx) => (
                            <li key={idx} className="timeline-song-item">{cancion}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        <div className="timeline-footer-card">
          <p className="timeline-footer-text">💝 Haz clic en cada momento para ver los detalles musicales</p>
        </div>
      </div>
    </div>
  );
};

export default CronogramaBoda;
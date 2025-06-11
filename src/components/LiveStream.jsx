import React from "react";

function LiveStream() {
  // Cambia a true el día del evento para mostrar el video
  const isLive = false;
  const coupleName = "Daniel & Laura";
  const twitchUrl = "https://www.twitch.tv/deco2449584";

  // Paleta elegante: dorado y tonos cálidos
  const mainColor = "#d4a574";
  const accentColor = "#f7c5a0";
  const shadow = "0 8px 24px rgba(0,0,0,0.10)";

  // Iconos para un look más "genial"
  const icons = [
    "/assets/icons/glasses.png",
    "/assets/icons/handkerchief.png",
    "/assets/icons/petal-2.png",
    "/assets/icons/suspenders.png",
    "/assets/icons/petal-3.png",
    "/assets/icons/tie.png"
  ];

  return (
    <section
      id="live"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "420px",
        background: "transparent",
        margin: "2rem 0"
      }}
    >
      <div style={{
        width: 410,
        minHeight: 500,
        background: "rgba(255,255,255,0.72)",
        borderRadius: 32,
        boxShadow: shadow,
        position: "relative",
        overflow: "hidden",
        border: `2px solid ${mainColor}`,
        backdropFilter: "blur(2px)",
        transition: "box-shadow 0.3s"
      }}>
        {/* Fondo floral sutil */}
        <div style={{
          position: "absolute",
          top: 0, left: 0, right: 0, bottom: 0,
          opacity: 0.13,
          backgroundImage: `url('/assets/images/fondo_card.jpg')`,
          backgroundSize: "cover",
          zIndex: 1
        }} />
        {/* Indicador de estado (rojo parpadeante) */}
        <div style={{
          position: "absolute",
          top: 18,
          right: 18,
          width: 15,
          height: 15,
          background: isLive ? "#44e444" : "#ff4444",
          borderRadius: "50%",
          animation: "blink 1s infinite",
          zIndex: 2,
          border: `2px solid #fff`
        }} />
        {/* Cinta decorativa superior */}
        <div style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: 32,
          background: `linear-gradient(90deg, ${mainColor} 0%, ${accentColor} 100%)`,
          zIndex: 2,
          borderTopLeftRadius: 32,
          borderTopRightRadius: 32,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "'Dancing Script', cursive",
          fontSize: 20,
          color: "#fff",
          letterSpacing: 1.5,
          boxShadow: "0 2px 8px #d4a57433"
        }}>
          💍 ¡Boda en vivo! 💍
        </div>
        {/* Contenido principal */}
        <div style={{
          position: "relative",
          zIndex: 3,
          padding: "48px 28px 28px 28px",
          textAlign: "center",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between"
        }}>
          <div>
            <img src="/assets/images/portada.png" alt="Portada" style={{
              width: 90,
              height: 90,
              objectFit: "cover",
              borderRadius: "50%",
              margin: "0 auto 18px",
              boxShadow: `0 4px 16px ${mainColor}33`,
              border: `3px solid ${mainColor}`
            }} />
            <h1 style={{
              fontSize: 28,
              color: "#6b5b73",
              marginBottom: 10,
              fontWeight: 600,
              lineHeight: 1.2,
              fontFamily: "'Playfair Display', serif",
              textShadow: "0 2px 4px rgba(0,0,0,0.08)"
            }}>
              ¡El Evento en Vivo<br />Comenzará Pronto!
            </h1>
            <div style={{
              fontFamily: "'Dancing Script', cursive",
              fontSize: 38,
              color: mainColor,
              marginBottom: 10,
              fontWeight: 700,
              textShadow: "0 2px 4px rgba(0,0,0,0.08)"
            }}>{coupleName}</div>
          </div>

          <div>
            {/* Iconos decorativos animados */}
            <div style={{ display: "flex", justifyContent: "center", gap: 14, margin: "18px 0" }}>
              {icons.map((icon, i) => (
                <img
                  key={icon}
                  src={icon}
                  alt="icono"
                  style={{
                    width: 32,
                    height: 32,
                    filter: `drop-shadow(0 2px 6px ${mainColor}33)`,
                    transform: `rotate(${i % 2 === 0 ? -10 : 10}deg)`,
                    animation: `iconpop 1.2s ${0.2 * i}s both`
                  }}
                />
              ))}
            </div>
            <div style={{
              background: mainColor,
              color: "white",
              padding: "10px 18px",
              borderRadius: 22,
              margin: "16px 0 8px 0",
              fontSize: 16,
              fontWeight: 500,
              boxShadow: "0 5px 15px rgba(212, 165, 116, 0.12)"
            }}>
              📅 En Vivo por Twitch
            </div>
            <div style={{ fontSize: 15, color: "#6b5b73", marginTop: 6, fontStyle: "italic" }}>
              Prepárate para acompañarnos
            </div>
          </div>

          <div>
            <div style={{
              fontFamily: "'Dancing Script', cursive",
              fontSize: 22,
              color: mainColor,
              margin: "10px 0 18px 0",
              animation: "bounce 2s infinite"
            }}>
              ¡Muy Pronto!
            </div>
            <a
              href={twitchUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: `linear-gradient(135deg, ${mainColor} 0%, #c19660 100%)`,
                color: "white",
                padding: "13px 26px",
                border: "none",
                borderRadius: 28,
                fontSize: 17,
                fontWeight: 500,
                cursor: "pointer",
                transition: "all 0.3s ease",
                boxShadow: "0 8px 20px rgba(212, 165, 116, 0.18)",
                textDecoration: "none",
                display: "inline-block",
                letterSpacing: 1.2
              }}
            >
              Únete al Stream
            </a>
          </div>

          {/* Animaciones claveframes en CSS global */}
          <style>{`
            @keyframes bounce {
              0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
              40% { transform: translateY(-10px); }
              60% { transform: translateY(-5px); }
            }
            @keyframes blink {
              0%, 50% { opacity: 1; }
              51%, 100% { opacity: 0.3; }
            }
            @keyframes iconpop {
              0% { opacity: 0; transform: scale(0.7) translateY(20px); }
              60% { opacity: 1; transform: scale(1.1) translateY(-4px); }
              100% { opacity: 1; transform: scale(1) translateY(0); }
            }
          `}</style>
        </div>
        {/* Si está en vivo, muestra el iframe de Twitch encima */}
        {isLive && (
          <div style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "rgba(0,0,0,0.85)",
            zIndex: 10,
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }}>
            <iframe
              src="https://player.twitch.tv/?video=2483374739&parent=localhost&parent=wedding-9e948.firebaseapp.com"
              height="400"
              width="350"
              allowFullScreen
              frameBorder="0"
              title="Transmisión en vivo de la boda"
              style={{ borderRadius: 16, minWidth: 300, border: `2px solid ${mainColor}` }}
            ></iframe>
          </div>
        )}
      </div>
    </section>
  );
}

export default LiveStream;

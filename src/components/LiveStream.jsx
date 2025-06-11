import React from "react";

function LiveStream() {
  // Cambia esta variable a true el día del evento para mostrar el video
  const isLive = false;

  // Nuevo color: rosa suave
  const mainColor = "#d16ba5";

  return (
    <section className="live-stream-section" style={{
      background: "rgba(255,255,255,0.92)",
      borderRadius: "16px",
      padding: "2rem",
      margin: "2rem 0",
      textAlign: "center",
      boxShadow: "0 4px 16px rgba(209,107,165,0.10)"
    }}>
      <h2 style={{ color: mainColor, fontSize: "2rem", marginBottom: "1rem" }}>
        🌸 Aquí podrás ver la transmisión en vivo 🌸
      </h2>
      {!isLive ? (
        <>
          <img
            src="/assets/images/portada.png"
            alt="Transmisión próximamente"
            style={{
              maxWidth: "320px",
              width: "100%",
              borderRadius: "12px",
              margin: "1.5rem auto 1rem auto",
              boxShadow: "0 2px 8px rgba(209,107,165,0.10)"
            }}
          />
          <p style={{ fontSize: "1.3rem", color: mainColor, fontWeight: "bold", margin: "1.5rem 0 0.5rem 0" }}>
            ¡La transmisión estará disponible aquí el día del evento!
          </p>
          <p style={{ color: "#888", marginBottom: "1.5rem" }}>
            Vuelve el día de la boda para acompañarnos en este momento tan especial.
          </p>
        </>
      ) : (
        <>
          <div style={{ maxWidth: "100%", margin: "0 auto", borderRadius: "12px", overflow: "hidden", boxShadow: "0 2px 8px rgba(209,107,165,0.10)" }}>
            <iframe
              src="https://player.twitch.tv/?video=2483374739&parent=localhost&parent=wedding-9e948.firebaseapp.com&parent=deco2449584.twitch.tv"
              height="400"
              width="100%"
              allowFullScreen
              frameBorder="0"
              title="Transmisión en vivo de la boda"
              style={{ borderRadius: "12px", minWidth: "300px" }}
            ></iframe>
          </div>
          <p style={{ marginTop: "1.5rem", color: "#888" }}>
            *El video estará disponible en vivo el día del evento*
          </p>
          <a
            href="https://www.twitch.tv/deco2449584/v/2483374739?sr=a"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-block",
              background: mainColor,
              color: "#fff",
              padding: "0.8rem 2rem",
              borderRadius: "8px",
              fontWeight: "bold",
              fontSize: "1.1rem",
              textDecoration: "none",
              marginTop: "1rem",
              boxShadow: "0 2px 8px rgba(209,107,165,0.15)"
            }}
          >
            Ver en Twitch
          </a>
        </>
      )}
    </section>
  );
}

export default LiveStream;

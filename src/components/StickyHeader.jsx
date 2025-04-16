import { useState, useEffect } from "react";

const StickyHeader = ({ rsvpCount }) => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    // Actualización de la fecha correcta
    const weddingDate = new Date("2025-06-15T16:00:00");

    const updateCountdown = () => {
      const now = new Date();
      const difference = weddingDate - now;

      if (difference > 0) {
        // Calculate time remaining
        setDays(Math.floor(difference / (1000 * 60 * 60 * 24)));
        setHours(
          Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        );
        setMinutes(Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)));
        setSeconds(Math.floor((difference % (1000 * 60)) / 1000));
      }
    };

    // Initial update
    updateCountdown();

    // Set up interval to update countdown
    const interval = setInterval(updateCountdown, 1000);

    // Clear interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <header className="sticky-header">
      <div
        className="countdown"
        style={{
          fontFamily: '"Pinyon Script", "Great Vibes", cursive',
          display: "flex",
          alignItems: "center",
          gap: "20px",
          padding: "10px 20px",
          background: "rgba(255, 255, 255, 0.95)",
          borderRadius: "8px",
          boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
        }}
      >
        <div
          style={{
            fontSize: "1.5rem",
            color: "#565f42",
            letterSpacing: "2px",
            fontWeight: "400",
          }}
        >
          Nuestra boda en:
        </div>
        <div style={{ display: "flex", gap: "15px" }}>
          <div style={timeBlockStyle}>
            <span style={numberStyle}>{days}</span>
            <span style={labelStyle}>Días</span>
          </div>
          <div style={timeBlockStyle}>
            <span style={numberStyle}>{hours}</span>
            <span style={labelStyle}>Horas</span>
          </div>
          <div style={timeBlockStyle}>
            <span style={numberStyle}>{minutes}</span>
            <span style={labelStyle}>Min</span>
          </div>
          <div style={timeBlockStyle}>
            <span style={numberStyle}>{seconds}</span>
            <span style={labelStyle}>Seg</span>
          </div>
        </div>
      </div>
      <div
        className="rsvp-count"
        style={{
          fontFamily: '"Pinyon Script", "Great Vibes", cursive',
          fontSize: "1.4rem",
          background: "rgba(212, 175, 55, 0.1)",
          padding: "8px 20px",
          borderRadius: "30px",
          border: "1px solid rgba(212, 175, 55, 0.3)",
          display: "flex",
          alignItems: "center",
          gap: "10px",
          boxShadow: "0 2px 8px rgba(0, 0, 0, 0.05)",
        }}
      >
        <span
          style={{
            fontWeight: "400",
            color: "#565f42",
            letterSpacing: "2px",
            fontSize: "1.4rem",
            textTransform: "none",
          }}
        >
          Confirmados
        </span>
        <span
          style={{
            fontFamily: '"Petit Formal Script", "Great Vibes", cursive',
            backgroundColor: "rgb(212, 175, 55)",
            color: "white",
            padding: "4px 15px",
            borderRadius: "15px",
            fontWeight: "400",
            fontSize: "1.5rem",
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
            minWidth: "30px",
            textAlign: "center",
          }}
        >
          {rsvpCount}
        </span>
      </div>
    </header>
  );
};

// Agregar estos estilos antes del export
const timeBlockStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  minWidth: "45px",
};

const numberStyle = {
  fontSize: "2rem",
  fontWeight: "500",
  color: "rgb(212, 175, 55)",
  textShadow: "2px 2px 4px rgba(0, 0, 0, 0.1)",
  fontFamily: '"Petit Formal Script", "Great Vibes", cursive',
};

const labelStyle = {
  fontSize: "0.9rem",
  color: "#565f42",
  textTransform: "uppercase",
  letterSpacing: "2px",
  marginTop: "4px",
  fontFamily: '"Cormorant Garamond", serif',
};

export default StickyHeader;

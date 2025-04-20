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
          gap: "10px",
          maxWidth: "fit-content",
        }}
      >
        <div
          style={{
            fontSize: "1rem",
            color: "#565f42",
            letterSpacing: "1px",
            fontWeight: "400",
          }}
        >
          Faltan:
        </div>
        <div style={{ display: "flex", gap: "10px" }}>
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
          fontSize: "1.3rem", // Aumentado para desktop
          display: "flex",
          alignItems: "center",
          gap: "8px",
          maxWidth: "fit-content",
        }}
      >
        <span
          style={{
            fontWeight: "400",
            color: "#595f48",
            letterSpacing: "2px",
            fontSize: "1.5rem", // Aumentado para desktop
            textTransform: "none",
          }}
        >
          Confirmados
        </span>
        <span
          style={{
            fontFamily: '"Petit Formal Script", "Great Vibes", cursive',
            backgroundColor: "rgb(221, 180, 143)",
            color: "white",
            padding: "2px 10px",
            borderRadius: "8px",
            fontWeight: "400",
            fontSize: "1.2rem",
            minWidth: "25px",
            textAlign: "center",
          }}
        >
          {rsvpCount}
        </span>
      </div>
    </header>
  );
};

const timeBlockStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  minWidth: "40px",
};

const numberStyle = {
  fontSize: "1.8rem",
  fontWeight: "500",
  color: "rgb(229, 178, 137)",
  textShadow: "2px 2px 4px rgba(0, 0, 0, 0.1)",
  fontFamily: '"Petit Formal Script", "Great Vibes", cursive',
};

const labelStyle = {
  fontSize: "0.8rem",
  color: "#565f42",
  textTransform: "uppercase",
  letterSpacing: "1px",
  marginTop: "2px",
  fontFamily: '"Cormorant Garamond", serif',
};

export default StickyHeader;

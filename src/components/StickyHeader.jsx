import { useState, useEffect } from "react";

const StickyHeader = ({ rsvpCount }) => {
  const calculateTimeLeft = () => {
    const weddingDate = new Date("2025-06-15T16:00:00");
    const now = new Date();
    const difference = weddingDate - now;

    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        ),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000),
      };
    } else {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const updateCountdown = () => {
      setTimeLeft(calculateTimeLeft());
    };

    // Initial update
    updateCountdown();

    // Set up interval to update countdown
    const interval = setInterval(updateCountdown, 1000);

    // Clear interval on component unmount
    return () => clearInterval(interval);
  }, []);

  const { days, hours, minutes, seconds } = timeLeft;

  return (
    <header className="sticky-header">
      <div className="countdown">
        <div className="countdown-time">
          <div className="time-block">
            <span className="number">{days}</span>
            <span className="label">Días</span>
          </div>
          <div className="time-block">
            <span className="number">{hours}</span>
            <span className="label">Horas</span>
          </div>
          <div className="time-block">
            <span className="number">{minutes}</span>
            <span className="label">Min</span>
          </div>
          <div className="time-block">
            <span className="number">{seconds}</span>
            <span className="label">Seg</span>
          </div>
        </div>
      </div>

      <div className="rsvp-count">
        <span className="count-label">Confirmados</span>
        <span className="count-number">{rsvpCount}</span>
      </div>
    </header>
  );
};

export default StickyHeader;

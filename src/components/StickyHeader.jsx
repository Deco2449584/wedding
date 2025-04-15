import { useState, useEffect } from 'react';

const StickyHeader = ({ rsvpCount }) => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    // Set the wedding date - change this to your actual date
    const weddingDate = new Date('2025-09-15T16:00:00');
    
    const updateCountdown = () => {
      const now = new Date();
      const difference = weddingDate - now;
      
      if (difference > 0) {
        // Calculate time remaining
        setDays(Math.floor(difference / (1000 * 60 * 60 * 24)));
        setHours(Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
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
      <div className="countdown">
        Faltan: {days}d {hours}h {minutes}m {seconds}s
      </div>
      <div className="rsvp-count">
        Confirmados: {rsvpCount}
      </div>
    </header>
  );
};

export default StickyHeader; 
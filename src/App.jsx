import { useState, useEffect } from "react";
import "./App.css";
import Cover from "./components/Cover";
import StickyHeader from "./components/StickyHeader";
import Timeline from "./components/Timeline";
import Location from "./components/Location";
import RsvpForm from "./components/RsvpForm";
import FallingPetals from "./components/FallingPetals";
import Confetti from "./components/Confetti";
import AudioPlayer from "./components/AudioPlayer";
import { motion } from "framer-motion";
import Welcome from "./components/Welcome";

function App() {
  const [isInvitationOpen, setIsInvitationOpen] = useState(false);
  const [rsvpCount, setRsvpCount] = useState(0);
  const [showEffects, setShowEffects] = useState(false);

  // Handle opening the invitation
  const handleOpenInvitation = () => {
    setIsInvitationOpen(true);

    // Delay the effects a bit to make it feel more natural
    setTimeout(() => {
      setShowEffects(true);
    }, 300);
  };

  // Handle RSVP submissions
  const handleRsvpSubmit = (formData) => {
    // In a real app, you might want to send this to a backend
    console.log("RSVP Submitted:", formData);
    setRsvpCount((prevCount) => prevCount + formData.numberOfGuests);

    // Here you would typically store this data in a database
    // But for this demo, we'll just add to our local count
  };

  // Prevent scrolling when cover is visible
  useEffect(() => {
    if (!isInvitationOpen) {
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isInvitationOpen]);

  return (
    <div className="app">
      <Cover onOpen={handleOpenInvitation} />

      {isInvitationOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="container"
        >
          <StickyHeader rsvpCount={rsvpCount} />
          <Welcome />
          <Timeline />
          <Location />
          <RsvpForm onRsvpSubmit={handleRsvpSubmit} />
          {showEffects && (
            <>
              <FallingPetals />
              <Confetti />
            </>
          )}
          <AudioPlayer autoPlay={showEffects} />
        </motion.div>
      )}

      {/* Add keyframes for the bounce animation */}
      <style>
        {`
          @keyframes bounce {
            0%, 20%, 50%, 80%, 100% {
              transform: translateY(0);
            }
            40% {
              transform: translateY(-20px);
            }
            60% {
              transform: translateY(-10px);
            }
          }
        `}
      </style>
    </div>
  );
}

export default App;

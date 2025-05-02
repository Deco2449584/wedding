import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWineGlass,
  faCar,
  faUsers,
  faAllergies,
  faComments,
} from "@fortawesome/free-solid-svg-icons";
import { getFirestore, collection, getDocs } from "firebase/firestore";

const GuestStats = () => {
  const [stats, setStats] = useState({
    totalGuests: 0,
    withTransport: 0,
    withAlcohol: 0,
    withAllergies: 0,
    notes: [],
  });
  const [loading, setLoading] = useState(true);
  const [selectedStat, setSelectedStat] = useState(null);

  useEffect(() => {
    const fetchStats = async () => {
      const db = getFirestore();
      try {
        const querySnapshot = await getDocs(collection(db, "confirmaciones"));
        let totalGuests = 0;
        let withTransport = 0;
        let withAlcohol = 0;
        let withAllergies = 0;
        const notes = [];

        querySnapshot.forEach((doc) => {
          const data = doc.data();
          totalGuests++;

          if (data.hasTransportation === "yes") withTransport++;
          if (data.willDrinkAlcohol === "yes") withAlcohol++;
          if (data.allergies && data.allergies.trim()) withAllergies++;
          if (data.comments && data.comments.trim()) {
            notes.push({
              name: data.fullName,
              comment: data.comments,
            });
          }
        });

        setStats({
          totalGuests,
          withTransport,
          withAlcohol,
          withAllergies,
          notes,
        });
        setLoading(false);
      } catch (error) {
        console.error("Error al cargar estadísticas:", error);
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  const availableSpots = 40;

  const StatCard = ({ icon, title, value, color, onClick, isSelected }) => (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      style={{
        background: isSelected
          ? `rgba(${color}, 0.2)`
          : "rgba(255, 255, 255, 0.95)",
        padding: "1.5rem",
        borderRadius: "15px",
        border: `2px solid rgba(${color}, ${isSelected ? "0.5" : "0.3"})`,
        cursor: "pointer",
        boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)",
        minWidth: "200px",
        flex: 1,
      }}
    >
      <FontAwesomeIcon
        icon={icon}
        style={{
          fontSize: "2rem",
          color: `rgba(${color}, 1)`,
          marginBottom: "0.5rem",
        }}
      />
      <h3
        style={{
          fontFamily: "Charm",
          fontSize: "1.8rem",
          color: "var(--secondary-color)",
          margin: "0.5rem 0",
        }}
      >
        {title}
      </h3>
      <p
        style={{
          fontSize: "2.5rem",
          fontWeight: "bold",
          color: `rgba(${color}, 1)`,
          margin: "0.5rem 0",
          fontFamily: "Charm",
        }}
      >
        {value}
      </p>
    </motion.div>
  );

  const DetailPanel = () => {
    if (!selectedStat) return null;

    let content = null;
    switch (selectedStat) {
      case "notes":
        content = (
          <div style={{ textAlign: "left" }}>
            <h4
              style={{
                fontFamily: "Charm",
                fontSize: "2rem",
                color: "var(--secondary-color)",
                marginBottom: "1rem",
              }}
            >
              Notas de los invitados
            </h4>
            {stats.notes.length > 0 ? (
              stats.notes.map((note, index) => (
                <div
                  key={index}
                  style={{
                    background: "rgba(255, 255, 255, 0.8)",
                    padding: "1rem",
                    borderRadius: "10px",
                    marginBottom: "1rem",
                    border: "1px solid var(--primary-color)",
                  }}
                >
                  <p
                    style={{
                      fontFamily: "Charm",
                      fontSize: "1.5rem",
                      color: "var(--secondary-color)",
                      marginBottom: "0.5rem",
                    }}
                  >
                    {note.name}
                  </p>
                  <p
                    style={{
                      fontFamily: "Charm",
                      fontSize: "1.3rem",
                      color: "#666",
                    }}
                  >
                    {note.comment}
                  </p>
                </div>
              ))
            ) : (
              <p
                style={{
                  fontFamily: "Charm",
                  fontSize: "1.5rem",
                  color: "#666",
                }}
              >
                No hay notas adicionales
              </p>
            )}
          </div>
        );
        break;
      // Puedes agregar más casos para otros tipos de detalles
    }

    return (
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: 1, height: "auto" }}
        exit={{ opacity: 0, height: 0 }}
        style={{
          marginTop: "2rem",
          padding: "1.5rem",
          background: "rgba(255, 255, 255, 0.9)",
          borderRadius: "15px",
          boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)",
        }}
      >
        {content}
      </motion.div>
    );
  };

  if (loading) {
    return (
      <div
        style={{
          textAlign: "center",
          padding: "2rem",
          fontFamily: "Charm",
          fontSize: "2rem",
          color: "var(--secondary-color)",
        }}
      >
        Cargando estadísticas...
      </div>
    );
  }

  return (
    <section style={{ padding: "2rem 1rem" }}>
      <motion.h2
        className="text-center cursive-title"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        style={{
          fontSize: "3rem",
          color: "var(--secondary-color)",
          marginBottom: "2rem",
          fontFamily: "Charm",
        }}
      >
        Estadísticas de Invitados
      </motion.h2>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "1.5rem",
          justifyContent: "center",
          margin: "0 auto",
          maxWidth: "1200px",
        }}
      >
        <StatCard
          icon={faUsers}
          title="Cupos Disponibles"
          value={availableSpots - stats.totalGuests}
          color="229, 178, 137"
          onClick={() => setSelectedStat(null)}
          isSelected={false}
        />
        <StatCard
          icon={faCar}
          title="Con Transporte Propio"
          value={stats.withTransport}
          color="88, 95, 69"
          onClick={() => setSelectedStat(null)}
          isSelected={false}
        />
        <StatCard
          icon={faWineGlass}
          title="Tomarán Coctel"
          value={stats.withAlcohol}
          color="206, 176, 78"
          onClick={() => setSelectedStat(null)}
          isSelected={false}
        />
        <StatCard
          icon={faAllergies}
          title="Con Alergias"
          value={stats.withAllergies}
          color="180, 120, 120"
          onClick={() => setSelectedStat(null)}
          isSelected={false}
        />
        <StatCard
          icon={faComments}
          title="Notas Adicionales"
          value={stats.notes.length}
          color="147, 166, 147"
          onClick={() => setSelectedStat("notes")}
          isSelected={selectedStat === "notes"}
        />
      </div>

      <DetailPanel />
    </section>
  );
};

export default GuestStats;

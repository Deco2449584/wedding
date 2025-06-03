import { useState, useEffect } from "react";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { motion } from "framer-motion";

const DetailedGuestTable = () => {
  const [guests, setGuests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchGuests = async () => {
      const db = getFirestore();
      try {
        const querySnapshot = await getDocs(collection(db, "confirmaciones"));
        const guestsList = [];
        querySnapshot.forEach((doc) => {
          guestsList.push({
            id: doc.id,
            ...doc.data(),
            fechaConfirmacion:
              doc.data().fechaConfirmacion?.toDate().toLocaleString() || "N/A",
          });
        });
        setGuests(guestsList);
        setLoading(false);
      } catch (error) {
        console.error("Error al cargar invitados:", error);
        setLoading(false);
      }
    };

    fetchGuests();
  }, []);

  const filteredGuests = guests.filter(
    (guest) =>
      guest.fullName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      guest.allergies?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      guest.comments?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "200px",
          fontFamily: "Charm",
          fontSize: "2rem",
          color: "var(--secondary-color)",
        }}
      >
        Cargando lista de invitados...
      </div>
    );
  }

  return (
    <div style={{ padding: "2rem" }}>
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        style={{
          fontFamily: "Charm",
          fontSize: "3rem",
          color: "var(--secondary-color)",
          textAlign: "center",
          marginBottom: "2rem",
        }}
      >
        Lista Detallada de Invitados
      </motion.h2>

      <div style={{ marginBottom: "2rem" }}>
        <input
          type="text"
          placeholder="Buscar invitado..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{
            width: "100%",
            padding: "1rem",
            fontSize: "2rem",
            border: "2px solid var(--primary-color)",
            borderRadius: "10px",
            fontFamily: "Charm",
          }}
        />
      </div>

      <div style={{ overflowX: "auto", maxHeight: "500px", overflowY: "auto" }}>
        <table
          style={{
            width: "100%",
            borderCollapse: "separate",
            borderSpacing: "0",
            backgroundColor: "rgba(255, 255, 255, 0.95)",
            borderRadius: "15px",
            overflow: "hidden",
            boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)",
          }}
        >
          <thead>
            <tr
              style={{
                backgroundColor: "var(--primary-color)",
                color: "white",
              }}
            >
              <th style={thStyle}>Nombre</th>
              <th style={thStyle}>Fecha de Confirmación</th>
              <th style={thStyle}>Transporte</th>
              <th style={thStyle}>Bebida Alcohólica</th>
              <th style={thStyle}>Alergias</th>
              <th style={thStyle}>Comentarios</th>
            </tr>
          </thead>
          <tbody>
            {filteredGuests.map((guest, index) => (
              <tr
                key={guest.id}
                style={{
                  backgroundColor:
                    index % 2 === 0
                      ? "rgba(255, 255, 255, 0.95)"
                      : "rgba(229, 178, 137, 0.1)",
                }}
              >
                <td style={tdStyle}>
                  <span
                    style={{
                      fontFamily: "var(--font-secondary)",
                      fontSize: "1rem",
                    }}
                  >
                    {guest.fullName}
                  </span>
                </td>
                <td style={tdStyle}>{guest.fechaConfirmacion}</td>
                <td style={tdStyle}>
                  {guest.hasTransportation === "yes" ? "✅" : "❌"}
                </td>
                <td style={tdStyle}>
                  {guest.willDrinkAlcohol === "yes" ? "✅" : "❌"}
                </td>
                <td style={tdStyle}>{guest.allergies || "No reporta"}</td>
                <td style={tdStyle}>{guest.comments || "Sin comentarios"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div
        style={{
          marginTop: "2rem",
          textAlign: "center",
          fontFamily: "Charm",
          fontSize: "2.5rem",
          color: "var(--secondary-color)",
        }}
      >
        Total de invitados confirmados: {guests.length}
      </div>
    </div>
  );
};

const thStyle = {
  padding: "1.2rem",
  textAlign: "left",
  fontFamily: "var(--font-secondary)",
  fontSize: "1.2rem",
  fontWeight: "500",
};

const tdStyle = {
  padding: "1rem",
  borderBottom: "1px solid rgba(229, 178, 137, 0.2)",
  fontSize: "1rem",
  fontFamily: "var(--font-secondary)",
};

export default DetailedGuestTable;

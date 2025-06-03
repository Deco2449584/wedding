import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFemale, faMale } from "@fortawesome/free-solid-svg-icons";
import weddingBg from "../assets/images/cover-bg.png";
import "../App.css";
import "./SeatingArrangement.css";
import { getFirestore, doc, getDoc, setDoc, collection, getDocs } from "firebase/firestore";

const totalSeats = 40;

const SeatingArrangement = () => {
  const [guests, setGuests] = useState([]); // Invitados confirmados desde Firebase
  const [seats, setSeats] = useState(Array(totalSeats).fill(null)); // Puestos desde Firebase
  const [selectingSeat, setSelectingSeat] = useState(null);
  const [search, setSearch] = useState("");
  const db = getFirestore();

  // Cargar invitados confirmados y puestos desde Firebase
  useEffect(() => {
    const fetchGuestsAndSeats = async () => {
      // Invitados confirmados
      const guestsSnapshot = await getDocs(collection(db, "confirmaciones"));
      const guestList = [];
      guestsSnapshot.forEach((doc) => {
        const data = doc.data();
        guestList.push({
          id: doc.id,
          name: data.fullName,
          gender: data.gender || "male",
          ...data,
        });
      });
      // Cargar puestos (siempre del doc main-table)
      const seatsDoc = await getDoc(doc(db, "puestos", "main-table"));
      let seatsArr = Array(totalSeats).fill(null);
      if (seatsDoc.exists() && Array.isArray(seatsDoc.data().seats)) {
        seatsArr = seatsDoc.data().seats;
      }
      // Quitar de la lista de invitados los que ya están sentados
      const assignedIds = seatsArr.filter(Boolean).map((g) => g && g.id);
      setGuests(guestList.filter((g) => !assignedIds.includes(g.id)));
      setSeats(seatsArr);
    };
    fetchGuestsAndSeats();
  }, []);

  // Guardar puestos en Firebase
  const saveSeatsToFirebase = async (newSeats) => {
    await setDoc(doc(db, "puestos", "main-table"), { seats: newSeats });
  };

  // Cuando se hace click en un asiento vacio, abre el selector
  const handleSeatClick = (idx) => {
    if (!seats[idx]) setSelectingSeat(idx);
  };

  // Cuando se selecciona un invitado de la lista para un asiento
  const handleSelectGuestForSeat = (guestIdx) => {
    if (selectingSeat === null) return;
    const guest = filteredGuests[guestIdx];
    const newGuests = guests.filter((g) => g.id !== guest.id);
    const newSeats = [...seats];
    newSeats[selectingSeat] = guest;
    setGuests(newGuests);
    setSeats(newSeats);
    setSelectingSeat(null);
    saveSeatsToFirebase(newSeats);
  };

  // Función para quitar invitado de un puesto
  const handleRemoveSeat = (idx) => {
    const newSeats = [...seats];
    const removed = newSeats[idx];
    newSeats[idx] = null;
    setSeats(newSeats);
    if (removed) setGuests((prev) => [...prev, removed]);
    saveSeatsToFirebase(newSeats);
  };

  // Filtro de invitados para el modal
  const filteredGuests = guests.filter((g) =>
    g.name.toLowerCase().includes(search.toLowerCase())
  );

  // Diseño de la mesa: ovalada, solo cabecera 1 y 2 (antes 1 y 3)
  return (
    <div
      className="seating-table-container"
      style={{
        overflow: "auto",
        maxHeight: "100vh",
        background: `url(${weddingBg}) center/cover no-repeat fixed`,
        minHeight: "100vh",
        padding: 0,
      }}
    >
      <div
        className="seating-table-main"
        style={{ width: "100%", alignItems: "center" }}
      >
        <h2 className="seating-table-title">Mesa principal (40 puestos)</h2>
        <div
          className="wedding-table-visual"
          style={{
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            minHeight: 350,
          }}
        >
          {/* Fila superior: cabecera 1, 19 puestos centrales */}
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              gap: 12,
              marginBottom: 24,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {/* Cabecera 1 */}
            <div
              className="seating-seat head-seat"
              style={{ cursor: !seats[0] ? "pointer" : "default" }}
              onClick={() => handleSeatClick(0)}
            >
              {seats[0] ? (
                <div className="seating-guest-item">
                  <FontAwesomeIcon
                    icon={seats[0].gender === "female" ? faFemale : faMale}
                    style={{ marginRight: 8, color: seats[0].gender === "female" ? "#e75480" : "#3b7bb7" }}
                  />
                  {seats[0].name}
                  <button
                    style={{ marginLeft: 8, fontSize: 12 }}
                    onClick={e => { e.stopPropagation(); handleRemoveSeat(0); }}
                    title="Quitar invitado"
                  >✖</button>
                </div>
              ) : (
                <span className="seating-seat-placeholder">1</span>
              )}
            </div>
            {/* 19 puestos centrales (superior) */}
            {Array.from({ length: 19 }).map((_, idx) => (
              <div
                className="seating-seat"
                key={idx + 1}
                style={{ cursor: !seats[idx + 1] ? "pointer" : "default" }}
                onClick={() => handleSeatClick(idx + 1)}
              >
                {seats[idx + 1] ? (
                  <div className="seating-guest-item">
                    <FontAwesomeIcon
                      icon={seats[idx + 1].gender === "female" ? faFemale : faMale}
                      style={{ marginRight: 8, color: seats[idx + 1].gender === "female" ? "#e75480" : "#3b7bb7" }}
                    />
                    {seats[idx + 1].name}
                    <button
                      style={{ marginLeft: 8, fontSize: 12 }}
                      onClick={e => { e.stopPropagation(); handleRemoveSeat(idx + 1); }}
                      title="Quitar invitado"
                    >✖</button>
                  </div>
                ) : (
                  <span className="seating-seat-placeholder">{idx + 2}</span>
                )}
              </div>
            ))}
          </div>
          {/* Centro de mesa decorativo */}
          <div className="wedding-table-centerpiece" style={{ width: 320, height: 80, borderRadius: 40, background: "#fffbe8", boxShadow: "0 4px 32px #b77b3b55", display: "flex", alignItems: "center", justifyContent: "center", margin: "0.5rem 0" }}>
            <span style={{ fontFamily: "Charm", fontSize: 32, color: "#b77b3b" }}>💐 Mesa de Honor 💐</span>
          </div>
          {/* Fila inferior: cabecera 21, 19 puestos centrales */}
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              gap: 12,
              marginTop: 0,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {/* Cabecera 21 */}
            <div
              className="seating-seat head-seat"
              style={{ cursor: !seats[20] ? "pointer" : "default" }}
              onClick={() => handleSeatClick(20)}
            >
              {seats[20] ? (
                <div className="seating-guest-item">
                  <FontAwesomeIcon
                    icon={seats[20].gender === "female" ? faFemale : faMale}
                    style={{ marginRight: 8, color: seats[20].gender === "female" ? "#e75480" : "#3b7bb7" }}
                  />
                  {seats[20].name}
                  <button
                    style={{ marginLeft: 8, fontSize: 12 }}
                    onClick={e => { e.stopPropagation(); handleRemoveSeat(20); }}
                    title="Quitar invitado"
                  >✖</button>
                </div>
              ) : (
                <span className="seating-seat-placeholder">21</span>
              )}
            </div>
            {/* 19 puestos centrales (inferior) */}
            {Array.from({ length: 19 }).map((_, idx) => (
              <div
                className="seating-seat"
                key={21 + idx}
                style={{ cursor: !seats[21 + idx] ? "pointer" : "default" }}
                onClick={() => handleSeatClick(21 + idx)}
              >
                {seats[21 + idx] ? (
                  <div className="seating-guest-item">
                    <FontAwesomeIcon
                      icon={seats[21 + idx].gender === "female" ? faFemale : faMale}
                      style={{ marginRight: 8, color: seats[21 + idx].gender === "female" ? "#e75480" : "#3b7bb7" }}
                    />
                    {seats[21 + idx].name}
                    <button
                      style={{ marginLeft: 8, fontSize: 12 }}
                      onClick={e => { e.stopPropagation(); handleRemoveSeat(21 + idx); }}
                      title="Quitar invitado"
                    >✖</button>
                  </div>
                ) : (
                  <span className="seating-seat-placeholder">{21 + idx + 1}</span>
                )}
              </div>
            ))}
          </div>
        </div>
        {/* Selector modal para elegir invitado */}
        {selectingSeat !== null && (
          <div className="seating-modal">
            <div
              className="seating-modal-content"
              style={{ minWidth: 420, maxWidth: 600 }}
            >
              <h3>Selecciona un invitado</h3>
              <input
                type="text"
                placeholder="Buscar invitado..."
                value={search}
                onChange={e => setSearch(e.target.value)}
                style={{
                  width: "100%",
                  padding: "0.7rem 1rem",
                  fontSize: "1.2rem",
                  border: "2px solid var(--primary-color)",
                  borderRadius: "10px",
                  fontFamily: "Charm",
                  marginBottom: 12,
                }}
              />
              <div style={{ maxHeight: 420, overflowY: "auto" }}>
                {filteredGuests.length === 0 && <div>No hay invitados disponibles</div>}
                {filteredGuests.map((guest, idx) => (
                  <div
                    key={guest.id}
                    className="seating-guest-item"
                    style={{ cursor: "pointer", marginBottom: 8 }}
                    onClick={() => handleSelectGuestForSeat(idx)}
                  >
                    <FontAwesomeIcon
                      icon={guest.gender === "female" ? faFemale : faMale}
                      style={{ marginRight: 8, color: guest.gender === "female" ? "#e75480" : "#3b7bb7" }}
                    />
                    {guest.name}
                  </div>
                ))}
              </div>
              <button onClick={() => setSelectingSeat(null)} style={{marginTop: 16}}>Cancelar</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SeatingArrangement;

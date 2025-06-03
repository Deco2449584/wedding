import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFemale, faMale } from "@fortawesome/free-solid-svg-icons";
import weddingBg from "../assets/images/cover-bg.png";
import "../App.css";
import "./SeatingArrangement.css";

// Agrega género a los invitados (puedes ajustar según corresponda)
const initialGuests = [
  { name: "Sara Muñoz", gender: "female" },
  { name: "Cindy dahiana arboleda criollo", gender: "female" },
  { name: "Jaqueline Alvarez", gender: "female" },
  { name: "Meide Arcila", gender: "female" },
  { name: "Michelle Fuentes", gender: "female" },
  { name: "Felipe Franco", gender: "male" },
  { name: "Juvenal criollo moreno", gender: "male" },
  { name: "Jorge Luis Sánchez Abella", gender: "male" },
  { name: "Juan Carlos criollo", gender: "male" },
  { name: "Daniela Martín", gender: "female" },
  { name: "María Amanda Vázquez", gender: "female" },
  { name: "Edna Gálvez", gender: "female" },
  { name: "Gerardo fuentes", gender: "male" },
  { name: "Germán Ramírez", gender: "male" },
  { name: "Gustavo Caro", gender: "male" },
  { name: "Eder pinzon", gender: "male" },
  { name: "Ana Cristina Arevalo Quevedo", gender: "female" },
  { name: "Ruth Elena riobo", gender: "female" },
  { name: "María Mujica", gender: "female" },
  { name: "Consuelo Janeth Ortiz Pinzón", gender: "female" },
  { name: "Esteban Albornoz", gender: "male" },
  { name: "Eliana Sastoque", gender: "female" },
  { name: "Leslie Albornoz", gender: "female" },
  { name: "DANNA CASTRO", gender: "female" },
  { name: "Sara Isabel Caicedo hurtado", gender: "female" },
  { name: "Nohora Celeny Galvez Hincapie", gender: "female" },
  { name: "Sara criollo", gender: "female" },
  { name: "Martha cañon", gender: "female" },
  { name: "Alejandra Jiménez", gender: "female" },
  { name: "Rodrigo Ramos", gender: "male" },
  { name: "Rodrigo Baquero", gender: "male" },
  { name: "José David Criollo Moreno", gender: "male" },
  { name: "Diana escobar", gender: "female" },
  { name: "Ingrid Sánchez", gender: "female" },
  // Invitados adicionales
  { name: "Daniel Caro", gender: "male" },
  { name: "Laura Criollo", gender: "female" },
  { name: "Alex Reyes", gender: "male" },
  { name: "Adriana Reyes", gender: "female" },
];

const totalSeats = 40;
const leftSeats = 19;
const rightSeats = 19;
const headSeats = 2;

const SeatingArrangement = () => {
  const [guests, setGuests] = useState(initialGuests);
  const [seats, setSeats] = useState(Array(totalSeats).fill(null));
  const [selectingSeat, setSelectingSeat] = useState(null); // Nuevo estado para saber si se está seleccionando un invitado para un puesto

  // Cuando se hace click en un asiento vacío, abre el selector
  const handleSeatClick = (idx) => {
    if (!seats[idx]) setSelectingSeat(idx);
  };

  // Cuando se selecciona un invitado de la lista para un asiento
  const handleSelectGuestForSeat = (guestIdx) => {
    if (selectingSeat === null) return;
    const guest = guests[guestIdx];
    const newGuests = guests.filter((_, i) => i !== guestIdx);
    const newSeats = [...seats];
    newSeats[selectingSeat] = guest;
    setGuests(newGuests);
    setSeats(newSeats);
    setSelectingSeat(null);
  };

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
          {/* Fila superior: 2 puestos en la cabecera izquierda, 19 puestos, cabecera derecha vacía */}
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              gap: 12,
              marginBottom: 24,
            }}
          >
            {/* Cabecera izquierda: 2 puestos */}
            <div
              className="seating-seat head-seat"
              style={{ cursor: !seats[0] ? "pointer" : "default" }}
              onClick={() => handleSeatClick(0)}
            >
              {seats[0] ? (
                <div className="seating-guest-item">
                  <FontAwesomeIcon
                    icon={seats[0].gender === "female" ? faFemale : faMale}
                    style={{
                      marginRight: 8,
                      color:
                        seats[0].gender === "female" ? "#e75480" : "#3b7bb7",
                    }}
                  />
                  {seats[0].name}
                </div>
              ) : (
                <span className="seating-seat-placeholder">Cabecera 1</span>
              )}
            </div>
            <div
              className="seating-seat head-seat"
              style={{ cursor: !seats[1] ? "pointer" : "default" }}
              onClick={() => handleSeatClick(1)}
            >
              {seats[1] ? (
                <div className="seating-guest-item">
                  <FontAwesomeIcon
                    icon={seats[1].gender === "female" ? faFemale : faMale}
                    style={{
                      marginRight: 8,
                      color:
                        seats[1].gender === "female" ? "#e75480" : "#3b7bb7",
                    }}
                  />
                  {seats[1].name}
                </div>
              ) : (
                <span className="seating-seat-placeholder">Cabecera 2</span>
              )}
            </div>
            {/* 19 puestos centrales */}
            {Array.from({ length: 19 }).map((_, idx) => (
              <div
                className="seating-seat"
                key={idx + 2}
                style={{ cursor: !seats[idx + 2] ? "pointer" : "default" }}
                onClick={() => handleSeatClick(idx + 2)}
              >
                {seats[idx + 2] ? (
                  <div className="seating-guest-item">
                    <FontAwesomeIcon
                      icon={
                        seats[idx + 2].gender === "female" ? faFemale : faMale
                      }
                      style={{
                        marginRight: 8,
                        color:
                          seats[idx + 2].gender === "female"
                            ? "#e75480"
                            : "#3b7bb7",
                      }}
                    />
                    {seats[idx + 2].name}
                  </div>
                ) : (
                  <span className="seating-seat-placeholder">{idx + 3}</span>
                )}
              </div>
            ))}
            {/* Cabecera derecha vacía visualmente */}
            <div
              style={{
                width: 80,
                height: 80,
                marginLeft: 12,
                marginRight: 0,
                background: "transparent",
              }}
            />
          </div>
          {/* Mesa visual mejorada */}
          <div className="wedding-table-centerpiece" />
          {/* Fila inferior: 19 puestos alineados con los de arriba */}
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              gap: 12,
              marginTop: 0,
            }}
          >
            {/* Espacio para alinear con cabecera izquierda */}
            <div style={{ width: 80, height: 80, visibility: "hidden" }} />
            <div style={{ width: 80, height: 80, visibility: "hidden" }} />
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
                      icon={
                        seats[21 + idx].gender === "female" ? faFemale : faMale
                      }
                      style={{
                        marginRight: 8,
                        color:
                          seats[21 + idx].gender === "female"
                            ? "#e75480"
                            : "#3b7bb7",
                      }}
                    />
                    {seats[21 + idx].name}
                  </div>
                ) : (
                  <span className="seating-seat-placeholder">{21 + idx}</span>
                )}
              </div>
            ))}
            {/* Espacio para alinear con cabecera derecha */}
            <div style={{ width: 80, height: 80, visibility: "hidden" }} />
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
              <div style={{ maxHeight: 420, overflowY: "auto" }}>
                {guests.length === 0 && <div>No hay invitados disponibles</div>}
                {guests.map((guest, idx) => (
                  <div
                    key={guest.name}
                    className="seating-guest-item"
                    style={{ cursor: "pointer", marginBottom: 8 }}
                    onClick={() => handleSelectGuestForSeat(idx)}
                  >
                    <FontAwesomeIcon
                      icon={guest.gender === "female" ? faFemale : faMale}
                      style={{
                        marginRight: 8,
                        color:
                          guest.gender === "female" ? "#e75480" : "#3b7bb7",
                      }}
                    />
                    {guest.name}
                  </div>
                ))}
              </div>
              <button onClick={() => setSelectingSeat(null)}>Cancelar</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SeatingArrangement;

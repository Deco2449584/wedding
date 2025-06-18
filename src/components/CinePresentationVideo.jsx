import React, { useEffect, useState } from "react";
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import { getApps, initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAemHGds98-5bH05GZTfMsTJs3yCa5Zd6k",
  authDomain: "tutorials-a272f.firebaseapp.com",
  projectId: "tutorials-a272f",
  storageBucket: "tutorials-a272f.appspot.com",
  messagingSenderId: "1087673664180",
  appId: "1:1087673664180:web:df64c03e595a8bfcf40de1",
  measurementId: "G-4BMLX28FEP",
};

let app;
if (!getApps().length) {
  app = initializeApp(firebaseConfig, "cineVideoApp");
} else {
  app =
    getApps().find((a) => a.name === "cineVideoApp") ||
    initializeApp(firebaseConfig, "cineVideoApp");
}
const storage = getStorage(app);

const CinePresentationVideo = () => {
  const [videoUrl, setVideoUrl] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchVideo = async () => {
      try {
        const videoRef = ref(storage, "/wedding-videos/primera edicion.mp4");
        const url = await getDownloadURL(videoRef);
        setVideoUrl(url);
      } catch (err) {
        setError("No se pudo cargar el video de presentación.");
      } finally {
        setLoading(false);
      }
    };
    fetchVideo();
  }, []);

  return (
    <div
      style={{
        maxWidth: 1000,
        margin: "3rem auto",
        fontFamily: "Charm, cursive",
        background: "#181818",
        borderRadius: 32,
        boxShadow: "0 8px 32px #000a",
        padding: "2.5rem 1.5rem 2rem 1.5rem",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Cortinas rojas */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "50%",
          height: 180,
          background:
            "repeating-linear-gradient(90deg, #b71c1c 0 20px, #a31515 20px 40px)",
          borderTopLeftRadius: 32,
          zIndex: 2,
          boxShadow: "8px 0 32px #0007",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          width: "50%",
          height: 180,
          background:
            "repeating-linear-gradient(90deg, #b71c1c 0 20px, #a31515 20px 40px)",
          borderTopRightRadius: 32,
          zIndex: 2,
          boxShadow: "-8px 0 32px #0007",
        }}
      />
      {/* Focos */}
      <div
        style={{
          position: "absolute",
          top: 24,
          left: 80,
          width: 24,
          height: 24,
          background: "#fff59d",
          borderRadius: "50%",
          boxShadow: "0 0 32px 8px #fff59d88",
          zIndex: 3,
        }}
      />
      <div
        style={{
          position: "absolute",
          top: 24,
          right: 80,
          width: 24,
          height: 24,
          background: "#fff59d",
          borderRadius: "50%",
          boxShadow: "0 0 32px 8px #fff59d88",
          zIndex: 3,
        }}
      />
      <h2
        style={{
          textAlign: "center",
          color: "#fff",
          fontSize: "2.7rem",
          marginBottom: 32,
          letterSpacing: 1,
          fontFamily: "Charm, cursive",
          textShadow: "0 2px 8px #000",
          zIndex: 4,
          position: "relative",
        }}
      >
        Video de Presentación
      </h2>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: 420,
          position: "relative",
          zIndex: 4,
        }}
      >
        {loading && (
          <div style={{ color: "#fff", fontSize: "1.3rem" }}>
            Cargando video...
          </div>
        )}
        {error && (
          <div style={{ color: "#f44336", fontSize: "1.2rem" }}>{error}</div>
        )}
        {videoUrl && (
          <div
            style={{
              background: "#222",
              borderRadius: 24,
              boxShadow: "0 4px 32px #000a",
              padding: 24,
              border: "8px solid #444",
              position: "relative",
              width: 700,
              maxWidth: "90vw",
            }}
          >
            {/* Marco de pantalla */}
            <div
              style={{
                position: "absolute",
                top: -32,
                left: "50%",
                transform: "translateX(-50%)",
                width: 220,
                height: 22,
                background: "#fff",
                borderRadius: "0 0 22px 22px",
                boxShadow: "0 4px 16px #0006",
              }}
            />
            <video
              src={videoUrl}
              controls
              style={{
                width: "100%",
                height: 400,
                borderRadius: 16,
                background: "#000",
                boxShadow: "0 2px 16px #000a",
                border: "4px solid #222",
              }}
            />
            {/* Cortinas laterales */}
            <div
              style={{
                position: "absolute",
                left: -40,
                top: 0,
                width: 32,
                height: "100%",
                background: "linear-gradient(90deg, #b71c1c 60%, transparent)",
                borderRadius: "24px 0 0 24px",
              }}
            />
            <div
              style={{
                position: "absolute",
                right: -40,
                top: 0,
                width: 32,
                height: "100%",
                background: "linear-gradient(270deg, #b71c1c 60%, transparent)",
                borderRadius: "0 24px 24px 0",
              }}
            />
            {/* Suelo de cine */}
            <div
              style={{
                position: "absolute",
                bottom: -18,
                left: "50%",
                transform: "translateX(-50%)",
                width: 260,
                height: 22,
                background: "#222",
                borderRadius: "0 0 22px 22px",
                boxShadow: "0 2px 8px #000",
              }}
            />
            {/* Butacas */}
            <div
              style={{
                position: "absolute",
                bottom: -38,
                left: "50%",
                transform: "translateX(-50%)",
                display: "flex",
                gap: 8,
              }}
            >
              {Array.from({ length: 8 }).map((_, i) => (
                <div
                  key={i}
                  style={{
                    width: 28,
                    height: 18,
                    background: "#a31515",
                    borderRadius: "0 0 12px 12px",
                    boxShadow: "0 2px 8px #0007",
                  }}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CinePresentationVideo;

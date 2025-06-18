import React, { useEffect, useState, useRef } from "react";
import { getStorage, ref, listAll, getDownloadURL } from "firebase/storage";
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
  app = initializeApp(firebaseConfig, "carouselApp");
} else {
  app =
    getApps().find((a) => a.name === "carouselApp") ||
    initializeApp(firebaseConfig, "carouselApp");
}
const storage = getStorage(app);

const arrowStyle = {
  background: "#fff8f0",
  border: "2px solid #e0c9a6",
  borderRadius: "50%",
  fontSize: "2.5rem",
  width: 56,
  height: 56,
  boxShadow: "0 2px 8px #e0c9a6aa",
  cursor: "pointer",
  margin: "0 10px",
  transition: "background 0.2s, box-shadow 0.2s",
  color: "#a67c52",
  position: "absolute",
  top: "50%",
  transform: "translateY(-50%)",
  zIndex: 2,
  outline: "none",
};

const pageStyle = {
  background:
    "repeating-linear-gradient(135deg, #fff8f0, #fff8f0 30px, #f7e6d7 31px, #f7e6d7 60px)",
  borderRadius: 32,
  boxShadow: "0 8px 32px #e0c9a6cc, 0 1.5px 0 #fff inset",
  padding: "2.5rem 1.5rem 2rem 1.5rem",
  minHeight: 480,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  position: "relative",
};

const photoFrameStyle = {
  background: "#fff",
  border: "6px solid #e0c9a6",
  borderRadius: 24,
  boxShadow: "0 4px 24px #e0c9a6aa, 0 0 0 8px #fff8f0",
  width: 420,
  height: 380,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  position: "relative",
  overflow: "visible",
};

const cornerStyle = (top, left) => ({
  position: "absolute",
  width: 32,
  height: 32,
  background: "#fff8f0",
  border: "3px solid #e0c9a6",
  borderRadius: "50%",
  boxShadow: "0 2px 8px #e0c9a6aa",
  top: top ? -18 : undefined,
  bottom: !top ? -18 : undefined,
  left: left ? -18 : undefined,
  right: !left ? -18 : undefined,
  zIndex: 3,
});

const polaroidStyle = (selected) => ({
  width: 64,
  height: 64,
  background: "#fff",
  border: selected ? "3px solid #a67c52" : "2px solid #e0c9a6",
  borderRadius: 12,
  boxShadow: selected ? "0 2px 12px #a67c52aa" : "0 1px 4px #e0c9a6aa",
  margin: "0 6px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",
  opacity: selected ? 1 : 0.7,
  transition: "border 0.2s, box-shadow 0.2s, opacity 0.2s",
});

const EventPhotoCarousel = () => {
  const [images, setImages] = useState([]);
  const [current, setCurrent] = useState(0);
  const [flip, setFlip] = useState(false);
  const timeoutRef = useRef();

  useEffect(() => {
    const fetchImages = async () => {
      const listRef = ref(storage, "event-photos");
      try {
        const res = await listAll(listRef);
        const urls = await Promise.all(
          res.items.map((itemRef) => getDownloadURL(itemRef))
        );
        setImages(urls);
      } catch (error) {
        console.error("Error al cargar imágenes:", error);
      }
    };
    fetchImages();
  }, []);

  const goTo = (idx) => {
    if (idx === current) return;
    setFlip(true);
    timeoutRef.current = setTimeout(() => {
      setCurrent(idx);
      setFlip(false);
    }, 400);
  };

  const next = () => goTo((current + 1) % images.length);
  const prev = () => goTo((current - 1 + images.length) % images.length);

  useEffect(() => () => clearTimeout(timeoutRef.current), []);

  if (images.length === 0)
    return (
      <div
        style={{
          textAlign: "center",
          fontFamily: "Charm",
          fontSize: "1.5rem",
          color: "#a67c52",
        }}
      >
        Cargando álbum...
      </div>
    );

  return (
    <div
      style={{
        maxWidth: 800,
        margin: "3rem auto",
        fontFamily: "Charm",
        background: "#f7e6d7",
        borderRadius: 40,
        boxShadow: "0 8px 32px #e0c9a6cc",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          color: "#a67c52",
          fontSize: "2.7rem",
          marginBottom: 10,
          letterSpacing: 1,
          fontFamily: "Charm, cursive",
        }}
      >
        Álbum de Boda
      </h2>
      <div style={pageStyle}>
        <button
          style={{
            ...arrowStyle,
            left: 0,
            opacity: images.length > 1 ? 1 : 0.3,
          }}
          onClick={prev}
          disabled={images.length <= 1}
        >
          &#8249;
        </button>
        <div style={{ ...photoFrameStyle, perspective: 1200 }}>
          {/* Esquinas */}
          <div style={cornerStyle(true, true)}></div>
          <div style={cornerStyle(true, false)}></div>
          <div style={cornerStyle(false, true)}></div>
          <div style={cornerStyle(false, false)}></div>
          {/* Foto con animación flip */}
          <div
            style={{
              width: "100%",
              height: "100%",
              borderRadius: 18,
              overflow: "hidden",
              boxShadow: "0 2px 12px #e0c9a6aa",
              background: "#fff",
              position: "relative",
              transformStyle: "preserve-3d",
              transition: "transform 0.4s cubic-bezier(.4,2,.6,1)",
              transform: flip ? "rotateY(180deg)" : "rotateY(0deg)",
            }}
          >
            <img
              src={images[current]}
              alt={`Foto ${current + 1}`}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: 18,
                boxShadow: "0 2px 12px #e0c9a6aa",
                transition: "opacity 0.3s",
              }}
            />
          </div>
          {/* Etiqueta de página */}
          <div
            style={{
              position: "absolute",
              bottom: 10,
              right: 24,
              background: "rgba(255,255,255,0.8)",
              borderRadius: 12,
              padding: "4px 16px",
              fontSize: "1.1rem",
              color: "#a67c52",
              boxShadow: "0 2px 8px #e0c9a6aa",
              fontFamily: "Charm, cursive",
              letterSpacing: 1,
            }}
          >
            {current + 1} / {images.length}
          </div>
        </div>
        <button
          style={{
            ...arrowStyle,
            right: 0,
            opacity: images.length > 1 ? 1 : 0.3,
          }}
          onClick={next}
          disabled={images.length <= 1}
        >
          &#8250;
        </button>
      </div>
      {/* Miniaturas polaroid */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: 10,
          marginTop: 32,
          marginBottom: 10,
        }}
      >
        {images.map((img, idx) => (
          <div
            key={img}
            style={polaroidStyle(idx === current)}
            onClick={() => goTo(idx)}
          >
            <img
              src={img}
              alt={`Miniatura ${idx + 1}`}
              style={{
                width: 48,
                height: 48,
                objectFit: "cover",
                borderRadius: 8,
                boxShadow: "0 1px 4px #e0c9a6aa",
                marginTop: 4,
              }}
            />
            <div
              style={{
                width: "100%",
                textAlign: "center",
                fontSize: 10,
                color: "#a67c52",
                fontFamily: "Charm, cursive",
                marginTop: 2,
              }}
            >
              {idx + 1}
            </div>
          </div>
        ))}
      </div>
      <div
        style={{
          textAlign: "center",
          color: "#a67c52",
          fontFamily: "Charm",
          fontSize: "1.2rem",
          marginBottom: 16,
          marginTop: 0,
        }}
      >
        Haz clic en las miniaturas para ver cada página del álbum
      </div>
    </div>
  );
};

export default EventPhotoCarousel;

import { useState, useRef } from "react";
import { getStorage, ref, uploadBytesResumable } from "firebase/storage";
import { initializeApp, getApps, getApp } from "firebase/app";
import { motion, AnimatePresence } from "framer-motion";

// Configuración de Firebase para apuntar SIEMPRE a tutorials-a272f.appspot.com
const firebaseConfig = {
  apiKey: "AIzaSyAemHGds98-5bH05GZTfMsTJs3yCa5Zd6k",
  authDomain: "tutorials-a272f.firebaseapp.com",
  projectId: "tutorials-a272f",
  storageBucket: "tutorials-a272f.appspot.com", // <- bucket correcto
  messagingSenderId: "1087673664180",
  appId: "1:1087673664180:web:df64c03e595a8bfcf40de1",
  measurementId: "G-4BMLX28FEP",
};

// Inicialización robusta de Firebase
let app;
if (!getApps().length) {
  app = initializeApp(firebaseConfig, "photoApp");
} else {
  try {
    app = getApp("photoApp");
  } catch (e) {
    app = getApps()[0];
  }
}
const storage = getStorage(app);

const EventPhotoUploader = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [showErrorModal, setShowErrorModal] = useState(false);
  const [progress, setProgress] = useState(0);
  const fileInputRef = useRef();

  const handleFileChange = (e) => {
    setError("");
    setSuccess("");
    const file = e.target.files[0];
    if (!file) return;
    if (!file.type.startsWith("image/")) {
      setError("Solo se permiten imágenes");
      setShowErrorModal(true);
      return;
    }
    if (file.size > 10 * 1024 * 1024) {
      setError("La imagen es demasiado grande (máx 10MB)");
      setShowErrorModal(true);
      return;
    }
    setSelectedFile(file);
  };

  const handleUpload = async () => {
    if (!selectedFile) return;
    setUploading(true);
    setError("");
    setSuccess("");
    setProgress(0);
    try {
      const fileName = `${Date.now()}-${selectedFile.name}`;
      const storageRef = ref(storage, `event-photos/${fileName}`);
      const uploadTask = uploadBytesResumable(storageRef, selectedFile);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const percent = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );
          setProgress(percent);
        },
        (err) => {
          setError("Error al subir la imagen");
          setShowErrorModal(true);
          setUploading(false);
        },
        () => {
          setSuccess("¡Imagen subida!");
          setSelectedFile(null);
          if (fileInputRef.current) fileInputRef.current.value = "";
          setUploading(false);
          setProgress(0);
        }
      );
    } catch (e) {
      setError("Error al subir la imagen");
      setShowErrorModal(true);
      setUploading(false);
    }
  };

  return (
    <section
      className="event-photo-uploader"
      style={{ marginTop: "4rem", marginBottom: "4rem" }}
    >
      <div
        className="container card-base"
        style={{ maxWidth: 600, margin: "0 auto", padding: "2rem" }}
      >
        <h2 className="section-title" style={{ textAlign: "center" }}>
          Sube tu foto favorita del evento
        </h2>
        <p
          style={{
            textAlign: "center",
            fontFamily: "Charm",
            fontSize: "1.3rem",
            color: "#a67c52",
          }}
        >
          ¡Comparte tus mejores momentos! Sube tu imagen favorita del evento.
        </p>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "1rem",
            margin: "2rem 0",
          }}
        >
          <input
            type="file"
            accept="image/*"
            style={{ display: "none" }}
            ref={fileInputRef}
            onChange={handleFileChange}
          />
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{
              background: "var(--secondary-color)",
              color: "white",
              padding: "0.8rem 2rem",
              borderRadius: "50px",
              fontSize: "1.2rem",
              border: "none",
              cursor: uploading ? "not-allowed" : "pointer",
              fontFamily: "Charm",
            }}
            onClick={() => fileInputRef.current?.click()}
            disabled={uploading}
          >
            Seleccionar imagen
          </motion.button>
          {selectedFile && (
            <>
              <img
                src={URL.createObjectURL(selectedFile)}
                alt="preview"
                style={{
                  maxWidth: 200,
                  maxHeight: 200,
                  borderRadius: 10,
                  margin: "1rem 0",
                }}
              />
              {uploading && (
                <div style={{ width: 220, margin: "1rem 0" }}>
                  <div
                    style={{
                      height: 16,
                      background: "#eee",
                      borderRadius: 8,
                      overflow: "hidden",
                      boxShadow: "0 1px 4px #0001",
                    }}
                  >
                    <div
                      style={{
                        width: `${progress}%`,
                        height: "100%",
                        background: "var(--primary-color)",
                        transition: "width 0.3s",
                      }}
                    />
                  </div>
                  <div
                    style={{
                      textAlign: "center",
                      fontFamily: "Charm",
                      color: "#a67c52",
                      fontSize: 15,
                      marginTop: 4,
                    }}
                  >
                    {progress}%
                  </div>
                </div>
              )}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{
                  background: "var(--primary-color)",
                  color: "white",
                  padding: "0.7rem 1.5rem",
                  borderRadius: "50px",
                  fontSize: "1.1rem",
                  border: "none",
                  cursor: uploading ? "not-allowed" : "pointer",
                  fontFamily: "Charm",
                }}
                onClick={handleUpload}
                disabled={uploading}
              >
                {uploading ? "Subiendo..." : "Subir foto"}
              </motion.button>
            </>
          )}
          {success && (
            <div style={{ color: "#4CAF50", fontFamily: "Charm" }}>
              {success}
            </div>
          )}
        </div>
        <AnimatePresence>
          {showErrorModal && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100vw",
                height: "100vh",
                background: "rgba(0,0,0,0.4)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                zIndex: 9999,
              }}
              onClick={() => setShowErrorModal(false)}
            >
              <motion.div
                initial={{ y: 50 }}
                animate={{ y: 0 }}
                exit={{ y: 50 }}
                style={{
                  background: "#fff",
                  padding: "2rem 2.5rem",
                  borderRadius: 16,
                  boxShadow: "0 8px 32px #0003",
                  minWidth: 280,
                  textAlign: "center",
                  fontFamily: "Charm",
                  color: "#a67c52",
                }}
                onClick={(e) => e.stopPropagation()}
              >
                <h3 style={{ marginBottom: 16 }}>¡Error!</h3>
                <p>{error}</p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  style={{
                    marginTop: 24,
                    background: "var(--primary-color)",
                    color: "white",
                    padding: "0.6rem 1.5rem",
                    borderRadius: "50px",
                    fontSize: "1.1rem",
                    border: "none",
                    cursor: "pointer",
                    fontFamily: "Charm",
                  }}
                  onClick={() => setShowErrorModal(false)}
                >
                  Cerrar
                </motion.button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default EventPhotoUploader;

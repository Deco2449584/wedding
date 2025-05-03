import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faVideo,
  faHeart,
  faUpload,
  faClock,
  faCalendarDay,
  faSpinner,
  faCheck,
  faExclamationCircle,
} from "@fortawesome/free-solid-svg-icons";
import { initializeApp } from "firebase/app";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { getFirestore, collection, addDoc } from "firebase/firestore";

// Configuración de Firebase para Storage
const firebaseConfig = {
  apiKey: "AIzaSyAemHGds98-5bH05GZTfMsTJs3yCa5Zd6k",
  authDomain: "tutorials-a272f.firebaseapp.com",
  projectId: "tutorials-a272f",
  storageBucket: "tutorials-a272f.appspot.com",
  messagingSenderId: "1087673664180",
  appId: "1:1087673664180:web:df64c03e595a8bfcf40de1",
  measurementId: "G-4BMLX28FEP",
};

// Initialize Firebase para Storage
const videoApp = initializeApp(firebaseConfig, "videoApp");
const storage = getStorage(videoApp);
const db = getFirestore(videoApp);

const VideoMessage = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadStatus, setUploadStatus] = useState("initial");
  const [statusMessage, setStatusMessage] = useState("");
  const [previewUrl, setPreviewUrl] = useState(null);
  const fileInputRef = useRef(null);

  const handleFileSelect = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    // Validar el tipo de archivo
    if (!file.type.startsWith("video/")) {
      setStatusMessage("Por favor, selecciona un archivo de video");
      setUploadStatus("error");
      return;
    }

    // Validar el tamaño del archivo (máximo 100MB)
    if (file.size > 100 * 1024 * 1024) {
      setStatusMessage("El archivo es demasiado grande. Máximo 100MB");
      setUploadStatus("error");
      return;
    }

    setSelectedFile(file);
    setUploadStatus("initial");
    setStatusMessage("");

    // Crear preview URL
    const url = URL.createObjectURL(file);
    setPreviewUrl(url);
  };

  const handleUpload = async () => {
    if (!selectedFile) return;

    try {
      setUploadStatus("uploading");
      setStatusMessage("Subiendo video...");

      // Crear referencia en Storage
      const storageRef = ref(
        storage,
        `wedding-videos/${Date.now()}-${selectedFile.name}`
      );

      // Subir archivo
      await uploadBytes(storageRef, selectedFile);

      // Obtener URL de descarga
      const downloadURL = await getDownloadURL(storageRef);

      // Guardar referencia en Firestore
      await addDoc(collection(db, "wedding-videos"), {
        fileName: selectedFile.name,
        fileUrl: downloadURL,
        uploadDate: new Date(),
        fileSize: selectedFile.size,
      });

      setUploadStatus("success");
      setStatusMessage("¡Video subido exitosamente!");

      // Limpiar después de 3 segundos
      setTimeout(() => {
        setSelectedFile(null);
        setPreviewUrl(null);
        setUploadStatus("initial");
        setStatusMessage("");
        if (fileInputRef.current) {
          fileInputRef.current.value = "";
        }
      }, 3000);
    } catch (error) {
      console.error("Error al subir el video:", error);
      setUploadStatus("error");
      setStatusMessage(
        "Error al subir el video. Por favor, intenta nuevamente."
      );
    }
  };

  const StatusIcon = () => {
    switch (uploadStatus) {
      case "uploading":
        return <FontAwesomeIcon icon={faSpinner} spin />;
      case "success":
        return <FontAwesomeIcon icon={faCheck} style={{ color: "#4CAF50" }} />;
      case "error":
        return (
          <FontAwesomeIcon
            icon={faExclamationCircle}
            style={{ color: "#f44336" }}
          />
        );
      default:
        return null;
    }
  };

  return (
    <section className="video-message-section">
      <div className="container">
        {/* Decoraciones de corazones */}
        <motion.div
          className="floating-heart heart-1"
          animate={{
            y: [0, -10],
            transition: {
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse",
            },
          }}
        >
          <FontAwesomeIcon icon={faHeart} />
        </motion.div>
        <motion.div
          className="floating-heart heart-2"
          animate={{
            y: [10, -10],
            transition: {
              duration: 2.5,
              repeat: Infinity,
              repeatType: "reverse",
            },
          }}
        >
          <FontAwesomeIcon icon={faHeart} />
        </motion.div>

        {/* Contenido principal */}
        <motion.div
          className="video-content card-base"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="icon-container"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <FontAwesomeIcon icon={faVideo} />
          </motion.div>

          <h2 className="section-title">Comparte tus Bendiciones</h2>

          <p className="cursive-text">
            Nos encantaría recibir un mensaje tuyo para nuestro día especial
          </p>

          {/* Tarjetas de información */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              gap: "2rem",
              margin: "3rem 0",
            }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              style={{
                padding: "1.5rem",
                borderRadius: "15px",
                background: "rgba(229, 178, 137, 0.1)",
                border: "1px dashed var(--primary-color)",
              }}
            >
              <FontAwesomeIcon
                icon={faClock}
                style={{
                  fontSize: "1.5rem",
                  color: "var(--primary-color)",
                  marginBottom: "1rem",
                }}
              />
              <h3
                style={{
                  fontFamily: "Charm",
                  fontSize: "1.8rem",
                  color: "var(--secondary-color)",
                  marginBottom: "0.5rem",
                }}
              >
                Duración
              </h3>
              <p style={{ fontSize: "1.1rem", color: "#666" }}>
                10-15 segundos máximo
              </p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              style={{
                padding: "1.5rem",
                borderRadius: "15px",
                background: "rgba(229, 178, 137, 0.1)",
                border: "1px dashed var(--primary-color)",
              }}
            >
              <FontAwesomeIcon
                icon={faCalendarDay}
                style={{
                  fontSize: "1.5rem",
                  color: "var(--primary-color)",
                  marginBottom: "1rem",
                }}
              />
              <h3
                style={{
                  fontFamily: "Charm",
                  fontSize: "1.8rem",
                  color: "var(--secondary-color)",
                  marginBottom: "0.5rem",
                }}
              >
                Fecha límite
              </h3>
              <p style={{ fontSize: "1.1rem", color: "#666" }}>
                Antes del 1 de junio
              </p>
            </motion.div>
          </div>

          {/* Sección de carga de video */}
          <div style={{ marginTop: "3rem", textAlign: "center" }}>
            <input
              type="file"
              accept="video/*"
              onChange={handleFileSelect}
              style={{ display: "none" }}
              ref={fileInputRef}
            />

            <motion.button
              onClick={() => fileInputRef.current?.click()}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{
                background: "var(--secondary-color)",
                color: "white",
                padding: "1rem 2rem",
                borderRadius: "50px",
                fontSize: "1.5rem",
                border: "none",
                cursor: "pointer",
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                marginBottom: "1rem",
                fontFamily: "Charm",
              }}
              disabled={uploadStatus === "uploading"}
            >
              <FontAwesomeIcon icon={faVideo} />
              Seleccionar Video
            </motion.button>

            {previewUrl && (
              <div style={{ margin: "1rem 0" }}>
                <video
                  src={previewUrl}
                  controls
                  style={{
                    maxWidth: "100%",
                    maxHeight: "300px",
                    borderRadius: "10px",
                    border: "2px solid var(--primary-color)",
                  }}
                />
              </div>
            )}

            {selectedFile && uploadStatus !== "success" && (
              <motion.button
                onClick={handleUpload}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{
                  background: "var(--secondary-color)",
                  color: "white",
                  padding: "1rem 2rem",
                  borderRadius: "50px",
                  fontSize: "1.5rem",
                  border: "none",
                  cursor: "pointer",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "10px",
                  marginTop: "1rem",
                  fontFamily: "Charm",
                }}
                disabled={uploadStatus === "uploading"}
              >
                <FontAwesomeIcon icon={faUpload} />
                Enviar Video
              </motion.button>
            )}

            {statusMessage && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                style={{
                  marginTop: "1rem",
                  padding: "1rem",
                  borderRadius: "10px",
                  background:
                    uploadStatus === "error"
                      ? "rgba(244, 67, 54, 0.1)"
                      : uploadStatus === "success"
                      ? "rgba(76, 175, 80, 0.1)"
                      : "rgba(255, 255, 255, 0.1)",
                  color:
                    uploadStatus === "error"
                      ? "#f44336"
                      : uploadStatus === "success"
                      ? "#4CAF50"
                      : "var(--secondary-color)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "10px",
                  fontSize: "1.2rem",
                  fontFamily: "Charm",
                }}
              >
                <StatusIcon />
                {statusMessage}
              </motion.div>
            )}
          </div>

          {/* Nota adicional */}
          <p
            style={{
              marginTop: "2rem",
              fontSize: "1.8rem",
              color: "#888",
              fontFamily: "Charm",
            }}
          >
            * Tu mensaje formará parte de un video especial que se mostrará en
            nuestra celebración.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default VideoMessage;

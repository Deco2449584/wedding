import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faImage,
  faUpload,
  faCheck,
  faExclamationCircle,
  faSpinner,
} from "@fortawesome/free-solid-svg-icons";
import { initializeApp } from "firebase/app";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { getFirestore, collection, addDoc } from "firebase/firestore";

// Configuración de Firebase (igual que VideoMessage)
const firebaseConfig = {
  apiKey: "AIzaSyAemHGds98-5bH05GZTfMsTJs3yCa5Zd6k",
  authDomain: "tutorials-a272f.firebaseapp.com",
  projectId: "tutorials-a272f",
  storageBucket: "tutorials-a272f.appspot.com",
  messagingSenderId: "1087673664180",
  appId: "1:1087673664180:web:df64c03e595a8bfcf40de1",
  measurementId: "G-4BMLX28FEP",
};

const photoApp = initializeApp(firebaseConfig, "photoApp");
const storage = getStorage(photoApp);
const db = getFirestore(photoApp);

const EventPhotoUpload = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadStatus, setUploadStatus] = useState("initial");
  const [statusMessage, setStatusMessage] = useState("");
  const [previewUrl, setPreviewUrl] = useState(null);
  const fileInputRef = useRef(null);

  const handleFileSelect = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    if (!file.type.startsWith("image/")) {
      setStatusMessage("Por favor, selecciona una imagen");
      setUploadStatus("error");
      return;
    }
    if (file.size > 20 * 1024 * 1024) {
      setStatusMessage("La imagen es demasiado grande. Máximo 20MB");
      setUploadStatus("error");
      return;
    }
    setSelectedFile(file);
    setUploadStatus("initial");
    setStatusMessage("");
    setPreviewUrl(URL.createObjectURL(file));
  };

  const handleUpload = async () => {
    if (!selectedFile) return;
    try {
      setUploadStatus("uploading");
      setStatusMessage("Subiendo imagen...");
      const storageRef = ref(
        storage,
        `event-photos/${Date.now()}-${selectedFile.name}`
      );
      await uploadBytes(storageRef, selectedFile);
      const downloadURL = await getDownloadURL(storageRef);
      await addDoc(collection(db, "event-photos"), {
        fileName: selectedFile.name,
        fileUrl: downloadURL,
        uploadDate: new Date(),
        fileSize: selectedFile.size,
      });
      setUploadStatus("success");
      setStatusMessage("¡Imagen subida exitosamente!");
      setTimeout(() => {
        setSelectedFile(null);
        setPreviewUrl(null);
        setUploadStatus("initial");
        setStatusMessage("");
        if (fileInputRef.current) fileInputRef.current.value = "";
      }, 3000);
    } catch (error) {
      setUploadStatus("error");
      setStatusMessage("Error al subir la imagen. Intenta nuevamente.");
    }
  };

  const StatusIcon = () => {
    switch (uploadStatus) {
      case "uploading":
        return <FontAwesomeIcon icon={faSpinner} spin />;
      case "success":
        return (
          <FontAwesomeIcon
            icon={faCheck}
            style={{ color: "var(--primary-color)" }}
          />
        );
      case "error":
        return (
          <FontAwesomeIcon
            icon={faExclamationCircle}
            style={{ color: "var(--primary-color)" }}
          />
        );
      default:
        return null;
    }
  };

  return (
    <section className="photo-upload-section">
      <div className="container">
        {/* Card principal, similar a VideoMessage */}
        <motion.div
          className="photo-content card-base"
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
            <FontAwesomeIcon
              icon={faImage}
              style={{ fontSize: "3rem", color: "var(--primary-color)" }}
            />
          </motion.div>
          <h2
            className="section-title"
            style={{
              fontFamily: "Charm",
              fontSize: "2.5rem",
              margin: "1rem 0",
            }}
          >
            Subí tus momentos favoritos
          </h2>
          <p
            className="cursive-text"
            style={{ fontSize: "1.3rem", color: "#666" }}
          >
            Comparte tus fotos favoritas del evento con nosotros
          </p>
          {/* Tarjeta de información, como en VideoMessage */}
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
                icon={faImage}
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
                Formato
              </h3>
              <p style={{ fontSize: "1.1rem", color: "#666" }}>
                JPG, PNG o WebP. Máx. 20MB
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
                icon={faUpload}
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
                ¿Cuántas?
              </h3>
              <p style={{ fontSize: "1.1rem", color: "#666" }}>
                ¡Subí todas las que quieras!
              </p>
            </motion.div>
          </div>
          {/* Sección de carga de imagen */}
          <div style={{ marginTop: "3rem", textAlign: "center" }}>
            <input
              type="file"
              accept="image/*"
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
              <FontAwesomeIcon icon={faImage} />
              Seleccionar Imagen
            </motion.button>
            {previewUrl && (
              <div style={{ margin: "1rem 0" }}>
                <img
                  src={previewUrl}
                  alt="preview"
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
                Subir Imagen
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
                  background: "rgba(229, 178, 137, 0.1)",
                  color: "var(--primary-color)",
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
          <p
            style={{
              marginTop: "2rem",
              fontSize: "1.3rem",
              color: "#888",
              fontFamily: "Charm",
            }}
          >
            * Tus fotos podrán ser parte de la galería del evento.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default EventPhotoUpload;

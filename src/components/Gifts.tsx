import { useState } from "react";
import { motion } from "framer-motion";
import { HiGift } from "react-icons/hi2";
import Modal from "./Modal";
import "./Gifts.css";

export default function Gifts() {
  const [showGiftsModal, setShowGiftsModal] = useState(false);

  return (
    <section className="gifts section">
      <div className="container">
        <motion.div
          className="gifts-content"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <HiGift className="gifts-icon" />
          <h2>Regalos</h2>
          <p>Si deseas regalarnos algo más que tu hermosa presencia...</p>
          <button
            className="btn btn-primary"
            onClick={() => setShowGiftsModal(true)}
          >
            Ver más
          </button>
        </motion.div>
      </div>

      {showGiftsModal && (
        <Modal onClose={() => setShowGiftsModal(false)}>
          <h2 className="modal-title">Regalos</h2>
          <div className="gifts-modal-content">
            <p style={{ marginBottom: "2rem", textAlign: "center" }}>
              Tu presencia es nuestro mejor regalo, pero si deseas obsequiarnos
              algo, estas son nuestras opciones:
            </p>

            <div className="gift-combined-card">
              <div className="gift-combined-section">
                <div>
                  <h3>🏦 Colectivo Abitab</h3>
                </div>
                <dl>
                  <div>
                    <dt>Nombre</dt>
                    <dd>Boda Carolina Techera y Nicolás Camargo</dd>
                  </div>
                  <div>
                    <dt>Número</dt>
                    <dd>145597</dd>
                  </div>
                </dl>
              </div>

              <div className="gift-divider">
                <span>o</span>
              </div>

              <div className="gift-combined-section">
                <div>
                  <h3>💰 Pix</h3>
                </div>
                <dl>
                  <div>
                    <dt>Clave Pix</dt>
                    <dd>stilonico@gmail.com</dd>
                  </div>
                </dl>
              </div>
            </div>

            <p
              style={{
                marginTop: "2rem",
                fontStyle: "italic",
                textAlign: "center",
                fontSize: "0.95rem",
              }}
            >
              ¡Muchas gracias por tu generosidad!
            </p>
          </div>
        </Modal>
      )}
    </section>
  );
}

import { useState } from 'react'
import { motion } from 'framer-motion'
import { HiMusicalNote, HiSparkles, HiInformationCircle } from 'react-icons/hi2'
import Modal from './Modal'
import './PartyInfo.css'

export default function PartyInfo() {
  const [showDressCodeModal, setShowDressCodeModal] = useState(false)
  const [showTipsModal, setShowTipsModal] = useState(false)

  return (
    <section id="musica" className="party-info section">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          Fiesta
        </motion.h2>
        
        <motion.p
          className="section-subtitle"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          Hagamos juntos una fiesta épica 😎<br />
          Detalles para tener en cuenta:
        </motion.p>

        <div className="party-grid">
          <motion.div
            className="party-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <HiMusicalNote className="party-icon" />
            <h3>Música</h3>
            <p>¿Cuál es la canción que no debe faltar en la PlayList de la fiesta?</p>
            <a
              className="btn btn-primary"
              href="https://docs.google.com/forms/d/e/1FAIpQLSfQe0ApdfFmcaO5-AynmdnS_CD81KRApRtgn56bD2sz8dIRCg/viewform?usp=dialog"
              target="_blank"
              rel="noopener noreferrer"
            >
              Sugerir canción
            </a>
          </motion.div>

          <motion.div
            className="party-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <HiSparkles className="party-icon" />
            <h3>Dress Code</h3>
            <p>Una orientación para tu vestuario</p>
            <button 
              className="btn btn-primary"
              onClick={() => setShowDressCodeModal(true)}
            >
              Ver más
            </button>
          </motion.div>

          <motion.div
            className="party-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <HiInformationCircle className="party-icon" />
            <h3>Tips y Notas</h3>
            <p>Información adicional para tener en cuenta</p>
            <button 
              className="btn btn-primary"
              onClick={() => setShowTipsModal(true)}
            >
              + Info
            </button>
          </motion.div>
        </div>
      </div>

      {showDressCodeModal && (
        <Modal onClose={() => setShowDressCodeModal(false)}>
          <h2 className="modal-title">Dress Code</h2>
          <div className="modal-content-text">
            <p><strong>Elegante / Formal</strong></p>
            <p style={{ marginTop: '1rem' }}>
              Elegante como la ocasión lo merece.
            </p>
            <ul style={{ marginTop: '1rem', textAlign: 'left' }}>
              <li><strong>Hombres:</strong> Traje y corbata</li>
              <li><strong>Mujeres:</strong> Vestido largo o midi</li>
            </ul>
            <p style={{ marginTop: '1rem', fontStyle: 'italic' }}>
              Por favor, evitar el color blanco que está reservado para la novia.
            </p>
          </div>
        </Modal>
      )}

      {showTipsModal && (
        <Modal onClose={() => setShowTipsModal(false)}>
          <h2 className="modal-title">Tips y Notas</h2>
          <div className="modal-content-text">
            <ul style={{ textAlign: 'left', lineHeight: '2' }}>
              <li>🚗 Habrá estacionamiento disponible en el lugar</li>
              <li>📸 Contaremos con fotógrafo profesional</li>
              <li>🎵 La fiesta será con DJ</li>
              <li>💒 La ceremonia comienza puntualmente a las 18:30hs</li>
              <li>🎉 La celebración terminará alrededor de las 7am</li>
              <li>🕶️ No te olvides llevar tus lentes de sol</li>
            </ul>
            <p style={{ marginTop: '1.5rem', fontStyle: 'italic', textAlign: 'center' }}>
              ¡Los esperamos con mucho amor!
            </p>
          </div>
        </Modal>
      )}
    </section>
  )
}


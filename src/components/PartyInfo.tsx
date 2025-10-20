import { useState } from 'react'
import { motion } from 'framer-motion'
import { HiMusicalNote, HiSparkles, HiInformationCircle } from 'react-icons/hi2'
import Modal from './Modal'
import './PartyInfo.css'

export default function PartyInfo() {
  const [showMusicModal, setShowMusicModal] = useState(false)
  const [showDressCodeModal, setShowDressCodeModal] = useState(false)
  const [showTipsModal, setShowTipsModal] = useState(false)
  const [songSuggestion, setSongSuggestion] = useState('')

  const handleSongSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (songSuggestion.trim()) {
      console.log('Song suggestion:', songSuggestion)
      // Aquí iría la lógica para enviar la sugerencia al backend
      setSongSuggestion('')
      setShowMusicModal(false)
      alert('¡Gracias por tu sugerencia!')
    }
  }

  return (
    <section className="party-info section">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Fiesta
        </motion.h2>
        
        <motion.p
          className="section-subtitle"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Hagamos juntos una fiesta épica 😎<br />
          Detalles para tener en cuenta:
        </motion.p>

        <div className="party-grid">
          <motion.div
            className="party-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <HiMusicalNote className="party-icon" />
            <h3>Música</h3>
            <p>¿Cuál es la canción que no debe faltar en la PlayList de la fiesta?</p>
            <button 
              className="btn btn-primary"
              onClick={() => setShowMusicModal(true)}
            >
              Sugerir canción
            </button>
          </motion.div>

          <motion.div
            className="party-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
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
            viewport={{ once: true }}
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

      {showMusicModal && (
        <Modal onClose={() => setShowMusicModal(false)}>
          <h2 className="modal-title">Sugerir Canción</h2>
          <form onSubmit={handleSongSubmit}>
            <input
              type="text"
              className="song-input"
              placeholder="Nombre de la canción y artista"
              value={songSuggestion}
              onChange={(e) => setSongSuggestion(e.target.value)}
              autoFocus
            />
            <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '1rem' }}>
              Enviar sugerencia
            </button>
          </form>
        </Modal>
      )}

      {showDressCodeModal && (
        <Modal onClose={() => setShowDressCodeModal(false)}>
          <h2 className="modal-title">Dress Code</h2>
          <div className="modal-content-text">
            <p><strong>Elegante / Formal</strong></p>
            <p style={{ marginTop: '1rem' }}>
              Les pedimos que vengan con su mejor vestimenta formal. 
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
              <li>🍽️ Menú con opciones vegetarianas disponibles</li>
              <li>🎵 La fiesta será con música en vivo y DJ</li>
              <li>💒 La ceremonia comienza puntualmente a las 17hs</li>
              <li>🎉 La celebración terminará alrededor de las 4am</li>
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


import { useState } from 'react'
import { motion } from 'framer-motion'
import { HiGift } from 'react-icons/hi2'
import Modal from './Modal'
import './Gifts.css'

export default function Gifts() {
  const [showGiftsModal, setShowGiftsModal] = useState(false)

  return (
    <section className="gifts section">
      <div className="container">
        <motion.div
          className="gifts-content"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
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
            <p style={{ marginBottom: '2rem', textAlign: 'center' }}>
              Tu presencia es nuestro mejor regalo, pero si deseas obsequiarnos algo, 
              estas son nuestras opciones:
            </p>

            <div className="gift-option">
              <h3>🏦 Transferencia Bancaria</h3>
              <div className="bank-details">
                <p><strong>Banco:</strong> Banco República (BROU)</p>
                <p><strong>Titular:</strong> Nicolás García</p>
                <p><strong>Cuenta:</strong> 1234567890</p>
                <p><strong>CBU/CVU:</strong> 0170123456789012345678</p>
              </div>
            </div>

            <div className="gift-option">
              <h3>💝 Lista de Regalos</h3>
              <p>También tenemos una lista de regalos en:</p>
              <a 
                href="https://www.falabella.com.uy" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-secondary"
                style={{ marginTop: '1rem' }}
              >
                Ver lista en Falabella
              </a>
            </div>

            <p style={{ marginTop: '2rem', fontStyle: 'italic', textAlign: 'center', fontSize: '0.95rem' }}>
              ¡Muchas gracias por tu generosidad!
            </p>
          </div>
        </Modal>
      )}
    </section>
  )
}


import { useState } from 'react'
import { motion } from 'framer-motion'
import { HiCalendar, HiMapPin, HiCheckCircle } from 'react-icons/hi2'
import Modal from './Modal'
import './EventDetails.css'

export default function EventDetails() {
  const [showConfirmModal, setShowConfirmModal] = useState(false)

  const handleSubmitConfirmation = (attending: boolean) => {
    console.log(`Confirming attendance: ${attending ? 'Yes' : 'No'}`)
    setShowConfirmModal(false)
    // Aquí iría la lógica para enviar la confirmación al backend
  }

  const addToCalendar = () => {
    const event = {
      title: 'Boda de Nico y Caro',
      start: '2025-05-15T17:00:00',
      end: '2025-05-16T01:00:00',
      location: 'Salon de fiestas Avril, Av. Los Reartes 12 - Montevideo'
    }

    // Formato Google Calendar
    const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(event.title)}&dates=${event.start.replace(/[-:]/g, '')}/${event.end.replace(/[-:]/g, '')}&location=${encodeURIComponent(event.location)}`
    window.open(googleCalendarUrl, '_blank')
  }

  return (
    <section className="event-details section">
      <div className="container">
        <motion.div
          className="event-card-single"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="event-icon">
            <HiCalendar />
          </div>
          <h3 className="event-title">Ceremonia y fiesta</h3>
          
          <div className="event-info">
            <div className="info-item">
              <h4>Día</h4>
              <p>Sábado, 15 de Mayo - 17h à 1h</p>
            </div>
            
            <div className="info-item">
              <h4>Lugar</h4>
              <p>Salon de fiestas Avril</p>
            </div>
            
            <div className="info-item">
              <h4>Dirección</h4>
              <p>Av. Los Reartes 12 - Montevideo</p>
            </div>
          </div>

          <div className="event-actions">
            <button
              className="btn btn-primary"
              onClick={() => setShowConfirmModal(true)}
            >
              <HiCheckCircle />
              Confirmar asistencia
            </button>
            
            <button
              className="btn btn-secondary"
              onClick={addToCalendar}
            >
              Agendar
            </button>
            
            <a
              href="https://maps.google.com/?q=Av.+Los+Reartes+12+Montevideo"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
            >
              <HiMapPin />
              ¿Cómo llegar?
            </a>
          </div>
        </motion.div>
      </div>

      {showConfirmModal && (
        <Modal onClose={() => setShowConfirmModal(false)}>
          <h2 className="modal-title">Confirmar Asistencia</h2>
          <p className="modal-text">
            ¿Confirmas tu asistencia a la boda?
          </p>
          <div className="modal-actions">
            <button
              className="btn btn-primary"
              onClick={() => handleSubmitConfirmation(true)}
            >
              ¡Sí, confirmo!
            </button>
            <button
              className="btn btn-secondary"
              onClick={() => handleSubmitConfirmation(false)}
            >
              No puedo :(
            </button>
          </div>
        </Modal>
      )}
    </section>
  )
}

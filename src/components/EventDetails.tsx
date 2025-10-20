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
      start: '2026-01-17T17:00:00',
      end: '2026-01-18T07:00:00',
      location: 'La Chacra Policial Rivera, Rivera, Uruguay'
    }

    // Formato Google Calendar
    const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(event.title)}&dates=${event.start.replace(/[-:]/g, '')}/${event.end.replace(/[-:]/g, '')}&location=${encodeURIComponent(event.location)}`
    window.open(googleCalendarUrl, '_blank')
  }

  return (
    <section id="ceremonia" className="event-details section">
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
              <p>Sábado, 17 de Enero - 17h à 1h</p>
            </div>
            
            <div className="info-item">
              <h4>Lugar</h4>
              <p>La Chacra Policial Rivera</p>
            </div>
            
            <div className="info-item">
              <h4>Dirección</h4>
              <p>Rivera, Uruguay</p>
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
              href="https://www.google.com/maps/place/Chacra+Policial+Rivera/@-30.9391022,-55.4942279,17z/data=!3m1!4b1!4m6!3m5!1s0x95a9fd882b01f091:0x9dcda1ec96fa86d4!8m2!3d-30.9391022!4d-55.491653!16s%2Fg%2F11c5h2cz6x"
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

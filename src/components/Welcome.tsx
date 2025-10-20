import { motion } from 'framer-motion'
import { HiMusicalNote, HiSpeakerXMark } from 'react-icons/hi2'
import './Welcome.css'

interface WelcomeProps {
  onEnter: (withMusic: boolean) => void
}

export default function Welcome({ onEnter }: WelcomeProps) {
  return (
    <motion.div
      className="welcome-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="welcome-content">
        <motion.h1
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Bienvenidos a la invitación de
        </motion.h1>
        
        <motion.h2
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          Nico & Caro
        </motion.h2>

        <motion.p
          className="welcome-subtitle"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          La música de fondo es parte de la experiencia
        </motion.p>

        <motion.div
          className="welcome-buttons"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.6 }}
        >
          <button
            className="btn btn-welcome"
            onClick={() => onEnter(true)}
          >
            <HiMusicalNote />
            <span>Ingresar con música</span>
          </button>
          
          <button
            className="btn btn-welcome-alt"
            onClick={() => onEnter(false)}
          >
            <HiSpeakerXMark />
            <span>Ingresar sin música</span>
          </button>
        </motion.div>
      </div>
    </motion.div>
  )
}


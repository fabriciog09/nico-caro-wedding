import { motion } from 'framer-motion'
import { HiCamera } from 'react-icons/hi2'
import { FaInstagram } from 'react-icons/fa'
import './SharePhotos.css'

export default function SharePhotos() {
  return (
    <section className="share-photos section">
      <div className="container">
        <motion.div
          className="share-content"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <HiCamera className="share-icon" />
          <h2>Compartimos este día junto a vos</h2>
          <p>Compartí tus fotos y videos de ese hermoso día</p>
          
          <div className="hashtag">
            <span className="hashtag-symbol">#</span>
            <span className="hashtag-text">nicoycaro</span>
          </div>

          <a
            href="https://instagram.com/explore/tags/nicoycaro"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline instagram-btn"
          >
            <FaInstagram size={24} />
            Ver en Instagram
          </a>
        </motion.div>
      </div>
    </section>
  )
}


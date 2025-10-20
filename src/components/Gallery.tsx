import { motion } from 'framer-motion'
import './Gallery.css'

export default function Gallery() {
  // Placeholder images - en producción estas serían las fotos reales de la pareja
  const photos = [
    { id: 1, url: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=600&h=800&fit=crop' },
    { id: 2, url: 'https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=600&h=800&fit=crop' },
    { id: 3, url: 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=600&h=800&fit=crop' },
    { id: 4, url: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=600&h=800&fit=crop' },
    { id: 5, url: 'https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=600&h=800&fit=crop' },
    { id: 6, url: 'https://images.unsplash.com/photo-1530047625168-4b29bfbbe1fc?w=600&h=800&fit=crop' }
  ]

  return (
    <section className="gallery section">
      <div className="container">
        <motion.div
          className="gallery-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2>Un pedacito de nosotros ✨</h2>
        </motion.div>

        <div className="gallery-grid">
          {photos.map((photo, index) => (
            <motion.div
              key={photo.id}
              className="gallery-item"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <img src={photo.url} alt={`Foto ${photo.id}`} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}


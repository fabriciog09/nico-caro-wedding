import { motion } from 'framer-motion'
import './Gallery.css'

export default function Gallery() {
  const photos = [
    { id: 1, url: '/images/nosotors-1.jpeg' },
    { id: 2, url: '/images/nosotros-2.jpeg' },
    { id: 3, url: '/images/nosotros-3.jpeg' },
    { id: 4, url: '/images/nosotros-4.jpeg' },
    { id: 5, url: '/images/nosotros-5.jpeg' },
    { id: 6, url: '/images/nosotros-6.jpeg' }
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


import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { FaInstagram } from 'react-icons/fa'
import './SharePhotos.css'

export default function SharePhotos() {
  const [offsetY, setOffsetY] = useState(0)
  const parallaxRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (parallaxRef.current) {
        const rect = parallaxRef.current.getBoundingClientRect()
        const scrollProgress = -rect.top / (rect.height + window.innerHeight)
        const offset = scrollProgress * rect.height
        setOffsetY(offset)
      }
    }

    handleScroll() // Llamar una vez al montar
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section className="share-photos section" ref={parallaxRef}>
      <div 
        className="share-photos-background" 
        style={{ transform: `translateY(${offsetY * 0.5}px)` }}
      />
      <div className="share-photos-overlay" />
      
      <div className="container share-photos-container">
        <motion.div
          className="share-content"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="title">Compartimos este día junto a vos</h2>
          <p className="subtitle">Compartí tus fotos y videos de ese hermoso día</p>
          
          <div className="icon-wrapper">
            <FaInstagram className="instagram-icon" />
          </div>
          
          <a
            href="https://www.instagram.com/explore/tags/nicoycaro"
            target="_blank"
            rel="noopener noreferrer"
            className="hashtag"
          >
            #nicoycaro
          </a>

          <a
            href="https://www.instagram.com/explore/tags/nicoycaro"
            target="_blank"
            rel="noopener noreferrer"
            className="boton"
          >
            Ver en Instagram
          </a>
        </motion.div>
      </div>
    </section>
  )
}


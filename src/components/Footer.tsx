import { HiHeart, HiCalendar, HiMapPin, HiMusicalNote } from 'react-icons/hi2'
import './Footer.css'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-names">
            <h3>Nico & Caro</h3>
          </div>

          <div className="footer-links">
            <a href="#ceremonia" className="footer-link">
              <HiCalendar />
              <span>Confirmar asistencia a ceremonia</span>
            </a>
            <a href="#celebracion" className="footer-link">
              <HiCalendar />
              <span>Confirmar asistencia a celebración</span>
            </a>
            <a href="#musica" className="footer-link">
              <HiMusicalNote />
              <span>Sugerir canción</span>
            </a>
          </div>

          <div className="footer-divider"></div>

          <div className="footer-bottom">
            <p className="footer-date">
              <HiMapPin /> Montevideo, Uruguay • 15 de Mayo 2025
            </p>
            <button onClick={scrollToTop} className="back-to-top">
              ↑
            </button>
          </div>

          <p className="footer-credit">
            Desarrollado con <HiHeart className="heart" /> por los novios
          </p>
        </div>
      </div>
    </footer>
  )
}


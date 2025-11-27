import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import "./Hero.css";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function Hero() {
  const targetDate = "2026-01-17T17:00:00";
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [offsetY, setOffsetY] = useState(0);
  const parallaxRef = useRef<HTMLDivElement>(null);

  // Contador regresivo
  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = +new Date(targetDate) - +new Date();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  // Efecto Parallax
  useEffect(() => {
    const handleScroll = () => {
      setOffsetY(window.pageYOffset);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="hero" ref={parallaxRef}>
      <div className="hero-layout">
        <div
          className="hero-visual"
          style={{
            transform: `translateY(${offsetY * 0.2}px)`,
          }}
        >
          <div className="hero-visual-overlay" />
        </div>

        <div className="hero-panel">
          <div className="hero-floral-layer">
            <picture>
              <source
                type="image/webp"
                srcSet="https://fixdate.io/modelo-invitacion/57/img/flores_Grupo01_A.webp"
              />
              <source
                type="image/png"
                srcSet="https://fixdate.io/modelo-invitacion/57/img/flores_Grupo01_A.png"
              />
              <img
                className="hero-flower hero-flower-1"
                src="https://fixdate.io/modelo-invitacion/57/img/flores_Grupo01_A.png"
                alt=""
                loading="lazy"
              />
            </picture>

            <picture>
              <source
                type="image/webp"
                srcSet="https://fixdate.io/modelo-invitacion/57/img/flores_Grupo01_B.webp"
              />
              <source
                type="image/png"
                srcSet="https://fixdate.io/modelo-invitacion/57/img/flores_Grupo01_B.png"
              />
              <img
                className="hero-flower hero-flower-2"
                src="https://fixdate.io/modelo-invitacion/57/img/flores_Grupo01_B.png"
                alt=""
                loading="lazy"
              />
            </picture>

            <picture>
              <source
                type="image/webp"
                srcSet="https://fixdate.io/modelo-invitacion/57/img/flores_Grupo01_C.webp"
              />
              <source
                type="image/png"
                srcSet="https://fixdate.io/modelo-invitacion/57/img/flores_Grupo01_C.png"
              />
              <img
                className="hero-flower hero-flower-3"
                src="https://fixdate.io/modelo-invitacion/57/img/flores_Grupo01_C.png"
                alt=""
                loading="lazy"
              />
            </picture>

            <picture>
              <source
                type="image/webp"
                srcSet="https://fixdate.io/modelo-invitacion/57/img/flores_Grupo01_D.webp"
              />
              <source
                type="image/png"
                srcSet="https://fixdate.io/modelo-invitacion/57/img/flores_Grupo01_D.png"
              />
              <img
                className="hero-flower hero-flower-4"
                src="https://fixdate.io/modelo-invitacion/57/img/flores_Grupo01_D.png"
                alt=""
                loading="lazy"
              />
            </picture>

            <picture>
              <source
                type="image/webp"
                srcSet="https://fixdate.io/modelo-invitacion/57/img/flores_Grupo01_E.webp"
              />
              <source
                type="image/png"
                srcSet="https://fixdate.io/modelo-invitacion/57/img/flores_Grupo01_E.png"
              />
              <img
                className="hero-flower hero-flower-5"
                src="https://fixdate.io/modelo-invitacion/57/img/flores_Grupo01_E.png"
                alt=""
                loading="lazy"
              />
            </picture>
          </div>

          <motion.div
            className="hero-card"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
          >
            <motion.span
              className="hero-date-pill"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              17 · 01 · 2026
            </motion.span>

            <motion.div
              className="hero-names"
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h1 className="name">Nico</h1>
              <span className="ampersand">&</span>
              <h1 className="name">Caro</h1>
            </motion.div>

            <motion.div
              className="hero-quote"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
            >
              <p>
                <span className="quote-mark">“</span>
                Con la bendición de Dios y el cariño de nuestras familias, tenemos la alegría de invitarte a celebrar nuestra unión.
                <span className="quote-mark">”</span>
              </p>
            </motion.div>

            <motion.div
              className="hero-countdown"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <p className="countdown-label">Falta</p>
              <div className="countdown-grid">
                <div className="countdown-item">
                  <div className="countdown-value">
                    {String(timeLeft.days).padStart(2, "0")}
                  </div>
                  <div className="countdown-unit">días</div>
                </div>
                <div className="countdown-item">
                  <div className="countdown-value">
                    {String(timeLeft.hours).padStart(2, "0")}
                  </div>
                  <div className="countdown-unit">hs</div>
                </div>
                <div className="countdown-item">
                  <div className="countdown-value">
                    {String(timeLeft.minutes).padStart(2, "0")}
                  </div>
                  <div className="countdown-unit">min</div>
                </div>
                <div className="countdown-item">
                  <div className="countdown-value">
                    {String(timeLeft.seconds).padStart(2, "0")}
                  </div>
                  <div className="countdown-unit">seg</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <motion.div
        className="hero-scroll"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
      >
        <div className="scroll-indicator">
          <span></span>
        </div>
      </motion.div>
    </section>
  );
}

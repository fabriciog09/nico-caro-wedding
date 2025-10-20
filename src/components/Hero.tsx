import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./Hero.css";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function Hero() {
  const targetDate = "2025-05-15T17:00:00";
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

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

  return (
    <section className="hero">
      <div className="hero-background">
        <div className="hero-overlay"></div>
      </div>

      <div className="hero-content">
        <motion.div
          className="hero-date"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          15.05.2025
        </motion.div>

        <motion.div
          className="hero-names"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <h1 className="name">Nico</h1>
          <span className="ampersand">&</span>
          <h1 className="name">Caro</h1>
        </motion.div>

        <motion.div
          className="hero-countdown"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <p className="countdown-label">Faltan</p>
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
      </div>
      <motion.div
        className="hero-scroll"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.2 }}
      >
        <div className="scroll-indicator">
          <span></span>
        </div>
      </motion.div>
    </section>
  );
}

import { motion } from "framer-motion";
import { HiCalendar, HiMapPin, HiCheckCircle } from "react-icons/hi2";
import "./EventDetails.css";

export default function EventDetails() {
  const addToCalendar = () => {
    const event = {
      title: "Boda de Nico y Caro",
      start: "2026-01-17T17:00:00",
      end: "2026-01-18T07:00:00",
      location: "La Chacra Policial Rivera, Rivera, Uruguay",
    };

    // Formato Google Calendar
    const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
      event.title
    )}&dates=${event.start.replace(/[-:]/g, "")}/${event.end.replace(
      /[-:]/g,
      ""
    )}&location=${encodeURIComponent(event.location)}`;
    window.open(googleCalendarUrl, "_blank");
  };

  return (
    <section id="ceremonia" className="event-details section">
      <div className="container">
        <div className="event-cards-grid">
          <motion.div
            className="event-card-single"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
          >
            <div className="event-icon">
              <HiCalendar />
            </div>
            <h3 className="event-title">Ceremonia Civil</h3>

            <div className="event-info">
              <div className="info-item">
                <h4>Día</h4>
                <p>Jueves, 15 de Enero - 14:00hs</p>
              </div>

              <div className="info-item">
                <h4>Dirección</h4>
                <p>18 de Julio esq. Fructuoso Rivera N° 578</p>
              </div>

              <div className="info-item">
                <h4>Ciudad</h4>
                <p>Tranqueras - Rivera</p>
              </div>
            </div>
            <div className="event-actions">
              <a
                href="https://www.google.com/maps/place/18+de+Julio+%26+General+Fructuoso+Rivera,+40100+Tranqueras,+Departamento+de+Rivera/@-31.189997,-55.7681723,19z/data=!4m6!3m5!1s0x95a9ebd1c081f2d9:0xf75a971a5c1ec011!8m2!3d-31.1898778!4d-55.7672952!16s%2Fg%2F11h9x1y_hz?entry=tts&g_ep=EgoyMDI1MTExNy4wIPu8ASoASAFQAw%3D%3D&skid=b220a9db-c34c-459a-a19e-0d77898c1266"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
              >
                <HiMapPin />
                ¿Cómo llegar?
              </a>
            </div>
          </motion.div>

          <motion.div
            className="event-card-single"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.55, delay: 0.15, ease: "easeOut" }}
          >
            <div className="event-icon">
              <HiCalendar />
            </div>
            <h3 className="event-title">Ceremonia y fiesta</h3>

            <div className="event-info">
              <div className="info-item">
                <h4>Día</h4>
                <p>Sábado, 17 de Enero - 18:30hs</p>
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
              <a
                className="btn btn-primary"
                href="https://docs.google.com/forms/d/e/1FAIpQLSfmkxp9mmPs8E1D95h6Pi2SUms8WB959ji6eYUnmv_KbcCNLg/viewform"
                target="_blank"
                rel="noopener noreferrer"
              >
                <HiCheckCircle />
                Confirmar asistencia
              </a>

              <button className="btn btn-secondary" onClick={addToCalendar}>
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
      </div>

    </section>
  );
}

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiSpeakerWave, HiSpeakerXMark } from 'react-icons/hi2'
import './MusicPlayer.css'

interface MusicPlayerProps {
  isPlaying: boolean
}

export default function MusicPlayer({ isPlaying: initialIsPlaying }: MusicPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(initialIsPlaying)
  const [isLoaded, setIsLoaded] = useState(false)
  const iframeRef = useRef<HTMLIFrameElement>(null)

  // URL del video de YouTube (puedes cambiar esto)
  // Formato: https://www.youtube.com/embed/VIDEO_ID?autoplay=1&loop=1&playlist=VIDEO_ID&controls=0
  const musicUrl = 'https://www.youtube.com/embed/_-sfvr5Sk6A?autoplay=1&loop=1&playlist=_-sfvr5Sk6A&controls=0&showinfo=0&rel=0&modestbranding=1'

  useEffect(() => {
    setIsPlaying(initialIsPlaying)
  }, [initialIsPlaying])

  const toggleMusic = () => {
    if (iframeRef.current) {
      if (isPlaying) {
        // Pausar: enviar mensaje al iframe de YouTube
        iframeRef.current.contentWindow?.postMessage(
          '{"event":"command","func":"pauseVideo","args":""}',
          '*'
        )
      } else {
        // Reproducir: enviar mensaje al iframe de YouTube
        iframeRef.current.contentWindow?.postMessage(
          '{"event":"command","func":"playVideo","args":""}',
          '*'
        )
      }
    }
    setIsPlaying(!isPlaying)
  }

  const handleLoad = () => {
    setIsLoaded(true)
  }

  if (!initialIsPlaying && !isPlaying) {
    return null
  }

  return (
    <>
      {/* Iframe oculto para reproducir música */}
      <iframe
        ref={iframeRef}
        src={isPlaying ? musicUrl : ''}
        allow="autoplay; encrypted-media"
        style={{ display: 'none' }}
        onLoad={handleLoad}
        title="Background Music"
      />

      {/* Botón flotante para controlar la música */}
      <AnimatePresence>
        {isLoaded && (
          <motion.button
            className="music-toggle"
            onClick={toggleMusic}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ duration: 0.3, delay: 1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label={isPlaying ? 'Pausar música' : 'Reproducir música'}
          >
            <motion.div
              className="music-icon-wrapper"
              animate={{
                rotate: isPlaying ? [0, 10, -10, 0] : 0,
              }}
              transition={{
                duration: 0.5,
                repeat: isPlaying ? Infinity : 0,
                repeatDelay: 2,
              }}
            >
              {isPlaying ? (
                <HiSpeakerWave className="music-icon playing" />
              ) : (
                <HiSpeakerXMark className="music-icon" />
              )}
            </motion.div>
          </motion.button>
        )}
      </AnimatePresence>
    </>
  )
}


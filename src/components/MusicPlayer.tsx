import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiSpeakerWave, HiSpeakerXMark } from 'react-icons/hi2'
import './MusicPlayer.css'

interface MusicPlayerProps {
  isPlaying: boolean
}

const YOUTUBE_VIDEO_ID = 'XMPgVZtADtQ'

export default function MusicPlayer({ isPlaying: initialIsPlaying }: MusicPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(initialIsPlaying)
  const [isLoaded, setIsLoaded] = useState(false)
  const iframeRef = useRef<HTMLIFrameElement>(null)

  // URL del video de YouTube (con parámetros para autoplay/loop y control vía API)
  // Formato: https://www.youtube.com/embed/VIDEO_ID?autoplay=1&loop=1&playlist=VIDEO_ID&controls=0
  const originParam =
    typeof window !== 'undefined' ? encodeURIComponent(window.location.origin) : ''
  const musicUrl = `https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}?autoplay=1&loop=1&playlist=${YOUTUBE_VIDEO_ID}&controls=0&showinfo=0&rel=0&modestbranding=1&enablejsapi=1${
    originParam ? `&origin=${originParam}` : ''
  }`

  const sendPlayerCommand = (func: string, args: unknown = '') => {
    iframeRef.current?.contentWindow?.postMessage(
      JSON.stringify({ event: 'command', func, args }),
      '*'
    )
  }

  useEffect(() => {
    setIsPlaying(initialIsPlaying)
  }, [initialIsPlaying])

  const toggleMusic = () => {
    if (iframeRef.current) {
      if (isPlaying) {
        sendPlayerCommand('pauseVideo')
      } else {
        sendPlayerCommand('unMute')
        sendPlayerCommand('playVideo')
      }
    }
    setIsPlaying(!isPlaying)
  }

  const handleLoad = () => {
    setIsLoaded(true)
    if (isPlaying) {
      sendPlayerCommand('unMute')
      sendPlayerCommand('playVideo')
    }
  }

  if (!initialIsPlaying && !isPlaying) {
    return null
  }

  return (
    <>
      {/* Iframe oculto para reproducir música */}
      <iframe
        ref={iframeRef}
        src={isPlaying ? musicUrl : undefined}
        allow="autoplay; encrypted-media; picture-in-picture"
        allowFullScreen
        style={{
          position: 'absolute',
          width: 0,
          height: 0,
          opacity: 0,
          pointerEvents: 'none',
        }}
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


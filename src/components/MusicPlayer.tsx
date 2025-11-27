import { useState, useEffect, useRef, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiSpeakerWave, HiSpeakerXMark } from 'react-icons/hi2'
import './MusicPlayer.css'

interface MusicPlayerProps {
  isPlaying: boolean
}

const YOUTUBE_VIDEO_ID = '3wxyN3z9PL4'
const START_SECONDS = 22
const DEFAULT_ORIGIN = 'https://nico-caro-wedding.vercel.app'

export default function MusicPlayer({ isPlaying: initialIsPlaying }: MusicPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(initialIsPlaying)
  const [isLoaded, setIsLoaded] = useState(false)
  const [pendingPlayIntent, setPendingPlayIntent] = useState(false)
  const iframeRef = useRef<HTMLIFrameElement>(null)

  const currentOrigin =
    typeof window !== 'undefined' && window.location?.origin?.startsWith('http')
      ? window.location.origin
      : DEFAULT_ORIGIN

  const originParam = encodeURIComponent(currentOrigin)
  const musicUrl = `https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}?autoplay=1&loop=1&playlist=${YOUTUBE_VIDEO_ID}&controls=0&showinfo=0&rel=0&modestbranding=1&enablejsapi=1&mute=1&start=${START_SECONDS}&origin=${originParam}`

  const sendPlayerCommand = (func: string, args: unknown = '') => {
    iframeRef.current?.contentWindow?.postMessage(
      JSON.stringify({ event: 'command', func, args }),
      '*'
    )
  }

  const seekToStart = useCallback(() => {
    sendPlayerCommand('seekTo', [START_SECONDS, true])
  }, [])

  const playVideo = useCallback(() => {
    sendPlayerCommand('playVideo')
    sendPlayerCommand('unMute')
    seekToStart()
    setIsPlaying(true)
    setPendingPlayIntent(false)
  }, [seekToStart])

  const pauseVideo = useCallback(() => {
    sendPlayerCommand('pauseVideo')
    setIsPlaying(false)
  }, [])

  const toggleMusic = () => {
    if (isPlaying) {
      pauseVideo()
    } else {
      playVideo()
    }
  }

  const handleLoad = () => {
    setIsLoaded(true)
    if (pendingPlayIntent || isPlaying) {
      playVideo()
    } else {
      pauseVideo()
    }
  }

  useEffect(() => {
    if (typeof window === 'undefined') return

    const handlePlayIntent = () => {
      if (isLoaded) {
        playVideo()
      } else {
        setPendingPlayIntent(true)
      }
    }

    const handlePauseIntent = () => {
      setPendingPlayIntent(false)
      pauseVideo()
    }

    window.addEventListener('music-play-intent', handlePlayIntent)
    window.addEventListener('music-pause-intent', handlePauseIntent)

    return () => {
      window.removeEventListener('music-play-intent', handlePlayIntent)
      window.removeEventListener('music-pause-intent', handlePauseIntent)
    }
  }, [isLoaded, pauseVideo, playVideo])

  return (
    <>
      {/* Iframe oculto para reproducir música */}
      <iframe
        ref={iframeRef}
        src={musicUrl}
        allow="autoplay; encrypted-media; picture-in-picture"
        allowFullScreen
        width={10}
        height={10}
        style={{
          position: 'absolute',
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


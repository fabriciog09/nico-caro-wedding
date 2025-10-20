import { useState } from 'react'
import Welcome from './components/Welcome'
import Hero from './components/Hero'
import EventDetails from './components/EventDetails'
import Gallery from './components/Gallery'
import PartyInfo from './components/PartyInfo'
import Gifts from './components/Gifts'
import SharePhotos from './components/SharePhotos'
import Footer from './components/Footer'
import MusicPlayer from './components/MusicPlayer'
import './App.css'

function App() {
  const [showWelcome, setShowWelcome] = useState(true)
  const [playMusic, setPlayMusic] = useState(false)

  const handleEnter = (withMusic: boolean) => {
    setPlayMusic(withMusic)
    setShowWelcome(false)
  }

  if (showWelcome) {
    return <Welcome onEnter={handleEnter} />
  }

  return (
    <div className="app">
      <MusicPlayer isPlaying={playMusic} />
      <Hero />
      <EventDetails />
      <Gallery />
      <PartyInfo />
      <Gifts />
      <SharePhotos />
      <Footer />
    </div>
  )
}

export default App

import { useState } from 'react'
import Welcome from './components/Welcome'
import Hero from './components/Hero'
import EventDetails from './components/EventDetails'
import Gallery from './components/Gallery'
import PartyInfo from './components/PartyInfo'
import Gifts from './components/Gifts'
import SharePhotos from './components/SharePhotos'
import Footer from './components/Footer'
import './App.css'

function App() {
  const [showWelcome, setShowWelcome] = useState(true)

  const handleEnter = () => {
    setShowWelcome(false)
  }

  if (showWelcome) {
    return <Welcome onEnter={handleEnter} />
  }

  return (
    <div className="app">
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

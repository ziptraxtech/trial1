import { useState } from 'react'
import Navbar from './components/Navbar'
import NotificationBar from './components/NotificationBar'
import Hero from './components/Hero'
import Services from './components/Services'
import Mission from './components/Mission'
import Goals from './components/Goals'
import WhoAreWe from './components/WhoAreWe'
import FounderNote from './components/FounderNote'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <NotificationBar />
      <Navbar />
      <Hero />
      <WhoAreWe />
      <Mission />
      <Services />
      <FounderNote />
      <Goals />
      <Footer />
    </div>
  )
}

export default App

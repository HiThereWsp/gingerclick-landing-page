import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Experience from './components/Experience'
import Philosophy from './components/Philosophy'
import Protocol from './components/Protocol'
import GetStarted from './components/GetStarted'
import Footer from './components/Footer'

gsap.registerPlugin(ScrollTrigger)

export default function App() {
  useEffect(() => {
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener('click', (e) => {
        e.preventDefault()
        const target = document.querySelector(anchor.getAttribute('href'))
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' })
        }
      })
    })

    // Refresh ScrollTrigger after all content loads
    ScrollTrigger.refresh()
  }, [])

  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <Experience />
      <Philosophy />
      <Protocol />
      <GetStarted />
      <Footer />
    </>
  )
}

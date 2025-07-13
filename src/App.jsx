import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Components/Header'
import About from './Components/About'
import Skills from './Components/Skills'
import Projects from './Components/Projects'
import Contact from './Components/Contact'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react'

function App() {

  useEffect(() => {
  AOS.init({
    duration: 1000, // animation duration
    once: false,    // animate only once
    mirror: false,
    easing: 'ease-in-out',
  });
}, []);

  return (
    <>
      <Header />
      <About />
      <Skills />
      <Projects />
      <Contact />

    </>
  )
}

export default App

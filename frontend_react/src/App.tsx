import React from 'react'
import './App.scss'
import {About, Footer, Header, Projects, Skills, Testimonials, Experiences } from './containter'
import {Navbar} from './components'

function App() {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <About />
      <Projects />
      <Experiences />
      <Skills />
      <Testimonials />
      <Footer />
    </div>
  )
}

export default App

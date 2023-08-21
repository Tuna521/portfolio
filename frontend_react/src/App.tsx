import React from 'react'
import {About, Footer, Header, Projects, Skills, Testimonials, Experiences } from './containter'

function App() {
  return (
    <div className="app">
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

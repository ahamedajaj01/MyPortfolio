import React from 'react'
import Contact from "../section/Contact";
import Hero from '../section/Hero';
import Projects from '../section/Projects';
import About from '../section/About';
import Experience from '../section/Experience';


function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <Projects />
      <Experience />
      <About />
      <Contact />
    </div>
  )
}

export default Home

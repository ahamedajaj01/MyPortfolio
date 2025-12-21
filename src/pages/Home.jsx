import React from 'react'
import Contact from "../section/Contact";
import Hero from '../section/Hero';
import Projects from '../section/Projects';
import About from '../section/About';


function Home() {
  return (
    <>
    <Hero/>
    <hr/>
    <Projects/>
    <hr/>
    <About/>
    <hr/>
      <Contact/>
    </>
  )
}

export default Home

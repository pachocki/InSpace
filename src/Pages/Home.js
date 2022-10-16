import React from 'react'
import { useRef } from "react";
import ScrollTop from '../Components/ScrollTop/ScrollTop';
import Hero from '../Components/Hero/Hero'
import About from '../Components/About/About'
import Services from '../Components/Services/Services'
import Sentence from '../Components/Sentence/Sentence'
import Footer from '../Components/Footer/Footer'

import DestinationSection from '../Components/Destinations Section/DestinationSection'

const Home = () => {
  const resultRef = useRef(null);
  return (
    <div className="bg-black/40 backdrop-blur-xl">
    <Hero resultRef={resultRef}/>
     <About/>
     <Services/>
      <Sentence/>
      <DestinationSection/>
      <Footer ref={resultRef}/>
      <ScrollTop/>
    </div>
  )
}

export default Home

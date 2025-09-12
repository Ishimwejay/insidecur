
import React, {  useState } from 'react'
import Navbar from './components/NavBar/NavBar'
import Hero from './components/Hero/Hero'
import Programs from './components/programs/Programs'
import Title from './components/Title/Title'
import About from './components/About/About'
import Compus from './components/compus/Compus'
import Testmonies from './components/Testmonies/Testmonies'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import VideoPlayer from './components/Videoplayer/VideoPlayer'



const App = () => {
  const[playState, setPlayState] = useState(false);
  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className="container">
        <Title subTitle='Our PROGRAM' title='What We Offer'/>
        <Programs/>
        <About setPlayState={setPlayState}/>
        <Title subTitle='Galley' title='Campus Photo'/>
        <Compus/>
        <Title subTitle='TESTMONIES' title='What Student Says'/>
        <Testmonies/>
        <Title subTitle='Contact Us' title='Get in Touch'/>
        <Contact/>
        <Footer/>
      </div>
      <VideoPlayer playState={playState} setPlayState={setPlayState}/>
    </div>
  )
}

export default App

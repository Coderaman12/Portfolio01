import React from 'react'
import Navbar from './components/Navbar'
import Landing from './components/Landing'
import Marquee from './components/Marquee'
import About from './components/About'
import Eye from './components/Eye'
import Featured from './components/Featured'
import Cards from './components/Cards'
import Footer from './components/Footer'
import LocomotiveScroll from 'locomotive-scroll';


const App = () => {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <div className='width-screen bg-zinc-200 min-h-[100vh]'>
      <Navbar/>
      <Landing/>
      <Marquee/>
      <About/>
      <Eye/>
      <Featured/>
      <Cards/>
      <Footer/>
    </div>
  )
}

export default App

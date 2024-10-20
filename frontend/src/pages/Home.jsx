import React from 'react'
import Hero from '../components/Hero/Hero'
import Approach from '../components/Approach/Approach'
import Services from '../components/Services/Services'
import Steps from '../components/Steps/Steps'
import Faq from '../components/FAQ/Faq'
import Footer from '../components/Footer/Footer'
import Register from '../components/Register/Register'
import RegisterContextProvider from '../context/RegisterContext'

const Home = () => {
  return (
    <>
      <RegisterContextProvider >
        <Hero />
        <Approach />
        <Services />
        <Steps />
        <Register />
        <Faq />
        <Footer />
      </RegisterContextProvider>
    </>
  )
}

export default Home

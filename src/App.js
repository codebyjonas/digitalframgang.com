import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import Why from './components/Why'
import AboutUs from './components/AboutUs'
import './App.scss'
import Footer from './components/Footer'
import SubHero from './components/SubHero'
import Contact from './components/Contact'
import PriceInfo from './components/PriceInfo'
import References from './components/References'
import OurProcess from './components/OurProcess'

const App = () => (
    <>
        <Header />
        <Hero />
        <Services />
        <Why />
        <References />
        <SubHero />
        <OurProcess/>
        <AboutUs />
        <PriceInfo></PriceInfo>
        <Contact />
        <Footer />
    </>
)

export default App

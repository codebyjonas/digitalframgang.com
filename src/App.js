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

const App = () => (
    <>
        <Header />
        <Hero />
        <Services />
        <Why />
        <SubHero />
        <AboutUs />
        <PriceInfo></PriceInfo>
        <Contact />
        <Footer />
    </>
)

export default App

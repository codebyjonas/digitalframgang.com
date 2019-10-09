import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import Why from './components/Why'
import AboutUs from './components/AboutUs'
import './App.scss'
import Footer from './components/Footer'
import SubHero from './components/SubHero'
import Whatwedo from './components/Whatwedo'
import Contact from './components/Contact'

const App = () => (
    <>
        <Header />
        <Hero />
        <Services />
        <Why />
        <SubHero />
        <Whatwedo/>
        <AboutUs />
        <Contact />
        <Footer />
    </>
)

export default App

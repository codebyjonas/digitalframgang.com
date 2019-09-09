import React from 'react'
import { Link} from 'react-scroll'

const Hero = () => (
    <section className='hero is-bold is-fullheight'>
        <div className='hero-body'>
            <div className='container has-text-centered'>
                <h1 id='hero-title' className='title is-1 is-white'>Digital Framgång</h1>
                <h2 id='hero-subtitle' className='subtitle is-2 is-white large-spacing'>
                    Vi hjälper er att förbättra er digitala
                    närvaro och öka er
                    försäljning
                </h2>
                <div id='hero-buttons' className='buttons'>
                    <Link id="tell-me-more-button" className='button is-link is-large'
                        to="services"
                        smooth={true}
                        duration={500}
                        activeClass='is-active'
                        spy={true}>
                        Läs mer
                    </Link>
                    <Link id="contact-us-button" className='button is-link is-large'
                        to="contact-us"
                        smooth={true}
                        duration={500}
                        activeClass='is-active'
                        spy={true}>
                        Bli kontaktad
                    </Link>

                </div>
            </div>
        </div>
    </section>
)

export default Hero

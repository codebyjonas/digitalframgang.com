import React from 'react'
import { links } from '../assets/Consts'
import { Link } from 'react-scroll'

const Footer = () => (
    <footer className='section is-small'>
        <div className='content container is-fluid'>
            <div className='columns'>
                <div className='column'>
                    <h4 className='is-title is-4 has-blue-sidebar'>
                        Digital Framgång
                    </h4>
                    <p>
                        Genom att kombinera våra kunskaper inom webbutveckling
                        och företagande kan vi på Digital Framgång hjälpa ert
                        företag att nå ut bättre på internet. Våra
                        kontaktuppgifter finns nedan, vi hörs!
                    </p>
                </div>
                <div className='column menu'>
                    <h4 className='is-title is-4 has-blue-sidebar'>Meny</h4>
                    {links.map(link => (
                        <Link
                            key={link.link}
                            to={link.link}
                            smooth={true}
                            duration={500}
                            activeClass='is-active'
                            spy={true}
                        >
                            {link.displayName}
                        </Link>
                    ))}
                </div>
            </div>
            <div className='has-text-centered'>
                <span>
                    559225-7090 | Vallavägen 6 | 58215 | Linköping |
                    hej@digitalframgang.com | 073 896 92 09
                </span>
            </div>
        </div>
    </footer>
)

export default Footer

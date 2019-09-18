import React from 'react'
import { Link } from 'react-scroll'

const SubHero = () => (
    <section id="subhero" className='hero is-info is-large'>
        <div className='hero-body'>
            <div className='container'>
                <h1 className='title is-3'>Vill du höra mer?</h1>
                <div className='buttons'>
                    <div id='hero-button' className='buttons'>
                        <Link
                            className='button is-link'
                            to='contact-us'
                            smooth={true}
                            duration={500}
                            activeClass='is-active'
                            spy={true}
                        >
                            Bli kontaktad
                        </Link>
                    </div>
                </div>
                <div id="subhero-block-1"></div>
                <div id="subhero-block-2"></div>
            </div>
        </div>
    </section>
)

export default SubHero

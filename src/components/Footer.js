import React from 'react'

// Only for keep in Build / Jonas
import Email from '../assets/email-signature-logo.png'

const Footer = () => (
    <footer className='section is-small'>
        <div className='content has-text-centered'>
            <div className='columns'>
                <div className='column'>
                    <strong>@ 2019 Digital Framgång</strong>
                </div>
                <div className='column'>
                    <strong>Adress</strong>
                    <p className='no-margin-bot'>Vallavägen 6</p>
                    <p className='no-margin-bot'>58215</p>
                    <p className='no-margin-bot'>Linköping</p>
                    <p className='no-margin-bot'>
                        Epost: hej@digitalframgang.com
                    </p>
                    <p className='no-margin-bot'>Tel: 0738969209</p>
                </div>
            </div>
        </div>
        {
            //Only for keep in build
        }
        <img
            src={Email}
            alt='Digital Framgång'
            style={{ display: 'none' }}
        ></img>
    </footer>
)

export default Footer

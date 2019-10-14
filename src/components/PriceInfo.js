import React from 'react'
import { IoIosCheckmarkCircle } from 'react-icons/io'

const basePackage = [
    'Grundläggande analys',
    'Konverterande landningsida',
    'Tre undersidor',
    'Säljande texter',
    'Verktyg för uppföljning',
    'Google Karta',
    'Kontaktformulär',
    'Sökmotorsoptimering'
]

const PriceInfo = () => (
    <section id='price-info' name='prince-info' className='section is-medium'>
        <div className='container'>
            <h2 className='title is-1 has-blue-sidebar'>Våra paket</h2>
            <p>Text här, som Nils ska skriva</p>
            <div className='price-info-container'>
                <header>
                    <h4 className='title is-4'>Baspaket</h4>
                </header>
                <div className='body'>
                    {basePackage.map(item => (
                        <div>
                            <span class='icon has-orange-light is-size-4'>
                                <IoIosCheckmarkCircle />
                            </span>{' '}
                            <span>{item}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </section>
)

export default PriceInfo

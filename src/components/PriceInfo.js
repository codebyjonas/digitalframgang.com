import React from 'react'
import { IoIosCheckmarkCircle } from 'react-icons/io'
import { Link } from 'react-scroll'

const basePackage = {
    title: 'Bas',
    features: [
        'Analys av er hemsida, värdeerbjudande och kundbas ',
        'Konverterande landningssida som väcker intresse ',
        'Tre undersidor',
        'Rätt texter och bilder, anpassade för just era kunder ',
        'Mobilanpassning ',
        'Sökmotorsoptimering',
        'Kontaktformulär',
        'Google karta '
    ]
}

const taylored = {
    title: 'Digital Framgång',
    features: [
        'Insamling och utformning av kundberättelser ',
        'Kundintervjuer och marknadsundersökning ',
        'Fotografering ',
        'Integration med sociala medier ',
        'Produktkataloger ',
        'Övriga avancerade funktioner som bokningssystem ',
        '...och mycket mer '
    ]
}

const PriceInfo = () => (
    <section id='price-info' name='price-info' className='section is-medium'>
        <div className='container'>
            <h2 className='title is-1 has-blue-sidebar'>Våra paket</h2>
            <p>
                Vår grundidé bygger på att hjälpa alla typer av kunder, stora
                som små, att uppnå digital framgång genom att kostnadseffektivt
                utveckla hemsidor skräddarsydda för er verksamhet. Vi förstår
                att våra klienter har olika behov och har därför utvecklat två
                paket.
            </p>
            <p>
                Vårt paket <strong>Bas </strong>
                är lösning för dig som vill ha en enkel och modern hemsida,
                innehållande de mest central komponenterna för att öka din
                försäljning. För dig med en verksamhet som kräver en mer komplex
                lösning rekommenderar vi vårt paket{' '}
                <strong>Digital Framgång </strong>där vi hjälper dig att
                utveckla en hemsida som uppfyller dina specifika behov.
            </p>

            <div className='columns'>
                <div className='column price-info-container'>
                    <header>
                        <h4 className='title is-4'>{basePackage.title}</h4>
                    </header>
                    <p>
                        Vårt grundläggande paket Bas, perfekt för enklare
                        hemsidor.
                    </p>
                    <div className='body'>
                        {basePackage.features.map(item => (
                            <div>
                                <span class='icon is-size-4'>
                                    <IoIosCheckmarkCircle />
                                </span>{' '}
                                <span>{item}</span>
                            </div>
                        ))}
                    </div>
                    <div className='price-tag'>
                        <p>
                            Pris: 19 999 kr <span>(ex moms)</span>
                        </p>
                    </div>
                    <Link
                        id='base-pac-link'
                        className='button is-link'
                        to='contact-us'
                        smooth={true}
                        duration={500}
                        activeClass='is-active'
                        spy={true}
                    >
                        Kontakta oss
                    </Link>
                </div>

                <div className='column price-info-container'>
                    <header>
                        <h4 className='title is-4 has-orange-light'>
                            {taylored.title}
                        </h4>
                    </header>
                    <div className='body'>
                        <p>
                            Utöver allt som ingår i vårt paket Bas erbjuder vi
                            med paketet Digital Framgång en ännu mer anpassad
                            lösning för särskilt specifika behov.
                        </p>
                        {taylored.features.map(item => (
                            <div>
                                <span class='icon is-size-4'>
                                    <IoIosCheckmarkCircle />
                                </span>{' '}
                                <span>{item}</span>
                            </div>
                        ))}
                    </div>
                    <div className='price-tag'>
                        <p>Pris: Offereras</p>
                    </div>
                    <Link
                        className='button is-link'
                        to='contact-us'
                        smooth={true}
                        duration={500}
                        activeClass='is-active'
                        spy={true}
                    >
                        Kontakta oss
                    </Link>
                </div>
            </div>
        </div>
    </section>
)

export default PriceInfo

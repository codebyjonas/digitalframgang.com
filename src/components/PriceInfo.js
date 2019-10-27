import React from 'react'
import { IoIosCheckmarkCircle } from 'react-icons/io'
import { Link } from 'react-scroll'

const basePackage = {
    title: "GRUNDLIG",
    features:
         [
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
    title: 'DIGTIAL FRAMGÅNG',
    features:
        [
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
    <section id='price-info' name='prince-info' className='section is-medium'>
        <div className='container'>
            <h2 className='title is-1 has-blue-sidebar'>Våra paket</h2>
            <p id="our-packages-sub-text" className='has-text-dark'>Vår grundidé bygger på att hjälpa alla typer av kunder,
                stora som små, att uppnå digital framgång genom att kostnadseffektivt
                utveckla hemsidor skräddarsydda för er verksamhet.
                Vi förstår att våra klienter har olika behov och
                har därför utvecklat två paket.
            </p>
            <p className="has-text-dark">
                Vårt baspaket <strong className="has-primary">GRUNDLIG </strong>
                 är lösning för dig som vill ha en enkel och
                modern hemsida, innehållande de mest central
                komponenterna för att öka din försäljning. För dig
                med en verksamhet som kräver en mer komplex lösning
                rekommenderar vi vårt paket <strong>DIGITAL FRAMGÅNG </strong>där vi
                hjälper dig att utveckla en hemsida som uppfyller dina specifika behov.
            </p>

            <div className='columns'>
                <div className='column price-info-container'>
                    <header>
                        <h4 className='title is-3 is-white'>{basePackage.title}</h4>
                    </header>
                    <div className='body package-mid-section'>
                        {basePackage.features.map(item => (
                            <div>
                                <span class='icon has-orange-light is-size-4'>
                                    <IoIosCheckmarkCircle />
                                </span>{' '}
                                <span>{item}</span>
                            </div>
                        ))}
                    </div>
                    <div className="price-tag">
                        <p>19 999 kr</p>
                    </div>

                    <Link
                        id='base-pac-link'
                        className=''
                        to='contact-us'
                        smooth={true}
                        duration={500}
                        activeClass='is-active'
                        spy={true}
                    >
                        <div className="button-price-info title is-5">
                            <p className="is-4">Beställ paket</p>
                        </div>
                    </Link>
                </div>

                <div className='column price-info-container'>
                    <header>
                        <h4 className='title is-3 is-white'>{taylored.title}</h4>
                    </header>
                    <div className='body package-mid-section'>
                        <p className='has-text-dark'>
                            Utöver allt som ingår i GRUNDLIG erbjuder vi med paketet
                            DIGITAL FRAMGÅNG en ännu mer anpassad lösning för särskilt
                            specifika behov.
                        </p>
                        {taylored.features.map(item => (
                            <div>
                                <span class='icon has-orange-light is-size-4'>
                                    <IoIosCheckmarkCircle />
                                </span>{' '}
                                <span>{item}</span>
                            </div>
                        ))}
                    </div>
                    <div className="price-tag">
                        <p> Offerteras</p>
                    </div>
                    <Link
                        id='tailord-pac-link'
                        className=''
                        to='contact-us'
                        smooth={true}
                        duration={500}
                        activeClass='is-active'
                        spy={true}
                    >
                        <div className="button-price-info title is-5">
                            <p className="is-4">Beställ paket</p>
                        </div>
                    </Link>
                </div>


            </div>
        </div>
    </section>
)

export default PriceInfo

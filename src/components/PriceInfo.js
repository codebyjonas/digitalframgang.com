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
    <section id='price-info' name='price-info' className='section  '>
        <div className='container'>
            <h2 className='title is-1 has-blue-sidebar'>Våra paket</h2>
            <p>
                Vår grundidé bygger på att hjälpa företag i alla typer av
                branscher att uppnå digital framgång. Detta gör vi genom att
                utveckla hemsidor som är skräddarsydda för er verksamhet och era
                mål.
            </p>
            <p>
                Vi förstår även att våra kunder har olika behov gällande
                komplexiteten på hemsidan, därför har vi tagit fram två paket.
            </p>

            <div className='columns'>
                <div className='column price-info-container'>
                    <header>
                        <h4 className='title is-4'>{basePackage.title}</h4>
                    </header>
                    <p>
                        Vårt grundläggande paket Bas är för er som vill ha en
                        modern, skräddarsydd och enkel hemsida som innehåller de
                        viktigaste delarna för att förbättra er Digitala
                        närvaro.
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
                            med paketet Digital Framgång en ännu mer
                            skräddarsydd lösning som hjälper ert företag att
                            uppnå den högsta nivån av Digital närvaro.
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

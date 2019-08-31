import React from 'react'
import { IoIosAnalytics } from 'react-icons/io'

const Services = () => (
    <section className='section is-medium'>
        <div className='container is-fluid'>
            <h1 className='title is-2'>Våra tjänster</h1>
            {/*}    <h2 className='subtitle'>
                Vi erbjuder en hel del bra tjänster inom SEO och
                konverteringsoptimering
            </h2> */}
            <div className='columns'>
                <div className='column card-shadow'>
                    {/*<IoIosAnalytics />*/}
                    <h2 className='title is-3'>Omfattande helhetsanalys</h2>
                    <p>
                        För att garantera träffsäkerheten i våra åtgärder ser vi
                        till att skaffa oss en gedigen bild av er målkund och
                        ert företag”
                    </p>
                </div>
                <div className='column card-shadow'>
                    <h2 className='title is-3'>Synlighet/trafik</h2>
                    <p>
                        Genom effektiva punktinsatser ökar vi er hemsidas
                        synlighet så att potentiella kunder hittar till er
                        istället för till konkurrenterna“
                    </p>
                </div>
                <div className='column card-shadow'>
                    <h2 className='title is-3'>Konvertering</h2>
                    <p>
                        Vi nöjer oss inte med att bara locka fler besökare till
                        er hemsidan utan vi hjälper er även att konvertera dessa
                        besökare till faktiska kunder{' '}
                    </p>
                </div>
            </div>
            <div className='columns'>
                <div className='column card-shadow'>
                    <h2 className='title is-3'>Resurseffektivitet</h2>
                    <p>
                        Vi vill att synlighet och konvertering ska vara
                        tillgängligt för alla. Därför fokuserar vi på att
                        leverera högeffektiva lösningar utan att krångla till
                        det
                    </p>
                </div>
                <div className='column card-shadow'>
                    <h2 className='title is-3'>Uppföljning</h2>
                    <p>
                        Vi håller vad vi lovar och därför är vi noggranna i vår
                        uppföljning. För att ni kontinuerligt ska kunna följa
                        upp och förbättra er digitala närvaro inkluderar vi även
                        ett användarvänligt uppföljningsverktyg, helt utan extra
                        kostnad
                    </p>
                </div>
            </div>
        </div>
    </section>
)

export default Services

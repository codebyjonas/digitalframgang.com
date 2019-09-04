import React from 'react'
import {
    MdAssessment,
    MdSwapHoriz,
    MdLoop,
    MdAttachMoney
} from 'react-icons/md'
import { FaMailBulk } from 'react-icons/fa'

const Services = () => (
    <section id='services' name='services' className='section is-medium'>
        <div className='container is-fluid'>
            <h1 className='title is-2 has-blue-sidebar'>Vårt erbjudande</h1>
            <div className='columns'>
                <div className='column card-shadow'>
                    <div className='columns is-vcentered'>
                        <div className='column is-1 is-paddingless'>
                            <span className='icon has-orange-light is-size-2 is-flex'>
                                <MdAssessment />
                            </span>
                        </div>
                        <div className='column'>
                            <h2 className='title is-3'>Helhetsanalys</h2>
                        </div>
                    </div>
                    <div>
                        <p>
                            För att garantera träffsäkerheten i våra åtgärder
                            ser vi till att skaffa oss en gedigen bild av er
                            målkund och ert företag”
                        </p>
                    </div>
                </div>
                <div className='column card-shadow'>
                    <div className='columns is-vcentered'>
                        <div className='column is-1 is-paddingless'>
                            <span class='icon has-orange-light is-size-2 is-flex'>
                                <MdSwapHoriz />
                            </span>
                        </div>
                        <div className='column'>
                            <h2 className='title is-3'>Synlighet online</h2>
                        </div>
                    </div>
                    <p>
                        Genom effektiva punktinsatser ökar vi er hemsidas
                        synlighet så att potentiella kunder hittar till er
                        istället för till konkurrenterna“
                    </p>
                </div>
                <div className='column card-shadow'>
                    <div className='columns is-vcentered'>
                        <div className='column is-1 is-paddingless'>
                            <span class='icon has-orange-light is-size-2 is-flex'>
                                <MdLoop />
                            </span>
                        </div>
                        <div className='column'>
                            <h2 className='title is-3'>Konvertering</h2>
                        </div>
                    </div>
                    <p>
                        Vi nöjer oss inte med att bara locka fler besökare till
                        er hemsidan utan vi hjälper er även att konvertera dessa
                        besökare till faktiska kunder{' '}
                    </p>
                </div>
            </div>
            <div className='columns'>
                <div className='column card-shadow'>
                    <div className='columns is-vcentered'>
                        <div className='column is-1 is-paddingless'>
                            <span class='icon has-orange-light is-size-2 is-flex'>
                                <MdAttachMoney />
                            </span>
                        </div>
                        <div className='column'>
                            <h2 className='title is-3'>Resurseffektivitet</h2>
                        </div>
                    </div>
                    <p>
                        Vi vill att synlighet och konvertering ska vara
                        tillgängligt för alla. Därför fokuserar vi på att
                        leverera högeffektiva lösningar utan att krångla till
                        det
                    </p>
                </div>
                <div className='column card-shadow'>
                    <div className='columns is-vcentered'>
                        <div className='column is-1 is-paddingless'>
                            <span class='icon has-orange-light is-size-2 is-flex'>
                                <FaMailBulk />
                            </span>
                        </div>
                        <div className='column'>
                            <h2 className='title is-3'>Uppföljning</h2>
                        </div>
                    </div>
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

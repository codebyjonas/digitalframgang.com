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
                            För att garantera träffsäkerheten i våra åtgärder ser vi till att
                            erhålla en tydlig bild av både ert företag och era målkunder
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
                            <h2 className='title is-3'>Synlighet</h2>
                        </div>
                    </div>
                    <p>
                        Genom effektiva punktinsatser gör vi er hemsida synlig - Så att potentiella kunder
                        hittar till er istället för till konkurrenterna
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
                        Vi nöjer oss inte med att enbart locka fler besökare till er hemsida
                         , vi hjälper er även att konvertera dessa besökare till kunder
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
                         tillgängligt för alla företag. Därför fokuserar
                          vi på att leverera högeffektiva lösningar utan
                           att krångla till det. Sanningen är att man når
                            väldigt goda resultat med en relativt låg
                        insats, förutsatt att man fokuserar på rätt saker
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
                        Vi håller vad vi lovar och därför är vi
                        noggranna i vår uppföljning. För att ni
                        kontinuerligt ska kunna följa upp och
                        förbättra upp er digitala närvaro
                        inkluderar vi även ett användarvänligt
                        uppföljningsverktyg - Helt utan extra kostnad
                    </p>
                </div>
            </div>
        </div>
    </section>
)

export default Services

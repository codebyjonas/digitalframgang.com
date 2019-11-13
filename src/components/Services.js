import React from 'react'
import { MdAssessment, MdSearch, MdLoop, MdAttachMoney } from 'react-icons/md'
import { FaMailBulk } from 'react-icons/fa'

const Services = () => (
    <section
        id='services'
        name='services'
        className='section is-medium has-light-grey-background'
    >
        <div className='container'>
            <h2 className='title is-1 has-blue-sidebar'>
                Vårt framgångsrecept för en optimerad hemsida
            </h2>
            <div className='columns service-cards'>
                <div className='column service-card'>
                    <span className='icon'>
                        <MdAssessment />
                    </span>
                    <h2 className='title is-3'>Helhetsanalys</h2>
                    <p>
                        För att garantera träffsäkerheten i våra åtgärder ser vi
                        till att erhålla en tydlig bild av både ert företag och
                        era målkunder
                    </p>
                </div>
                <div className='column service-card'>
                    <span className='icon'>
                        <MdSearch />
                    </span>
                    <h2 className='title is-3'>Synlighet</h2>
                    <p>
                        Genom effektiva punktinsatser gör vi er hemsida synlig -
                        Så att potentiella kunder hittar till er istället för
                        till konkurrenterna
                    </p>
                </div>
                <div className='column service-card'>
                    <span class='icon'>
                        <MdLoop />
                    </span>

                    <h2 className='title is-3'>Konvertering</h2>
                    <p>
                        Vi nöjer oss inte med att enbart locka fler besökare
                        till er hemsida , vi hjälper er även att konvertera
                        dessa besökare till kunder
                    </p>
                </div>
                <div className='column service-card'>
                    <span class='icon'>
                        <FaMailBulk />
                    </span>

                    <h2 className='title is-3'>Uppföljning</h2>
                    <p>
                        Vi håller vad vi lovar och därför är vi noggranna i vår
                        uppföljning. För att ni kontinuerligt ska kunna följa
                        upp och förbättra er digitala närvaro inkluderar vi även
                        ett användarvänligt uppföljningsverktyg - Helt utan
                        extra kostnad
                    </p>
                </div>
            </div>
        </div>
    </section>
)

export default Services

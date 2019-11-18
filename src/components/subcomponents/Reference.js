import React from 'react'

const Reference = props => (
    <div className='reference columns'>
        <figure className='column'>
            <div
                className='image-container'
                style={{
                    backgroundImage: `url(${require(`../../assets/${props.reference.id}.jpg`)})`
                }}
            ></div>
        </figure>
        <div className='body column'>
            <h3 className='title is-4 has-blue-sidebar'>
                {props.reference.title}
            </h3>
            <p>{props.reference.shortDesc}</p>
            <p>{props.reference.longDesc}</p>
            <p className='client-quote'>{props.reference.clientQuote}</p>
            <p className='client-name-and-role'>
                {props.reference.clientNameAndRole}
            </p>
            <a href={props.reference.link} target='_blank'>
                >> Gå till {props.reference.title}
            </a>
            <div className='nice-stats'>
                <h4 className='title is-6'>Resultat</h4>
                <div className=' columns'>
                    <div className='column'>
                        Top 3 plats på Google för relevanta sökord
                    </div>
                    <div className='column'>
                        Flerdubblade konverteringsgraden och frigörde viktig tid
                        för Företaget
                    </div>
                    <div className='column'>
                        Snälla och snabba bilreperationer
                    </div>
                </div>
            </div>
        </div>
    </div>
)

export default Reference

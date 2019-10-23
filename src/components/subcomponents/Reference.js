import React from 'react'

const Reference = props => (
    <div className='reference'>
        <figure className='image is-4by3'>
            <div className='overlay'>
                {props.reference.longDesc}
                <a href={props.reference.link} target='_blank'>
                    Gå till {props.reference.title}
                </a>
            </div>
            <img
                src={require(`../../assets/${props.reference.id}.jpg`)}
                alt={props.reference.title}
            />
        </figure>
        <div className='body'>
            <h3 className='title is-4 has-blue-sidebar'>
                {props.reference.title}
            </h3>
            <p>{props.reference.shortDesc}</p>
        </div>
    </div>
)

export default Reference

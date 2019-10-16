import React from 'react'

const Reference = props => (
    <div className='reference'>
        <img
            src={require(`../../assets/${props.reference.id}.jpg`)}
            alt={props.reference.title}
        />
        <h3>{props.reference.title}</h3>
        <p>{props.reference.shortDesc}</p>
    </div>
)

export default Reference

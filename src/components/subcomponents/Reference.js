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
            <h4>Vårt uppdrag</h4>
            <ul>
                {props.reference.assignment.map((assign)=>(
                    <li>{assign}</li>
                ))}
            </ul>
            <h4>
                Vårt resultat
            </h4>
            <ul>
                {props.reference.results.map(result=>(
                    <li>{result}</li>
                ))}
            </ul>
            <div className="client-box">
                <p className='client-quote'>{props.reference.clientQuote}</p>
                <p className='client-name-and-role'>
                    {props.reference.clientNameAndRole}
                </p>
            </div>
            <a href={props.reference.link} target='_blank'>
                >> Gå till {props.reference.title}
            </a>

        </div>
    </div>
)

export default Reference

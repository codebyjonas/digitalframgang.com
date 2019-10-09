import React from 'react'


const Whatwedo = (props) => {
    return (
        <section id='whatwedo' name='whatwedo' className='section is-medium'>
            <div className='container has-text-centered'>
                <h1 className='title is-1 '>Vårat recept</h1>
                <div className="columns">
                    <div className="column">
                        <h1>Grundlig analys av hemsidan</h1>
                        <p>Har ni rätt innehåll?</p>
                    </div>
                    <div className="column">
                        <h1>Konverteringsoptimering </h1>
                        <p>Hur konverteras besökare? </p>
                    </div>
                    <div className="column">
                        <h1>Sökmotorsomptimering</h1>
                        <p>Är sidan utvecklad på rätt sätt?</p>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Whatwedo

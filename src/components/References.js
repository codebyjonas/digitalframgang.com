import React from 'react'
import Reference from './subcomponents/Reference'
import SkewedDivider from './subcomponents/SkewedDivider'

const references = [
    {
        id: 'tornbybilteknik',
        title: 'Tornby Bilteknik',
        shortDesc:
            'Digital Framgång moderniserade Tornby Biltekniks hemsida, till en konvertingsoptiemrad och sökmotorsoptimerad hemsida',
        longDesc:
            'Tornby Bilteknik behövde en ny hemsida som skulle vara tydlig, enkel och modern. Förutom att utveckla en hemsida efter dessa behov hjälpte vi även dem med såväl fotografering som insamling av kundreferenser för att skapa en konverterande hemsida.',
        link: 'http://tornbybilteknik.com'
    }
]

const References = () => (
    <section
        id='references'
        name='prince-info'
        className='section is-medium has-light-grey-background has-position-relative'
    >
        <div className='container is-fluid'>
            <h2 className='title is-1 has-blue-sidebar'>Våra kundcase</h2>
            <div className='columns'>
                {references.map(reference => (
                    <div className='column'>
                        <Reference reference={reference}></Reference>
                    </div>
                ))}
                <div className='column'></div>
                <div className='column'></div>
            </div>
        </div>
        <SkewedDivider color='#fff' direction='left' />
    </section>
)

export default References

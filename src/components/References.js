import React from 'react'
import Reference from './subcomponents/Reference'
import SkewedDivider from './subcomponents/SkewedDivider'

const references = [
    {
        id: 'tornbybilteknik',
        title: 'Tornby Bilteknik',
        shortDesc:
            'Digital Framgång moderniserade Tornby Biltekniks hemsida, till en konverteringsoptimerad och sökmotoroptimerad hemsida',
        longDesc:
            'Tornby Bilteknik behövde en ny hemsida som skulle vara tydlig, enkel och modern. Förutom att utveckla en hemsida efter dessa behov hjälpte vi även dem med såväl fotografering som insamling av kundreferenser för att skapa en konverterande hemsida.',
        clientQuote:
            '”Vi är väldigt nöjda med resultatet. Framförallt har grabbarna på Digital Framgång varit flexibla och lyhörda, något som är viktigt för oss som har fullt upp om dagarna.”',
        clientNameAndRole: 'Fredrik Menck, Grundare',
        link: 'http://tornbybilteknik.com',
        results: [
            'Sökmotoroptimerad: Förstasidan på Google för relevanta sökord',
            'Flerdubblad konverteringsgrad från besökare till kontaktformulär, vilket frigjorde tid för personalen'
        ]
    }
]

const References = () => (
    <section
        id='references'
        name='prince-info'
        className='section is-medium has-light-grey-background has-position-relative'
    >
        <div className='container'>
            <h2 className='title is-1 has-blue-sidebar'>Våra kundcase</h2>
            {references.map(reference => (
                <Reference reference={reference}></Reference>
            ))}
        </div>
        <SkewedDivider color='#fff' direction='left' />
    </section>
)

export default References

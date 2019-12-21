import React from 'react'
import Reference from './subcomponents/Reference'
import SkewedDivider from './subcomponents/SkewedDivider'

const references = [
    {
        id: 'tornbybilteknik',
        title: 'Tornby Bilteknik',
        assignment: [
            'Tornby Bilteknik behövde en ny hemsida som skulle vara tydlig, enkel och modern.',
            'Personalen spenderade för mycket telefontid åt att besvara frågor som kunde hanterats via mail ',
            'Behövde hjälp med fotografering av personal och framtagning av beskrivande bilder '
        ],
        clientQuote:
            '”Vi är väldigt nöjda med resultatet. Framförallt har grabbarna på Digital Framgång varit flexibla och lyhörda, något som är viktigt för oss som har fullt upp om dagarna.”',
        clientNameAndRole: 'Fredrik Menck, Grundare',
        link: 'http://tornbybilteknik.com',
        results: [
            'Sökmotoroptimerad: Förstasidan på Google för relevanta sökord',
            ' Flerdubblad konverteringsgrad från besökare till kontaktformulär',
            'vilket frigjorde tid för personal'
        ]
    }
]

const References = () => (
    <section
        id='references'
        name='prince-info'
        className='section has-light-grey-background has-position-relative'
    >
        <div className='container'>
            <h2 className='title is-1 has-blue-sidebar'>Våra kundcase</h2>
            {references.map(reference => (
                <Reference reference={reference}></Reference>
            ))}
        </div>
    </section>
)
export default References

import React from 'react'
import { MdImportantDevices } from 'react-icons/md'
import { FaSearchPlus, FaChartLine } from 'react-icons/fa'

const ourServices = [
    {
        title: 'Skräddarsydda hemsidor',
        text:
            'När vi skapar en hemsida till ert företag sköter vi hela processen. Allt börjar med en grundlig analys av ert företag och era mål, hemsidans utformning grundar sig sedan i denna analys. Vår beprövade metod leder till en hemsida anpassad efter er målgrupp som genererar besökare och framtida kunder.',
        icon: <MdImportantDevices />
    },
    {
        title: 'Sökmotoroptimering',
        text:
            'En modern hemsida kräver innehåll som är anpassat för besökarna och sökmotorer. Därför hjälper vi er med att ta fram texter, bilder och filmer som är anpassade för ert företag. Med hjälp av vår erfarenhet skapar vi texter som är sökmotorsoptimerade och hjälper era kunder att hitta till er. ',
        icon: <FaSearchPlus />
    },
    {
        title: 'Konverteringsoptimering',
        text:
            'Genom beprövade metoder arbetar vi med att optimera er hemsida så att era besökare blir kunder. Med flera års erfarenhet vet vi vad som fungerar och inte. Vi installerar vid varje leverans ett mätverktyg där ni kan följa effektiviteten på våra insatser och utvecklingen av er hemsida.',
        icon: <FaChartLine />
    }
]

const Services = () => (
    <section
        id='services'
        name='services'
        className='section is-medium has-light-grey-background'
    >
        <div className='container'>
            <h2 className='title is-1'>Våra tjänster</h2>
            <p className='intro-text'>
                Skräddarsydda hemsidor, sökmotor- och konverteringsoptimering.
                Tre grundpelare på vilka vårt företag vilar. Men vi kan även så
                mycket mer, så oavsett vad just du är intresserad av är vi säkra
                på att vi kan hjälpa er!
            </p>
            <div className='columns'>
                {ourServices.map(service => (
                    <div className='column'>
                        <span className='icon'>{service.icon}</span>
                        <h2 className='title is-4'>{service.title}</h2>
                        <p>{service.text}</p>
                    </div>
                ))}
            </div>
        </div>
    </section>
)

export default Services

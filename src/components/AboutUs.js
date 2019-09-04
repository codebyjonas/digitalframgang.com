import React from 'react'

const members = [
    {
        id: 'oskarberggren',
        name: 'Oskar Berggren',
        role: 'Konsult'
    },
    {
        id: 'jesperhedlund',
        name: 'Jesper Hedlund',
        role: 'Konsult'
    },
    {
        id: 'nilsjonsson',
        name: 'Nils Jonsson',
        role: 'Konsult'
    },
    {
        id: 'jonasolaussen',
        name: 'Jonas Olaussen',
        role: 'VD & Konsult'
    }
]

const AboutUs = () => (
    <section id='about-us' name='about-us' className='section is-medium'>
        <div className='container'>
            <h2 className='title is-1 has-blue-sidebar'>Vilka är vi?</h2>
            <p>
                Tell grundades av fyra studenter på Linköpings Universitet med
                syfte är att hjälpa små och medelstora företag i närområdet att
                öka sin försäljning genom en god digital närvaro. Genom att
                driva mer relevant trafik till våra kunders hemsidor samt höja
                deras konverteringsgrad stärker vi våra kunders konkurrenskraft
                på internet.
            </p>
            <p>
                Med fokus på effektiva punktinsatser kombinerat med flera års
                arbetslivserfarenhet av webbutveckling och ett nytänk kring
                marknadsföring online erbjuder vi ett kostnadseffektivt
                alternativ till de mer traditionella webbyråerna. Kontakta oss
                idag för att öka ditt företags försäljning!
            </p>
            <section className='section'>
                <div className='columns'>
                    {members.map(member => (
                        <div className='column has-text-centered'>
                            <figure id="profile-image" className='image is-square'>
                                <img
                                    className='is-rounded'
                                    src={require(`../assets/${member.id}.jpg`)}
                                />
                            </figure>
                            <h3 className='title is-5'>{member.name}</h3>
                            <h4 className='title is-6'>{member.role}</h4>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    </section>
)

export default AboutUs

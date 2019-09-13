import React from 'react'
import {
    MdPhone,
    MdEmail,
    MdWork
} from 'react-icons/md'
import { FaMail } from 'react-icons/fa'

const members = [
    {
        id: 'oskarberggren',
        name: 'Oskar Berggren',
        role: 'Konsult',
        responsibility: "content och sälj",
        tel: "073 784 19 90",
        mail: "jesperhedlund@digitalframgang.se"
    },
    {
        id: 'jesperhedlund',
        name: 'Jesper Hedlund',
        role: 'Konsult',
        responsibility: "Utveckling",
        tel: "073 784 19 90",
        mail: "jesperhedlund@digitalframgang.se"
    },
    {
        id: 'nilsjonsson',
        name: 'Nils Jonsson',
        role: 'Konsult',
        responsibility: "content och sälj",
        tel: "073 784 19 90",
        mail: "jesperhedlund@digitalframgang.se"
    },
    {
        id: 'jonasolaussen',
        name: 'Jonas Olaussen',
        role: 'VD & Konsult',
        responsibility: "Utveckling",
        tel: "073 784 19 90",
        mail: "jesperhedlund@digitalframgang.se"
    }
]

const AboutUs = () => (
    <section id='about-us' name='about-us' className='section is-medium'>
        <div className='container'>
            <h2 className='title is-1 has-blue-sidebar'>Vilka är vi?</h2>
            <p>
                Digital Framgång grundades av fyra studenter på Linköpings
                Universitet med syfte att hjälpa små och medelstora företag i
                närområdet att öka sin försäljning genom en god digital närvaro.
                Genom att driva mer relevant trafik till våra kunders hemsidor
                samt höja deras konverteringsgrad stärker vi våra kunders
                konkurrenskraft på internet.
            </p>
            <p></p>
            <p>
                Med fokus på effektiva punktinsatser kombinerat med flera års
                arbetslivserfarenhet av webbutveckling och ett nytänk kring
                marknadsföring online erbjuder vi ett kostnadseffektivt
                alternativ till de mer traditionella webbyråerna. Kontakta oss
                idag för att öka ditt företags försäljning!
            </p>
            <section id="aboutus-pictures"className='section'>
                <div className='columns'>
                    {members.map(member => (
                        <div
                            key={member.id}
                            className='column has-text-centered'
                        >
                            <figure
                                id='profile-image'
                                className='image is-square'
                            >
                                <img
                                    className='is-rounded'
                                    src={require(`../assets/${member.id}.jpg`)}
                                    alt={member.name}
                                />
                            <div className="overlay">
                                <h1 className="title is-6"><MdWork/>{member.responsibility}</h1>
                                <h1 className="title is-6"><MdPhone/>{member.tel}</h1>
                                <h1 className="title is-6"><MdEmail/>{member.mail}</h1>
                            </div>
                            </figure>
                            <h3 className='title is-5'>{member.name}</h3>
                            <h4 className='title is-6 profile-image-jobname'>
                                {member.role}
                            </h4>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    </section>
)

export default AboutUs

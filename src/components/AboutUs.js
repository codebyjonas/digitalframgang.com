import React from 'react'
import { MdEmail } from 'react-icons/md'
import { CopyToClipboard } from 'react-copy-to-clipboard'

const members = [
    {
        id: 'oskarberggren',
        name: 'Oskar Berggren',
        role: 'Konsult',
        responsibility: 'content och sälj',
        tel: '073 907 09 94',
        mail: 'oskar.berggren@digitalframgang.se'
    },
    {
        id: 'jesperhedlund',
        name: 'Jesper Hedlund',
        role: 'Konsult',
        responsibility: 'Utveckling',
        tel: '073 784 19 90',
        mail: 'jesper.hedlund@digitalframgang.se'
    },
    {
        id: 'nilsjonsson',
        name: 'Nils Jonsson',
        role: 'Konsult',
        responsibility: 'content och sälj',
        tel: '070 311 11 09',
        mail: 'nils.jonsson@digitalframgang.se'
    },
    {
        id: 'jonasolaussen',
        name: 'Jonas Olaussen',
        role: 'VD & Konsult',
        responsibility: 'Utveckling',
        tel: '073 896 92 09',
        mail: 'jonas.olaussen@digitalframgang.se'
    }
]

class AboutUs extends React.Component {
    state = {
        oskarberggren: '',
        jesperhedlund: '',
        jonasolaussen: '',
        nilsjonsson: ''
    }

    copyConfirm = copyname => {
        this.setState({ [copyname]: 'Mail kopierad!' })

        setTimeout(
            function() {
                this.setState({ [copyname]: '' })
            }.bind(this),
            5000
        )
    }

    render() {
        return (
            <section
                id='about-us'
                name='about-us'
                className='section is-medium'
            >
                <div className='container'>
                    <h2 className='title is-1 has-blue-sidebar'>
                        Vilka är vi?
                    </h2>
                    <p>
                        Digital Framgång grundades av fyra studenter på
                        Linköpings Universitet med syfte att hjälpa små och
                        medelstora företag i närområdet att öka sin försäljning
                        genom en god digital närvaro. Genom att driva mer
                        relevant trafik till våra kunders hemsidor samt höja
                        deras konverteringsgrad stärker vi våra kunders
                        konkurrenskraft på internet.
                    </p>
                    <p></p>
                    <p>
                        Med fokus på effektiva punktinsatser kombinerat med
                        flera års arbetslivserfarenhet av webbutveckling och ett
                        nytänk kring marknadsföring online erbjuder vi ett
                        kostnadseffektivt alternativ till de mer traditionella
                        webbyråerna. Kontakta oss idag för att öka ditt företags
                        försäljning!
                    </p>
                    <section id='aboutus-pictures' className='section'>
                        <div className='columns is-multiline'>
                            {members.map(member => (
                                <div key={member.id} className='column is-half'>
                                    <div className='columns'>
                                        <div className='column image-container'>
                                            <figure className='image is-square profile-image'>
                                                <img
                                                    className='is-rounded'
                                                    src={require(`../assets/${member.id}.jpg`)}
                                                    alt={
                                                        'Digital Framgångs medlem ' +
                                                        member.name
                                                    }
                                                />
                                            </figure>
                                        </div>
                                        <div className='column contact-details'>
                                            <div>
                                                <span className='title is-4'>
                                                    {member.name}
                                                </span>
                                                <span className='title is-5'>
                                                    {member.role}
                                                </span>
                                                <span className='title is-6'>
                                                    <strong>Tel: </strong>
                                                    {member.tel}
                                                </span>
                                                <div class='email-copy-container'>
                                                    <CopyToClipboard
                                                        text={member.mail}
                                                        onCopy={() => {
                                                            this.copyConfirm(
                                                                member.id
                                                            )
                                                        }}
                                                    >
                                                        <span className='email-icon icon title is-size-4'>
                                                            <MdEmail />
                                                        </span>
                                                    </CopyToClipboard>
                                                    <span className='is-title'>
                                                        {this.state[member.id]}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                </div>
            </section>
        )
    }
}

export default AboutUs

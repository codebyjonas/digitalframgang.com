import React from 'react'
import {
    MdPhone,
    MdEmail,
    MdWork
} from 'react-icons/md'
import { FaMail } from 'react-icons/fa'
import { CopyToClipboard } from 'react-copy-to-clipboard'

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


class AboutUs extends React.Component {
    state = {
        oskarberggren: '',
        jesperhedlund: '',
        jonasolaussen: '',
        nilsjonsson: ''
    }

    copyConfirm = (copyname) => {

        this.setState({[copyname]: 'Mail kopierad!'})

        setTimeout(function(){
            this.setState({[copyname]: ''});
       }.bind(this),5000);
    }


    render () {


        return(
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
                        <div className='columns is-multiline'>
                            {members.map(member => (
                                <div
                                    key={member.id}
                                    className='column is-half'
                                >
                                <div className="columns">
                                    <div className="column">
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
                                            </div>
                                        </figure>
                                    </div>
                                    <div className="column">
                                        <h3 id="profile-image-name" className='title is-5'>{member.name}</h3>
                                        <h4 className='title is-6 profile-image-jobname'>
                                            {member.role}
                                        </h4>
                                        <h1 id="phone-icon" className="title is-6"><MdPhone size={32}/>{member.tel}</h1>

                                        <div className="columns">
                                            <CopyToClipboard
                                                text={member.mail}
                                                className="column is-one-fifth"
                                                onCopy={() => {
                                                    this.copyConfirm(member.id)
                                                  //do stuff here, like summon a confirmation prompt
                                                }}>
                                                <h1 id="email-copy" className="title is-6"><MdEmail id="email-icon"/>

                                                </h1>
                                            </CopyToClipboard>
                                            <article className="message column">
                                                 <div id="copy-confirmation" class="message-body is-info">
                                                     <strong>{this.state[member.id]}</strong>
                                                 </div>
                                            </article>
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

export default AboutUs;

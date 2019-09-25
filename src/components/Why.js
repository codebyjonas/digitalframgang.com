import React from 'react'

const whyyUsTop3 = [
    {
        icon: 'Ikon',
        title: 'Kostnadseffektiva',
        copy:
            'Tack vare våra kostnadseffektiva metoder kan vi erbjuda ett lågt pris och fortfarande leverera en högkvalitativ tjänst.'
    },
    {
        icon: 'Ikon',
        title: 'Helhetslösning',
        copy:
            'Vi hjälper er från a till b så att ni kan fokusera på er kärnverksamhet. Ni väljer själva  hur inolverade ni vill vara.'
    },
    {
        icon: 'Ikon',
        title: 'Lång erfarenheter',
        copy:
            'Mellan oss har vi flera års erfarenhet av både marknadsanalys och webbutveckling, därför kan vi garantera en optimerad hemsida.'
    }
]

const Why = () => (
    <section
        id='why-us'
        name='why-us'
        className='section is-medium why-section'
    >
        <div id='why-text-container' className='container'>
            <h2 className='title is-1 has-blue-sidebar'>Varför välja oss?</h2>
            <div className='columns'>
                <div className='column is-two-thirds'>
                    <div id='why-text'>
                        <p>
                            Vi är kostnadseffektiva webbutvecklare som riktar
                            oss till små och medelstora företag som vill öka sin
                            försäljning via sin hemsida. Oavsett om ni är ett
                            e-handelsföretag eller sköter er försäljning via
                            mail- och/eller telefonkontakt så har vi lösningen
                            för just er. Genom att hjälpa er att få fler
                            besökare till er hemsida, samt konvertera dessa
                            besökare till kunder är vi en helhetspartner för
                            ökad digital närvaro.
                        </p>
                        <p>
                            Med god kunskap inom affärsstrategi och erfarenheter
                            inom marknadsföring kombinerat med flera års
                            arbetslivserfarenhet av webbutveckling ser vi till
                            att ni har rätt innehåll paketerat på rätt sätt.
                        </p>
                    </div>
                </div>
                <div className='column top-3-wrapper'>
                    {whyyUsTop3.map(topFeature => (
                        <div className='columns top-3-item'>
                            <div className='column'>{topFeature.icon}</div>
                            <div className='column'>
                                <h4 className='title is-5'>
                                    {topFeature.title}
                                </h4>
                                <p>{topFeature.copy}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
        <div id='rotated-background-triangle1'></div>
        <div id='rotated-background-triangle2'></div>
    </section>
)

export default Why

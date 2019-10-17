import React from 'react'
import { MdTrackChanges, MdAttachMoney, MdSwapCalls } from 'react-icons/md'

const whyyUsTop3 = [
    {
        icon: <MdAttachMoney />,
        title: 'Kostnadseffektiva',
        copy:
            'Tack vare våra kostnadseffektiva metoder kan vi erbjuda marknadens bästa priser utan att kompromissa på kvalitet.'
    },
    {
        icon: <MdTrackChanges />,
        title: 'Helhetslösning',
        copy:
            'Vi hjälper er från vision till en framgångsrik hemsida. Vi förstår att ni har en verksamhet att driva, varför det är helt upp till er hur involverade ni vill vara i processen.'
    },
    {
        icon: <MdSwapCalls />,
        title: 'Flexibilitet',
        copy:
            'Våra kunder går i första hand och därför ser vi till att vara tillgängliga när det passar er. Genom att även vara lyhörda både före och under utvecklingsprocessen garanterar vi hemsidor som uppfyller era specifika behov.'
    }
]

const Why = () => (
    <section
        id='why-us'
        name='why-us'
        className='section is-medium why-section'
    >
        <div id='why-text-container' className='container is-fluid'>
            <div className='columns is-8 is-variable is-desktop'>
                <div className='column'>
                    <h2 className='title is-1 has-blue-sidebar'>
                        Varför välja oss?
                    </h2>
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
                <div className='column is-1'></div>
                <div className='column top-3-wrapper'>
                    {whyyUsTop3.map(topFeature => (
                        <div className='top-3-item '>
                            <div>
                                <span className='icon'>{topFeature.icon}</span>
                            </div>
                            <div>
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

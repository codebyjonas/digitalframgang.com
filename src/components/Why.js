import React from 'react'
import { MdTrackChanges, MdAttachMoney, MdSwapCalls } from 'react-icons/md'
import SkewedDivider from './subcomponents/SkewedDivider'

const whyyUsTop3 = [
    {
        icon: <MdAttachMoney />,
        title: 'Kostnadseffektivitet',
        copy:
            'Tack vare våra kostnadseffektiva metoder kan vi erbjuda marknadens bästa priser utan att kompromissa på kvalitet.'
    },
    {
        icon: <MdTrackChanges />,
        title: 'Helhetslösning',
        copy:
            'Vi hjälper er från vision till en framgångsrik hemsida. Genom att erbjuda modern design kombinerat med framtagning av texter och bilder garanterar vi att ni kan ha fullt fokus på att driva er verksamhet.'
    },
    {
        icon: <MdSwapCalls />,
        title: 'Flexibilitet',
        copy:
            'Våra kunder går i första hand och därför ser vi till att vara tillgängliga när det passar er. Genom att även vara lyhörda både före och under utvecklingsprocessen garanterar vi hemsidor som är skräddarsydda efter era behov.'
    }
]

const Why = () => (
    <section
        id='why-us'
        name='why-us'
        className='section is-medium why-section'
    >
        <div id='why-text-container' className='container'>
            <div className='columns is-8 is-variable'>
                <div className='column'>
                    <h2 className='title is-1 has-blue-sidebar'>
                        Varför välja oss?
                    </h2>
                    <div id='why-text'>
                        <p>
                            Vi är webbutvecklare som riktar oss till små och medelstora 
                            företag som vill förbättra sin digitala närvaro. 
                            Genom att hjälpa er att generera fler
                            besökare till er hemsida, samt konvertera dessa
                            besökare till kunder är vi en helhetspartner för
                            en förbättrad digital närvaro.
                        </p>
                        <p>
                            Genom att kombinera våra goda kunskaper inom marknadsföring 
                            och affärsstrategi med flera års
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
    </section>
)

export default Why

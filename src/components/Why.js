import React from 'react'

const Why = () => (
    <section
        id='why-us'
        name='why-us'
        className='section is-medium why-section'
    >
        <div id="why-text-container" className='container'>
            <div className="columns">
                <div className="column is-two-thirds">
                    <div id="why-text">
                        <h2 className='title is-1 has-blue-sidebar'>Varför välja oss?</h2>
                        <p>
                            Vi är ett kostnadseffektivt alternativ för små och medelstora
                             företag som vill öka sin försäljning. Oavsett om ni är ett
                              e-handelsföretag eller sköter er försäljning via mail- och/eller
                               telefonkontakt så har vi lösningen för just er. Genom att
                                hjälpa er att få fler besökare till er hemsida, samt
                                konvertera dessa besökare till kunder är vi en helhetspartner
                                 för ökad digital närvaro.
                        </p>
                        <p>
                            Med god kunskap inom affärsstrategi och erfarenheter inom
                            marknadsföring kombinerat med flera års arbetslivserfarenhet
                            av webbutveckling ser vi till att ni har rätt innehåll
                            paketerat på rätt sätt.
                        </p>
                    </div>
                </div>
                <div className="column">
                    <figure id="why-us-image" className="image is-square">

                        <img src={require("./../assets/whyuswithshadow.jpg")}/>
                    </figure>
                </div>
            </div>
            <div className="rotated-background-block"></div>
        </div>
    </section>
)

export default Why

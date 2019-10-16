import React from 'react'
import Reference from './subcomponents/Reference'
import SkewedDivider from './subcomponents/SkewedDivider'

const references = [
    {
        id: 'tornbybilteknik',
        title: 'Tornby Bilteknik',
        shortDesc:
            'Digital Framgång moderniserade Tornby Biltekniks hemsida, till en konvertingsoptiemrad och sökmotorsoptimerad hemsida',
        longDesc:
            'We want to see more charts low hanging fruit and into the weeds we need to make the new version clean and sexy. Powerpoint Bunny can we take this offline, yet design thinking yet data-point we’re all in this together, even if our businesses function differently yet product launch diversify kpis. ',
        link: 'http://tornbybilteknik.com'
    }
]

const References = () => (
    <section
        id='references'
        name='prince-info'
        className='section is-medium has-light-grey-background has-position-relative'
    >
        <div className='container is-fluid'>
            <h2 className='title is-1 has-blue-sidebar'>Våra kundcase</h2>
            {references.map(reference => (
                <Reference reference={reference}></Reference>
            ))}
        </div>
        <SkewedDivider color='#fff' direction='left' />
    </section>
)

export default References

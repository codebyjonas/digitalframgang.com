import React from 'react'
import {
    MdPeople,
    MdModeEdit,
    MdInsertDriveFile,
    MdComputer
} from 'react-icons/md'
import { FaAngleDoubleRight } from 'react-icons/fa'

const OurProcess = () => (
    <section id='our-process' className='section  '>
        <div className='container'>
            <div>
                <h1 className='title is-1 has-blue-sidebar'>Vår Process</h1>
            </div>
            <div id='process-steps' className='columns'>
                <div className='process-step column is-one-quarter'>
                    <div className='orange-number'>1</div>
                    <div className='icon-frame'>
                        <MdPeople className='process-icon' />
                    </div>
                    <h3 className='step-title'>Uppstartsmöte</h3>
                    <p>
                        Vi erhåller full förståelse för er verksamhet samt era
                        mål och förväntningar med er nya hemsida.
                    </p>
                </div>
                <div className='process-arrow column'>
                    <FaAngleDoubleRight />
                </div>
                <div className='process-step column is-one-quarter'>
                    <div className='orange-number'>2</div>
                    <div className='icon-frame'>
                        <MdModeEdit className='process-icon' />
                    </div>
                    <h3 className='step-title'>Designförslag</h3>
                    <p>
                        Framtagning av designförslag som itereras med er tills
                        att ni är nöjda.
                    </p>
                </div>

                <div className='process-arrow column'>
                    <FaAngleDoubleRight />
                </div>

                <div className='process-step column is-one-quarter'>
                    <div className='orange-number'>3</div>
                    <div className='icon-frame'>
                        <MdComputer className='process-icon' />
                    </div>
                    <h3 className='step-title'>Implementation</h3>
                    <p>
                        Implementation av er nya hemsida. Detta innefattar både
                        design samt framtagning av texter och bilder.
                    </p>
                </div>
            </div>
        </div>
    </section>
)

export default OurProcess

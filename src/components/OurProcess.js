import React from 'react'
import { MdPeople, MdModeEdit, MdInsertDriveFile, MdComputer} from 'react-icons/md'
import { FaAngleDoubleRight } from 'react-icons/fa'

const OurProcess = () => (
    <section id="our-process" className="section is-medium">
        <div className="container">
            <div>
                <h1 className="title is-1 has-blue-sidebar">Vår Process</h1>
            </div>
            <div id="process-steps" className="columns">
                <div className="process-step column is-one-quarter">
                    <div className="orange-number">
                        1
                    </div>
                    <div className="icon-frame">
                        <MdPeople className='process-icon'/>
                    </div>
                    <h3 className="step-title">Meeting</h3>
                    <p>Neque porro quisquam est qui dolorem ipsum </p>
                </div>
                <div className="process-arrow column">
                    <FaAngleDoubleRight/>
                </div>
                <div className="process-step column is-one-quarter">
                    <div className="orange-number">
                        2
                    </div>
                    <div className="icon-frame">
                        <MdModeEdit className='process-icon'/>
                    </div>
                    <h3 className="step-title">Step1</h3>
                    <p>Neque porro quisquam est qui dolorem ipsum </p>
                </div>

                <div className="process-arrow column">
                    <FaAngleDoubleRight/>
                </div>

                <div className="process-step column is-one-quarter">
                    <div className="orange-number">
                        3
                    </div>
                    <div className="icon-frame">
                        <MdComputer className='process-icon'/>
                    </div>
                    <h3 className="step-title">Step1</h3>
                    <p>Neque porro quisquam est qui dolorem ipsum </p>
                </div>
            </div>

        </div>
    </section>
)

export default OurProcess

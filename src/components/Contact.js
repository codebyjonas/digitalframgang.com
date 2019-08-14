import React from 'react'

const Contact = () => (
    <section className='section is-medium'>
        <div className='container'>
            <h2 className='title is-2'>Kontakta oss</h2>
            <div className='field'>
                <label className='label'>Name</label>
                <div className='control'>
                    <input
                        className='input'
                        type='text'
                        placeholder='Text input'
                    />
                </div>
            </div>

            <div className='field'>
                <label className='label'>Email</label>
                <div className='control has-icons-left has-icons-right'>
                    <input
                        className='input'
                        type='email'
                        placeholder='Email input'
                    />
                </div>
            </div>

            <div className='field'>
                <label className='label'>Message</label>
                <div className='control'>
                    <textarea className='textarea' placeholder='Textarea' />
                </div>
            </div>

            <div className='field'>
                <div className='control'>
                    <button className='button is-link'>Submit</button>
                </div>
            </div>
        </div>
    </section>
)

export default Contact

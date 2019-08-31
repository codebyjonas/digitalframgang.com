import React from 'react'
import * as emailjs from 'emailjs-com'

class Contact extends React.Component {
    state = {
        formName: '',
        formMail: '',
        formMsg: ''
    }

    formMsgUpdate = event => {
        this.setState({ formMsg: event.target.value })
    }
    formMailUpdate = event => {
        this.setState({ formMail: event.target.value })
    }
    formNameUpdate = event => {
        this.setState({ formName: event.target.value })
    }

    sendForm = () => {
        let template_params = {
            from_name: this.state.formName,
            from_email: this.state.formMail,
            message: this.state.formMsg
        }

        emailjs
            .send(
                'mailjet',
                'wiptemplate',
                template_params,
                'user_zL8VRuFhehLoHA6KiAnrI'
            )
            .then(
                response => {
                    console.log('SUCCESS!', response.status, response.text)
                },
                err => {
                    console.log('FAILED...', err)
                }
            )
    }

    render() {
        return (
            <section id='contact' className='section is-medium'>
                <div className='container'>
                    <div className='columns'>
                        <div className='column'>
                            <h2 className='title is-2 large-spacing'>
                                Låt oss hjälpa er till en bättre image online
                            </h2>
                        </div>

                        <div className='column'>
                            <div className='field'>
                                <label className='label'>Namn</label>
                                <div className='control'>
                                    <input
                                        className='input'
                                        type='text'
                                        placeholder='Text input'
                                        value={this.state.formName}
                                        onChange={this.formNameUpdate}
                                    />
                                </div>
                            </div>

                            <div className='field'>
                                <label className='label'>Email</label>
                                <div className='control'>
                                    <input
                                        className='input'
                                        type='email'
                                        placeholder='your@email.com'
                                        value={this.state.formMail}
                                        onChange={this.formMailUpdate}
                                    />
                                </div>
                            </div>

                            <div className='field'>
                                <label className='label'>Meddelande</label>
                                <div className='control'>
                                    <textarea
                                        className='textarea'
                                        placeholder='Skriv meddelande här...'
                                        value={this.state.formMsg}
                                        onChange={this.formMsgUpdate}
                                    />
                                </div>
                            </div>

                            <div className='field'>
                                <div className='control'>
                                    <button
                                        className='button is-link'
                                        onClick={this.sendForm}
                                    >
                                        Submit
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Contact

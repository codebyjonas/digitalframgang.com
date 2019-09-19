import React from 'react'
import * as emailjs from 'emailjs-com'

class Contact extends React.Component {
    constructor() {
        super()
        this.state = {
            formName: '',
            formMail: '',
            formMsg: '',
            formTel: '',
            formCompany: '',
            status: '',
            isLoading: false
        }
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
    formTelUpdate = event => {
        this.setState({ formTel: event.target.value })
    }
    formCompanyUpdate = event => {
        this.setState({ formCompany: event.target.value })
    }

    sendForm = () => {
        this.setState({ isLoading: true })
        let template_params = {
            from_name: this.state.formName,
            from_email: this.state.formMail,
            message: this.state.formMsg,
            tel: this.state.formTel,
            company: this.state.formCompany
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
                    this.setState({ isLoading: false })
                    this.resetState()
                    this.setState({
                        status: 'Tack! Vi hör av oss inom en arbetsdag'
                    })
                },
                err => {
                    console.log('FAILED...', err)
                    this.setState({ isLoading: false })
                    this.setState({
                        status:
                            'Något blev fel, försök igen eller skicka ett mail till angiven mailadress till vänster'
                    })
                }
            )
    }

    resetState() {
        this.setState({
            formMail: '',
            formName: '',
            formMsg: '',
            formTel: '',
            formCompany: '',
            status: '',
            isLoading: false
        })
    }

    render() {
        let statusText

        if (this.state.status !== '') {
            statusText = (
                <div class='notification is-info'>
                    <p>{this.state.status}</p>
                </div>
            )
        } else {
            statusText = <p>{this.state.status}</p>
        }

        return (
            <section
                id='contact'
                name='contact-us'
                className='section is-medium has-img-background'
            >
                <div
                    id='contact-container'
                    className='container has-white-background'
                >
                    <div className='columns'>
                        <div className='column'>
                            <h2 className='title is-2'>
                                Låt oss hjälpa er till en bättre image online!
                            </h2>
                            <p>
                                Kontakta oss istället?
                            </p>
                            <p>
                                E-post: hej@digitalframgang.com
                            </p>
                        </div>

                        <div className='column'>
                            <div className="columns">
                                <div className="column">
                                    <div className='field'>
                                        <label className='label'>Namn</label>
                                        <div className='control'>
                                            <input
                                                className='input'
                                                type='text'
                                                placeholder='namn...'
                                                value={this.state.formName}
                                                onChange={this.formNameUpdate}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="column">
                                    <div className='field'>
                                        <label className='label'>Email</label>
                                        <div className='control'>
                                            <input
                                                className='input'
                                                type='email'
                                                placeholder='din@email.com'
                                                value={this.state.formMail}
                                                onChange={this.formMailUpdate}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="columns">
                                <div className="column">
                                    <div className='field'>
                                        <label className='label'>Telefon</label>
                                        <div className='control'>
                                            <input
                                                className='input'
                                                type='text'
                                                placeholder='Telefonnummer'
                                                value={this.state.formTel}
                                                onChange={this.formTelUpdate}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="column">
                                    <div className='field'>
                                        <label className='label'>Företag</label>
                                        <div className='control'>
                                            <input
                                                className='input'
                                                type='email'
                                                placeholder='Företagsnamn'
                                                value={this.state.formCompany}
                                                onChange={this.formCompanyUpdate}
                                            />
                                        </div>
                                    </div>
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
                            <div className='field has-text-centered'>
                                <div className='columns'>
                                    <div className='column'>
                                        <div className='control'>
                                            <button
                                                className={
                                                    'button is-link' +
                                                    (this.state.isLoading
                                                        ? 'is-loading'
                                                        : '')
                                                }
                                                onClick={this.sendForm}
                                                >Skicka</button>
                                        </div>
                                    </div>
                                </div>
                                <div>{statusText}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Contact

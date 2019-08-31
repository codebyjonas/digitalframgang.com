import React from 'react'

const links = [
    {
        displayName: 'Våra tjänster',
        link: '#services'
    },
    {
        displayName: 'Varför oss',
        link: '#why-us'
    },
    {
        displayName: 'Vilka är vi',
        link: '#about-us'
    },
    {
        displayName: 'Kontakta oss',
        link: '#contact'
    }
]

const Header = () => (
    <nav
        className='navbar is-transparent is-fixed-top is-primary'
        role='navigation'
        aria-label='main navigation'
    >
        <div className='navbar-brand'>
            <h1 className='navbar-item'>Tell.se</h1>
            <a
                role='button'
                className='navbar-burger'
                aria-label='menu'
                aria-expanded='false'
            >
                <span aria-hidden='true' />
                <span aria-hidden='true' />
                <span aria-hidden='true' />
            </a>
        </div>
        <div className='navbar-menu navbar-end'>
            {links.map(link => (
                <a className='navbar-item' href={link.link}>
                    {link.displayName}
                </a>
            ))}
        </div>
    </nav>
)

export default Header

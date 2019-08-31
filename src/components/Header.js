import React from 'react'

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
        <div className='navbar-menu navbar-end '>
            <a className='navbar-item is-header-text'>Tjänster</a>
            <a className='navbar-item is-header-text'>Tjänster</a>
            <a className='navbar-item is-header-text'>Tjänster</a>
            <a className='navbar-item is-header-text'>Tjänster</a>
        </div>
    </nav>
)

export default Header

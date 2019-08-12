import React from 'react'

const Header = () => (
    <nav className='navbar' role='navigation' aria-label='main navigation'>
        <div className='navbar-brand'>
            <h1 className='navbar-item'>Tell.se</h1>
            <a
                role='button'
                class='navbar-burger'
                aria-label='menu'
                aria-expanded='false'
            >
                <span aria-hidden='true' />
                <span aria-hidden='true' />
                <span aria-hidden='true' />
            </a>
        </div>
        <div class='navbar-menu'>
            <a className='navbar-item'>Tjänster</a>
            <a className='navbar-item'>Tjänster</a>
            <a className='navbar-item'>Tjänster</a>
            <a className='navbar-item'>Tjänster</a>
        </div>
    </nav>
)

export default Header

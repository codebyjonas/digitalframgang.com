import React from 'react'
import { Link } from 'react-scroll'
import Logo from '../assets/main-logo.png'
import { links } from '../assets/Consts'

class Header extends React.Component {
    state = {
        navbarScrollState: 'navbar-transparent',
        showMobileMenu: false
    }

    listenScrollEvent = e => {
        if (!this.state.showMobileMenu) {
            if (window.scrollY > 660) {
                this.setState({ navbarScrollState: 'is-primary' })
            } else {
                this.setState({ navbarScrollState: 'navbar-transparent' })
            }
        }
    }

    componentDidMount = () => {
        window.addEventListener('scroll', this.listenScrollEvent)
    }

    toggleMobileMenu = () => {
        this.setState(prevState => ({
            showMobileMenu: !prevState.showMobileMenu,
            navbarScrollState: 'is-primary'
        }))
    }

    render() {
        return (
            <nav
                id='header'
                name='header'
                className={
                    'navbar is-fixed-top ' + this.state.navbarScrollState
                }
                role='navigation'
                aria-label='main navigation'
            >
                <div className='navbar-brand'>
                    <Link to='hero' smooth={true} duration={500}>
                        <figure className='image'>
                            <img src={Logo} alt='Digital Framgång'></img>
                        </figure>
                    </Link>
                    <a
                        role='button'
                        className='navbar-burger'
                        aria-label='menu'
                        aria-expanded='false'
                        onClick={this.toggleMobileMenu}
                    >
                        <span aria-hidden='true' />
                        <span aria-hidden='true' />
                        <span aria-hidden='true' />
                    </a>
                </div>
                <div
                    className={
                        'navbar-menu navbar-end ' +
                        (this.state.showMobileMenu && 'is-active')
                    }
                >
                    {links.map(link => (
                        <Link
                            key={link.link}
                            className='navbar-item'
                            to={link.link}
                            smooth={true}
                            duration={500}
                            activeClass='is-active'
                            spy={true}
                        >
                            {link.displayName}
                        </Link>
                    ))}
                </div>
            </nav>
        )
    }
}

export default Header

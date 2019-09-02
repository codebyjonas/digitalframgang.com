import React from 'react'
import { Link, animateScroll as Scroll } from 'react-scroll'

const links = [
    {
        displayName: 'Våra tjänster',
        link: 'services'
    },
    {
        displayName: 'Varför oss',
        link: 'why-us'
    },
    {
        displayName: 'Vilka är vi',
        link: 'about-us'
    },
    {
        displayName: 'Kontakta oss',
        link: 'contact'
    }
]



class Header extends React.Component {
    constructor(){
        super()
        this.state = {
            navbarScrollState: 'navbar-transparent'
        }
    }

    listenScrollEvent = e => {
       if (window.scrollY > 740) {
           this.setState({navbarScrollState: 'is-primary'})
       } else {
           this.setState({navbarScrollState: 'navbar-transparent'})
       }
     }

     componentDidMount() {
       window.addEventListener('scroll', this.listenScrollEvent)
     }
    render () {
        return(
            <nav
                className={'navbar is-fixed-top ' + this.state.navbarScrollState}
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
                        <Link
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

export default Header;

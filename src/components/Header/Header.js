import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

function Header() {
    const allCategories = ['home', 'about', 'projects', 'contact']
    const [active, setActive] = useState('home');

    return (
        <nav className='nav'>
            <ul className="nav-links">
                <li onClick={() => setActive('home')} className="home" style={{ color: (active === 'home') && '#dc9136'}} >
                    <Link
                    to='/'>
                    Home
                    </Link>
                </li>
                <li onClick={() => setActive('about')} className="about" style={{ color: (active === 'about') && "#dc9136"}}>
                    <Link
                    to='/about'>
                    About
                    </Link>
                </li>
                <li onClick={() => setActive('projects')} className="projects" style={{ color: (active === 'projects') && "#dc9136"}}>
                    <Link
                    to='/projects'>
                    Projects
                    </Link>
                </li>
                <li onClick={() => setActive('contact')} className="contact" style={{ color: (active === 'contact') && "#dc9136"}}>
                    <Link
                    to='/contact'>
                    Contact
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default Header;
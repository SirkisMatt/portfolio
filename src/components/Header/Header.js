import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

function Header() {

    return (
        <nav className='Header'>
            <ul className="nav-links">
                <li>
                    <Link
                    to='/'>
                    Home
                    </Link>
                </li>
                <li>
                    <Link
                    to='/about'>
                    About
                    </Link>
                </li>
                <li>
                    <Link
                    to='/projects'>
                    Projects
                    </Link>
                </li>
                <li>
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
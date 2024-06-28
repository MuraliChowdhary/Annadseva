import React, { useState } from 'react';
import './styles/Header.css';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header className="header">
            <div className="logo">Anadh Seva</div>
            <div className="menu-icon" onClick={toggleMenu}>
                &#9776;
            </div>
            <nav>
                <ul className={menuOpen ? 'show' : ''}>
                    <li><a href="#">Home</a></li>
                    <li><a href="/aboutus">About</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="/contactus">Contact</a></li>
                    <li><button className="donate-button">Donate</button></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;

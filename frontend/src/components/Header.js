import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from './context/AuthProvider';
import './styles/Header.css';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const { user, logout } = useAuth();

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
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/aboutus">About</Link></li>
                    <li><Link to="/contactus">Contact</Link></li>
                    {user ? (
                        <>
                            <li><Link to="/receive">Receive</Link></li>
                            <li><Link to="/donate">Donate</Link></li>
                            <li><Link to="/volunteer">Volunteer</Link></li>
                            <li><button className="logout-button" onClick={logout}>Logout</button></li>
                        </>
                    ) : (
                        <>
                            <li><Link to="/login">Login</Link></li>
                            <li><Link to="/register">Register</Link></li>
                        </>
                    )}
                </ul>
            </nav>
        </header>
    );
};

export default Header;

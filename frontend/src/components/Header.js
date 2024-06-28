import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    // const [menuOpen, setMenuOpen] = useState(false);

    // const toggleMenu = () => {
    //     setMenuOpen(!menuOpen);
    // };
    return (
        <header className="header">
            <div className="logo">Charity.</div>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/causes">Latest Causes</Link></li>
                    <li><Link to="/events">Social Events</Link></li>
                    <li><Link to="/blog">Blog</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li><Link to="/login">Login</Link></li>
                    <li><Link to="/register">register</Link></li>
                </ul>
            </nav>
            <button className="donate-button">Donate</button>
        </header>
};

export default Header;



// return (
//     <header className="header">
//         <div className="logo">Anadh Seva</div>
//         <div className="menu-icon" onClick={toggleMenu}>
//             &#9776;
//         </div>
//         <nav>
//             <ul className={menuOpen ? 'show' : ''}>
//                 <li><a href="#">Home</a></li>
//                 <li><a href="/aboutus">About</a></li>
//                 <li><a href="#">Services</a></li>
//                 <li><a href="/contactus">Contact</a></li>
//                 <li><button className="donate-button">Donate</button></li>
//             </ul>
//         </nav>
//     </header>
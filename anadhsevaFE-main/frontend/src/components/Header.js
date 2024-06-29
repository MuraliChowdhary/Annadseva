import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const location = useLocation();
  const isUserTypeSelection = location.pathname === '/user-type-selection';

  return (
    <header className="header">
      <div className="logo">Charity</div>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          {isUserTypeSelection ? (
            <li><Link to="/logs">Logs</Link></li>
          ) : (
            <>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/causes">Latest Causes</Link></li>
              <li><Link to="/events">Social Events</Link></li>
              <li><Link to="/blog">Blog</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              <li><Link to="/login">Login</Link></li>
              <li><Link to="/register">Register</Link></li>
            </>
          )}
        </ul>
      </nav>
      {!isUserTypeSelection && <button className="donate-button">Donate</button>}
    </header>
  );
};

export default Header;

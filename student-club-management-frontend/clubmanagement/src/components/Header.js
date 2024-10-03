import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // Import the CSS for styling

const Header = () => {
    return (
        <header className="header">
            <div className="logo">
                <h1>University Club Management</h1>
            </div>
            <nav>
                <ul className="nav-links">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/clubs">Clubs</Link></li>
                    <li><Link to="/members">Members</Link></li>
                    <li><Link to="/events">Events</Link></li>
                    <li><Link to="/login">Login</Link></li>
                    <li><Link to="/register">Register</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;

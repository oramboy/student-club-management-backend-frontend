import React from 'react';
import './Footer.css'; // Import the CSS for styling

const Footer = () => {
    return (
        <footer className="footer">
            <p>&copy; {new Date().getFullYear()} University Club Management. All rights reserved.</p>
            <ul className="footer-links">
                <li><a href="/privacy">Privacy Policy</a></li>
                <li><a href="/terms">Terms of Service</a></li>
            </ul>
        </footer>
    );
};

export default Footer;

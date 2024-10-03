import React from 'react';
import './NotFound.css'; // Import the CSS for styling

const NotFound = () => {
    return (
        <div className="not-found">
            <h1>404</h1>
            <h2>Oops! Page Not Found</h2>
            <p>The page you are looking for does not exist.</p>
            <a href="/">Go to Home</a>
        </div>
    );
};

export default NotFound;

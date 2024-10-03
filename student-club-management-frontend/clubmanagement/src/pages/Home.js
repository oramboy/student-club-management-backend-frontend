import React from 'react';
import './Home.css'; // Import CSS for styling

const Home = () => {
    return (
        <div className="home-container">
            <h1>Welcome to the University Club Management System</h1>
            <p>Join clubs, participate in events, and connect with fellow students!</p>
            <div className="cta-buttons">
                <a href="/clubs" className="cta-button">Explore Clubs</a>
                <a href="/register" className="cta-button">Join Us</a>
            </div>
        </div>
    );
};

export default Home;

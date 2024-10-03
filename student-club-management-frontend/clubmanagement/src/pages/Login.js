import React, { useState } from 'react';
import axios from 'axios';
import './Login.css'; // Import CSS for styling

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/api/auth/login', { email, password });
            // Handle successful login (e.g., store token, redirect)
            alert('Login successful!');
        } catch (error) {
            console.error('Login failed:', error);
            alert('Invalid email or password');
        }
    };

    return (
        <div className="login-container">
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Email:</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Password:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" className="submit-button">Login</button>
            </form>
            <p className="switch-page">
                Don't have an account? <a href="/register">Register here</a>
            </p>
        </div>
    );
};

export default Login;

import React, { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';

// Create a Context for Auth
const AuthContext = createContext();

// Create a custom hook to use the AuthContext
export const useAuth = () => {
    return useContext(AuthContext);
};

// AuthProvider component to wrap around the application
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // Simulated login function
    const login = async (username, password) => {
        setLoading(true);
        try {
            const response = await axios.post('/api/auth/login', { username, password });
            setUser(response.data.user);
            localStorage.setItem('user', JSON.stringify(response.data.user)); // Store user data in local storage
        } catch (error) {
            console.error("Login failed:", error);
            throw new Error('Login failed, please check your credentials.');
        } finally {
            setLoading(false);
        }
    };

    // Logout function
    const logout = () => {
        setUser(null);
        localStorage.removeItem('user'); // Remove user data from local storage
    };

    // Check for user session on initial load
    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
        setLoading(false);
    }, []);

    const value = {
        user,
        login,
        logout,
        loading
    };

    return (
        <AuthContext.Provider value={value}>
            {loading ? <div className="loading-screen">Loading...</div> : children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;

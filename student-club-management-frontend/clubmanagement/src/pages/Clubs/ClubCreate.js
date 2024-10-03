import React, { useState } from 'react';
import axios from 'axios';
import './ClubCreate.css'; // Import CSS for styling

const ClubCreate = () => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('/api/clubs', { name, description });
            alert('Club created successfully!');
            // Reset fields or redirect as necessary
            setName('');
            setDescription('');
        } catch (error) {
            console.error("Error creating club:", error);
            alert('Failed to create club. Please try again.');
        }
    };

    return (
        <div className="club-create-container">
            <h2>Create a New Club</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Club Name:</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Description:</label>
                    <textarea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" className="submit-button">Create Club</button>
            </form>
        </div>
    );
};

export default ClubCreate;

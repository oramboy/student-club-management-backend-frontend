import React, { useState } from 'react';
import axios from 'axios';
import './MemberCreate.css'; // Import CSS for styling

const MemberCreate = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [clubId, setClubId] = useState('');
    const [bio, setBio] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('/api/members', { name, email, clubId, bio });
            alert('Member created successfully!');
            // Reset fields or redirect as necessary
            setName('');
            setEmail('');
            setClubId('');
            setBio('');
        } catch (error) {
            console.error("Error creating member:", error);
            alert('Failed to create member. Please try again.');
        }
    };

    return (
        <div className="member-create-container">
            <h2>Create a New Member</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Name:</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
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
                    <label>Club ID:</label>
                    <input
                        type="text"
                        value={clubId}
                        onChange={(e) => setClubId(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Bio:</label>
                    <textarea
                        value={bio}
                        onChange={(e) => setBio(e.target.value)}
                    />
                </div>
                <button type="submit" className="submit-button">Create Member</button>
            </form>
        </div>
    );
};

export default MemberCreate;

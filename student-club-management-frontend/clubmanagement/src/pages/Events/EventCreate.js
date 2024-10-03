import React, { useState } from 'react';
import axios from 'axios';
import './EventCreate.css'; // Import CSS for styling

const EventCreate = () => {
    const [title, setTitle] = useState('');
    const [date, setDate] = useState('');
    const [description, setDescription] = useState('');
    const [location, setLocation] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('/api/events', { title, date, description, location });
            alert('Event created successfully!');
            // Reset fields or redirect as necessary
            setTitle('');
            setDate('');
            setDescription('');
            setLocation('');
        } catch (error) {
            console.error("Error creating event:", error);
            alert('Failed to create event. Please try again.');
        }
    };

    return (
        <div className="event-create-container">
            <h2>Create a New Event</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Title:</label>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Date:</label>
                    <input
                        type="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Description:</label>
                    <textarea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label>Location:</label>
                    <input
                        type="text"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                    />
                </div>
                <button type="submit" className="submit-button">Create Event</button>
            </form>
        </div>
    );
};

export default EventCreate;

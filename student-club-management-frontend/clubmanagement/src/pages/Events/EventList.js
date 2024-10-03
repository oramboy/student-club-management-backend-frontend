import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './EventList.css'; // Import CSS for styling

const EventList = () => {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        const fetchEvents = async () => {
            const response = await axios.get('/api/events');
            setEvents(response.data);
        };
        fetchEvents();
    }, []);

    return (
        <div className="event-list-container">
            <h2>Events</h2>
            <ul className="event-list">
                {events.map(event => (
                    <li key={event.id} className="event-item">
                        <h3>{event.title}</h3>
                        <p>{event.date}</p>
                        <p>{event.description}</p>
                        <a href={`/events/${event.id}`} className="event-detail-link">View Details</a>
                    </li>
                ))}
            </ul>
            <a href="/events/create" className="create-event-button">Add New Event</a>
        </div>
    );
};

export default EventList;

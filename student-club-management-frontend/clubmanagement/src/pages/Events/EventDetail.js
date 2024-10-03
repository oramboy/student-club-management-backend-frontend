import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './EventDetail.css'; // Import CSS for styling

const EventDetail = () => {
    const { id } = useParams();
    const [event, setEvent] = useState(null);

    useEffect(() => {
        const fetchEventDetails = async () => {
            const response = await axios.get(`/api/events/${id}`);
            setEvent(response.data);
        };
        fetchEventDetails();
    }, [id]);

    if (!event) return <div>Loading...</div>;

    return (
        <div className="event-detail-container">
            <h2>{event.title}</h2>
            <p><strong>Date:</strong> {event.date}</p>
            <p><strong>Description:</strong> {event.description}</p>
            <p><strong>Location:</strong> {event.location}</p>
            <a href="/events" className="back-link">Back to Event List</a>
        </div>
    );
};

export default EventDetail;

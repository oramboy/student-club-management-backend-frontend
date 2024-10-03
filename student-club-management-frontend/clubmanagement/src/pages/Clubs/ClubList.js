import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './ClubList.css'; // Import CSS for styling

const ClubList = () => {
    const [clubs, setClubs] = useState([]);

    useEffect(() => {
        const fetchClubs = async () => {
            const response = await axios.get('/api/clubs');
            setClubs(response.data);
        };
        fetchClubs();
    }, []);

    return (
        <div className="club-list-container">
            <h2>Clubs</h2>
            <ul className="club-list">
                {clubs.map(club => (
                    <li key={club.id} className="club-item">
                        <h3>{club.name}</h3>
                        <p>{club.description}</p>
                        <a href={`/clubs/${club.id}`} className="club-detail-link">View Details</a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ClubList;

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './ClubDetail.css'; // Import CSS for styling

const ClubDetail = () => {
    const { id } = useParams();
    const [club, setClub] = useState(null);

    useEffect(() => {
        const fetchClubDetails = async () => {
            const response = await axios.get(`/api/clubs/${id}`);
            setClub(response.data);
        };
        fetchClubDetails();
    }, [id]);

    if (!club) return <div>Loading...</div>;

    return (
        <div className="club-detail-container">
            <h2>{club.name}</h2>
            <p>{club.description}</p>
            <h3>Members:</h3>
            <ul>
                {club.members.map(member => (
                    <li key={member.id}>{member.name}</li>
                ))}
            </ul>
            <a href="/clubs" className="back-link">Back to Club List</a>
        </div>
    );
};

export default ClubDetail;

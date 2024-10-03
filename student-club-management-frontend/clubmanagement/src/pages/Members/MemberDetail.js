import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './MemberDetail.css'; // Import CSS for styling

const MemberDetail = () => {
    const { id } = useParams();
    const [member, setMember] = useState(null);

    useEffect(() => {
        const fetchMemberDetails = async () => {
            const response = await axios.get(`/api/members/${id}`);
            setMember(response.data);
        };
        fetchMemberDetails();
    }, [id]);

    if (!member) return <div>Loading...</div>;

    return (
        <div className="member-detail-container">
            <h2>{member.name}</h2>
            <p><strong>Email:</strong> {member.email}</p>
            <p><strong>Joined Club:</strong> {member.club.name}</p>
            <p><strong>About:</strong> {member.bio}</p>
            <a href="/members" className="back-link">Back to Member List</a>
        </div>
    );
};

export default MemberDetail;

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './MemberList.css'; // Import CSS for styling

const MemberList = () => {
    const [members, setMembers] = useState([]);

    useEffect(() => {
        const fetchMembers = async () => {
            const response = await axios.get('/api/members');
            setMembers(response.data);
        };
        fetchMembers();
    }, []);

    return (
        <div className="member-list-container">
            <h2>Members</h2>
            <ul className="member-list">
                {members.map(member => (
                    <li key={member.id} className="member-item">
                        <h3>{member.name}</h3>
                        <p>{member.email}</p>
                        <a href={`/members/${member.id}`} className="member-detail-link">View Details</a>
                    </li>
                ))}
            </ul>
            <a href="/members/create" className="create-member-button">Add New Member</a>
        </div>
    );
};

export default MemberList;

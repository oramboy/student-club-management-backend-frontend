import React from 'react';
import './Profile.css'; // Import CSS for styling

const Profile = ({ user }) => {
    return (
        <div className="profile-container">
            <h2>User Profile</h2>
            <div className="profile-details">
                <p><strong>Name:</strong> {user.name}</p>
                <p><strong>Email:</strong> {user.email}</p>
                {/* Add more profile details as needed */}
            </div>
            <a href="/edit-profile" className="edit-profile-link">Edit Profile</a>
        </div>
    );
};

export default Profile;

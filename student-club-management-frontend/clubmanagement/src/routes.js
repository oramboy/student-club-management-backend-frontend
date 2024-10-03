// routes.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home'; // Home page
import ClubList from './pages/Clubs/ClubList'; // Club list page
import ClubDetail from './pages/Clubs/ClubDetail'; // Club detail page
import ClubCreate from './pages/Clubs/ClubCreate'; // Club create page
import MemberList from './pages/Members/MemberList'; // Member list page
import MemberDetail from './pages/Members/MemberDetail'; // Member detail page
import MemberCreate from './pages/Members/MemberCreate'; // Member create page
import EventList from './pages/Events/EventList'; // Event list page
import EventDetail from './pages/Events/EventDetail'; // Event detail page
import EventCreate from './pages/Events/EventCreate'; // Event create page
import Login from './pages/Login'; // Login page
import Register from './pages/Register'; // Registration page
import Profile from './pages/Profile'; // User profile page
import NotFound from './components/NotFound'; // 404 Not Found page

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/clubs" element={<ClubList />} />
            <Route path="/clubs/:id" element={<ClubDetail />} />
            <Route path="/create-club" element={<ClubCreate />} />
            <Route path="/members" element={<MemberList />} />
            <Route path="/members/:id" element={<MemberDetail />} />
            <Route path="/create-member" element={<MemberCreate />} />
            <Route path="/events" element={<EventList />} />
            <Route path="/events/:id" element={<EventDetail />} />
            <Route path="/create-event" element={<EventCreate />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="*" element={<NotFound />} /> {/* Catch-all route for 404 */}
        </Routes>
    );
};

export default AppRoutes;

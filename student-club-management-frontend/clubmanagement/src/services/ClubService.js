import axios from 'axios';

const API_URL = '/api/clubs'; // Base URL for club API

const ClubService = {
    // Fetch all clubs
    getAllClubs: async () => {
        try {
            const response = await axios.get(API_URL);
            return response.data; // Return club data
        } catch (error) {
            console.error('Error fetching clubs:', error);
            throw error; // Rethrow error for handling in components
        }
    },

    // Fetch a single club by ID
    getClubById: async (id) => {
        try {
            const response = await axios.get(`${API_URL}/${id}`);
            return response.data; // Return club data
        } catch (error) {
            console.error('Error fetching club:', error);
            throw error; // Rethrow error for handling in components
        }
    },

    // Create a new club
    createClub: async (clubData) => {
        try {
            const response = await axios.post(API_URL, clubData);
            return response.data; // Return newly created club data
        } catch (error) {
            console.error('Error creating club:', error);
            throw error; // Rethrow error for handling in components
        }
    },

    // Update an existing club
    updateClub: async (id, clubData) => {
        try {
            const response = await axios.put(`${API_URL}/${id}`, clubData);
            return response.data; // Return updated club data
        } catch (error) {
            console.error('Error updating club:', error);
            throw error; // Rethrow error for handling in components
        }
    },

    // Delete a club
    deleteClub: async (id) => {
        try {
            await axios.delete(`${API_URL}/${id}`); // Delete club by ID
        } catch (error) {
            console.error('Error deleting club:', error);
            throw error; // Rethrow error for handling in components
        }
    }
};

export default ClubService;

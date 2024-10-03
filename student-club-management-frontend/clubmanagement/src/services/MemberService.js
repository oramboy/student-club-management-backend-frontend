import axios from 'axios';

const API_URL = '/api/members'; // Base URL for member API

const MemberService = {
    // Fetch all members
    getAllMembers: async () => {
        try {
            const response = await axios.get(API_URL);
            return response.data; // Return member data
        } catch (error) {
            console.error('Error fetching members:', error);
            throw error; // Rethrow error for handling in components
        }
    },

    // Fetch a single member by ID
    getMemberById: async (id) => {
        try {
            const response = await axios.get(`${API_URL}/${id}`);
            return response.data; // Return member data
        } catch (error) {
            console.error('Error fetching member:', error);
            throw error; // Rethrow error for handling in components
        }
    },

    // Create a new member
    createMember: async (memberData) => {
        try {
            const response = await axios.post(API_URL, memberData);
            return response.data; // Return newly created member data
        } catch (error) {
            console.error('Error creating member:', error);
            throw error; // Rethrow error for handling in components
        }
    },

    // Update an existing member
    updateMember: async (id, memberData) => {
        try {
            const response = await axios.put(`${API_URL}/${id}`, memberData);
            return response.data; // Return updated member data
        } catch (error) {
            console.error('Error updating member:', error);
            throw error; // Rethrow error for handling in components
        }
    },

    // Delete a member
    deleteMember: async (id) => {
        try {
            await axios.delete(`${API_URL}/${id}`); // Delete member by ID
        } catch (error) {
            console.error('Error deleting member:', error);
            throw error; // Rethrow error for handling in components
        }
    }
};

export default MemberService;

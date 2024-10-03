import axios from 'axios';

const API_URL = '/api/events'; // Base URL for event API

const EventService = {
    // Fetch all events
    getAllEvents: async () => {
        try {
            const response = await axios.get(API_URL);
            return response.data; // Return event data
        } catch (error) {
            console.error('Error fetching events:', error);
            throw error; // Rethrow error for handling in components
        }
    },

    // Fetch a single event by ID
    getEventById: async (id) => {
        try {
            const response = await axios.get(`${API_URL}/${id}`);
            return response.data; // Return event data
        } catch (error) {
            console.error('Error fetching event:', error);
            throw error; // Rethrow error for handling in components
        }
    },

    // Create a new event
    createEvent: async (eventData) => {
        try {
            const response = await axios.post(API_URL, eventData);
            return response.data; // Return newly created event data
        } catch (error) {
            console.error('Error creating event:', error);
            throw error; // Rethrow error for handling in components
        }
    },

    // Update an existing event
    updateEvent: async (id, eventData) => {
        try {
            const response = await axios.put(`${API_URL}/${id}`, eventData);
            return response.data; // Return updated event data
        } catch (error) {
            console.error('Error updating event:', error);
            throw error; // Rethrow error for handling in components
        }
    },

    // Delete an event
    deleteEvent: async (id) => {
        try {
            await axios.delete(`${API_URL}/${id}`); // Delete event by ID
        } catch (error) {
            console.error('Error deleting event:', error);
            throw error; // Rethrow error for handling in components
        }
    }
};

export default EventService;

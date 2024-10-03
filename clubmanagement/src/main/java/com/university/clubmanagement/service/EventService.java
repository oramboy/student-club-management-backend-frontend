package com.university.clubmanagement.service;

import com.university.clubmanagement.exception.ResourceNotFoundException;
import com.university.clubmanagement.model.Event;
import com.university.clubmanagement.repository.EventRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EventService {

    @Autowired
    private EventRepository eventRepository;

    // Get all events
    public List<Event> getAllEvents() {
        return eventRepository.findAll();
    }

    // Get event by ID
    public ResponseEntity<Event> getEventById(Long id) {
        Event event = eventRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Event not found with id " + id));
        return ResponseEntity.ok(event);
    }

    // Create a new event
    public Event createEvent(Event event) {
        return eventRepository.save(event);
    }

    // Update event
    public ResponseEntity<Event> updateEvent(Long id, Event eventDetails) {
        Event event = eventRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Event not found with id " + id));

        event.setEventName(eventDetails.getEventName());
        event.setEventDate(eventDetails.getEventDate());
        event.setClub(eventDetails.getClub());

        final Event updatedEvent = eventRepository.save(event);
        return ResponseEntity.ok(updatedEvent);
    }

    // Delete event
    public ResponseEntity<Void> deleteEvent(Long id) {
        Event event = eventRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Event not found with id " + id));

        eventRepository.delete(event);
        return ResponseEntity.noContent().build();
    }
}

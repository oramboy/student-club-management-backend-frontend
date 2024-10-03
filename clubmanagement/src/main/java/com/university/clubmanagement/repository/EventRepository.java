package com.university.clubmanagement.repository;

import com.university.clubmanagement.model.Event;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EventRepository extends JpaRepository<Event, Long> {
    // Additional custom query methods (if needed) can be defined here
}

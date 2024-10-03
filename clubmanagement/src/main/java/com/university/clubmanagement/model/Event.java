package com.university.clubmanagement.model;

//import javax.persistence.*;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;

@Setter
@Getter
@Entity
@Table(name = "events")
public class Event {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "event_name", nullable = false)
    private String eventName;

    @Column(name = "event_date", nullable = false)
    private LocalDate eventDate;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "club_id", nullable = false)
    private Club club;

    // Constructors, getters, and setters

    public Event() {
    }

    public Event(String eventName, LocalDate eventDate, Club club) {
        this.eventName = eventName;
        this.eventDate = eventDate;
        this.club = club;
    }

}

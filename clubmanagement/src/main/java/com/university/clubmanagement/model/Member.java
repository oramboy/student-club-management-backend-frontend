package com.university.clubmanagement.model;

//import javax.persistence.*;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
@Entity
@Table(name = "members")
public class Member {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "first_name", nullable = false)
    private String firstName;

    private String lastName;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "club_id", nullable = false)
    private Club club;

    // Constructors, getters, and setters

    public Member() {
    }

    public Member(String firstName, String lastName, Club club) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.club = club;
    }

}

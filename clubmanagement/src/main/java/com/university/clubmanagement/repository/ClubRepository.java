package com.university.clubmanagement.repository;

import com.university.clubmanagement.model.Club;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ClubRepository extends JpaRepository<Club, Long> {
    // Additional custom query methods (if needed) can be defined here
}

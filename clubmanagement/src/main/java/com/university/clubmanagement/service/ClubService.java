package com.university.clubmanagement.service;

import com.university.clubmanagement.exception.ResourceNotFoundException;
import com.university.clubmanagement.model.Club;
import com.university.clubmanagement.repository.ClubRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ClubService {

    @Autowired
    private ClubRepository clubRepository;

    // Get all clubs
    public List<Club> getAllClubs() {
        return clubRepository.findAll();
    }

    // Get club by ID
    public ResponseEntity<Club> getClubById(Long id) {
        Club club = clubRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Club not found with id " + id));
        return ResponseEntity.ok(club);
    }

    // Create a new club
    public Club createClub(Club club) {
        return clubRepository.save(club);
    }

    // Update club
    public ResponseEntity<Club> updateClub(Long id, Club clubDetails) {
        Club club = clubRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Club not found with id " + id));

        club.setName(clubDetails.getName());
        club.setDescription(clubDetails.getDescription());

        final Club updatedClub = clubRepository.save(club);
        return ResponseEntity.ok(updatedClub);
    }

    // Delete club
    public ResponseEntity<Void> deleteClub(Long id) {
        Club club = clubRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Club not found with id " + id));

        clubRepository.delete(club);
        return ResponseEntity.noContent().build();
    }
}

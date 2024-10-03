package com.university.clubmanagement.controller;

import com.university.clubmanagement.model.Club;
import com.university.clubmanagement.service.ClubService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/clubs")
public class ClubController {

    @Autowired
    private ClubService clubService;

    // Get all clubs
    @GetMapping
    public List<Club> getAllClubs() {
        return clubService.getAllClubs();
    }

    // Get club by id
    @GetMapping("/{id}")
    public ResponseEntity<Club> getClubById(@PathVariable Long id) {
        return clubService.getClubById(id);
    }

    // Create a new club
    @PostMapping
    public Club createClub(@RequestBody Club club) {
        return clubService.createClub(club);
    }

    // Update club by id
    @PutMapping("/{id}")
    public ResponseEntity<Club> updateClub(@PathVariable Long id, @RequestBody Club clubDetails) {
        return clubService.updateClub(id, clubDetails);
    }

    // Delete club by id
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteClub(@PathVariable Long id) {
        return clubService.deleteClub(id);
    }
}

package com.university.clubmanagement.service;

import com.university.clubmanagement.exception.ResourceNotFoundException;
import com.university.clubmanagement.model.Member;
import com.university.clubmanagement.repository.MemberRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MemberService {

    @Autowired
    private MemberRepository memberRepository;

    // Get all members
    public List<Member> getAllMembers() {
        return memberRepository.findAll();
    }

    // Get member by ID
    public ResponseEntity<Member> getMemberById(Long id) {
        Member member = memberRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Member not found with id " + id));
        return ResponseEntity.ok(member);
    }

    // Create a new member
    public Member createMember(Member member) {
        return memberRepository.save(member);
    }

    // Update member
    public ResponseEntity<Member> updateMember(Long id, Member memberDetails) {
        Member member = memberRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Member not found with id " + id));

        member.setFirstName(memberDetails.getFirstName());
        member.setLastName(memberDetails.getLastName());
        member.setClub(memberDetails.getClub());

        final Member updatedMember = memberRepository.save(member);
        return ResponseEntity.ok(updatedMember);
    }

    // Delete member
    public ResponseEntity<Void> deleteMember(Long id) {
        Member member = memberRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Member not found with id " + id));

        memberRepository.delete(member);
        return ResponseEntity.noContent().build();
    }
}

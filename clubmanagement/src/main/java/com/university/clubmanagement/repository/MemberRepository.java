package com.university.clubmanagement.repository;

import com.university.clubmanagement.model.Member;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MemberRepository extends JpaRepository<Member, Long> {
    // Additional custom query methods (if needed) can be defined here
}

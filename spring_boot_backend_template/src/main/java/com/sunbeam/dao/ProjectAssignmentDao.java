package com.sunbeam.dao;

import com.sunbeam.entity.ProjectAssignment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Optional;

public interface ProjectAssignmentDao extends JpaRepository<ProjectAssignment, Long> {

    @Query("select distinct pa from ProjectAssignment pa join fetch pa.proposal pr left join fetch pa.project p left join fetch p.technologies left join fetch pr.programmer left join fetch p.client c where c.clientId = :clientId")
    List<ProjectAssignment> getAllAssignmentsForClient(Long clientId);

    @Query("select distinct pa from ProjectAssignment pa join fetch pa.proposal pr left join fetch pr.project p left join fetch p.technologies left join fetch p.client c left join fetch pr.programmer progr where progr.id = :programmerId")
    List<ProjectAssignment> getAllAssignmentsForProgrammer(Long programmerId);
}

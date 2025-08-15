package com.sunbeam.dao;

import com.sunbeam.entity.Proposal;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;

public interface ProposalDao extends JpaRepository<Proposal, Long> {
    @Query("select p from Proposal p left join fetch p.programmer pr left join fetch pr.technologies left join fetch p.project where p.project.id= :id")
    List<Proposal> findProposalWithProgrammerAndProjectDetails(@Param("id") Long id);

    @Modifying(clearAutomatically = true, flushAutomatically = true)
    @Query("update Proposal p set p.status = com.sunbeam.entity.ProposalStatus.ACCEPTED " +
            "where p.proposalId = :proposalId and p.project.client.clientId = :clientId")

    int acceptIfOwned(@Param("proposalId") Long id, @Param("clientId") Long clientId);

    @Modifying(clearAutomatically = true, flushAutomatically = true)
    @Query("update Proposal p  set p.status = com.sunbeam.entity.ProposalStatus.REJECTED where p.project.id =:projectId and p.proposalId <> :proposalId and p.project.client.clientId =:clientId")
    int rejectOtherProposal(@Param("proposalId") Long proposalId, @Param("projectId") Long projectId, @Param("clientId") Long clientId);

    @Query("select p.project.id from Proposal p where p.proposalId =:proposalId")
    Long findProjectIdByProposalId(@Param("proposalId") Long proposalId);

    @Query("select p from Proposal p left join fetch p.programmer pr left join fetch pr.technologies where p.proposalId = :proposalId")
    Optional<Proposal> findByProposalId(Long proposalId);


}

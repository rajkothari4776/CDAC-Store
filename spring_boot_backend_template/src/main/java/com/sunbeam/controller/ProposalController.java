package com.sunbeam.controller;

import com.sunbeam.DTO.ApiResponse;
import com.sunbeam.DTO.ProposalDTO;
import com.sunbeam.service.ProjectService;
import com.sunbeam.service.ProposalService;
import jakarta.validation.Valid;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

@RestController
//@RequestMapping("/proposal")
@AllArgsConstructor
public class ProposalController {
    private final ProposalService proposalService;
//    private final ProjectService projectService;

    @PostMapping("/programmer/proposal/{projectId}/submit")
    public ResponseEntity<?> submitProposal(@PathVariable Long projectId,@RequestBody @Valid ProposalDTO dto){
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        Long programmerId = Long.parseLong(auth.getName());

        System.out.println("inside submit Proposal controller and this is programmerId "+programmerId);
        return ResponseEntity.status(HttpStatus.CREATED).body(proposalService.addProposal(projectId,programmerId, dto));
    }

    @GetMapping("/client/{projectId}/proposals")
    @PreAuthorize("hasRole('CLIENT')")
    public ResponseEntity<?> getProposalsForProject(@PathVariable Long projectId){
        return ResponseEntity.ok(proposalService.getProposalByProjectId(projectId));
    }

    @PostMapping("/client/proposals/{proposalId}/accept")
    public ResponseEntity<?> acceptProposal(@PathVariable Long proposalId){
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        Long clientId = Long.parseLong(auth.getName());
        return ResponseEntity.status(HttpStatus.CREATED).body(proposalService.acceptProposal(clientId, proposalId));
    }

    @GetMapping("/client/{proposalId}/proposal")
    public ResponseEntity<?> getSingleProposal(@PathVariable Long proposalId){
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        return ResponseEntity.ok(proposalService.getProposalById(proposalId));
    }

    @GetMapping("/client/proposals")
    public ResponseEntity<?> getAllProposals(){
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        Long clientId = Long.parseLong(auth.getName());
        return ResponseEntity.ok(proposalService.getAllProposalsByClientId(clientId));
    }
}

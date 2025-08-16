package com.sunbeam.service;

import com.sunbeam.DTO.ApiResponse;
import com.sunbeam.DTO.ProposalDTO;
import com.sunbeam.DTO.ProposalResponseDTO;
import com.sunbeam.DTO.ProposalResponseForFrontendDTO;
import com.sunbeam.dao.ProgrammerDao;
import com.sunbeam.dao.ProjectAssignmentDao;
import com.sunbeam.dao.ProjectDao;
import com.sunbeam.dao.ProposalDao;
import com.sunbeam.entity.*;
import jakarta.transaction.Transactional;
import lombok.AllArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import java.nio.file.AccessDeniedException;
import java.time.LocalDateTime;
import java.util.List;

@Service
@Transactional
@AllArgsConstructor
public class ProposalServiceImpl implements ProposalService{
    private final ProjectDao projectDao;
    private final ProposalDao proposalDao;
    private final ProgrammerDao programmerDao;
    private final ProjectAssignmentDao projectAssignmentDao;
    private ModelMapper modelMapper;

    @Override
    public ApiResponse addProposal(Long projectId, Long programmerId,ProposalDTO dto) {
        Project project = projectDao.findById(projectId).orElseThrow(() ->
                new IllegalArgumentException("Invalid Project Id"));

        ProgrammerProfile programmer = programmerDao.findById(programmerId)
                .orElseThrow(() -> new IllegalArgumentException("Invalid Programmer Id"));

        Proposal proposal = modelMapper.map(dto, Proposal.class);
        project.addProposal(proposal);
        programmer.addProposal(proposal);

        return new ApiResponse("Proposal added successfully");
    }

    @Override
    public List<ProposalResponseDTO> getProposalByProjectId(Long projectId) {
        System.out.println();
        return proposalDao.findProposalWithProgrammerAndProjectDetails(projectId)
                .stream()
                .map(proposal -> modelMapper.map(proposal, ProposalResponseDTO.class))
                .toList();
    }

    @Override
    public ApiResponse acceptProposal(Long clientId, Long proposalId) {
//        Proposal proposal = proposalDao.findById(proposalId)
//                .orElseThrow(() -> new IllegalArgumentException("Invalid Proposal Id"));
        int updated = proposalDao.acceptIfOwned(proposalId, clientId);
        if(updated == 0){
            return new ApiResponse("not your project/proposal");
        }
        Long projectId = proposalDao.findProjectIdByProposalId(proposalId);
        int rejected =  proposalDao.rejectOtherProposal(proposalId,projectId,clientId);

        ProjectAssignment projectAssignment = new ProjectAssignment();
        Proposal proposal = proposalDao.findById(proposalId)
                .orElseThrow(() -> new IllegalArgumentException("Invalid Proposal Id"));

        if(updated > 0){
            projectAssignment.setProposal(proposal);
            projectAssignment.setProject(proposal.getProject());
            projectAssignment.setAssignedAt(LocalDateTime.now());
            proposal.getProject().setStatus(Status.IN_PROGRESS);
            System.out.println(proposal.getProject().toString());
//            proposalDao.save(proposal);
//            projectAssignment.isCompleted(false);
            projectAssignmentDao.save(projectAssignment);
        }


        return new ApiResponse("Proposal accepted successfully, and project Assigned!!");
    }

    @Override
    public ProposalResponseDTO getProposalById(Long proposalId) {
        return modelMapper.map(proposalDao.findByProposalId(proposalId)
                .orElseThrow(() -> new IllegalArgumentException("Invalid Proposal Id"))
                , ProposalResponseDTO.class);
    }

    @Override
    public List<ProposalResponseForFrontendDTO> getAllProposalsByClientId(Long clientId) {
        return proposalDao.findAllByClientId(clientId)
                .stream()
                .map(proposal -> modelMapper.map(proposal, ProposalResponseForFrontendDTO.class))
                .toList();
    }
}

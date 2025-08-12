package com.sunbeam.service;

import com.sunbeam.DTO.ApiResponse;
import com.sunbeam.DTO.ProposalDTO;
import com.sunbeam.DTO.ProposalResponseDTO;
import com.sunbeam.dao.ProgrammerDao;
import com.sunbeam.dao.ProjectDao;
import com.sunbeam.dao.ProposalDao;
import com.sunbeam.entity.ProgrammerProfile;
import com.sunbeam.entity.Project;
import com.sunbeam.entity.Proposal;
import jakarta.transaction.Transactional;
import lombok.AllArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import java.nio.file.AccessDeniedException;
import java.util.List;

@Service
@Transactional
@AllArgsConstructor
public class ProposalServiceImpl implements ProposalService{
    private final ProjectDao projectDao;
    private final ProposalDao proposalDao;
    private final ProgrammerDao programmerDao;
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
        proposalDao.rejectOtherProposal(proposalId,projectId,clientId);
        return new ApiResponse("Proposal accepted successfully, and others are rejected");
    }
}

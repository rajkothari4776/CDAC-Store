package com.sunbeam.service;

import com.sunbeam.DTO.ApiResponse;
import com.sunbeam.DTO.ProposalDTO;
import com.sunbeam.DTO.ProposalResponseDTO;
import jakarta.transaction.Transactional;
import org.springframework.stereotype.Service;

import java.util.List;


public interface ProposalService {
    ApiResponse addProposal(Long projectId, Long programmerId,ProposalDTO dto);

    List<ProposalResponseDTO> getProposalByProjectId(Long projectId);

    ApiResponse acceptProposal(Long clientId, Long proposalId);
}

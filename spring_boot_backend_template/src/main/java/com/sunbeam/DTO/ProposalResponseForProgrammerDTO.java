package com.sunbeam.DTO;

import com.sunbeam.entity.ProposalStatus;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter
@Setter
public class ProposalResponseForProgrammerDTO {
    private Long proposalId;
    private Float proposedAmount;
    private int proposedDurationDays;
    private String coverLetter;
    private ProposalStatus status;
    private LocalDateTime submittedAt;
//    private ClientProfileResponseDTO client;
}

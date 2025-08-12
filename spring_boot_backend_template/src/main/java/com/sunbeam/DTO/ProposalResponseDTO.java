package com.sunbeam.DTO;

import com.sunbeam.entity.ProposalStatus;
import jakarta.persistence.Column;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter
@Setter
public class ProposalResponseDTO {
    private Float proposedAmount;
    private int proposedDurationDays;
    private String coverLetter;
    private ProposalStatus status;
    private LocalDateTime submittedAt;
    private ProgrammerResponseDTO programmer;
}

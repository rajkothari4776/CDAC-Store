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
public class ProposalDTO {
//    @Column(name="proposed_amount")
    private Float proposedAmount;
//    @Column(name="proposed_duration_days")
    private int proposedDurationDays;
//    @Column(name="cover_letter")
    private String coverLetter;

//    @Enumerated(EnumType.STRING)
    private ProposalStatus status = ProposalStatus.SUBMITTED;
//    @Column(name="submitted_at")
    private LocalDateTime submittedAt;
}

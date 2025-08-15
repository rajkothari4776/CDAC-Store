package com.sunbeam.DTO;

import com.sunbeam.entity.Status;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;
import java.time.LocalDateTime;

@Getter
@Setter
public class ProjectAssignmentResponseForProgrammerDTO {
    private Long assignmentId;
    private ProjectResponseForProgrammerDTO project;
    private ProposalResponseForProgrammerDTO proposal;
    private LocalDateTime assignedAt;
    private boolean isCompleted;
    private String submissionLink;
    private boolean isPaid;

}


@Getter
@Setter
class ProjectResponseForProgrammerDTO{
    private String title;
    private String description;
    private double minBudget;
    private double maxBudget;
    private Status status;
    private LocalDate deadline;
    private ClientProfileResponseDTO client;
}

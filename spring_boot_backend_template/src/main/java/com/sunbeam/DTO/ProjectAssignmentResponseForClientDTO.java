package com.sunbeam.DTO;


import com.sunbeam.entity.Project;
import com.sunbeam.entity.ProposalStatus;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter
@Setter
public class ProjectAssignmentResponseForClientDTO {

    private Long assignmentId;
    private ProjectResponseDTO project;
    private ProposalResponseForClientDTO proposal;
    private LocalDateTime assignedAt;
    private boolean isCompleted;
    private String submissionLink;
    private boolean isPaid;

}


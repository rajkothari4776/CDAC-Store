package com.sunbeam.service;


import com.sunbeam.DTO.ApiResponse;
import com.sunbeam.DTO.ProgrammerMarkForReviewRequestDTO;
import com.sunbeam.DTO.ProjectAssignmentResponseForClientDTO;
import com.sunbeam.DTO.ProjectAssignmentResponseForProgrammerDTO;

import java.util.List;

public interface ProjectAssignmentService {

    List<ProjectAssignmentResponseForClientDTO> getAllAssignmentsForClient(Long clientId);

    List<ProjectAssignmentResponseForProgrammerDTO> getAllProjectAssignmentsForProgrammer(Long programmerId);

    ApiResponse markAssignmentComplete(Long assignmentId, Long programmerId, ProgrammerMarkForReviewRequestDTO dto);

    ApiResponse markProjectAsComplete(Long assignmentId, Long clientId);

    ProjectAssignmentResponseForProgrammerDTO getProjectAssignmentForProgrammer(Long assignmentId, Long programmerId);

    ProjectAssignmentResponseForClientDTO getAssignmentsForClient(Long assignmentId, Long clientId);
}

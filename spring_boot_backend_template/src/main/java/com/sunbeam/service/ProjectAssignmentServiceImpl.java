package com.sunbeam.service;

import com.sunbeam.DTO.ApiResponse;
import com.sunbeam.DTO.ProgrammerMarkForReviewRequestDTO;
import com.sunbeam.DTO.ProjectAssignmentResponseForClientDTO;
import com.sunbeam.DTO.ProjectAssignmentResponseForProgrammerDTO;
import com.sunbeam.dao.ProjectAssignmentDao;
import com.sunbeam.dao.ProjectDao;
import com.sunbeam.entity.ProjectAssignment;
import com.sunbeam.entity.Status;
import jakarta.transaction.Transactional;
import lombok.AllArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
@Transactional
@AllArgsConstructor
public class ProjectAssignmentServiceImpl implements ProjectAssignmentService {

    private final ProjectAssignmentDao projectAssignmentDao;
    private final ProjectDao projectDao;
    private final ModelMapper modelMapper;

//    @Override
//    public List<ProjectAssignmentResponseForClientDTO> getAllAssignments(Long clientId) {
//
//    }


    @Override
    public List<ProjectAssignmentResponseForClientDTO> getAllAssignmentsForClient(Long clientId) {
        return projectAssignmentDao.getAllAssignmentsForClient(clientId).stream().map(projectAssignment -> modelMapper.map(projectAssignment, ProjectAssignmentResponseForClientDTO.class))
                .toList();
    }

    @Override
    public List<ProjectAssignmentResponseForProgrammerDTO> getAllProjectAssignmentsForProgrammer(Long programmerId) {
//        return List.of();
        return projectAssignmentDao.getAllAssignmentsForProgrammer(programmerId).stream()
                .map(projectAssignment -> modelMapper.map(projectAssignment, ProjectAssignmentResponseForProgrammerDTO.class))
                .toList();
    }

    @Override
    public ApiResponse markAssignmentComplete(Long assignmentId, Long programmerId, ProgrammerMarkForReviewRequestDTO dto) {
        ProjectAssignment projectAssignment = projectAssignmentDao.findById(assignmentId)
                .orElseThrow(() -> new IllegalArgumentException("Invalid Assignment Id"));

        if (!projectAssignment.getProposal().getProgrammer().getId().equals(programmerId)) {
            return new ApiResponse("You are not authorized to mark this assignment as complete");
        }

        if (projectAssignment.isCompleted()) {
            return new ApiResponse("This assignment is already marked as complete");
        }

        projectAssignment.setCompleted(dto.isCompleted());
        projectAssignment.setSubmissionLink(dto.getSubmissionLink());

//        projectAssignmentDao.save(projectAssignment);

        return new ApiResponse("Project assignment marked as complete successfully");
    }

    @Override
    public ApiResponse markProjectAsComplete(Long assignmentId, Long clientId) {
        ProjectAssignment projectAssignment = projectAssignmentDao.findById(assignmentId)
                .orElseThrow(() -> new IllegalArgumentException("Invalid Assignment Id"));

        if (!projectAssignment.getProposal().getProject().getClient().getClientId().equals(clientId)) {
            return new ApiResponse("You are not authorized to mark this project as complete");
        }

        if (!projectAssignment.isCompleted()) {
            return new ApiResponse("Programmer has not completed the assignment yet");
        }

        projectAssignment.getProject().setStatus(Status.COMPLETED);

        return new ApiResponse("Project marked as complete successfully");
    }

    @Override
    public ProjectAssignmentResponseForProgrammerDTO getProjectAssignmentForProgrammer(Long assignmentId, Long programmerId) {
        ProjectAssignment projectAssignment = projectAssignmentDao.findById(assignmentId)
                .orElseThrow(() -> new IllegalArgumentException("Invalid Assignment Id"));

        if (!projectAssignment.getProposal().getProgrammer().getId().equals(programmerId)) {
            throw new IllegalArgumentException("You are not authorized to view this assignment");
        }

        return modelMapper.map(projectAssignment, ProjectAssignmentResponseForProgrammerDTO.class);
    }

    @Override
    public ProjectAssignmentResponseForClientDTO getAssignmentsForClient(Long assignmentId, Long clientId) {
        ProjectAssignment projectAssignment = projectAssignmentDao.findById(assignmentId)
                .orElseThrow(() -> new IllegalArgumentException("Invalid Assignment Id"));

        if (!projectAssignment.getProposal().getProject().getClient().getClientId().equals(clientId)) {
            throw new IllegalArgumentException("You are not authorized to view this assignment");
        }

        return modelMapper.map(projectAssignment, ProjectAssignmentResponseForClientDTO.class);
    }
}

package com.sunbeam.service;

import com.sunbeam.DTO.*;
import com.sunbeam.entity.Project;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;

public interface ProjectService {
    ApiResponse addProject(Long clientId,ProjectDTO dto);

    List<ProjectResponseDTO> getProjects(Long clientId);

    List<ProjectAndTechnologiesResponseDTO> getProjectWithTechnologies(Long clientId);

    List<ProjectWithClientNameAndTechnologiesResponseDTO> getAllProjectDetailsWithClientAndTechnologies();

    ProjectWithClientNameAndTechnologiesResponseDTO getProjectById(Long projectId);
}

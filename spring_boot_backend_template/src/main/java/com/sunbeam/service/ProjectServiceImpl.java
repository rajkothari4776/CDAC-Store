package com.sunbeam.service;

import com.sunbeam.DTO.*;
import com.sunbeam.customExceptions.InvalidInputException;
import com.sunbeam.dao.ClientDao;
import com.sunbeam.dao.ProjectDao;
import com.sunbeam.dao.TechnologyDao;
import com.sunbeam.entity.ClientProfile;
import com.sunbeam.entity.Project;
import com.sunbeam.entity.Technology;
import jakarta.transaction.Transactional;
import lombok.AllArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@Transactional
@AllArgsConstructor
public class ProjectServiceImpl implements ProjectService {
    private final ProjectDao projectDao;
    private final ModelMapper modelMapper;
    private final ClientDao clientDao;
    private final TechnologyDao technologyDao;
//    private final ProjectDao projectDao;

    @Override
    public ApiResponse addProject(Long clientId ,ProjectDTO dto) {
        if (projectDao.existsByTitle(dto.getTitle().toLowerCase())) {
            throw new InvalidInputException("Project name already exists!");
        }


        ClientProfile client= clientDao.findById(clientId)
                .orElseThrow(() -> new InvalidInputException("Invalid client id"));

        System.out.println(client);

        Project project = modelMapper.map(dto, Project.class);

        for(Long technologyId : dto.getProjectTechnologies()){
            Technology tech = technologyDao.findById(technologyId)
                    .orElseThrow(() -> new InvalidInputException("Invalid technology id"));
            System.out.println(tech);
            project.getTechnologies().add(tech);
            tech.getProjects().add(project);
        }
        client.addProject(project);
//        System.out.println(project);
        Project savedProject = projectDao.save(project);
        return new ApiResponse("Project added successfully with ID "+savedProject.getId());
    }

    @Override
    public List<ProjectResponseDTO> getProjects(Long clientId) {
//        ClientProfile client = clientDao.findById(clientId)
//                .orElseThrow(() -> new InvalidInputException("Invalid client id"));
//        ClientProfile client = clientDao.findProjectByClientId(clientId)
//                .orElseThrow(() -> new InvalidInputException("Invalid client id"));
//        return client.getProjects();
//        return projectDao.findProjectByClientId(clientId);
//        return projectDao.findAllByClientClientId(clientId);
        return projectDao.findProjectByClientId(clientId).stream().map(project -> modelMapper.map(project, ProjectResponseDTO.class)).toList();
    }

    @Override
    public List<ProjectAndTechnologiesResponseDTO> getProjectWithTechnologies(Long clientId) {
//        List<Project> projects = projectDao.findProjectAndTechnologies(clientId);

        return projectDao.findProjectAndTechnologies(clientId).stream()
                .map(project -> modelMapper
                        .map(project, ProjectAndTechnologiesResponseDTO.class))
                .toList();
    }

    @Override
    public List<ProjectWithClientNameAndTechnologiesResponseDTO> getAllProjectDetailsWithClientAndTechnologies() {
        return projectDao.findProjectDetailsWithClientAndTechnologies()
                .stream().map(project -> modelMapper
                        .map(project, ProjectWithClientNameAndTechnologiesResponseDTO.class)).toList();
    }

    @Override
    public ProjectWithClientNameAndTechnologiesResponseDTO getProjectById(Long projectId) {
        return modelMapper.map(projectDao.findProjectById(projectId), ProjectWithClientNameAndTechnologiesResponseDTO.class);
    }


}

package com.sunbeam.controller;

import com.sunbeam.DTO.ProjectDTO;
import com.sunbeam.Security.JwtUtils;
import com.sunbeam.entity.Project;
import com.sunbeam.entity.UserEntity;
import com.sunbeam.service.ProjectService;
import io.jsonwebtoken.Claims;
import jakarta.validation.Valid;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import org.apache.coyote.Response;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

@RestController
@AllArgsConstructor
@Getter
@Setter
public class ProjectController {

    private final ProjectService projectService;
    private final JwtUtils jwtUtils;

    @PostMapping("/client/projects")
    public ResponseEntity<?> addProject(@RequestBody @Valid ProjectDTO dto) {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();

//        System.out.println("This are claims");
//        System.out.println("This are claims "+authentication.getPrincipal().toString());
//        String role = authentication.getAuthorities().toString();
//        System.out.println("this are authorities "+role);
//        System.out.println("This are clientId "+claims.getSubject());
        Long clientId = Long.parseLong(authentication.getName());
        System.out.println("This are clientId "+clientId);

        return ResponseEntity.status(HttpStatus.CREATED).body(projectService.addProject(clientId,dto));
    }

    @GetMapping("/client/projects")
    public ResponseEntity<?> getProjects(){
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();

        Long clientId = Long.parseLong(authentication.getName());
        System.out.println("This is clientId "+clientId);

        return ResponseEntity.status(HttpStatus.OK).body(projectService.getProjects(clientId));
    }

    @GetMapping("/client/projectsTech")
    public ResponseEntity<?> getProjectWithTechnologies(){
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();

        Long clientId = Long.parseLong(authentication.getName());

        return ResponseEntity.status(HttpStatus.OK).body(projectService.getProjectWithTechnologies(clientId));
    }

    @GetMapping("/programmer/allProjects")
    public ResponseEntity<?> getAllProjectsWithItsDetails(){
        return ResponseEntity.status(HttpStatus.OK).body(projectService.getAllProjectDetailsWithClientAndTechnologies());
    }

    @GetMapping("/programmer/{projectId}/project")
    public ResponseEntity<?> getProjectById(@PathVariable("projectId") Long projectId){
        return ResponseEntity.ok(projectService.getProjectById(projectId));
    }
}

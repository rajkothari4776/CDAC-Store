package com.sunbeam.controller;


import com.sunbeam.DTO.ProgrammerMarkForReviewRequestDTO;
import com.sunbeam.DTO.ProjectAssignmentResponseForProgrammerDTO;
import com.sunbeam.service.ProjectAssignmentService;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

@RestController
@AllArgsConstructor
//@RequestMapping(method = RequestMethod.GET, )
public class ProjectAssignmentController {
    private ProjectAssignmentService projectAssignmentService;

    @GetMapping("/client/me/assignments")
    public ResponseEntity<?> getMyAssignments() {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        Long clientId = Long.valueOf(auth.getName());
        return ResponseEntity.ok(projectAssignmentService.getAllAssignmentsForClient(clientId));
    }


    @GetMapping("/client/{assignmentId}/assignments")
    public ResponseEntity<?> getMyAssignmentForClient(@PathVariable Long assignmentId) {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        Long clientId = Long.valueOf(auth.getName());
        return ResponseEntity.ok(projectAssignmentService.getAssignmentsForClient(assignmentId,clientId));
    }

    @GetMapping("/programmer/me/assignments")
    public ResponseEntity<?> getMyAssignmentsForProgrammer() {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        Long programmerId = Long.valueOf(auth.getName());
        return ResponseEntity.ok(projectAssignmentService.getAllProjectAssignmentsForProgrammer(programmerId));
    }

    @GetMapping("/programmer/{assignmentId}/details")
    public ResponseEntity<?> getAssignmentDetailsForProgrammer(@PathVariable Long assignmentId) {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        Long programmerId = Long.valueOf(auth.getName());
        return ResponseEntity.ok(projectAssignmentService.getProjectAssignmentForProgrammer(assignmentId, programmerId));
    }

    @PatchMapping("/programmer/{assignmentId}/mark-for-review")
    public ResponseEntity<?> markAssignmentComplete(@PathVariable Long assignmentId, @RequestBody ProgrammerMarkForReviewRequestDTO dto) {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        Long programmerId = Long.valueOf(auth.getName());
        return ResponseEntity.ok(projectAssignmentService.markAssignmentComplete(assignmentId, programmerId, dto));
    }

    @PatchMapping("/client/{assignmentId}/mark-project-as-complete")
    public ResponseEntity<?> markProjectAsComplete(@PathVariable Long assignmentId) {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        Long clientId = Long.valueOf(auth.getName());
        return ResponseEntity.ok(projectAssignmentService.markProjectAsComplete(assignmentId, clientId));
    }

}

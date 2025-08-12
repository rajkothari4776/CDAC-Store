package com.sunbeam.controller;

import com.sunbeam.DTO.ProgrammerSignUpDTO;
import com.sunbeam.DTO.ProgrammerSkillsDTO;
import com.sunbeam.service.ProgrammerService;
import io.swagger.v3.oas.annotations.Operation;
import jakarta.persistence.Entity;
import jakarta.validation.Valid;
import lombok.AllArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@AllArgsConstructor
@RequestMapping("/programmer")
public class ProgrammerController {
    private final ProgrammerService programmerService;


    @PostMapping("/signup")
    @Operation(description = "User signup")
    public ResponseEntity<?> userSignup(@RequestBody @Valid ProgrammerSignUpDTO userSignUpDTO){
        return ResponseEntity.status(HttpStatus.CREATED).body(programmerService.signUp(userSignUpDTO));
    }


    @PostMapping("/add-skills")
    @Operation(description = "Programmer adding skills")
    public ResponseEntity<?> addSkills(@RequestBody @Valid ProgrammerSkillsDTO dto){
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        Long programmerId = Long.parseLong(auth.getName());
        return ResponseEntity.status(HttpStatus.CREATED).body(programmerService.addSkills(programmerId,dto));
    }

}

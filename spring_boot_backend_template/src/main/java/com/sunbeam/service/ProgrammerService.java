package com.sunbeam.service;


import com.sunbeam.DTO.ApiResponse;
import com.sunbeam.DTO.ProgrammerSignUpDTO;
import com.sunbeam.DTO.ProgrammerSkillsDTO;
import jakarta.transaction.Transactional;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;


public interface ProgrammerService {
    ApiResponse signUp(ProgrammerSignUpDTO dto);
    ApiResponse addSkills(ProgrammerSkillsDTO dto);

}

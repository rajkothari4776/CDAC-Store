package com.sunbeam.service;


import com.sunbeam.DTO.ApiResponse;
import com.sunbeam.DTO.ProgrammerSignUpDTO;
import jakarta.transaction.Transactional;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;


public interface ProgrammerService {
    ApiResponse signUp(ProgrammerSignUpDTO dto);

}

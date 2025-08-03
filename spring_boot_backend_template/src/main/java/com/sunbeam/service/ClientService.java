package com.sunbeam.service;

import com.sunbeam.DTO.ApiResponse;
import com.sunbeam.DTO.ClientSignUpDTO;
import jakarta.validation.Valid;

public interface ClientService {
    ApiResponse signUp(ClientSignUpDTO dto);

}

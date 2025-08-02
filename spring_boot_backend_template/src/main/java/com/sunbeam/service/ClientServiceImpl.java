package com.sunbeam.service;

import com.sunbeam.DTO.ApiResponse;
import com.sunbeam.DTO.ClientSignUpDTO;
import jakarta.transaction.Transactional;
import org.springframework.stereotype.Service;

@Service
@Transactional
public class ClientServiceImpl implements ClientService{

    @Override
    public ApiResponse signUp(ClientSignUpDTO userSignUpDTO) {
        return null;
    }
}

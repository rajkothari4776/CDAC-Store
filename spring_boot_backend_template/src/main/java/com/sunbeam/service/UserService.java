package com.sunbeam.service;

import com.sunbeam.DTO.ApiResponse;
import com.sunbeam.DTO.ClientSignUpDTO;
import com.sunbeam.DTO.UserDTO;
import com.sunbeam.DTO.UserSignInDTO;
import jakarta.validation.Valid;

public interface UserService {
    UserDTO signIn(UserSignInDTO dto);


//    ApiResponse signUp(@Valid ClientSignUpDTO userSignUpDTO);
}

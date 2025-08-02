package com.sunbeam.controller;

import com.sunbeam.DTO.ApiResponse;
import com.sunbeam.DTO.UserSignInDTO;
import com.sunbeam.service.ProgrammerService;
import com.sunbeam.service.UserService;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@AllArgsConstructor
@RequestMapping("/user")
public class UserController {
    private final UserService userService;

    @PostMapping("/login")
    public ResponseEntity<?> login(UserSignInDTO dto){

        return ResponseEntity.status(200).body(userService.signIn(dto));
    }

}

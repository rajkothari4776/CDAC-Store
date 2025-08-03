package com.sunbeam.controller;

import com.sunbeam.DTO.ClientSignUpDTO;
import com.sunbeam.service.ClientService;
import com.sunbeam.service.UserService;
import io.swagger.v3.oas.annotations.Operation;
import jakarta.validation.Valid;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@AllArgsConstructor
@RequestMapping("/client")
public class ClientController {
//    private final ClientService clientService;
    private final ClientService clientService;

    @PostMapping("/signup")
    @Operation(description = "User signup")
    public ResponseEntity<?> userSignup(@RequestBody @Valid ClientSignUpDTO userSignUpDTO){
        return ResponseEntity.status(HttpStatus.CREATED).body(clientService.signUp(userSignUpDTO));
    }
}

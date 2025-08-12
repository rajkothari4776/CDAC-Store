package com.sunbeam.controller;

import com.sunbeam.DTO.ApiResponse;
import com.sunbeam.DTO.UserSignInDTO;
import com.sunbeam.Security.JwtUtils;
import com.sunbeam.service.ProgrammerService;
import com.sunbeam.service.UserService;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

@RestController
@AllArgsConstructor
@RequestMapping("/user")
public class UserController {
    private final UserService userService;
    private final AuthenticationManager authenticationManager;
    private final JwtUtils jwtUtils;

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody UserSignInDTO dto){
        UsernamePasswordAuthenticationToken authentication =
                new UsernamePasswordAuthenticationToken(dto.getEmail(), dto.getPassword());
        System.out.println("before "+authentication.isAuthenticated());

        Authentication validAuthentication =
                authenticationManager.authenticate(authentication);
        System.out.println(validAuthentication.getPrincipal().getClass());
        System.out.println(validAuthentication.getPrincipal());
        System.out.println("after "+validAuthentication.isAuthenticated());

        return ResponseEntity.ok(jwtUtils.generateJwtToken(validAuthentication));

    }

}

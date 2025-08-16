package com.sunbeam.DTO;


import com.sunbeam.entity.UserRole;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
public class AuthResponse {
    private String message;
    private String token;
    private String firstName;
    private String lastName;
    private String email;
    private UserRole userRole;
}

package com.sunbeam.DTO;


import jakarta.persistence.Column;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class UserSignInDTO {
    @NotBlank(message = "Email must be supplied")
    @Email(message = "Invalid email format")
    private String email;
    @NotBlank(message = "Password must be supplied")
    private String password;
}

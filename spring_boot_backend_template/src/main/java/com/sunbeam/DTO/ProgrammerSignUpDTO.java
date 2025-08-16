package com.sunbeam.DTO;

import com.sunbeam.entity.UserRole;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;


@Getter
@Setter
@ToString
public class ProgrammerSignUpDTO{
    @NotBlank(message = "first name must be supplied")
    private String firstName;
    @NotBlank(message = "last name must be supplied")
    private String lastName;
    @NotBlank(message = "Email must be supplied")
    @Email(message = "Invalid email format")
    private String email;
    @NotBlank(message = "Password must be supplied")
    private String password;
//    @NotBlank(message = "confirm password must be supplied")
//    private String confirmPassword;
    @NotBlank(message = "confirm password must be supplied")
    private String phoneNumber;

    //	@NotNull(message = "toogle active or not active")
    private boolean active = true;
    @NotNull(message = "user role must be supplied")
    private UserRole userRole = UserRole.ROLE_PROGRAMMER;
    @NotNull(message = "toggle it")

    private boolean cdacStudent;
    @NotNull(message  = "experience should be supplied")
    private int experience;
    private boolean available;
    @NotBlank(message = "bio must be added")
    private String bio;
    @NotBlank(message = "github URL is compulsary")
    private String github;
}

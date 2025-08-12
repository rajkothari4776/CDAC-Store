package com.sunbeam.DTO;

import com.sunbeam.entity.UserRole;
import jakarta.persistence.Column;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class ClientSignUpDTO{
    @NotBlank(message = "first name must be supplied")
    private String firstName;
    @NotBlank(message = "last name must be supplied")
    private String lastName;
    @NotBlank(message = "Email must be supplied")
    @Email(message = "Invalid email format")
    private String email;
    @NotBlank(message = "Password must be supplied")
//	@Range(min = 5, max = 30)
    private String password;
    @NotBlank(message = "confirm password must be supplied")
    private String confirmPassword;
    @NotBlank(message = "phone number must be supplied")
    private String phoneNumber;

    //	@NotNull(message = "toogle active or not active")
    private boolean active = true;
    @NotNull(message = "user role must be supplied")
    private UserRole userRole = UserRole.ROLE_CLIENT;

    @NotBlank(message = "company name must be supplied")
    private String companyName;
    @NotNull(message = "company size must be supplied")
    private int companySize;
    @NotBlank(message = "description must be supplied")
    private String description;
    @NotBlank(message = "city must be supplied")
    private String city;

}

package com.sunbeam.DTO;


import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class UserDTO {
    private String firstName;
    private String lastName;
    private String email;
    private String phoneNumber;
    private boolean active;
    private String userRole;
    private boolean cdacStudent;
    private int experience;
    private boolean available;
    private String bio;
    private String github;
//    private String email;
    private String password;
}

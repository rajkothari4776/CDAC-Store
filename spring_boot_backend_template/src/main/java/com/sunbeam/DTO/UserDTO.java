package com.sunbeam.DTO;

import com.sunbeam.entity.UserRole;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class UserDTO {
    private Long id;
    private String firstName;
    private String lastName;
    private UserRole userRole;
}

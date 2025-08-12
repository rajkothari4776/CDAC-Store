package com.sunbeam.DTO;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
public class ProgrammerResponseDTO {
    private UserNameResponseDTO user;
//    private TechnologyResponseDTO technology;
    private List<TechnologyResponseDTO> technologies;
    private boolean cdacStudent;
    private int experience;
    private boolean available;
    private String bio;
    private String github;
}

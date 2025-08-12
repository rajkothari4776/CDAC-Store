package com.sunbeam.DTO;

import com.sunbeam.entity.ClientProfile;
import com.sunbeam.entity.Status;
import com.sunbeam.entity.Technology;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
public class ProjectAndTechnologiesResponseDTO {
    private String title;
    private String description;
    private double minBudget;
    private double maxBudget;
    private Status status;
    private LocalDate deadline;
//    private ClientProfile client;
    List<TechnologyResponseDTO> technologies = new ArrayList<>();
}

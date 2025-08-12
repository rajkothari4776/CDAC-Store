package com.sunbeam.DTO;


import com.sunbeam.entity.ClientProfile;
import com.sunbeam.entity.Status;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
public class ProjectWithClientNameAndTechnologiesResponseDTO {
    private Long id;
    private String title;
    private String description;
    private double minBudget;
    private double maxBudget;
    private Status status;
    private LocalDate deadline;
//    private ClientProfileResponseDTO client;
    private String clientName;
    List<TechnologyResponseDTO> technologies = new ArrayList<>();
}

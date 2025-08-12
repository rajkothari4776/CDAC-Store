package com.sunbeam.DTO;


import com.sunbeam.entity.Status;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;
import java.util.List;

@Getter
@Setter
public class ProjectDTO {
    private String title;
    private String description;
    private double minBudget;
    private double maxBudget;
    private Status status = Status.OPEN;
    private LocalDate deadline;
    private List<Long> projectTechnologies;
}

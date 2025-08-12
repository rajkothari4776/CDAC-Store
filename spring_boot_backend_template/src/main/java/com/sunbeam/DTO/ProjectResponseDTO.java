package com.sunbeam.DTO;

import com.sunbeam.entity.Status;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;

@Getter
@Setter
public class ProjectResponseDTO {
    private String title;
    private String description;
    private double minBudget;
    private double maxBudget;
    private Status status;
    private LocalDate deadline;
}

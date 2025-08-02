package com.sunbeam.DTO;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import java.time.LocalDate;
import java.time.LocalDateTime;


@Getter
@Setter
@ToString
public class BaseDTO {
    private LocalDate creationDate;
    private LocalDateTime updatedOn;
}

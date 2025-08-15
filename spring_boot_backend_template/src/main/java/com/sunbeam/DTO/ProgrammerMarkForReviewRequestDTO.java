package com.sunbeam.DTO;


import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ProgrammerMarkForReviewRequestDTO {
    private boolean isCompleted;
    private String submissionLink;
}

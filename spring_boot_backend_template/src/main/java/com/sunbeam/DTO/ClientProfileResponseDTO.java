package com.sunbeam.DTO;

import jakarta.persistence.Column;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ClientProfileResponseDTO {
    private UserNameResponseDTO user;
    private String companyName;
    private int companySize;
    private String description;
    private String city;
}

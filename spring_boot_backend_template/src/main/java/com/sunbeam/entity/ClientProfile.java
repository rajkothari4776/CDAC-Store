package com.sunbeam.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.MapsId;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name = "client_profile")
@Getter
@Setter
public class ClientProfile {
    @Id
    private Long clientId;
    @MapsId
    @OneToOne
    @JoinColumn(name = "client_id")
    private UserEntity user;

    @Column(name = "company_name", length = 40, nullable = false)
    private String companyName;
    @Column(name = "company_size")
    private int companySize;
    @Column(name = "description", length = 200)
    private String description;
    @Column(length = 30, nullable = false)
    private String city;
}

package com.sunbeam.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.MapsId;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "client_profile")
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

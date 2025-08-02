package com.sunbeam.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "programmer_profile")
@Getter
@Setter
@NoArgsConstructor
public class ProgrammerProfile{
    @Id
    private Long programmerId;
    @MapsId
    @OneToOne
    @JoinColumn(name = "programmer_id")
    private UserEntity u;
    @Column(name = "is_cdac_student", nullable = false)
    private boolean cdacStudent;
    @Column(name = "experience_months", nullable = false)
    private int experience;
    @Column(name = "available_status", nullable = false)
    private boolean available;
    @Column(length = 500, nullable = false)
    private String bio;
    @Column(length = 100, name = "github_url", nullable = false)
    private String github;

}

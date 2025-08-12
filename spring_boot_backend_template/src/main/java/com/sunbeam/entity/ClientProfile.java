package com.sunbeam.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "client_profile")
@Getter
@Setter
@ToString(exclude = "projects")
public class ClientProfile {
    @Id
    private Long clientId;
    @MapsId
    @OneToOne()
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

    @OneToMany(mappedBy = "client", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Project> projects = new ArrayList<>();

    public void addProject(Project project) {
        projects.add(project);
        project.setClient(this);
    }

    public void removeProject(Project project) {
        projects.remove(project);
        project.setClient(null);
    }
}

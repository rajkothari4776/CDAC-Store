package com.sunbeam.entity;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Getter
@Setter
@ToString(callSuper = false, exclude = {"programmers", "projects"})
@NoArgsConstructor
@EqualsAndHashCode(onlyExplicitlyIncluded = true)
@Table(name = "Technologies")

public class Technology {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(length = 100, unique = true, name = "technology_id")
	@EqualsAndHashCode.Include
	private Long technologyId;

	@Column(name = "technology_name", unique = true, nullable = false)
	private String technologyName;

	@Column(name = "is_active")
	private boolean isActive;

//	@OneToMany(mappedBy = "technology", cascade = CascadeType.ALL, orphanRemoval = true)
//	private List<ProjectTechnology> projectTechnologies = new ArrayList<>();
//
//	@OneToMany(mappedBy = "technology", cascade = CascadeType.ALL, orphanRemoval = true)
//	private List<ProgrammerTechnology> programmerTechnologies = new ArrayList<>();
//
//	public void addProjectTechnology(ProjectTechnology pt) {
//		projectTechnologies.add(pt);
//		pt.setTechnology(this);
//
//	}
//
//	public void removeProjectTechnology(ProjectTechnology pt) {
//		projectTechnologies.remove(pt);
//		pt.setTechnology(null);
//
//	}
	@ManyToMany(cascade = {CascadeType.PERSIST, CascadeType.MERGE}, fetch = FetchType.LAZY)
	@JoinTable(name = "programmer_technology",
			joinColumns = @JoinColumn(name = "technology_id"),
			inverseJoinColumns = @JoinColumn(name = "programmer_id"))
	private Set<ProgrammerProfile> programmers = new HashSet<>();


	@ManyToMany(mappedBy = "technologies", fetch = FetchType.LAZY)
	private Set<Project> projects = new HashSet<>();

}

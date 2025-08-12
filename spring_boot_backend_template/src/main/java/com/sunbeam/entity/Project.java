package com.sunbeam.entity;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import com.sunbeam.entity.BaseEntity;
import jakarta.persistence.*;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Getter
@Setter
@NoArgsConstructor
@ToString(callSuper = true, exclude = {"technologies", "proposals", "client"})
@EqualsAndHashCode(callSuper = true, of="id")
@Table(name = "projects")
public class Project extends BaseEntity {
	
	@Column(nullable = false, unique = true)
	private String title;

	@Column(nullable = false)
	private String description;


	@Column(name="project_type", nullable = true)
	private String projectType;
	
	@Column(name="min_budget", nullable = false)
	private double minBudget;
	
	@Column(name="max_budget", nullable = false)
	private double maxBudget;

	@Enumerated(EnumType.STRING)
	@Column(name="project_status", nullable = false)
	private Status status;


	private LocalDate deadline;

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "client_id", nullable = false)
	private ClientProfile client;

//	@OneToMany(mappedBy = "myProject",cascade = CascadeType.ALL,orphanRemoval = true)
//	private List<ProjectTechnology> projectTechnologies=new ArrayList<>();


		
	@OneToMany(mappedBy = "project",cascade = CascadeType.ALL,orphanRemoval = true)
	private List<Proposal> proposals=new ArrayList<>();
	
	@OneToMany(mappedBy = "myProjectAssigned",cascade = CascadeType.ALL,orphanRemoval = true)
	private List<ProjectAssignment> projectAssigned=new ArrayList<>();
	

	@ManyToMany(cascade = {CascadeType.PERSIST, CascadeType.MERGE}, fetch = FetchType.LAZY)
	@JoinTable(
			name = "project_technology",
			joinColumns = @JoinColumn(name = "project_id"),
			inverseJoinColumns = @JoinColumn(name = "technology_id")
	)
	private Set<Technology> technologies = new HashSet<>();

	private void addTechnology(Technology technology) {
		technologies.add(technology);
		technology.getProjects().add(this);
	}

	private void removeTechnology(Technology technology) {
		technologies.remove(technology);
		technology.getProjects().remove(this);
	}

	public void addProposal(Proposal proposal) {
		proposals.add(proposal);
		proposal.setProject(this);
	}

	public void removeProposal(Proposal proposal) {
		proposals.remove(proposal);
		proposal.setProject(null);
	}

	//add
//	public void addProjectTechnology(ProjectTechnology projectTechnology) {
//
//		this.projectTechnologies.add(projectTechnology);
//		projectTechnology.setMyProject(this);
//
//	}
//
//	//remove
//	public void removeProjectTechnology(ProjectTechnology projectTechnology) {
//		this.projectTechnologies.remove(projectTechnology);
//		projectTechnology.setMyProject(null);
//
//	}

	public Project(String title, String description, String projectType, Float minBudget, Float maxBudget,
			Status status, LocalDate deadline) {
		super();
		this.title = title;
		this.description = description;
		this.projectType = projectType;
		this.minBudget = minBudget;
		this.maxBudget = maxBudget;
		this.status = status;
		this.deadline = deadline;
	}

}

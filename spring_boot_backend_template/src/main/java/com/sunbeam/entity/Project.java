package com.sunbeam.entity;

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
@ToString(callSuper = true, exclude = {"projectTechnologies", "proposals"})
@EqualsAndHashCode(of="id",callSuper = false)
@Table(name = "projects")
public class Project extends BaseEntity {
	
	
	private String title;

	private String description;
	
	@Column(name="project_type")
	private String projectType;
	
	@Column(name="min_budget")
	private double minBudget;
	
	@Column(name="max_budget")
	private double maxBudget;
	
	private Status status;
	@Column(name="estimated_duration_days")
	private double estimatedDurationDays;
	@Column(name="is_assigned")
	private boolean isAssigned;
	
//	@OneToMany(mappedBy = "myProject",cascade = CascadeType.ALL,orphanRemoval = true)
//	private List<ProjectTechnology> projectTechnologies=new ArrayList<>();
	
		
	@OneToMany(mappedBy = "myProposal",cascade = CascadeType.ALL,orphanRemoval = true)
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
			Status status, int estimatedDurationDays, boolean isAssigned) {
		super();
		this.title = title;
		this.description = description;
		this.projectType = projectType;
		this.minBudget = minBudget;
		this.maxBudget = maxBudget;
		this.status = status;
		this.estimatedDurationDays = estimatedDurationDays;
		this.isAssigned = isAssigned;
//		this.projectTechnologies = projectTechnologies;
	}

}

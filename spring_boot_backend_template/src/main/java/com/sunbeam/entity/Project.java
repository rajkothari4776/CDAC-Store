package com.sunbeam.entities;

import java.util.ArrayList;
import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
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
@EqualsAndHashCode(of="name",callSuper = false)
@Table(name = "projects")
public class Project extends BaseEntity{
	
	
	private String title;
	
	
	private String description;
	
	@Column(name="project_type")
	private String projectType;
	
	@Column(name="min_budget")
	private Float minBudget;
	
	@Column(name="max_budget")
	private Float maxBudget;
	
	private String status;
	@Column(name="estimated_duration_days")
	private Integer estimatedDurationDays;
	@Column(name="is_assigned")
	private Boolean isAssigned;
	
	@OneToMany(mappedBy = "myProject",cascade = CascadeType.ALL,orphanRemoval = true)
	private List<ProjectTechnology> projectTechnologies=new ArrayList<>();
	
		
	@OneToMany(mappedBy = "myProposal",cascade = CascadeType.ALL,orphanRemoval = true)
	private List<Proposal> proposals=new ArrayList<>();
	
	@OneToMany(mappedBy = "myProjectAssigned",cascade = CascadeType.ALL,orphanRemoval = true)
	private List<ProjectAssignment> projectAssigned=new ArrayList<>();
	
	
	
	
	
	
	
	//add
	public void addProjectTechnology(ProjectTechnology projectTechnology) {
		
		this.projectTechnologies.add(projectTechnology);
		projectTechnology.setMyProject(this);
		
	}
	
	//remove
	public void removeProjectTechnology(ProjectTechnology projectTechnology) {
		this.projectTechnologies.remove(projectTechnology);
		projectTechnology.setMyProject(null);
		
	}

	public Project(String title, String description, String projectType, Float minBudget, Float maxBudget,
			String status, int estimatedDurationDays, boolean isAssigned, List<ProjectTechnology> projectTechnologies) {
		super();
		this.title = title;
		this.description = description;
		this.projectType = projectType;
		this.minBudget = minBudget;
		this.maxBudget = maxBudget;
		this.status = status;
		this.estimatedDurationDays = estimatedDurationDays;
		this.isAssigned = isAssigned;
		this.projectTechnologies = projectTechnologies;
	}
	
	
	

}

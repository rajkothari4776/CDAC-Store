package com.sunbeam.entity;

import java.util.ArrayList;
import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Getter
@Setter
@ToString(callSuper = true)
@NoArgsConstructor
@Table(name = "Technologies")

public class Technology {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(length = 100, unique = true, name = "technology_id")
	private Long technologyId;

	@Column(name = "technology_name")
	private String technologyName;

	@Column(name = "is_active")
	private boolean isActive;

	@OneToMany(mappedBy = "technology", cascade = CascadeType.ALL, orphanRemoval = true)
	private List<ProjectTechnology> projectTechnologies = new ArrayList<>();

	@OneToMany(mappedBy = "technology", cascade = CascadeType.ALL, orphanRemoval = true)
	private List<ProgrammerTechnology> programmerTechnologies = new ArrayList<>();

	public void addProjectTechnology(ProjectTechnology pt) {
		projectTechnologies.add(pt);
		pt.setTechnology(this);

	}

	public void removeProjectTechnology(ProjectTechnology pt) {
		projectTechnologies.remove(pt);
		pt.setTechnology(null);

	}

}

package com.sunbeam.entities;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;


@Entity
@Table(name="programmer_technology")
public class ProgrammerTechnology {

	@Id
	@ManyToOne
	@JoinColumn(name="technology_id",nullable = false)
	private Technology technology;
	
	
	
	@ManyToOne
	@JoinColumn(name="project_id",nullable = false)
	
	private Project myProject;
}

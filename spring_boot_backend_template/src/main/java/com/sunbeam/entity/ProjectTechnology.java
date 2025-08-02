package com.sunbeam.entity;

import jakarta.annotation.Generated;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;



@Entity
@Table(name="project_technologies")
@Getter
@Setter
@ToString(callSuper = true,exclude = "myProject")
@EqualsAndHashCode

@NoArgsConstructor

public class ProjectTechnology {

	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id; 
	
	@ManyToOne
	@JoinColumn(name="project_id",nullable = false)
	
	private Project myProject;

	
	@ManyToOne
	@JoinColumn(name="technology_id",nullable = false)
	private Technology technology;
	
	
	

	
	

}

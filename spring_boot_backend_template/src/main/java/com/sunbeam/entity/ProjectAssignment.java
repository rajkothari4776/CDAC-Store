package com.sunbeam.entity;

import java.time.LocalDateTime;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
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
@Table(name="project_assignment")
public class ProjectAssignment {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long assignmentId;
	
	
	@ManyToOne
	@JoinColumn(name="project_id",nullable = false)
	private Project myProjectAssigned;
	
	@ManyToOne
	@JoinColumn(name="programmer_id",nullable = false)
	private ProgrammerProfile projectAssign;


	@Column(name="assigned_at")
	private LocalDateTime assignedAt;
	
	@Column(name="is_completed")
	private boolean isCompleted;
	
	@Column(name="submission_link")
	private String submissionLink;
	
	@Column(name="is_paid")
	private boolean isPaid;

}

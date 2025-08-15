package com.sunbeam.entity;

import java.time.LocalDateTime;

import jakarta.persistence.*;
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
	
	
	@OneToOne()
    @ToString.Exclude
	@JoinColumn(name="project_id", unique = true,nullable = false)
	private Project project;

    @OneToOne
    @ToString.Exclude
    @JoinColumn(name = "proposal_id", unique = true,nullable = false)
    private Proposal proposal;
	
//	@ManyToOne
//	@JoinColumn(name="programmer_id",nullable = false)
//	private ProgrammerProfile projectAssign;


	@Column(name="assigned_at")
	private LocalDateTime assignedAt;
	
	@Column(name="is_completed")
	private boolean isCompleted;
	
	@Column(name="submission_link")
	private String submissionLink;
	
	@Column(name="is_paid")
	private boolean isPaid;

}

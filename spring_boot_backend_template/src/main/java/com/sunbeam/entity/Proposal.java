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
@NoArgsConstructor
@ToString(callSuper = true)
@Table(name="proposal")
public class Proposal {
	
	@Id
	@Column(length = 100,unique = true)
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long proposalId;
	
	@ManyToOne
	@JoinColumn(name="project_id",nullable = false)
	private Project myProposal;
	
	@ManyToOne
	@JoinColumn(name="programmer_id",nullable = false)
	private ProgrammerProfile myProposals;
	
	
	
	
	
	
	@Column(name="proposed_amount")
	private Float proposedAmount;
	@Column(name="proposed_duration_days")
	private int proposedDurationDays;
	@Column(name="cover_letter")
	private String coverLetter;
	private String status;
	@Column(name="submitted_at")
	private LocalDateTime submittedAt;
	public Proposal(Project myProposal, Float proposedAmount, int proposedDurationDays, String coverLetter,
			String status, LocalDateTime submittedAt) {
		super();
		this.myProposal = myProposal;
		this.proposedAmount = proposedAmount;
		this.proposedDurationDays = proposedDurationDays;
		this.coverLetter = coverLetter;
		this.status = status;
		this.submittedAt = submittedAt;
	}
	
	
	
	

}

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
    @NoArgsConstructor
    @ToString(callSuper = true)
    @Table(name="proposals",
            uniqueConstraints = @UniqueConstraint(columnNames = {"project_id","programmer_id"}))

    public class Proposal {

        @Id
        @Column(length = 100,unique = true)
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        private Long proposalId;

        @ManyToOne(cascade = CascadeType.ALL)
        @JoinColumn(name="project_id",nullable = false)
        private Project project;

        @ManyToOne
        @JoinColumn(name="programmer_id",nullable = false)
        private ProgrammerProfile programmer;
        @Column(name="proposed_amount")
        private Float proposedAmount;
        @Column(name="proposed_duration_days")
        private int proposedDurationDays;
        @Column(name="cover_letter")
        private String coverLetter;

        @OneToOne(mappedBy = "proposal", fetch = FetchType.LAZY)
        private ProjectAssignment projectAssignment;

        @Enumerated(EnumType.STRING)
        private ProposalStatus status;
        @Column(name="submitted_at")
        private LocalDateTime submittedAt;
        public Proposal(Project project, Float proposedAmount, int proposedDurationDays, String coverLetter,
                ProposalStatus status, LocalDateTime submittedAt) {
            super();
            this.project = project;
            this.proposedAmount = proposedAmount;
            this.proposedDurationDays = proposedDurationDays;
            this.coverLetter = coverLetter;
            this.status = status;
            this.submittedAt = submittedAt;
        }

    }

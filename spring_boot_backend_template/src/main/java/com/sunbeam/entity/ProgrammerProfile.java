package com.sunbeam.entity;

import jakarta.persistence.*;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Entity
@Table(name = "programmer_profile")
@Getter
@Setter
@NoArgsConstructor
@EqualsAndHashCode(onlyExplicitlyIncluded = true)
public class ProgrammerProfile{
    @Id
    @EqualsAndHashCode.Include
    private Long id;
    @MapsId
    @OneToOne()
    @JoinColumn(name = "programmer_id")
    private UserEntity user;
    @Column(name = "is_cdac_student", nullable = false)
    private boolean cdacStudent;
    @Column(name = "experience_months", nullable = false)
    private int experience;
    @Column(name = "available_status", nullable = false)
    private boolean available;
    @Column(length = 500, nullable = false)
    private String bio;
    @Column(length = 100, name = "github_url", nullable = false)
    private String github;

    @ManyToMany(mappedBy = "programmers", cascade = {CascadeType.PERSIST, CascadeType.MERGE}, fetch = FetchType.LAZY)
    Set<Technology> technologies = new HashSet<>();

    @OneToMany(mappedBy = "programmer", cascade = CascadeType.ALL, orphanRemoval = true)
    List<Proposal> proposals = new ArrayList<>();

//    @OneToMany(mappedBy = "programmer", cascade = CascadeType.ALL, orphanRemoval = true)
//    private Set<ProgrammerTechnology> technologies = new HashSet<>();

    public void addProposal(Proposal proposal) {
        proposals.add(proposal);
        proposal.setProgrammer(this);
    }
    public void removeProposal(Proposal proposal) {
        proposals.remove(proposal);
        proposal.setProgrammer(null);
    }

}

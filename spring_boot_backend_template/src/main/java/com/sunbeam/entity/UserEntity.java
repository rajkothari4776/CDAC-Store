package com.sunbeam.entity;


import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Collection;
import java.util.List;

@Entity
@Getter
@Setter
@Table(name = "users")
public class UserEntity extends BaseEntity implements UserDetails {
    @Column(name = "first_name", length = 30)
    private String firstName;
    @Column(name = "last_name", length = 30)
    private String lastName;
    @Column(name = "email", length = 30, unique = true)
    private String email;
    @Column( length = 300, nullable = false)
    private String password;
    @Transient
    private String confirmPassword;
    @Column(name = "phone_number", unique = true)
    private String phoneNumber;
    @Column(name = "is_active")
    private boolean active;
    @Enumerated(EnumType.STRING)
    @Column(length = 30, name = "user_role")
    private UserRole userRole;

    @OneToOne(mappedBy = "user", cascade = CascadeType.ALL)
    private ProgrammerProfile programmerProfile;

    @OneToOne(mappedBy = "user", cascade = CascadeType.ALL)
    private ClientProfile clientProfile;


    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return List.of(new SimpleGrantedAuthority(this.userRole.name()));
    }

    @Override
    public String getUsername() {
        return this.email;
    }
}

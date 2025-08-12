package com.sunbeam.dao;

import com.sunbeam.entity.ClientProfile;
import com.sunbeam.entity.Project;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;

public interface ClientDao extends JpaRepository<ClientProfile, Long> {
    boolean existsByClientId(Long clientId);
    boolean existsByUserEmail(String email);


    @Query("select c from ClientProfile c left join fetch c.projects where c.clientId= :id")
    Optional<ClientProfile> findProjectByClientId(@Param("id") Long clientId);
}

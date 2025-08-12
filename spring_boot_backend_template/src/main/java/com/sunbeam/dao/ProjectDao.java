package com.sunbeam.dao;

import com.sunbeam.entity.Project;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface ProjectDao extends JpaRepository<Project,Long> {
    boolean existsByTitle(String projectName);


    @Query("select p from Project p where p.client.clientId= :id")
    List<Project> findProjectByClientId(@Param("id") Long clientId);

    @Query("select p from Project p left join fetch p.technologies where p.client.clientId= :id")
    List<Project> findProjectAndTechnologies(@Param("id") Long clientId);
//    List<Project>findAllByClientClientId(Long clientId);

    @Query("select p from Project p join fetch p.client join fetch p.technologies")
    List<Project> findProjectDetailsWithClientAndTechnologies();

    @Query("select distinct p from Project p left join fetch p.client c  left join fetch p.technologies where p.id= :id")
    Project findProjectById(Long id);
}

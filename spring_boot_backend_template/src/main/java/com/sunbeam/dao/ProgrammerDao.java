package com.sunbeam.dao;

import com.sunbeam.entity.ProgrammerProfile;
import com.sunbeam.entity.UserEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProgrammerDao extends JpaRepository<ProgrammerProfile, Long> {
//    boolean existsByEmail(String email);

}

package com.sunbeam.dao;

import com.sunbeam.entity.Technology;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TechnologyDao extends JpaRepository<Technology, Long> {

}

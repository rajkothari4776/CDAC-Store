package com.sunbeam.service;

import com.sunbeam.DTO.ApiResponse;
import com.sunbeam.DTO.ProgrammerSignUpDTO;
import com.sunbeam.DTO.ProgrammerSkillsDTO;
import com.sunbeam.customExceptions.ResourceNotFoundException;
import com.sunbeam.dao.ProgrammerDao;
import com.sunbeam.dao.TechnologyDao;
import com.sunbeam.dao.UserDao;
import com.sunbeam.entity.ProgrammerProfile;
import com.sunbeam.entity.Technology;
import com.sunbeam.entity.UserEntity;
import jakarta.transaction.Transactional;
import lombok.AllArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;


@Service
@Transactional
@AllArgsConstructor
public class ProgrammerServiceImpl implements ProgrammerService{
    private final ProgrammerDao programmerDao;
    private final UserDao userDao;
    private final TechnologyDao technologyDao;
    private final ModelMapper modelMapper;
    private final PasswordEncoder passwordEncoder;

    @Override
    public ApiResponse signUp(ProgrammerSignUpDTO dto) {
        if(userDao.existsByEmail(dto.getEmail())){
            return new ApiResponse("Email already exists");
        }
        ProgrammerProfile programmer = modelMapper.map(dto, ProgrammerProfile.class);
        UserEntity u = modelMapper.map(dto, UserEntity.class);
        u.setPassword(passwordEncoder.encode(dto.getPassword()));

        u.setProgrammerProfile(programmer);
        programmer.setUser(u);

        UserEntity savedUser = userDao.save(u);

        return new ApiResponse("Added new User Successfully with ID "+savedUser.getId());
    }

    @Override
    public ApiResponse addSkills(Long programmerId, ProgrammerSkillsDTO dto) {
        ProgrammerProfile programmer = programmerDao.findById(programmerId)
                .orElseThrow(() -> new ResourceNotFoundException("programmer not found"));

        for(Long techId : dto.getSkillIds()){
            Technology tech = technologyDao.findById(techId)
                    .orElseThrow(() -> new ResourceNotFoundException("technology not found"));
            if(!programmer.getTechnologies().contains(tech)){
                programmer.getTechnologies().add(tech);
                tech.getProgrammers().add(programmer);
            }
        }
        System.out.println(programmer.getTechnologies());
        return new ApiResponse("Skills added successfully");
    }
}

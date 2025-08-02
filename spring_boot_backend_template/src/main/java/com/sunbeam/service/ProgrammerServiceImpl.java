package com.sunbeam.service;

import com.sunbeam.DTO.ApiResponse;
import com.sunbeam.DTO.ProgrammerSignUpDTO;
import com.sunbeam.dao.ProgrammerDao;
import com.sunbeam.dao.UserDao;
import com.sunbeam.entity.ProgrammerProfile;
import com.sunbeam.entity.UserEntity;
import jakarta.transaction.Transactional;
import lombok.AllArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;


@Service
@Transactional
@AllArgsConstructor
public class ProgrammerServiceImpl implements ProgrammerService{
    private final ProgrammerDao programmerDao;
    private final UserDao userDao;
    private final ModelMapper modelMapper;
    @Override
    public ApiResponse signUp(ProgrammerSignUpDTO dto) {
        if(userDao.existsByEmail(dto.getEmail())){
            return new ApiResponse("Email already exists");
        }
//        ProgrammerProfile programmer = modelMapper.map(dto, ProgrammerProfile.class);
//        UserEntity u = modelMapper.map(dto, UserEntity.class);
//        u.setProgrammerProfile(programmer);
//        programmer.setU(u);
//        programmer  = programmerDao.save(programmer);
        ProgrammerProfile programmer = modelMapper.map(dto, ProgrammerProfile.class);
        UserEntity u = modelMapper.map(dto, UserEntity.class);

        u.setProgrammerProfile(programmer);
        programmer.setU(u);

        UserEntity savedUser = userDao.save(u);

        return new ApiResponse("Added new User Successfully with ID "+savedUser.getId());
    }
}

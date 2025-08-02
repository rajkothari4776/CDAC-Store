package com.sunbeam.service;

import com.sunbeam.DTO.ApiResponse;
import com.sunbeam.DTO.UserDTO;
import com.sunbeam.DTO.UserSignInDTO;
import com.sunbeam.customExceptions.AuthenticationFailureException;
import com.sunbeam.dao.UserDao;
import com.sunbeam.entity.UserEntity;
import jakarta.transaction.Transactional;
import lombok.AllArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

@Service
@Transactional
@AllArgsConstructor
public class UserServiceImpl implements UserService{
    private final UserDao userDao;
    private final ModelMapper modelMapper;
    @Override
    public UserDTO signIn(UserSignInDTO dto){
        UserEntity userEntity = userDao.findByEmailAndPassword(dto.getEmail(), dto.getPassword())
                .orElseThrow(() -> new AuthenticationFailureException("Invalid username or password"));
        UserDTO user =  modelMapper.map(userEntity, UserDTO.class);
        user.setBio(userEntity.getProgrammerProfile().getBio());
        user.setGithub(userEntity.getProgrammerProfile().getGithub());
        user.setCdacStudent(userEntity.getProgrammerProfile().isCdacStudent());
        user.setAvailable(userEntity.getProgrammerProfile().isAvailable());
        user.setExperience(userEntity.getProgrammerProfile().getExperience());

//        u = modelMapper.map(userEntity.getProgrammerProfile(), UserDTO.class);
        return user;
    }


}

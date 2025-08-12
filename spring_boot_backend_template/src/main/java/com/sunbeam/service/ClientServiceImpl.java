package com.sunbeam.service;

import com.sunbeam.DTO.ApiResponse;
import com.sunbeam.DTO.ClientSignUpDTO;
import com.sunbeam.dao.UserDao;
import com.sunbeam.entity.ClientProfile;
import com.sunbeam.entity.UserEntity;
import jakarta.transaction.Transactional;
import lombok.AllArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@Transactional
@AllArgsConstructor
public class ClientServiceImpl implements ClientService{

    private final UserDao userDao;
    private final ModelMapper modelMapper;
    private final PasswordEncoder passwordEncoder;


    @Override
    public ApiResponse signUp(ClientSignUpDTO dto) {
        if(userDao.existsByEmail(dto.getEmail())){
            return new ApiResponse("Email already exists");
        }
        ClientProfile client = modelMapper.map(dto, ClientProfile.class);
        UserEntity u = modelMapper.map(dto, UserEntity.class);
        u.setPassword(passwordEncoder.encode(dto.getPassword()));
        client.setUser(u);
        u.setClientProfile(client);

        UserEntity savedUser = userDao.save(u);


        return new ApiResponse("Added new User Successfully with ID "+savedUser.getId());
    }
}

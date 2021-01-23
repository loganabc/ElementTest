package com.work.elementtest.service.impl;

import com.work.elementtest.entity.User;
import com.work.elementtest.mapper.UserMapper;
import com.work.elementtest.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserMapper userMapper;


    @Override
    public List<User> getUserList(){
        List<User> userList = userMapper.selectList(null);
        return userList;
    }

}

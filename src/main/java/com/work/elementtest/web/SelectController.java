package com.work.elementtest.web;

import com.work.elementtest.entity.User;
import com.work.elementtest.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;

@Controller
public class SelectController {

    @Autowired
    private UserService userService;

    @RequestMapping("/select")
    public String select(){
        return "select";
    }


    @ResponseBody
    @RequestMapping("/getUserList")
    public List<User> getUserList(){
        return userService.getUserList();

    }
}

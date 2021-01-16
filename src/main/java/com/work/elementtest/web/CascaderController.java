package com.work.elementtest.web;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class CascaderController {
    @RequestMapping("/cascader")
    public String cascader(){
        return "cascader";
    }
}

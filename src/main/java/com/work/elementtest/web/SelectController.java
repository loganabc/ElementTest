package com.work.elementtest.web;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class SelectController {

    @RequestMapping("/select")
    public String select(){
        return "select";
    }
}

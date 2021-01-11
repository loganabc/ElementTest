package com.work.elementtest.web;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.HashMap;
import java.util.Map;

@Controller
public class CheckboxController {

    @RequestMapping("/checkbox")
    public String checkBox(){
        return "checkbox";
    }

    @ResponseBody
    @RequestMapping("/boxdata")
    public Map<String, Object> boxdata(String value){
        Map<String, Object> map = new HashMap<>();
        System.out.println(value);
        map.put("code",200);
        return map;
    }
}

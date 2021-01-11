package com.work.elementtest.web;

import com.work.elementtest.entity.TextAreaObject;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.HashMap;
import java.util.Map;

@Controller
public class InputController {

    @RequestMapping("/input")
    public String input(){
        return "input";
    }

    @ResponseBody
    @RequestMapping("/inputdata")
    public Map<String,Object> inputdata(String value){
        Map<String, Object> map = new HashMap<>();
        System.out.println(value);
        map.put("code",200);
        return map;
    }

    @ResponseBody
    @RequestMapping("/textareaObjectdata")
    public Map<String,Object> textareadata(@RequestBody TextAreaObject textAreaObject){
        Map<String, Object> map = new HashMap<>();
        System.out.println(textAreaObject);
        map.put("code",200);
        return map;
    }
}

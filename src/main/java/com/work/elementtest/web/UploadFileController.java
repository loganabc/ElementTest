package com.work.elementtest.web;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.util.HashMap;
import java.util.Map;
import java.util.logging.Logger;

@Controller
public class UploadFileController {
    @RequestMapping("/uploadfile")
    public String uploadfile(){
        return "uploadfile";

    }

    @ResponseBody
    @RequestMapping("/uploading")
    public Map<String, Object> uploadToUser(@RequestParam("file") MultipartFile file) {
        Map<String, Object> map = new HashMap<>();
        FileOutputStream out = null;
        try {
            String fileName = file.getOriginalFilename();
            if (fileName.indexOf("\\") != -1) {
                fileName = fileName.substring(fileName.lastIndexOf("\\"));
            }
            // 获取文件存放地址
            String filePath = "D:/element-UI/test/";
            File f = new File(filePath);
            if (!f.exists()) {
                f.mkdirs();// 不存在路径则进行创建
            }
            // 重新自定义文件的名称
            filePath = filePath + fileName;
            out = new FileOutputStream(filePath);
            out.write(file.getBytes());
            out.flush();
            out.close();
            map.put("1", "ok");
            return map;
        } catch (Exception e) {
            map.clear();
            map.put("2", "error");
            return map;
        } finally {
            if (out != null) {
                try {
                    out.close();
                } catch (IOException e) {
                    e.printStackTrace();
                }
            }
        }
    }
}

package com.work.elementtest;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
@MapperScan("com.work.elememttest.mapper")
public class ElementtestApplication {

    public static void main(String[] args) {
        SpringApplication.run(ElementtestApplication.class, args);
    }

}

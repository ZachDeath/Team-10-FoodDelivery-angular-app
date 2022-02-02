package com.example;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.example.controller.UsersController;


@SpringBootApplication(scanBasePackages = { "com.example.repository", "com.example.controller", "com.example.cors", "com.example.service" })
public class BackendApplication {

	@Autowired
	UsersController UsersController;

	public static void main(String[] args) {
		String Url = new String("http://localhost:8090");
		SpringApplication.run(BackendApplication.class, args);
		System.out.println(Url);
	}
}
package com.example;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;


@SpringBootApplication(scanBasePackages = { "com.example.repository", "com.example.controller", "com.example.cors", "com.example.service" })
public class BackendApplication {

	public static void main(String[] args) {
		String Url = new String("http://localhost:8090");
		SpringApplication.run(BackendApplication.class, args);
		System.out.println(Url);
	}
}
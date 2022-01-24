package com.example;

import java.net.MalformedURLException;
import java.net.URL;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.entity.Users;
import com.example.repository.UsersRepository;

@RestController
@SpringBootApplication(scanBasePackages = {"com.example.repository"})
public class BackendApplication {

	@Autowired
	UsersRepository UsersRepos;

	@RequestMapping(value = "/getUsers")
	public List<Users> getUsers() {
		return UsersRepos.findAll();
	}

	public static void main(String[] args) throws MalformedURLException {
		URL Url = new URL("http://localhost:8090/getUsers");
		SpringApplication.run(BackendApplication.class, args);
		System.out.println(Url);
	}
}
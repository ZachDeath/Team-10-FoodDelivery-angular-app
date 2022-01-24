package com.example;

import java.time.LocalDate;
import java.time.Month;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.entity.Users;
import com.example.repository.UsersRepository;

@RestController
@SpringBootApplication(scanBasePackages = { "com.example.repository" })
public class BackendApplication {

	// -- User Routes --

	@Autowired
	UsersRepository UsersRepos;

	// Route for obtaining a single user in the database
	@RequestMapping(value = "/getUser/{id}")
	public Users getUsersByID(@PathVariable("id") long id) {
		return UsersRepos.findByID(id);
	}

	// Route for obtaining all users in the database
	@RequestMapping(value = "/getUsers")
	public List<Users> getUsers() {
		return UsersRepos.findUsers();
	}

	// Route for inserting user into the database
	@RequestMapping(value = "/insertUser")
	public String insertUser() {
		UsersRepos.insertUser(new Users("Test", "Test", LocalDate.of(1998, Month.JULY, 12), "test@mastek.com",
				"07455432313", "TEST"));
		return ("User Successfully Created");
	}

	// Route for updating user into the database
	@RequestMapping(value = "/updateUser")
	public String updateUser() {
		UsersRepos.updateUser(new Users((long) 2, "UpdatedTest", "UpdatedTest", LocalDate.of(1998, Month.JULY, 12),
				"test@mastek.com", "07455432313", "TEST"));
		return ("User Successfully updated");
	}

	// Route for deleting a user in the database -- not working currently
	@RequestMapping(value = "/deleteUser/{id}")
	public String deleteUser(@PathVariable("id") long id) {
		UsersRepos.deleteUser(id);
		return ("User deleted successfully");
	}

	public static void main(String[] args) {
		String Url = new String("http://localhost:8090");
		SpringApplication.run(BackendApplication.class, args);
		System.out.println(Url);
	}
}
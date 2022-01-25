package com.example.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.example.entity.Users;
import com.example.repository.UsersRepository;

@RestController
@RequestMapping(value = "/users")
public class UsersController {

	@Autowired
	UsersRepository UsersRepos;

	// -- User Routes --

	// Route for obtaining a single user in the database
	@RequestMapping(value = "/getUser/{id}")
	public Users getUsersByID(@PathVariable("id") long id) {
		return UsersRepos.findByID(id);
	}

	// Route for obtaining all users in the database
	@RequestMapping(method = RequestMethod.GET, path = "/getUsers")
	public List<Users> getUsers() {
		return UsersRepos.findUsers();
	}

	// Route for inserting user into the database
	@RequestMapping(value = "/insertUser")
	public String insertUser(Users user) {
		UsersRepos.insertUser(new Users(user.getFirst_name(), user.getLast_name(), user.getDate_of_birth(),
				user.getEmail_address(), user.getPhone_number(), user.getPassword()));
		return ("User Successfully Created");
	}

	// Route for updating user into the database
	@RequestMapping(value = "/updateUser")
	public String updateUser(Users user) {
		return UsersRepos.updateUser(new Users(user.getUser_id(), user.getFirst_name(), user.getLast_name(),
				user.getDate_of_birth(), user.getEmail_address(), user.getPhone_number(), user.getPassword()));

	}

	// Route for deleting a user in the database
	@RequestMapping(value = "/deleteUser/{id}")
	public String deleteUser(@PathVariable("id") long id) {
		return UsersRepos.deleteUser(id);
	}

}

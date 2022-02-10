package com.example.controller;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.example.entity.User;
import com.example.service.UsersService;

@RestController
@RequestMapping(value = "/api/users")
@CrossOrigin
public class UsersController {
	
	Logger logger = LoggerFactory.getLogger(UsersController.class);

	@Autowired
	UsersService usersService;

	// -- User Routes --

	// Route for obtaining a single user in the database
	@RequestMapping(value = "/getUser/{id}", method = RequestMethod.GET)
	public User getUsersByID(@PathVariable("id") long id) {
		return usersService.getUsersByID(id);
	}

	// Route for obtaining all users in the database
	@RequestMapping(method = RequestMethod.GET, path = "/getUsers")
	public List<User> getUsers() {
		logger.info("Finding all Users");
		return usersService.getUsers();
	}

	// Route for inserting user into the database
	@PostMapping(value = "/insertUser")
	public String insertUser(@RequestBody User user) {
		logger.info("Inserting User into database");
		return usersService.insertUser(user);
	}

	// Route for updating user into the database
	@RequestMapping(value = "/updateUser/{id}", method = RequestMethod.PUT)
	public String updateUser(@PathVariable("id") long id, @ModelAttribute User user) {
		logger.info("Updating user from database");
		return usersService.updateUser(id, user);
	}

	// Route for deleting a user in the database
	@RequestMapping(value = "/deleteUser/{id}", method = RequestMethod.DELETE)
	public String deleteUser(@PathVariable("id") long id) {
		logger.info("Deleting user using userId");
		return usersService.deleteUser(id);
	}

	@RequestMapping(method = RequestMethod.GET, value = "/getUser/email/{email}/pass/{password}")
	public User FindByEmail(@PathVariable("email") String email, @PathVariable("password") String password) {
		logger.info("Finding user by email");
		return usersService.FindByEmail(email, password);

	}

}

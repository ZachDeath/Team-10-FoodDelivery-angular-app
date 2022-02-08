package com.example.controller;

import java.util.List;
import java.util.NoSuchElementException;

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
import com.example.repository.UsersRepository;

@RestController
@RequestMapping(value = "/api/users")
@CrossOrigin
public class UsersController {
	
	Logger logger = LoggerFactory.getLogger(UsersController.class);

	@Autowired
	UsersRepository UsersRepos;

	// -- User Routes --

	// Route for obtaining a single user in the database
	@RequestMapping(value = "/getUser/{id}")
	public User getUsersByID(@PathVariable("id") long id) {
		logger.info("Getting Users by Id");
		try {
			User user = UsersRepos.findById(id).get();
			return user;
		} catch (NoSuchElementException e) {
			logger.warn("No User Found");
			return null;
		}
	}

	// Route for obtaining all users in the database
	@RequestMapping(method = RequestMethod.GET, path = "/getUsers")
	public List<User> getUsers() {
		logger.info("Finding all Users");
		return (List<User>) UsersRepos.findAll();
	}

	// Route for inserting user into the database
	@PostMapping(value = "/insertUser")
	public String insertUser(@RequestBody User user) {
		logger.info("Inserting User into database");
		User temp = new User(null, user.getFirst_name(), user.getLast_name(), user.getDate_of_birth(), user.getEmail_address(),
				user.getPhone_number(), user.getPassword());
		UsersRepos.save(temp);
		return ("User Successfully Created");
	}

	// Route for updating user into the database
	@RequestMapping(value = "/updateUser/{id}")

	public String updateUser(@PathVariable("id") long id, @ModelAttribute User user) {
		logger.info("Updating user from database");
		if (getUsersByID(id) != null) {
			User temp = new User(id, user.getFirst_name(), user.getLast_name(), user.getDate_of_birth(),
					user.getEmail_address(), user.getPhone_number(), user.getPassword());
			UsersRepos.save(temp);
			return ("User Successfully updated");
		} else {
			logger.warn("User does not exist");
			return ("User does not exist");
		}
	}

	// Route for deleting a user in the database
	@RequestMapping(value = "/deleteUser/{id}")
	public String deleteUser(@PathVariable("id") long id) {
		logger.info("Deleting user using userId");
		if (getUsersByID(id) != null) {
			UsersRepos.deleteById(id);
			return ("User Successfully Deleted");
		} else {
			logger.warn("User does not exist");
			return ("User doesnt exist");
		}
	}

	@RequestMapping(method = RequestMethod.GET, value = "/getUser/email/{email}/pass/{password}")
	public User FindByEmail(@PathVariable("email") String email, @PathVariable("password") String password) {
		logger.info("Finding user by email");
		return UsersRepos.FindByEmail(email, password);

	}

}

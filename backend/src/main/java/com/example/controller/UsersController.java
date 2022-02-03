package com.example.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
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

	@Autowired
	UsersRepository UsersRepos;

	// -- User Routes --

	// Route for obtaining a single user in the database
	@RequestMapping(value = "/getUser/{id}")
	public User getUsersByID(@PathVariable("id") long id) {
		return UsersRepos.findById(id).get();
	}

	// Route for obtaining all users in the database
	@RequestMapping(method = RequestMethod.GET, path = "/getUsers")
	public List<User> getUsers() {
		return (List<User>) UsersRepos.findAll();
	}

	// Route for inserting user into the database
	@CrossOrigin
	@PostMapping(value = "/insertUser")
	public String insertUser(@RequestBody User user) {
		User temp = new User(user.getFirst_name(), user.getLast_name(), user.getDate_of_birth(),
				user.getEmail_address(), user.getPhone_number(), user.getPassword());
		UsersRepos.save(temp);
		return ("User Successfully Created");
	}

	// Route for updating user into the database
	@RequestMapping(value = "/updateUser")
	public void updateUser(User user) {
		
		User temp = new User(user.getUser_id(), user.getFirst_name(), user.getLast_name(),
				user.getDate_of_birth(), user.getEmail_address(), user.getPhone_number(), user.getPassword());
		
		UsersRepos.save(temp);
		


	}

	// Route for deleting a user in the database
	@RequestMapping(value = "/deleteUser/{id}")
	public void deleteUser(@PathVariable("id") long id) {
		UsersRepos.deleteById(id);
	}
	
	@RequestMapping(method = RequestMethod.GET,value = "/getUser/email/{email}/pass/{password}")
	public User FindByEmail(@PathVariable("email") String email, @PathVariable("password") String password) {
		System.out.println("finding user by email");
		return UsersRepos.FindByEmail(email, password);
		
	}

	
	
	
	

}

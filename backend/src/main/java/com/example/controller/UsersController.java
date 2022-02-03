package com.example.controller;

import java.util.List;
import java.util.NoSuchElementException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.example.entity.Users;
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
		try {
			User user = UsersRepos.findById(id).get();
			return user;
		} catch (NoSuchElementException e) {
			return null;
		}
	}

	// Route for obtaining all users in the database
	@RequestMapping(method = RequestMethod.GET, path = "/getUsers")
	public List<Users> getUsers() {
		return UsersRepos.findUsers();
	}

	// Route for inserting user into the database
	@CrossOrigin
	@PostMapping(value = "/insertUser")
	public String insertUser(@ModelAttribute User user) {
		User temp = new User(user.getFirst_name(), user.getLast_name(), user.getDate_of_birth(),
				user.getEmail_address(), user.getPhone_number(), user.getPassword());
		UsersRepos.save(temp);
		return ("User Successfully Created");
	}

	// Route for updating user into the database
	@RequestMapping(value = "/updateUser/{id}")

	public String updateUser(@PathVariable("id") long id, @ModelAttribute User user) {
		if (getUsersByID(id) != null) {
			User temp = new User(id, user.getFirst_name(), user.getLast_name(), user.getDate_of_birth(),
					user.getEmail_address(), user.getPhone_number(), user.getPassword());
			UsersRepos.save(temp);
			return ("User Successfully updated");
		} else {
			return ("User does not exist");
		}
	}

	// Route for deleting a user in the database
	@RequestMapping(value = "/deleteUser/{id}")
	public String deleteUser(@PathVariable("id") long id) {
		if (getUsersByID(id) != null) {
			UsersRepos.deleteById(id);
			return ("User Successfully Deleted");
		} else {
			return ("User doesnt exist");
		}
	}

	@RequestMapping(method = RequestMethod.GET, value = "/getUser/email/{email}/pass/{password}")
	public User FindByEmail(@PathVariable("email") String email, @PathVariable("password") String password) {
		System.out.println("finding user by email");
		return UsersRepos.FindByEmail(email, password);

	}

}

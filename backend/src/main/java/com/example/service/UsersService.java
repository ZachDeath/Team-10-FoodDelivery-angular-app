package com.example.service;

import java.util.List;
import java.util.NoSuchElementException;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;

import com.example.controller.UsersController;
import com.example.entity.User;
import com.example.repository.UsersRepository;

@Service
public class UsersService {
	
	
	Logger logger = LoggerFactory.getLogger(UsersController.class);

	@Autowired
	UsersRepository UsersRepos;

	// -- User Routes --

	// Route for obtaining a single user in the database
	public User getUsersByID(long id) {
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
	public List<User> getUsers() {
		return (List<User>) UsersRepos.findAll();
	}

	// Route for inserting user into the database
	public String insertUser( User user) {
		User temp = new User(null, user.getFirst_name(), user.getLast_name(), user.getDate_of_birth(), user.getEmail_address(),
				user.getPhone_number(), user.getPassword());
		UsersRepos.save(temp);
		return ("User Successfully Created");
	}

	// Route for updating user into the database
	public String updateUser( long id, User user) {
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
	public String deleteUser(long id) {
		if (getUsersByID(id) != null) {
			UsersRepos.deleteById(id);
			return ("User Successfully Deleted");
		} else {
			logger.warn("User does not exist");
			return ("User doesnt exist");
		}
	}

	
	public User FindByEmailAndPassword( String email,String password) {
		return UsersRepos.FindByEmailAndPassword(email, password);

	}
	
	public User FindByEmail(@PathVariable("email") String email) {
		logger.info("Finding user by email");
		return UsersRepos.FindByemail(email);

	}

}

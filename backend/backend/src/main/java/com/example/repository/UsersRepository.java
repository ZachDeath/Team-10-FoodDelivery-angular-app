package com.example.repository;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.TypedQuery;
import javax.transaction.Transactional;

import org.springframework.stereotype.Repository;

import com.example.entity.Users;

@Repository
@Transactional
public class UsersRepository {

	@PersistenceContext
	EntityManager entityManager;

	// Function for finding all users
	public List<Users> findUsers() {
		TypedQuery<Users> users = entityManager.createNamedQuery("findAllUsers", Users.class);
		return users.getResultList();
	}

	// Function for finding a user by ID
	public Users findByID(long ID) {
		return entityManager.find(Users.class, ID);
	}

	// Function for inserting user (identical to update but insert uses a
	// constructor with no id value)
	public void insertUser(Users user) {
		entityManager.merge(user);
	}

	// Function for updating a user
	public String updateUser(Users user) {
		if (findByID(user.getUser_id()) != null) {
			entityManager.merge(user);
			return("User updated successfully");
		} else {
			return("User does not exist");
		}
	}

	// Function for deleting a user
	public String deleteUser(long ID) {
		Users user = findByID(ID);
		if (user != null) {
			entityManager.remove(user);
			return ("User successfully deleted");
		} else {
			return ("User doesnt exist");
		}
	}
}

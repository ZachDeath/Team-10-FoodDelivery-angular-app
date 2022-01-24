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

	// Function for inserting or updating a user
	public void insertUser(Users user) {
		entityManager.merge(user);
	}

	// Function for inserting or updating a user
	public void updateUser(Users user) {
		entityManager.merge(user);
	}

	// Function for deleting a user -- not working currently
	public void deleteUser(long ID) {
		Users users = findByID(ID);
		entityManager.remove(users);
	}

}

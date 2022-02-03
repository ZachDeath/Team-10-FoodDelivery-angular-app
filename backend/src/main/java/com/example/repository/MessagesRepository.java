package com.example.repository;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.TypedQuery;
import javax.transaction.Transactional;

import org.springframework.stereotype.Repository;

import com.example.entity.Messages;

@Repository
@Transactional
public class MessagesRepository{

	@PersistenceContext
	EntityManager entityManager;

	// Function for finding all messages
	public List<Messages> findMessages() {
		TypedQuery<Messages> messages = entityManager.createNamedQuery("findAllMessages", Messages.class);
		return messages.getResultList();
	}

	// Function for finding a message by ID
	public Messages findByID(long ID) {
		return entityManager.find(Messages.class, ID);
	}

	// Function for inserting message (identical to update but insert uses a
	// constructor with no id value)
	public void insertMessage(Messages message) {
		entityManager.merge(message);
	}


	// Function for deleting a message
	public String deleteMessage(long ID) {
		Messages message = findByID(ID);
		if (message != null) {
			entityManager.remove(message);
			return ("message successfully deleted");
		} else {
			return ("message doesnt exist");
		}
	}
}

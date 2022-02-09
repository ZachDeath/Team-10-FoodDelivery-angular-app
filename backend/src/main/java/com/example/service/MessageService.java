package com.example.service;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.controller.MessagesController;
import com.example.entity.Messages;
import com.example.repository.MessagesRepository;

@Service
public class MessageService {
	
	Logger logger = LoggerFactory.getLogger(MessagesController.class);

	@Autowired
	MessagesRepository MessagesRepository;

	// -- User Routes --

	// Route for obtaining a single message in the database
	public Messages getMessagesByID(long id) {
		return MessagesRepository.findByID(id);
	}

	// Route for obtaining all messages in the database
	public List<Messages> getMessages() {
		return MessagesRepository.findMessages();
	}

	// Route for inserting message into the database
	public String insertMessage( Messages message) {
		MessagesRepository.insertMessage(new Messages(message.getFirst_name(), message.getLast_name(),
				message.getEmail_address(), message.getMessage()));
		return ("Message Successfully Created");
	}

	// Route for deleting a message in the database
	public String deleteMessage(long id) {
		return MessagesRepository.deleteMessage(id);
	}

}

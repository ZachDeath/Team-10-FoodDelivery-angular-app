package com.example.controller;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.example.entity.Messages;
import com.example.repository.MessagesRepository;

@RestController
@RequestMapping(value = "/api/messages")
@CrossOrigin
public class MessagesController {
	
	Logger logger = LoggerFactory.getLogger(MessagesController.class);

	@Autowired
	MessagesRepository MessagesRepository;

	// -- User Routes --

	// Route for obtaining a single message in the database
	@RequestMapping(value = "/getMessage/{id}")
	public Messages getMessagesByID(@PathVariable("id") long id) {
		logger.info("Getting message using ID");
		return MessagesRepository.findByID(id);
	}

	// Route for obtaining all messages in the database
	@RequestMapping(method = RequestMethod.GET, path = "/getMessages")
	public List<Messages> getMessages() {
		logger.info("Finding all messages");
		return MessagesRepository.findMessages();
	}

	// Route for inserting message into the database
	@CrossOrigin
	@PostMapping(value = "/insertMessage")
	public String insertMessage(@RequestBody Messages message) {
		logger.info("Inserting new message into database");
		MessagesRepository.insertMessage(new Messages(message.getFirst_name(), message.getLast_name(),
				message.getEmail_address(), message.getMessage()));
		return ("Message Successfully Created");
	}

	// Route for deleting a message in the database
	@RequestMapping(value = "/deleteMessage/{id}")
	public String deleteMessage(@PathVariable("id") long id) {
		logger.info("Deleting message using Id");
		return MessagesRepository.deleteMessage(id);
	}

}

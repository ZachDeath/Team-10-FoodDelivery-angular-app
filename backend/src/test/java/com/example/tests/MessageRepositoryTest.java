package com.example.tests;

import static org.junit.Assert.assertNotNull;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.example.entity.Messages;
import com.example.repository.MessagesRepository;

@SpringBootTest
public class MessageRepositoryTest {
	
	@Autowired
	MessagesRepository messageRepo;

	
	@Test
	//test findAll method works and hence seeing if the repo and entity works
	public void testFindAll() {
		Iterable<Messages> findAll = messageRepo.findMessages();
		
		assertNotNull("Can't find any items",findAll);
	}
	
	

}

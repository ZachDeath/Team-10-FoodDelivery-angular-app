package com.example.tests;

import static org.junit.Assert.assertNotNull;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.example.entity.OrderDetails;
import com.example.repository.OrderDetailsRepository;

@SpringBootTest
public class OrderDetailsRepositoryTesting {
	
	@Autowired
	OrderDetailsRepository orderDetailsRepo;
	
	@Test
	//test findAll method works and hence seeing if the repo and entity works
	public void testFindAll() {
		Iterable<OrderDetails> findAll = orderDetailsRepo.findAll();
		
		assertNotNull("Can't find any items",findAll);
	}
	
	@Test
	public void testFindByID() {
		//List<OrderDetails> findByID = orderDetailsRepo.findByID(7l, 2l);
		
		//assertNotNull(findByID);
		
	}
	
	

}

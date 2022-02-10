package com.example.tests;

import static org.junit.Assert.assertNotNull;
import static org.junit.Assert.assertNull;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.example.entity.Orders;
import com.example.repository.OrderRepository;

@SpringBootTest
public class OrderRepositoryTest {
	
	@Autowired
	OrderRepository orderRepo;
	
	@Test
	//test findAll method works and hence seeing if the repo and entity works
	public void testFindAll() {
		Iterable<Orders> findAll = orderRepo.findAll();
		
		assertNotNull("Can't find any items",findAll);
	}
	
	
	@Test
	public void testCreateOrder() {
		LocalDateTime now = LocalDateTime.now();
		Orders testOrder = new Orders(9999l,114l, 9l, now.toString());
		orderRepo.save(testOrder);
	}
	
	
	
	@Test
	//test finding the item we previously saved
	public void testFindOrderByOrder() {
		
		Optional<Orders> findByOrder = orderRepo.findById(9999l);
		
		assertNull(findByOrder);
		
	}
	
	@Test
	//test finding the item we previously saved
	public void testFindOrderByUser() {
		
		List<Orders> findByUser = orderRepo.FindByUserID(114l);
		
		assertNull(findByUser);
		
	}
	
	@Test
	//test delete by deleting the item we saved
	public void deleteitem() {
		
		orderRepo.deleteById(10l);
		
		Boolean temp = orderRepo.existsById(10l);
		
		assertNotNull(temp);
	}

}

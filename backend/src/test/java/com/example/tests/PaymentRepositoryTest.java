package com.example.tests;

import static org.junit.Assert.assertNotNull;
import static org.junit.Assert.assertNull;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.example.entity.Payment;
import com.example.repository.PaymentRepository;

@SpringBootTest
public class PaymentRepositoryTest {
	
	@Autowired
	PaymentRepository paymentRepo;
	
	@Test
	//test findAll method works and hence seeing if the repo and entity works
	public void testFindAll() {
		Iterable<Payment> findAll = paymentRepo.findAll();
		
		assertNotNull("Can't find any items",findAll);
	}
	
	@Test
	//test the repo to save item to database
	public void testSaveItem() {
		
		Payment temp = new Payment(114,3,"1111111111111111","111","03","2022");
		
		paymentRepo.save(temp);
		
	}
	
	@Test
	//test finding the item we previously saved
	public void testFindPaymentByUser() {
		
		Payment findByUser = paymentRepo.findByUser(114);
		
		assertNull(findByUser);
		
	}
	
	@Test
	//test delete by deleting the item we saved
	public void deleteitem() {
		
		paymentRepo.deleteById(10);
		
		Payment findByUser = paymentRepo.findByUser(114);
		
		assertNotNull(findByUser);
	}

}

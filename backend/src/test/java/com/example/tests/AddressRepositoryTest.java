package com.example.tests;

import static org.junit.Assert.assertNotNull;
import static org.junit.Assert.assertNull;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.example.entity.Address;
import com.example.repository.AddressRepository;



@SpringBootTest
public class AddressRepositoryTest {
	
	@Autowired
	AddressRepository addressRepo;
	
	@Test
	//test findAll method works and hence seeing if the repo and entity works
	public void testFindAll() {
		Iterable<Address> findAll = addressRepo.findAll();
		
		assertNotNull("Can't find any items",findAll);
	}
	
	@Test
	//test the repo to save item to database
	public void testSaveItem() {
		
		Address address = new Address(114,"first name", "surname", "first line", "second line", "city", "state", "postcode");
		
		addressRepo.save(address);
		
	}
	
	@Test
	//test finding the item we previously saved
	public void testFindAddressByUser() {
		
		Address findByUser = addressRepo.findByUserID(114);
		
		assertNull(findByUser);
		
	}
	
	

}

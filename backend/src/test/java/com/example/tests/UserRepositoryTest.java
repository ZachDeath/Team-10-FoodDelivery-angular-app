package com.example.tests;

import static org.junit.Assert.assertFalse;
import static org.junit.Assert.assertNotNull;
import static org.junit.Assert.assertTrue;

import java.time.LocalDate;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.example.entity.User;
import com.example.repository.UsersRepository;



@SpringBootTest
public class UserRepositoryTest {
	
	@Autowired
	UsersRepository userRepo;
	
	@Test
	//test findAll method works and hence seeing if the repo and entity works
	public void testFindAll() {
		Iterable<User> findAll = userRepo.findAll();
		
		assertNotNull("Can't find any items",findAll);
	}
	
	@Test
	//test the repo to save item to database
	public void testSaveItem() {
		
		LocalDate date = LocalDate.of(1999, 1, 8);
		
		User user = new User(999l,"firstname","secondname",date,"test@hotmail.com","07182736478","pass123");
		
		userRepo.save(user);
		
	}
	
	@Test
	//test finding the item we previously saved
	public void testFindUserById() {
		
		Boolean temp = userRepo.existsById(999l);
		
		assertFalse(temp);
		
		
		
	}
	
	@Test
	
	public void testFindUserByEmailAndPassword() {
		
		User temp = userRepo.FindByEmailAndPassword("test@hotmail.com","pass123");	
		assertNotNull(temp);
	}
	
	@Test
	public void deleteitem() {
		
		userRepo.deleteById(999l);
		
		Boolean temp = userRepo.existsById(999l);
		
		assertTrue(temp);
	}
	
	

}

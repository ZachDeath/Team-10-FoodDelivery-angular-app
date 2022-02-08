package com.example.tests;

import static org.junit.Assert.assertNotNull;
import static org.junit.Assert.assertNull;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.example.entity.Menu;
import com.example.repository.MenuRepository;


@SpringBootTest
public class MenuRepositoryTests {

	@Autowired
	MenuRepository menuRepo;
	
	
	@Test
	//test findAll method works and hence seeing if the repo and entity works
	public void testFindAll() {
		Iterable<Menu> findAll = menuRepo.findAll();
		
		assertNotNull("Can't find any items",findAll);
	}
	
	@Test
	//test the repo to save item to database
	public void testSaveItem() {
		Menu temp = new Menu();
		temp.setFood_id(10);
		temp.setDescription("This is a Test item");
		temp.setFood_type(3);
		temp.setPicture_url("www.test.co.uk");
		temp.setTitle("Test item");
		temp.setUnitprice(18.99);
		
		
		
		menuRepo.save(temp);
	}
	
	@Test
	//test finding the item we previously saved
	public void testgetItemById() {
		
		assertNotNull(menuRepo.findById(10));
		
	}
	
	@Test
	//test delete by deleting the item we saved
	public void deleteitem() {
		
		menuRepo.deleteById(10);
		
		assertNull(menuRepo.findById(10));
		
	}
	
	
}

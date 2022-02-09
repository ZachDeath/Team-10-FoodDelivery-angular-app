package com.example.tests;

import static org.junit.Assert.assertFalse;
import static org.junit.Assert.assertNotNull;
import static org.junit.Assert.assertTrue;

import java.time.LocalDate;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.example.entity.Employee;
import com.example.repository.EmployeesRepository;



@SpringBootTest
public class EmployeeRepositoryTest {
	
	@Autowired
	EmployeesRepository employeeRepo;
	
	@Test
	//test findAll method works and hence seeing if the repo and entity works
	public void testFindAll() {
		Iterable<Employee> findAll = employeeRepo.findAll();
		
		assertNotNull("Can't find any items",findAll);
	}
	
	@Test
	//test the repo to save item to database
	public void testSaveItem() {
		
		LocalDate date = LocalDate.of(1999, 1, 8);
		
		Employee employee = new Employee(999l,"firstname","secondname",date,"test@hotmail.com","07182736478","pass123");
		
		employeeRepo.save(employee);
		
	}
	
	@Test
	//test finding the item we previously saved
	public void testFindEmployeeById() {
		
		Boolean temp = employeeRepo.existsById(999l);
		
		assertFalse(temp);
		
		
		
	}
	
	@Test
	
	public void testFindUserByEmailAndPassword() {
		
		Employee temp = employeeRepo.FindByEmail("test@hotmail.com","pass123");	
		assertNotNull(temp);
	}
	
	@Test
	public void deleteitem() {
		
		employeeRepo.deleteById(999l);
		
		Boolean temp = employeeRepo.existsById(999l);
		
		assertTrue(temp);
	}

}

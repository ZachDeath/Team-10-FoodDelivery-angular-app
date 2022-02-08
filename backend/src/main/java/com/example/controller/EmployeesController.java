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

import com.example.entity.Employees;
import com.example.repository.EmployeesRepository;

@RestController
@RequestMapping(value = "/api/employees")
@CrossOrigin
public class EmployeesController {

	@Autowired
	EmployeesRepository EmployeesRepository;
	
	Logger logger = LoggerFactory.getLogger(EmployeesController.class);

	// -- Employee Routes --

	// Route for obtaining a single employee in the database
	@RequestMapping(value = "/getEmployee/{id}")
	public Employees getEmployeesByID(@PathVariable("id") long id) {
		logger.info("Getting employee using ID");
		return EmployeesRepository.findByID(id);
	}

	// Route for obtaining all employees in the database
	@RequestMapping(method = RequestMethod.GET, path = "/getEmployees")
	public List<Employees> getEmployees() {
		logger.info("Getting all employees");
		return EmployeesRepository.findEmployees();
	}

	// Route for inserting employee into the database
	@CrossOrigin
	@PostMapping(value = "/insertEmployee")
	public String insertEmployee(@RequestBody Employees employee) {
		logger.info("Inserting new employee into database");
		EmployeesRepository.insertEmployee(new Employees(employee.getFirst_name(), employee.getLast_name(), employee.getDate_of_birth(),
				employee.getEmail_address(), employee.getPhone_number(), employee.getPassword()));
		return ("Employee Successfully Created");
	}

	// Route for updating employee into the database
	@RequestMapping(value = "/updateEmployee")
	public String updateEmployee(Employees employee) {
		logger.info("updating employee in database");
		return EmployeesRepository.updateEmployee(new Employees(employee.getEmployee_id(), employee.getFirst_name(), employee.getLast_name(),
				employee.getDate_of_birth(), employee.getEmail_address(), employee.getPhone_number(), employee.getPassword()));

	}

	// Route for deleting a employee in the database
	@RequestMapping(value = "/deleteEmployee/{id}")
	public String deleteEmployee(@PathVariable("id") long id) {
		logger.info("Deleting employee using ID");
		return EmployeesRepository.deleteEmployee(id);
	}

}

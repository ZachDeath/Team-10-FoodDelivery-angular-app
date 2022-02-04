package com.example.controller;

import java.util.List;

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

	// -- Employee Routes --

	// Route for obtaining a single employee in the database
	@RequestMapping(value = "/getEmployee/{id}")
	public Employees getEmployeesByID(@PathVariable("id") long id) {
		return EmployeesRepository.findByID(id);
	}

	// Route for obtaining all employees in the database
	@RequestMapping(method = RequestMethod.GET, path = "/getEmployees")
	public List<Employees> getEmployees() {
		return EmployeesRepository.findEmployees();
	}

	// Route for inserting employee into the database
	@CrossOrigin
	@PostMapping(value = "/insertEmployee")
	public String insertEmployee(@RequestBody Employees employee) {
		EmployeesRepository.insertEmployee(new Employees(employee.getFirst_name(), employee.getLast_name(), employee.getDate_of_birth(),
				employee.getEmail_address(), employee.getPhone_number(), employee.getPassword()));
		return ("Employee Successfully Created");
	}

	// Route for updating employee into the database
	@RequestMapping(value = "/updateEmployee")
	public String updateEmployee(Employees employee) {
		return EmployeesRepository.updateEmployee(new Employees(employee.getEmployee_id(), employee.getFirst_name(), employee.getLast_name(),
				employee.getDate_of_birth(), employee.getEmail_address(), employee.getPhone_number(), employee.getPassword()));

	}

	// Route for deleting a employee in the database
	@RequestMapping(value = "/deleteEmployee/{id}")
	public String deleteEmployee(@PathVariable("id") long id) {
		return EmployeesRepository.deleteEmployee(id);
	}

}

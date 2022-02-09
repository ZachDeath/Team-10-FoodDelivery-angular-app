package com.example.controller;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.example.entity.Employee;
import com.example.service.EmployeesService;

@RestController
@RequestMapping(value = "/api/employees")
@CrossOrigin
public class EmployeesController {

	@Autowired
	EmployeesService employeesService;
	
	Logger logger = LoggerFactory.getLogger(EmployeesController.class);

	// -- Employee Routes --

	// Route for obtaining a single employee in the database
		@RequestMapping(value = "/getEmployee/{id}")
		public Employee getEmployeesByID(@PathVariable("id") long id) {
			return employeesService.getEmployeesByID(id);
		}

		// Route for obtaining all employees in the database
		@RequestMapping(method = RequestMethod.GET, path = "/getEmployees")
		public List<Employee> getEmployees() {
			return employeesService.getEmployees();
		}

		// Route for inserting employee into the database
		@CrossOrigin
		@PostMapping(value = "/insertEmployee")
		public String insertEmployee(@ModelAttribute Employee employee) {
			
			return employeesService.insertEmployee(employee);
		}

		// Route for updating employee into the database
		@RequestMapping(value = "/updateEmployee/{id}")

		public String updateEmployee(@PathVariable("id") long id, @ModelAttribute Employee employee) {
			return employeesService.updateEmployee(id, employee);
		}

		// Route for deleting a employee in the database
		@RequestMapping(value = "/deleteEmployee/{id}")
		public String deleteEmployee(@PathVariable("id") long id) {
			return employeesService.deleteEmployee(id);
		}

		@RequestMapping(method = RequestMethod.GET, value = "/getEmployee/email/{email}/pass/{password}")
		public Employee FindByEmail(@PathVariable("email") String email, @PathVariable("password") String password) {
			System.out.println("finding employee by email");
			return employeesService.FindByEmail(email, password);

		}

}

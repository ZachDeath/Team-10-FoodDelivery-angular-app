package com.example.service;

import java.util.List;
import java.util.NoSuchElementException;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;

import com.example.controller.EmployeesController;
import com.example.entity.Employee;
import com.example.repository.EmployeesRepository;

@Service
public class EmployeesService {
	
	@Autowired
	EmployeesRepository EmployeesRepository;
	
	Logger logger = LoggerFactory.getLogger(EmployeesController.class);

	// -- Employee Routes --

	// Route for obtaining a single employee in the database
		public Employee getEmployeesByID(@PathVariable("id") long id) {
			try {
				Employee employee = EmployeesRepository.findById(id).get();
				return employee;
			} catch (NoSuchElementException e) {
				return null;
			}
		}

		// Route for obtaining all employees in the database
		public List<Employee> getEmployees() {
			return (List<Employee>) EmployeesRepository.findAll();
		}

		// Route for inserting employee into the database
		public String insertEmployee(@ModelAttribute Employee employee) {
			Employee temp = new Employee(null, employee.getFirst_name(), employee.getLast_name(), employee.getDate_of_birth(), employee.getEmail_address(),
					employee.getPhone_number(), employee.getPassword());
			EmployeesRepository.save(temp);
			return ("Employee Successfully Created");
		}

		// Route for updating employee into the database
		public String updateEmployee(@PathVariable("id") long id, @ModelAttribute Employee employee) {
			if (getEmployeesByID(id) != null) {
				Employee temp = new Employee(id, employee.getFirst_name(), employee.getLast_name(), employee.getDate_of_birth(),
						employee.getEmail_address(), employee.getPhone_number(), employee.getPassword());
				EmployeesRepository.save(temp);
				return ("Employee Successfully updated");
			} else {
				return ("Employee does not exist");
			}
		}

		// Route for deleting a employee in the database
		public String deleteEmployee(@PathVariable("id") long id) {
			if (getEmployeesByID(id) != null) {
				EmployeesRepository.deleteById(id);
				return ("Employee Successfully Deleted");
			} else {
				return ("Employee doesnt exist");
			}
		}

		public Employee FindByEmail(@PathVariable("email") String email, @PathVariable("password") String password) {
			System.out.println("finding employee by email");
			return EmployeesRepository.FindByEmail(email, password);

		}


}

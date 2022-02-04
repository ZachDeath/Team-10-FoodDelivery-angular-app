package com.example.repository;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.TypedQuery;
import javax.transaction.Transactional;

import org.springframework.stereotype.Repository;

import com.example.entity.Employees;

@Repository
@Transactional
public class EmployeesRepository {

	@PersistenceContext
	EntityManager entityManager;

	// Function for finding all employees
	public List<Employees> findEmployees() {
		TypedQuery<Employees> employees = entityManager.createNamedQuery("findAllEmployees", Employees.class);
		return employees.getResultList();
	}

	// Function for finding a employee by ID
	public Employees findByID(long ID) {
		return entityManager.find(Employees.class, ID);
	}

	// Function for inserting employee (identical to update but insert uses a
	// constructor with no id value)
	public void insertEmployee(Employees employee) {
		entityManager.merge(employee);
	}

	// Function for updating a employee
	public String updateEmployee(Employees employee) {
		if (findByID(employee.getEmployee_id()) != null) {
			entityManager.merge(employee);
			return("Employee updated successfully");
		} else {
			return("Employee does not exist");
		}
	}

	// Function for deleting a employee
	public String deleteEmployee(long ID) {
		Employees employee = findByID(ID);
		if (employee != null) {
			entityManager.remove(employee);
			return ("Employee successfully deleted");
		} else {
			return ("Employee doesnt exist");
		}
	}
}

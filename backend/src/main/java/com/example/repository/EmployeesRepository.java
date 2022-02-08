package com.example.repository;


import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.example.entity.Employee;

@Repository
@Transactional
@CrossOrigin("http://localhost:4200")
public interface EmployeesRepository extends CrudRepository<Employee, Long> {
	
	@Query(value="SELECT * FROM EMPLOYEES where email_address=:email AND password=:password",nativeQuery=true)
	Employee FindByEmail(@Param("email") String email, @Param("password") String password);

}

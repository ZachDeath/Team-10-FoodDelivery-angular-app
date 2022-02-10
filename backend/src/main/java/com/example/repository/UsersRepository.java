package com.example.repository;


import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.example.entity.User;

@Repository
@Transactional
@CrossOrigin("http://localhost:4200")
public interface UsersRepository extends CrudRepository<User, Long> {
	
	@Query(value="SELECT * FROM USERS where email_address=:email AND password=:password",nativeQuery=true)
	User FindByEmailAndPassword(@Param("email") String email, @Param("password") String password);
	
	@Query(value="SELECT * FROM USERS where email_address=:email",nativeQuery=true)
	User FindByemail(@Param("email") String email);

}

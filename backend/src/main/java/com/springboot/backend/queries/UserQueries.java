package com.springboot.backend.queries;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import com.springboot.backend.entites.Users;

@Repository
public class UserQueries {
	
	@Autowired
	JdbcTemplate jdbcTemplate;
	
	public List<Users> findAllUsers() {
		List<Users> query = jdbcTemplate.query("SELECT * FROM users", new BeanPropertyRowMapper(Users.class));
		return query;
	}

}

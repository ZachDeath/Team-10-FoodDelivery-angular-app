package com.example.repository;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Component;
import com.example.entity.Users;

@Component
public class UsersRepository {
	
	@Autowired
	JdbcTemplate jdbcTemplate;
	
	public List<Users> findAll() {
		return jdbcTemplate.query("Select * from users", new BeanPropertyRowMapper<Users>(Users.class));
	}

}

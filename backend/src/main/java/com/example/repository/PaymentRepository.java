package com.example.repository;

import org.springframework.data.repository.CrudRepository;

import com.example.entity.Payment;


public interface PaymentRepository extends CrudRepository<Payment, Integer>{
	
	<List>Payment findById(int id);
	<List>Payment findByUser(int user_id);

}

package com.example.repository;

import javax.transaction.Transactional;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.example.entity.Payment;

@Repository
@Transactional
@CrossOrigin("http://localhost:4200")
public interface PaymentRepository extends CrudRepository<Payment, Integer>{
	
	<List>Payment findByUser(int user_id);

}

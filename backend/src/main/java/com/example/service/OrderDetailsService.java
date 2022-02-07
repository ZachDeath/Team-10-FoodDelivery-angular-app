package com.example.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.entity.OrderDetails;
import com.example.entity.Orders;
import com.example.repository.OrderDetailsRepository;

@Service
public class OrderDetailsService {
	
	@Autowired
	OrderDetailsRepository OrderDetailsRepo;

	public Optional<OrderDetails> findOrderDetailsByOrderID(long id) {
		return OrderDetailsRepo.findById(id);
	}

}

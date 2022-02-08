package com.example.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.entity.OrderDetails;
import com.example.repository.OrderDetailsRepository;

@Service
public class OrderDetailsService {
	
	@Autowired
	OrderDetailsRepository OrderDetailsRepo;

	public List<OrderDetails> findOrderDetailsByOrderID(Long order, Long food) {
		return OrderDetailsRepo.findByID(order, food);
	}

}

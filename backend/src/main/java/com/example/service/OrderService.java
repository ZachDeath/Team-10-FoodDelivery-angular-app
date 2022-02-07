package com.example.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.entity.Orders;
import com.example.repository.OrderRepository;

@Service
public class OrderService {

	@Autowired
	OrderRepository orderRepo;

	public List<Orders> findOrderByUserID(long id) {
		return orderRepo.FindByUserID(id);
	}

	public Optional<Orders> findOrderByOrderID(long id) {
		return orderRepo.findById(id);
	}

	public void deleteOrder(long id) {
		orderRepo.deleteById(id);

	}

}

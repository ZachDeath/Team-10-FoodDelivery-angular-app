package com.example.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.entity.Menu;
import com.example.entity.OrderDetails;
import com.example.entity.OrderDetailsID;
import com.example.entity.Orders;
import com.example.repository.OrderDetailsRepository;

@Service
public class OrderDetailsService {
	
	@Autowired
	OrderDetailsRepository OrderDetailsRepo;

	public OrderDetails findOrderDetailsByID(Long order, Long food) {
		return OrderDetailsRepo.findByID(order, food);
	}
	
	public List<OrderDetails> findOrderDetailsByOrderID(Long order) {
		return OrderDetailsRepo.findByOrderID(order);
	}

	public OrderDetails createOrderDetails(Long orderid, Long food, int quantity) {
		OrderDetailsID ID = new OrderDetailsID(orderid, food);
		OrderDetails order = new OrderDetails(ID, quantity);
		return OrderDetailsRepo.save(order);
	}
}

package com.example.service;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
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

	public Iterable<Orders> findAllOrders() {
		return orderRepo.findAll();
	}

	public Optional<Orders> findOrderByOrderID(long id) {
		return orderRepo.findById(id);
	}

	public void deleteOrder(long id) {
		orderRepo.deleteById(id);

	}

	public Orders createOrder(Orders order) {
		LocalDateTime myDateObj = LocalDateTime.now();
		DateTimeFormatter myFormatObj = DateTimeFormatter.ofPattern("dd-MM-yyyy HH:mm:ss");
		String formattedDate = myDateObj.format(myFormatObj);
		Orders savedOrder = new Orders(order.getUser_id(), order.getEmployee_id(), formattedDate);
		return orderRepo.save(savedOrder);
	}

}

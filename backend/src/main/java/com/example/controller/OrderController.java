package com.example.controller;

import java.util.List;
import java.util.Optional;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.example.entity.Orders;
import com.example.service.OrderService;

@RestController
@RequestMapping(value = "/api/order")
@CrossOrigin
public class OrderController {
	
	Logger logger = LoggerFactory.getLogger(OrderController.class);

	@Autowired
	OrderService OrderService;

	@RequestMapping(value = "/getOrderByOrderID/{id}", method = RequestMethod.GET)
	public Optional<Orders> getOrderByOrderID(@PathVariable("id") int id) {
		logger.info("Getting order using ID");
		return OrderService.findOrderByOrderID(id);

	}
	
	@RequestMapping(value = "/getAllOrders", method = RequestMethod.GET)
	public Iterable<Orders> getAllOrders() {
		logger.info("Getting all orders");
		return OrderService.findAllOrders();

	}

	@RequestMapping(value = "/getOrderByUser/{id}", method = RequestMethod.GET)
	public List<Orders> getOrderByUserID(@PathVariable("id") int id) {
		logger.info("Getting order by userId");
		return OrderService.findOrderByUserID(id);

	}
	
	@RequestMapping(value = "/deleteOrder/{id}")
	public String deleteOrder(@PathVariable("id") int id) {
		logger.info("Deleting order");
		Optional<Orders> order = getOrderByOrderID(id);
		if (order != null) {
			OrderService.deleteOrder(id);
			return ("Order Deleted Successfully");
		} else {
			return ("Order not found");
		}
	}
	
	@RequestMapping(value = "/createOrder/{id}")
	public Orders createOrder(@RequestBody Orders orders, @PathVariable("id") long id) {
		logger.info("Creating order");
		return OrderService.createOrder(orders, id);
	}
	
	
}
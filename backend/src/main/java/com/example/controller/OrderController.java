package com.example.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.entity.Address;
import com.example.entity.Orders;
import com.example.service.OrderService;

@RestController
@RequestMapping(value = "/api/order")
@CrossOrigin
public class OrderController {

	@Autowired
	OrderService OrderService;

	@RequestMapping(value = "/getOrderByOrderID/{id}", method = RequestMethod.GET)
	public Optional<Orders> getOrderByOrderID(@PathVariable("id") int id) {
		return OrderService.findOrderByOrderID(id);

	}
	
	@RequestMapping(value = "/getAllOrders", method = RequestMethod.GET)
	public Iterable<Orders> getAllOrders() {
		return OrderService.findAllOrders();

	}

	@RequestMapping(value = "/getOrderByUser/{id}", method = RequestMethod.GET)
	public List<Orders> getOrderByUserID(@PathVariable("id") int id) {
		return OrderService.findOrderByUserID(id);

	}
	
	@RequestMapping(value = "/deleteOrder/{id}")
	public String deleteOrder(@PathVariable("id") int id) {
		Optional<Orders> order = getOrderByOrderID(id);
		if (order != null) {
			OrderService.deleteOrder(id);
			return ("Order Deleted Successfully");
		} else {
			return ("Order not found");
		}
	}
	
	@RequestMapping(value = "/createOrder")
	public Orders createOrder(@ModelAttribute Orders orders) {
		return OrderService.createOrder(orders);
	}
	
	
}
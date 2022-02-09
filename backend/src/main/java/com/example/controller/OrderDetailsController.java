package com.example.controller;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.entity.OrderDetails;
import com.example.service.OrderDetailsService;

@RestController
@RequestMapping(value = "/api/orderDetails")
@CrossOrigin
public class OrderDetailsController {
	
	Logger logger = LoggerFactory.getLogger(OrderDetailsController.class);
	
	@Autowired
	OrderDetailsService OrderDetailsService;

	@RequestMapping(value = "/getOrderDetails/{order}/{food}", method = RequestMethod.GET)
	public OrderDetails getOrderDetailsByID(@PathVariable("order") Long order, @PathVariable("food") Long food) {
		return OrderDetailsService.findOrderDetailsByID(order, food);

	}
	
	@RequestMapping(value = "/getOrderDetails/{order}", method = RequestMethod.GET)
	public List<OrderDetails> getOrderDetailsByOrderID(@PathVariable("order") Long order) {
		return OrderDetailsService.findOrderDetailsByOrderID(order);

	}
	
	@RequestMapping(value = "/createOrderDetails", method = RequestMethod.POST)
	public OrderDetails CreateOrderDetails(@RequestParam Long order, @RequestParam Long food, int quantity) {
		return OrderDetailsService.createOrderDetails(order, food, quantity);

	}



}

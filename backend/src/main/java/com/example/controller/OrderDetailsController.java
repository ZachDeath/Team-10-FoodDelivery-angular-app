package com.example.controller;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.example.entity.OrderDetails;

import com.example.service.OrderDetailsService;

@RestController
@RequestMapping(value = "/api/orderDetails")
@CrossOrigin
public class OrderDetailsController {
	
	@Autowired
	OrderDetailsService OrderDetailsService;

	@RequestMapping(value = "/getOrderDetails/{id}", method = RequestMethod.GET)
	public Optional<OrderDetails> getOrderDetailsByID(@PathVariable("id") int id) {
		return OrderDetailsService.findOrderDetailsByOrderID(id);

	}

}

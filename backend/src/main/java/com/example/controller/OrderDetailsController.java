package com.example.controller;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
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
	
	Logger logger = LoggerFactory.getLogger(OrderDetailsController.class);
	
	@Autowired
	OrderDetailsService OrderDetailsService;

	@RequestMapping(value = "/getOrderDetails/{order} + {food}", method = RequestMethod.GET)
	public List<OrderDetails> getOrderDetailsByID(@PathVariable("order") Long order, @PathVariable("food") Long food) {
		logger.info("Getting order details by Id");
		return OrderDetailsService.findOrderDetailsByOrderID(order, food);

	}

}

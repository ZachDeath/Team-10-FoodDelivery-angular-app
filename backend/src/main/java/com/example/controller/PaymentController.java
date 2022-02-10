package com.example.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.example.entity.Payment;
import com.example.models.PaymentRequestModel;
import com.example.models.PaymentResponseModel;
import com.example.service.PaymentService;

@RestController
@RequestMapping("/payment")
public class PaymentController {
	Logger logger = LoggerFactory.getLogger(PaymentController.class);

	@Autowired
	PaymentService paymentService;

	@RequestMapping(value = "/find-payment/user-id/{id}", method = RequestMethod.GET)
	public <List> Payment findPaymentUser(@PathVariable("id") int id) {
		logger.info("Finding payment by UserId");
		return paymentService.findPaymentUser(id);
	}

	// use PUT HEREERERERE
	@RequestMapping(value = "/find-payment/update-payment/{id}", method = RequestMethod.PUT)
	public PaymentResponseModel updatePaymentByUser(@PathVariable("id") int id,
			@RequestBody PaymentRequestModel updatedPay) {
		logger.info("Updating payment by UserId");

		return paymentService.updatePaymentByUser(id, updatedPay);
	}

}

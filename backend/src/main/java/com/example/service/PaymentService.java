package com.example.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;

import com.example.entity.Payment;
import com.example.models.PaymentRequestModel;
import com.example.models.PaymentResponseModel;
import com.example.repository.PaymentRepository;

@Service
public class PaymentService {
	
	@Autowired
	PaymentRepository paymentRepo;
	

	
	public <List>Payment findPaymentUser(@PathVariable("id") int id) {
		return paymentRepo.findByUser(id);
	}
	
	public PaymentResponseModel updatePaymentByUser(@PathVariable("id") int id, @RequestBody PaymentRequestModel updatedPay) {
		try {
			Payment payment = paymentRepo.findByUser(id);
			PaymentResponseModel response = new PaymentResponseModel();
			
		
			//Payment payment = paymentRepo.findByUser(id);
			payment.setExpiry_month(updatedPay.getExpiry_month());
			payment.setVcc(updatedPay.getVcc());
			payment.setExpiry_year(updatedPay.getExpiry_year());
			payment.setLong_card_number(updatedPay.getLong_card_number());
			payment.setPayment_type(updatedPay.getPayment_type());
			
			paymentRepo.save(payment);
			
			response.setExpiry_month(payment.getExpiry_month());
			response.setVcc(payment.getVcc());
			response.setExpiry_year(payment.getExpiry_year());
			response.setLong_card_number(payment.getLong_card_number());
			response.setPayment_type(payment.getPayment_type());
			response.setUser(payment.getUser_id());
			
			
			
			
			
			return response;
			
		}catch (NullPointerException e) {
			
			System.out.println("Item doesnt exist");
			PaymentResponseModel response = new PaymentResponseModel();
			Payment pay = new Payment();
			pay.setUser_id(id);
			pay.setExpiry_month(updatedPay.getExpiry_month());
			pay.setVcc(updatedPay.getVcc());
			pay.setExpiry_year(updatedPay.getExpiry_year());
			pay.setLong_card_number(updatedPay.getLong_card_number());
			pay.setPayment_type(updatedPay.getPayment_type());
			
			paymentRepo.save(pay);
			
			response.setExpiry_month(pay.getExpiry_month());
			response.setVcc(pay.getVcc());
			response.setExpiry_year(pay.getExpiry_year());
			response.setLong_card_number(pay.getLong_card_number());
			response.setPayment_type(pay.getPayment_type());
			response.setUser(pay.getUser_id());
			
			return response;
		}
		
		
		
		
	}

}

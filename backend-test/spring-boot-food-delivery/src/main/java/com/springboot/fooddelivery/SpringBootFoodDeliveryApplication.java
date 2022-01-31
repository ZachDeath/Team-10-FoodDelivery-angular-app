package com.springboot.fooddelivery;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.springboot.fooddelivery.dao.MenuRepository;

@SpringBootApplication
public class SpringBootFoodDeliveryApplication {
	
	@Autowired
	
	MenuRepository menuRepository;

	public static void main(String[] args) {
		SpringApplication.run(SpringBootFoodDeliveryApplication.class, args);
		
		
		
	}

	
	
}

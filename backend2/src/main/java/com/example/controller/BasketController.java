package com.example.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.example.entity.Basket;
import com.example.entity.BasketId;
import com.example.repository.BasketRepository;

@RestController
@RequestMapping("/basket")
@CrossOrigin
public class BasketController {
	
	@Autowired
	BasketRepository basketRepo;
	
	@RequestMapping(value="/test", method=RequestMethod.GET)
	public Iterable<Basket> findAllItems() {
		System.out.println("In basket items");
		System.out.println(basketRepo.findById(new BasketId(157,2)));
		return  basketRepo.findAll();

	}
	
	@RequestMapping(value="/items-from-user/{user-id}", method=RequestMethod.GET)
	public List<Basket> findItemsByUserId(@PathVariable("user-id") int id) {
		
		return  basketRepo.findItemsByUserId(id);

	}
	
	@RequestMapping(value="/add-to-basket", method=RequestMethod.POST)
	public void addBasketItem(@RequestBody Basket basket) {
		
		System.out.println(" in add basket");
		//Basket temp = new Basket(new BasketId(157,3), 3);
		
		basketRepo.save(basket);

	}
	
	@RequestMapping(value="/delete-basket/{user-id}", method=RequestMethod.DELETE)
	public void deleteItemsByUserId(@PathVariable("user-id") int id) {
		
		basketRepo.deleteItemsByUserId(id);
		

	}
	
	

}

package com.example.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.example.entity.Menu;
import com.example.repository.MenuRepository;

@RestController
@RequestMapping("/menu-item")
public class MenuController {

	@Autowired
	MenuRepository menuRepo;

	@RequestMapping(value = "/test", method = RequestMethod.GET)
	public List<Menu> getAllItems() {
		Iterable<Menu> items = menuRepo.findAll();

		return (List<Menu>) items;

	}

}

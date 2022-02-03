package com.example.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.example.models.MenuRequestModel;
import com.example.models.MenuResponseModel;
import com.example.service.MenuService;

@RestController
@RequestMapping("/menu-item")
public class MenuController {

	@Autowired
	MenuService menuService;
	
	@RequestMapping(value="/get-menu-items", method=RequestMethod.GET)
	public List<MenuResponseModel> getAllItems() {
		

		return menuService.getAllItems();

	}
	
	@RequestMapping(value="/delete-menu-item/{id}", method=RequestMethod.GET)
	public void deleteMenuItem(@PathVariable("id") int id) {
		menuService.deleteMenuItem(id);
	}
	
	@RequestMapping(value="/create-item",  method=RequestMethod.POST, produces ="application/json")
	public MenuResponseModel createMenuItem(@RequestBody MenuRequestModel requestModel)
	{
		MenuResponseModel returnObject = menuService.createMenuItem(requestModel);
		return returnObject;
	}
	
	
	
	

}

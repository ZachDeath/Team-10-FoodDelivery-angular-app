package com.example.controller;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
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
	
	Logger logger = LoggerFactory.getLogger(MenuController.class);
	
	@RequestMapping(value="/get-menu-items", method=RequestMethod.GET)
	public List<MenuResponseModel> getAllItems() {
		logger.info("Getting all menu items");
		return menuService.getAllItems();

	}
	
	//Delete item
	@RequestMapping(value="/delete-menu-item/{id}", method=RequestMethod.GET)
	public void deleteMenuItem(@PathVariable("id") int id) {
		logger.info("Deleting menu item using ID");
		menuService.deleteMenuItem(id);
	}
	
	@RequestMapping(value="/create-item",  method=RequestMethod.POST, produces ="application/json")
	public MenuResponseModel createMenuItem(@RequestBody MenuRequestModel requestModel)
	{
		logger.info("Creating new menu item");
		MenuResponseModel returnObject = menuService.createMenuItem(requestModel);
		return returnObject;
	}
	
	
	
	

}

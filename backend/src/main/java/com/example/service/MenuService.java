package com.example.service;

import java.util.ArrayList;
import java.util.List;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;

import com.example.entity.Menu;
import com.example.models.MenuRequestModel;
import com.example.models.MenuResponseModel;
import com.example.repository.MenuRepository;

@Service
public class MenuService {
	
	@Autowired
	MenuRepository menuRepo;
	
	public List<MenuResponseModel> getAllItems() {
		ModelMapper mapper = new ModelMapper();
		List<MenuResponseModel> returnList = new ArrayList<MenuResponseModel>();
		
		List<Menu> list = (List<Menu>) menuRepo.findAll();
		for (Menu menu : list) {
		
			MenuResponseModel modelObject = mapper.map(menu, MenuResponseModel.class);
			returnList.add(modelObject);
		}
		
		
		return returnList;
		
	}
	
	public void deleteMenuItem(@PathVariable("id") int id) {
		menuRepo.deleteById(id);
	}
	
	public MenuResponseModel createMenuItem(@RequestBody MenuRequestModel requestModel)
	{
	//System.out.println("in create method");

	// step1 - Map TutorialRequestModel to Tutorial class object
	Menu menu = new Menu ();
	menu.setDescription(requestModel.getDescription());
	menu.setFood_type(requestModel.getFood_type());
	menu.setPicture_url(requestModel.getPicture_url());
	menu.setTitle(requestModel.getTitle());

	// step 2 - save Tutorial object in db
	menuRepo.save(menu);

	// step 3 - Map Tutorial object to TutorialResponseModel
	MenuResponseModel returnObject = new MenuResponseModel();
	returnObject.setDescription(menu.getDescription());
	returnObject.setFood_id(menu.getFood_id());
	returnObject.setFood_type(menu.getFood_type());
	returnObject.setPicture_url(menu.getPicture_url());
	returnObject.setTitle(menu.getTitle());
	

	// step 4 - return TutorialResponseModel
	return returnObject;
	}
	

}

package com.example.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.example.entity.Address;
import com.example.service.AddressService;

@RestController
@RequestMapping(value = "/api/address")
@CrossOrigin
public class AddressController {

	@Autowired
	AddressService AddressService;
	
	Logger logger = LoggerFactory.getLogger(AddressController.class);

	@RequestMapping(value = "/getAddressByUser/{id}", method = RequestMethod.GET)
	public Address getUserAddress(@PathVariable("id") int id) {
		logger.info("Getting address by user");
		return AddressService.findAddressByID(id);

	}

	// Need to add a check to make sure the user exists but for now this works fine
	@RequestMapping(value = "/editAddress/{id}", method = RequestMethod.POST, produces ="application/json")
	public Address editAddress(@PathVariable("id") int id, @RequestBody Address address) {
		logger.info("Editing address in database");
		return AddressService.updateAddress(id, address);

	}

	@RequestMapping(value = "/deleteAddress/{id}")
	public String deleteAddress(@PathVariable("id") int id) {
		logger.info("Deleting address using Id");
		Address address = getUserAddress(id);
		if (address != null) {
			AddressService.deleteAddress(id);
			return ("Address Deleted Successfully");
		} else {
			return ("Address not found");
		}

	}
}

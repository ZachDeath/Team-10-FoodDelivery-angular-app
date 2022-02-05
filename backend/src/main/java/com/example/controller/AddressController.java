package com.example.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.example.entity.Address;
import com.example.entity.User;
import com.example.repository.UsersRepository;
import com.example.service.AddressService;

@RestController
@RequestMapping(value = "/api/address")
@CrossOrigin
public class AddressController {

	@Autowired
	AddressService AddressService;

	@RequestMapping(value = "/getAddressByUser/{id}", method = RequestMethod.GET)
	public Address getUserAddress(@PathVariable("id") int id) {
		return AddressService.findAddressByID(id);

	}

	// Need to add a check to make sure the user exists but for now this works fine
	@RequestMapping(value = "/editAddress/{id}", method = RequestMethod.POST)
	public Address editAddress(@PathVariable("id") int id, @RequestBody Address address) {
		System.out.println(address.getCity());
		return AddressService.updateAddress(id, address);

	}

	@RequestMapping(value = "/deleteAddress/{id}")
	public String deleteAddress(@PathVariable("id") int id) {
		Address address = getUserAddress(id);
		if (address != null) {
			AddressService.deleteAddress(id);
			return ("Address Deleted Successfully");
		} else {
			return ("Address not found");
		}

	}
}

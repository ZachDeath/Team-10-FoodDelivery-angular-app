package com.example.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
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

	@RequestMapping(value = "/getAddressByUser/{id}", method = RequestMethod.GET)
	public List<Address> getUserAddress(@PathVariable("id") int id) {
		return AddressService.findAddressByUser(id);

	}

	@RequestMapping(value = "/getAddressByID/{id}", method = RequestMethod.GET)
	public Address getAddress(@PathVariable("id") int id) {
		return AddressService.findAddressByID(id);

	}

	@RequestMapping(value = "/deleteAddress/{id}")
	public String deleteAddress(@PathVariable("id") int id) {
		Address address = getAddress(id);
		if (address != null) {
			AddressService.deleteAddress(id);
			return ("Address Deleted Successfully");
		} else {
			return ("Address not found");
		}
	}

	@RequestMapping(value = "/createAddress")
	public String createAddress(@PathVariable("id") int id) {

		AddressService.deleteAddress(id);
		return ("Address Created Successfully");

	}

	@RequestMapping(value = "/editAddress/{id}")
	public String editAddress(@PathVariable("id") int id) {
		Address address = getAddress(id);
		if (address != null) {
			AddressService.deleteAddress(id);
			return ("Address Deleted Successfully");
		} else {
			return ("Address not found");
		}
	}

}

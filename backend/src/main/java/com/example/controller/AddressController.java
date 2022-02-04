package com.example.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
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
	@Autowired
	UsersRepository userRepostiory;

	@RequestMapping(value = "/getAddressByUser/{id}", method = RequestMethod.GET)
	public List<Address> getUserAddress(@PathVariable("id") int id) {
		return AddressService.findAddressByUser(id);

	}

	@RequestMapping(value = "/getAddressByID/{id}", method = RequestMethod.GET)
	public Address getAddress(@PathVariable("id") long id) {
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

	@RequestMapping(value = "/createAddress/{id}", method=RequestMethod.POST, produces ="application/json") 
	public String createAddress(@PathVariable("id") long id, @ModelAttribute Address requestModel) {
		Optional<User> user = userRepostiory.findById(id);
		if (user.isPresent() != false) {
		AddressService.createAddress(id, requestModel);
		return ("Address Created Successfully");
		} else  {
		return ("User doesnt exist");
		}
	}

	@RequestMapping(value = "/updateAddress/{id}", method=RequestMethod.POST, produces ="application/json")
	public String editAddress(@PathVariable("id") long id, @ModelAttribute Address requestModel) {
		Address address = getAddress(id);
		if (address != null) {
			long userid = address.getUser();
			AddressService.updateAddress(id, userid, requestModel);
			return ("Address Updated Successfully");
		} else {
			return ("Address not found");
		}
	}

}
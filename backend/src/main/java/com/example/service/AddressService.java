package com.example.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;

import com.example.entity.Address;
import com.example.repository.AddressRepository;

@Service
public class AddressService {

	@Autowired
	AddressRepository AddressRepo;

	public Address findAddressByID(@PathVariable("id") int id) {
		return AddressRepo.findByAddressID(id);
	}

	public List<Address> findAddressByUser(@PathVariable("id") int id) {
		return AddressRepo.findByUserID(id);
	}

	public void deleteAddress(int id) {
		AddressRepo.deleteById(id);
	}
	
//	public void createAddress(int id) {
//		AddressRepo.save();
//	}

}

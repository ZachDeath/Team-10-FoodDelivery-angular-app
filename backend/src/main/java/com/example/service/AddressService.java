package com.example.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.entity.Address;
import com.example.repository.AddressRepository;

@Service
public class AddressService {

	@Autowired
	AddressRepository AddressRepo;

	public Address findAddressByID(long id) {
		return AddressRepo.findByUserID(id);
	}

	public void deleteAddress(long id) {
		AddressRepo.deleteById(id);
	}

	public Address updateAddress(long userid, Address address) {
		Address addressExists = findAddressByID(userid);
		Address savedAddress = new Address(userid, address.getFirst_name(), address.getLast_name(),
				address.getFirst_line(), address.getSecond_line(), address.getCity(), address.getState(),
				address.getPost_code());
			AddressRepo.save(savedAddress);
			return address;
	}
}

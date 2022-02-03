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

	public Address findAddressByID(int id) {
		return AddressRepo.findByAddressID(id);
	}

	public List<Address> findAddressByUser(int id) {
		return AddressRepo.findByUserID(id);
	}

	public void deleteAddress(int id) {
		AddressRepo.deleteById(id);
	}

	// This function takes 'User ID' and adds address based off that
	public Address createAddress(int id, Address address) {
		AddressRepo.save(new Address(id, address.getFirst_name(), address.getLast_name(), address.getFirst_name(),
				address.getLast_name(), address.getCity(), address.getState(), address.getPost_code()));
		return address;
	}
	
	// This function takes 'Address ID' and changes address based off that
	public Address updateAddress(int id, int userid, Address address) {
		AddressRepo.save(new Address(id, userid, address.getFirst_name(), address.getLast_name(), address.getFirst_line(),
				address.getSecond_line(), address.getCity(), address.getState(), address.getPost_code()));
		return address;
	}

}

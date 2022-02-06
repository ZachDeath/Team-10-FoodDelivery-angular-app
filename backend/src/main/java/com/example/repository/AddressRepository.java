package com.example.repository;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.example.entity.Address;

@Repository
@Transactional

@CrossOrigin("http://localhost:4200")
public interface AddressRepository extends CrudRepository<Address, Long> {
	
	Address findByUserID(long id);

}

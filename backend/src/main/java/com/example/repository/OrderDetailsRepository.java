package com.example.repository;

import javax.transaction.Transactional;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.example.entity.OrderDetails;

@Repository
@Transactional
@CrossOrigin("http://localhost:4200")
public interface OrderDetailsRepository extends CrudRepository <OrderDetails, Long> {

}

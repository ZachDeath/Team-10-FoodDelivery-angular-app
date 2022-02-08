package com.example.repository;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.example.entity.OrderDetails;
import com.example.entity.OrderDetailsID;

@Repository
@Transactional
@CrossOrigin("http://localhost:4200")
public interface OrderDetailsRepository extends JpaRepository<OrderDetails, Long> {
	
	@Query(value="SELECT * FROM ORDER_DETAILS where order_id=:order AND food_id=:food",nativeQuery=true)
	List<OrderDetails> findByID(@Param("order") Long ID, @Param("food")Long Food);

}

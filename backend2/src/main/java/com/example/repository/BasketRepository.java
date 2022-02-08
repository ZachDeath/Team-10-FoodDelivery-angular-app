package com.example.repository;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import com.example.entity.Basket;
import com.example.entity.BasketId;

public interface BasketRepository extends CrudRepository<Basket, BasketId> {
	
	@Query(value="SELECT * FROM BASKET WHERE user_id=:id", nativeQuery=true)
	List<Basket> findItemsByUserId(@Param("id") int userId);
	
	@Transactional
	@Modifying
	@Query(value="DELETE FROM BASKET WHERE user_id=:id", nativeQuery=true)
	void deleteItemsByUserId(@Param("id") int userId);
	
	
	

}

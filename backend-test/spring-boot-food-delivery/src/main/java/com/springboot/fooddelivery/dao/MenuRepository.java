package com.springboot.fooddelivery.dao;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.springboot.fooddelivery.entity.Menu;

@RepositoryRestResource(collectionResourceRel="MenuItem", path = "menu-item")
@CrossOrigin("http://localhost:4200")
public interface MenuRepository extends CrudRepository<Menu, Integer> {

}

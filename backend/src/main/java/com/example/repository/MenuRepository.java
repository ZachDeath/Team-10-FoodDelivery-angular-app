package com.example.repository;

import javax.transaction.Transactional;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.example.entity.Menu;

@Repository
@Transactional

@CrossOrigin("http://localhost:4200")
public interface MenuRepository extends CrudRepository<Menu, Integer> {

}

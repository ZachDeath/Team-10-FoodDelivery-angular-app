package com.example.entity;


import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.MapsId;
import javax.persistence.Table;

@Entity
@Table(name = "basket")
public class Basket {

	@EmbeddedId
	private BasketId id;
	
	@ManyToOne
	@MapsId("user_id")
	@JoinColumn(name="user_id")
	private User user;
	
	@ManyToOne
	@MapsId("food_id")
	@JoinColumn(name="food_id")
	private Menu menu;

	private int quantity;

	
}

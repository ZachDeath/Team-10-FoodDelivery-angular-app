package com.example.entity;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Embeddable;

@Embeddable
public class BasketId implements Serializable {
	

	@Column(name = "user_id")
	private int user;


	@Column(name = "food_id")
	private int food;

public BasketId(int user, int food) {
	super();
	this.user = user;
	this.food = food;
}

public int getUser() {
	return user;
}

public void setUser(int user) {
	this.user = user;
}

public int getFood() {
	return food;
}

public void setFood(int food) {
	this.food = food;
}

public BasketId() {
	super();
}
	
	

}

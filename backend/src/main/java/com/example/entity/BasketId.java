package com.example.entity;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Embeddable;

@Embeddable
public class BasketId implements Serializable {
	
//	@Id
//	@OneToOne
//	@PrimaryKeyJoinColumn(name = "user_id", referencedColumnName = "user_id")
	@Column(name = "user_id")
	private int user;

//	@Id
//	@OneToOne
//	@PrimaryKeyJoinColumn(name = "food_id", referencedColumnName = "food_id")
	@Column(name = "food_id")
	private int food;

}

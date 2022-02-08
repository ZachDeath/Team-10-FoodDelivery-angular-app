package com.example.entity;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Embeddable;

@Embeddable
public class OrderDetailsID implements Serializable {
	@Column(name = "order_id")
	private int order;

	@Column(name = "food_id")
	private int food;

	public OrderDetailsID() {
		super();
		// TODO Auto-generated constructor stub
	}

	public OrderDetailsID(int order, int food) {
		super();
		this.order = order;
		this.food = food;
	}

	public int getOrder() {
		return order;
	}

	public void setOrder(int order) {
		this.order = order;
	}

	public int getFood() {
		return food;
	}

	public void setFood(int food) {
		this.food = food;
	}

}

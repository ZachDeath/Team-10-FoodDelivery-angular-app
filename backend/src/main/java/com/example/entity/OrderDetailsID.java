package com.example.entity;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Embeddable;

@Embeddable
public class OrderDetailsID implements Serializable {
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	@Column(name = "order_id")
	private Long order;

	@Column(name = "food_id")
	private Long food;

	public OrderDetailsID() {
		super();
		// TODO Auto-generated constructor stub
	}

	public OrderDetailsID(Long order, Long food) {
		super();
		this.order = order;
		this.food = food;
	}

	public Long getOrder() {
		return order;
	}

	public void setOrder(Long order) {
		this.order = order;
	}

	public Long getFood() {
		return food;
	}

	public void setFood(Long food) {
		this.food = food;
	}

}

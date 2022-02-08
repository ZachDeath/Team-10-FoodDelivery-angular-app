package com.example.entity;

import javax.persistence.Column;
import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.MapsId;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name = "order_details")
public class OrderDetails {

	@EmbeddedId
	@Column(name="id")
	private OrderDetailsID ID;

	@OneToOne
	@MapsId("order_id")
	@JoinColumn(name = "order_id")
	private Orders order;

	@ManyToOne
	@MapsId("food_id")
	@JoinColumn(name = "food_id")
	private Menu menu;

	private int quantity;

	public OrderDetails(OrderDetailsID iD, Orders order, Menu menu, int quantity) {
		super();
		ID = iD;
		this.order = order;
		this.menu = menu;
		this.quantity = quantity;
	}

	public OrderDetails() {
		super();
		// TODO Auto-generated constructor stub
	}

	public OrderDetailsID getID() {
		return ID;
	}

	public void setID(OrderDetailsID iD) {
		ID = iD;
	}

	public Orders getOrder() {
		return order;
	}

	public void setOrder(Orders order) {
		this.order = order;
	}

	public Menu getMenu() {
		return menu;
	}

	public void setMenu(Menu menu) {
		this.menu = menu;
	}

	public int getQuantity() {
		return quantity;
	}

	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}

}

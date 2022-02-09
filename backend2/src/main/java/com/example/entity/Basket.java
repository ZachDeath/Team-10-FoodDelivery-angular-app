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

	public BasketId getId() {
		return id;
	}

	public void setId(BasketId id) {
		this.id = id;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
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

	public Basket(BasketId id, User user, Menu menu, int quantity) {
		super();
		this.id = id;
		this.user = user;
		this.menu = menu;
		this.quantity = quantity;
	}

	public Basket() {
		super();
	}
	
	public Basket(BasketId id, int quantity) {
		super();
		this.id = id;
		this.quantity = quantity;
	}
	
	

	
}

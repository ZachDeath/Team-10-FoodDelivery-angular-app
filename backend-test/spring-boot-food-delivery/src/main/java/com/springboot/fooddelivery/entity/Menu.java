package com.springboot.fooddelivery.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name = "menu")
@Getter
@Setter
public class Menu {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int food_id;
	private String title;
	private String description;
	private String picture_url;
	private int food_type;

	public Menu(int food_id, String title, String description, String picture_url, int food_type) {
		super();
		this.food_id = food_id;
		this.title = title;
		this.description = description;
		this.picture_url = picture_url;
		this.food_type = food_type;
	}
	
	public Menu() {
		
	}

	@Override
	public String toString() {
		return "Menu [food_id=" + food_id + ", title=" + title + ", description=" + description + ", picture_url="
				+ picture_url + ", food_type=" + food_type + "]";
	}
	
	

}

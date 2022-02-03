package com.example.models;

public class MenuRequestModel {

	private int food_id;
	private String title;
	private String description;
	private String picture_url;
	private int food_type;

	

	public MenuRequestModel() {

	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getPicture_url() {
		return picture_url;
	}

	public void setPicture_url(String picture_url) {
		this.picture_url = picture_url;
	}

	public int getFood_type() {
		return food_type;
	}

	public void setFood_type(int food_type) {
		this.food_type = food_type;
	}

	public int getFood_id() {
		return food_id;
	}

	public void setFood_id(int food_id) {
		this.food_id = food_id;
	}
	
	

}

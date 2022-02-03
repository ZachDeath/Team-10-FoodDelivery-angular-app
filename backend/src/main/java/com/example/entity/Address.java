package com.example.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.Table;

@Entity
@Table(name = "address", schema = "public")
public class Address {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "address_id")
	private long addressID;
	@Column(name = "user_id")
	@JoinColumn(name = "user_id")
	private long userID;
	private String first_name;
	private String last_name;
	private String first_line;
	private String second_line;
	private String city;
	private String state;
	private String post_code;

	public Address() {
		super();
	}

	public Address(long id, String first_name, String last_name, String first_line, String second_line, String city,
			String state, String post_code) {
		super();
		this.userID = id;
		this.first_name = first_name;
		this.last_name = last_name;
		this.first_line = first_line;
		this.second_line = second_line;
		this.city = city;
		this.state = state;
		this.post_code = post_code;
	}

	public Address(long addressID, long userID, String first_name, String last_name, String first_line,
			String second_line, String city, String state, String post_code) {
		super();
		this.addressID = addressID;
		this.userID = userID;
		this.first_name = first_name;
		this.last_name = last_name;
		this.first_line = first_line;
		this.second_line = second_line;
		this.city = city;
		this.state = state;
		this.post_code = post_code;
	}

	public long getAddress_id() {
		return addressID;
	}

	public void setAddress_id(int address_id) {
		this.addressID = address_id;
	}

	public long getUser() {
		return userID;
	}

	public void setUser(int user_id) {
		this.userID = user_id;
	}

	public String getFirst_name() {
		return first_name;
	}

	public void setFirst_name(String first_name) {
		this.first_name = first_name;
	}

	public String getLast_name() {
		return last_name;
	}

	public void setLast_name(String last_name) {
		this.last_name = last_name;
	}

	public String getFirst_line() {
		return first_line;
	}

	public void setFirst_line(String first_line) {
		this.first_line = first_line;
	}

	public String getSecond_line() {
		return second_line;
	}

	public void setSecond_line(String second_line) {
		this.second_line = second_line;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public String getState() {
		return state;
	}

	public void setState(String state) {
		this.state = state;
	}

	public String getPost_code() {
		return post_code;
	}

	public void setPost_code(String post_code) {
		this.post_code = post_code;
	}

}

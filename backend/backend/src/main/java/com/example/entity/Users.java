package com.example.entity;

import java.util.Date;

import org.springframework.stereotype.Component;

@Component
public class Users {

	private String user_id;
	private String first_name;
	private String last_name;
	private Date date_of_birth;
	private String email_address;
	private String phone_number;
	private String password;

	public Users(String user_id, String first_name, String last_name, Date date_of_birth, String email_address,
			String phone_number, String password) {
		super();
		this.user_id = user_id;
		this.first_name = first_name;
		this.last_name = last_name;
		this.date_of_birth = date_of_birth;
		this.email_address = email_address;
		this.phone_number = phone_number;
		this.password = password;
	}

	public Users() {
		super();
	}

	public String getUser_id() {
		return user_id;
	}

	public void setUser_id(String user_id) {
		this.user_id = user_id;
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

	public Date getDate_of_birth() {
		return date_of_birth;
	}

	public void setDate_of_birth(Date date_of_birth) {
		this.date_of_birth = date_of_birth;
	}

	public String getEmail_address() {
		return email_address;
	}

	public void setEmail_address(String email_address) {
		this.email_address = email_address;
	}

	public String getPhone_number() {
		return phone_number;
	}

	public void setPhone_number(String phone_number) {
		this.phone_number = phone_number;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}
	
	@Override
	public String toString() {
		return "\nUser: [user_id=" + user_id + ", first_name=" + first_name + ", last_name=" + last_name
				+ ", date_of_birth=" + date_of_birth + ", email_address=" + email_address + ", phone_number="
				+ phone_number + ", password=" + password + "]";
	}

}

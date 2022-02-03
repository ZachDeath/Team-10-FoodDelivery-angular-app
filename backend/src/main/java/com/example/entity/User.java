package com.example.entity;

import java.time.LocalDate;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import org.springframework.format.annotation.DateTimeFormat;

@Entity
@Table(name="users")
public class User {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long user_id;
	private String first_name;
	private String last_name;
	@DateTimeFormat(pattern = "yyyy-MM-dd")
	private LocalDate date_of_birth;
	@Column(name = "email_address")
	private String email;
	private String phone_number;
	private String password;

	public User(Long user_id, String first_name, String last_name, LocalDate date_of_birth, String email_address,
			String phone_number, String password) {
		super();
		this.user_id = user_id;
		this.first_name = first_name;
		this.last_name = last_name;
		this.date_of_birth = date_of_birth;
		this.email = email_address;
		this.phone_number = phone_number;
		this.password = password;
	}
	
	public User(String first_name, String last_name, LocalDate date_of_birth, String email_address,
			String phone_number, String password) {
		super();
		this.first_name = first_name;
		this.last_name = last_name;
		this.date_of_birth = date_of_birth;
		this.email = email_address;
		this.phone_number = phone_number;
		this.password = password;
	}

	public User() {
		super();
	}

	public Long getUser_id() {
		return user_id;
	}

	public void setUser_id(Long user_id) {
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

	@DateTimeFormat(iso = DateTimeFormat.ISO.DATE)
	public LocalDate getDate_of_birth() {
		return date_of_birth;
	}

	public void setDate_of_birth(LocalDate date_of_birth) {
		this.date_of_birth = date_of_birth;
	}

	public String getEmail_address() {
		return email;
	}

	public void setEmail_address(String email_address) {
		this.email = email_address;
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
				+ ", date_of_birth=" + date_of_birth + ", email_address=" + email + ", phone_number="
				+ phone_number + ", password=" + password + "]";
	}

}

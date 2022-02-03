package com.example.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.NamedQuery;
import javax.persistence.Table;

import org.springframework.data.jpa.repository.Query;

@Entity
@Table(name="messages")
@NamedQuery(query = "Select m from Messages m", name = "findAllMessages")
public class Messages {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long message_id;
	private String first_name;
	private String last_name;
	private String email_address;
	private String message;
	private Long user_id;

	public Messages(Long message_id, String first_name, String last_name, String email_address,
			String message, Long user_id) {
		super();
		this.message_id = message_id;
		this.first_name = first_name;
		this.last_name = last_name;
		this.email_address = email_address;
		this.message = message;
		this.user_id = user_id;
	}
	
	public Messages(String first_name, String last_name, String email_address,
			String message) {
		super();
		this.first_name = first_name;
		this.last_name = last_name;
		this.email_address = email_address;
		this.message = message;

	}

	public Messages() {
		super();
	}

	public Long getMessage_id() {
		return message_id;
	}

	public void setMessage_id(Long message_id) {
		this.message_id = message_id;
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

	public String getEmail_address() {
		return email_address;
	}

	public void setEmail_address(String email_address) {
		this.email_address = email_address;
	}

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}

	public Long getUser_id() {
		
		return user_id;
	}

	public void setUser_id(Long user_id) {
		this.user_id = user_id;
	}
	
	@Override
	public String toString() {
		return "\nUser: [message_id=" + message_id + ", first_name=" + first_name + ", last_name=" + last_name
				+ ", email_address=" + email_address + ", message="
				+ message + ", user_id=" + user_id + "]";
	}

}

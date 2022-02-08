package com.example.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "card_details")
public class Payment {

	@Id
	//@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "user_id")
	private int user;
	private int payment_type;
	private String long_card_number;
	private String vcc;
	private String expiry_month;
	private String expiry_year;

	public Payment(int user_id, int payment_type, String long_card_number, String vcc, String expiry_month,
			String expiry_year) {
		super();
		this.user = user_id;
		this.payment_type = payment_type;
		this.long_card_number = long_card_number;
		this.vcc = vcc;
		this.expiry_month = expiry_month;
		this.expiry_year = expiry_year;
	}
	
	public Payment() {
		
	}

	

	public int getUser_id() {
		return user;
	}

	public void setUser_id(int user_id) {
		this.user = user_id;
	}

	public int getPayment_type() {
		return payment_type;
	}

	public void setPayment_type(int payment_type) {
		this.payment_type = payment_type;
	}

	public String getLong_card_number() {
		return long_card_number;
	}

	public void setLong_card_number(String long_card_number) {
		this.long_card_number = long_card_number;
	}

	public String getVcc() {
		return vcc;
	}

	public void setVcc(String vcc) {
		this.vcc = vcc;
	}

	public String getExpiry_month() {
		return expiry_month;
	}

	public void setExpiry_month(String expiry_month) {
		this.expiry_month = expiry_month;
	}

	public String getExpiry_year() {
		return expiry_year;
	}

	public void setExpiry_year(String expiry_year) {
		this.expiry_year = expiry_year;
	}

}

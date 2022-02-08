package com.example.models;

public class PaymentResponseModel {

	private int id;
	private int user;
	private int payment_type;
	private String long_card_number;
	private String vcc;
	private String expiry_month;
	private String expiry_year;

	public PaymentResponseModel(int id, int user, int payment_type, String long_card_number, String vcc,
			String expiry_month, String expiry_year) {
		super();
		this.id = id;
		this.user = user;
		this.payment_type = payment_type;
		this.long_card_number = long_card_number;
		this.vcc = vcc;
		this.expiry_month = expiry_month;
		this.expiry_year = expiry_year;
	}

	public PaymentResponseModel() {

	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public int getUser() {
		return user;
	}

	public void setUser(int user) {
		this.user = user;
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

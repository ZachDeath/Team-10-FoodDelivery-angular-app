package com.example.entity;

import java.time.LocalDate;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.NamedQuery;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import org.springframework.format.annotation.DateTimeFormat;

@Entity
@Table(name="employees")
public class Employee {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="employee_id")
	private Long employee_id;
	private String first_name;
	private String last_name;
	@DateTimeFormat(pattern = "yyyy-MM-dd")
	private LocalDate date_of_birth;
	private String email_address;
	private String phone_number;
	private String password;

	public Employee(Long employee_id, String first_name, String last_name, LocalDate date_of_birth, String email_address,
			String phone_number, String password) {
		super();
		this.employee_id = employee_id;
		this.first_name = first_name;
		this.last_name = last_name;
		this.date_of_birth = date_of_birth;
		this.email_address = email_address;
		this.phone_number = phone_number;
		this.password = password;
	}
	
	public Employee(String first_name, String last_name, LocalDate date_of_birth, String email_address,
			String phone_number, String password) {
		super();
		this.first_name = first_name;
		this.last_name = last_name;
		this.date_of_birth = date_of_birth;
		this.email_address = email_address;
		this.phone_number = phone_number;
		this.password = password;
	}

	public Employee() {
		super();
	}

	public Long getEmployee_id() {
		return employee_id;
	}

	public void setEmployee_id(Long employee_id) {
		this.employee_id = employee_id;
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
		return "\nUser: [employee_id=" + employee_id + ", first_name=" + first_name + ", last_name=" + last_name
				+ ", date_of_birth=" + date_of_birth + ", email_address=" + email_address + ", phone_number="
				+ phone_number + ", password=" + password + "]";
	}

}

package com.example.entity;

import java.io.Serializable;
import java.time.LocalDate;
import java.time.LocalDateTime;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.PrimaryKeyJoinColumn;
import javax.persistence.Table;

import org.springframework.format.annotation.DateTimeFormat;

@Entity
@Table(name = "orders")
public class Orders implements Serializable {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "order_id")
	private Long ID;
	private Long user_id;
	private Long employee_id;

	@ManyToOne
	@JoinColumn(name = "user_id", referencedColumnName = "user_id", insertable = false, updatable = false)
	private User user;

	@ManyToOne
	@JoinColumn(name = "employee_id", referencedColumnName = "employee_id", insertable = false, updatable = false)
	private Employees employee;

	@DateTimeFormat(pattern = "yyyy-MM-dd")
	private LocalDateTime order_date;

	public Long getID() {
		return ID;
	}

	public void setID(Long iD) {
		ID = iD;
	}

	public LocalDateTime getOrder_date() {
		return order_date;
	}

	public void setOrder_date(LocalDateTime order_date) {
		this.order_date = order_date;
	}

	public Long getUser_id() {
		return user_id;
	}

	public void setUser_id(Long user_id) {
		this.user_id = user_id;
	}

	public Long getEmployee_id() {
		return employee_id;
	}

	public void setEmployee_id(Long employee_id) {
		this.employee_id = employee_id;
	}

	public Orders(Long user_id, Long employee_id, LocalDateTime order_date) {
		super();
		this.user_id = user_id;
		this.employee_id = employee_id;
		this.order_date = order_date;
	}

	public Orders(Long iD, Long user_id, Long employee_id, LocalDateTime order_date) {
		super();
		ID = iD;
		this.user_id = user_id;
		this.employee_id = employee_id;
		this.order_date = order_date;
	}

	public Orders() {
		super();
		// TODO Auto-generated constructor stub
	}

}

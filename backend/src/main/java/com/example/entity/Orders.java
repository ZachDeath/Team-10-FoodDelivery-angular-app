package com.example.entity;

import java.io.Serializable;
import java.time.LocalDate;

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
	@DateTimeFormat(pattern = "yyyy-MM-dd")
	private LocalDate order_date;

	@ManyToOne(fetch = FetchType.LAZY)
	@PrimaryKeyJoinColumn(name = "user_id", referencedColumnName = "user_id")
	private User user;

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "employee_id", referencedColumnName = "employee_id")
	private Employees employee;

	public Long getOrder_id() {
		return ID;
	}

	public void setOrder_id(Long order_id) {
		this.ID = order_id;
	}

	public LocalDate getOrder_date() {
		return order_date;
	}

	public void setOrder_date(LocalDate order_date) {
		this.order_date = order_date;
	}

	public Orders() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Long getUser_id() {
		return ID;
	}

	public void setUser_id(Long user_id) {
		this.ID = user_id;
	}

	public Orders(Long iD, LocalDate order_date, Long user_id) {
		super();
		ID = iD;
		this.order_date = order_date;
		this.ID = user_id;
	}

}

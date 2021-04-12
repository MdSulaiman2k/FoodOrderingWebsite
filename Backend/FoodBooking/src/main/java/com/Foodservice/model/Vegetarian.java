package com.Foodservice.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="vegItems")
public class Vegetarian {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY )
	private Long id;
	@Column(unique=true)
	private String name;  
	private String description; 
	private double amount ;
	private String imgsrc ;
	
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public Vegetarian(Long id, String name, String description, double amount, String imgsrc) {
		super();
		this.id = id;
		this.name = name;
		this.description = description;
		this.amount = amount;
		this.imgsrc = imgsrc;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public double getAmount() {
		return amount;
	}
	public void setAmount(double amount) {
		this.amount = amount;
	}
	public String getImgsrc() {
		return imgsrc;
	}
	public void setImgsrc(String imgsrc) {
		this.imgsrc = imgsrc;
	}
	
	
	public Vegetarian() {
		super();
		// TODO Auto-generated constructor stub
	}
	@Override
	public String toString() {
		return "Vegetarian [id=" + id + ", name=" + name + ", description=" + description + ", amount=" + amount
				+ ", imgsrc=" + imgsrc + "]";
	}  

}


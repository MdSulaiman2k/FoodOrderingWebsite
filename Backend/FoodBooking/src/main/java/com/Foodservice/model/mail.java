package com.Foodservice.model;

public class mail {
	public String email ;
	public String totalvalue ;
	public String name ; 
	
	
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getTotalvalue() {
		return totalvalue;
	}
	public void setTotalvalue(String totalvalue) {
		this.totalvalue = totalvalue;
	}
	public mail() {
		super();
		// TODO Auto-generated constructor stub
	}
	@Override
	public String toString() {
		return "mail [email=" + email + ", totalvalue=" + totalvalue + ", name=" + name + "]";
	}
	public mail(String email, String totalvalue) {
		super();
		this.email = email;
		this.totalvalue = totalvalue;
	}
	
	

}

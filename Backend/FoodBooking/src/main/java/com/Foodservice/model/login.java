package com.Foodservice.model;

public class login {
	
	public String email ;
	public String password ;
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	@Override
	public String toString() {
		return "login [email=" + email + ", password=" + password + "]";
	}
	public login(String email, String password) {
		super();
		this.email = email;
		this.password = password;
	}
	public login() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	
	
	

}


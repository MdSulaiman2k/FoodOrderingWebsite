package com.Foodservice.repository;

import org.springframework.data.repository.CrudRepository;

import com.Foodservice.model.User;



public interface userRepo extends CrudRepository<User, Integer> {
    
	User findByEmail(String mail)  ;
	
	User findByName(String name) ;
}

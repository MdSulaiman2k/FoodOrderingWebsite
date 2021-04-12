package com.Foodservice.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.Foodservice.model.Vegetarian;

public interface VegRepository extends CrudRepository<Vegetarian,Long> {


	public List<Vegetarian> findAll();

	public Vegetarian findByName(String name);

	

}

package com.Foodservice.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.Foodservice.model.User;
import com.Foodservice.model.login;
import com.Foodservice.repository.userRepo;



@CrossOrigin("*")
@RestController
@RequestMapping("/api/user")
public class userController {
	
	@Autowired
	userRepo us ;
	
//	@PostMapping("/register")
//	public @ResponseBody user  setuser(user u) {
//		
//		 if(us.findByEmail(u.getEmail()) == null ) {
//			  us.save(u) ;
//			  return u ;
//		 }
//		return new user() ;
//	}
	
	@PostMapping("/register")
	 public ResponseEntity<User> setuser(User u){
		 System.out.println(u);
		 if(us.findByEmail(u.getEmail()) == null ) {
     		  us.save(u) ;
			  return new ResponseEntity<User>(u , HttpStatus.OK ) ;
		 }
		   return new ResponseEntity<User>(new User() , HttpStatus.OK) ;
	  }
	 
	 @PostMapping("/Check")
	 public ResponseEntity<User> checkEmail( @RequestParam("email")  String mail ){
		       System.out.println(mail) ;
               if(us.findByEmail(mail)  != null ) {
            	   User u = new User() ;
            	   u.setEmail(mail) ;
            	   return new ResponseEntity<User>( u , HttpStatus.OK) ;
               }
            return new ResponseEntity<User>(new User() , HttpStatus.OK) ;
	 }
	 
	 @PostMapping("/login")
	 public ResponseEntity<User> checkLogin( login l ){
		 System.out.println( l) ; 
		    User u = us.findByEmail(l.getEmail()) ;
		     if(u != null) {
		    	 System.out.println(u.getPassword() +""+ l.getPassword()) ; 
		    	if(l.getPassword().equals(u.getPassword())) {
		    		System.out.println( l) ; 
		    	  return new ResponseEntity<User>( u , HttpStatus.OK) ;
		     }
	        }
		    return new ResponseEntity<User>(new User() , HttpStatus.OK)  ;
	 }
    
}

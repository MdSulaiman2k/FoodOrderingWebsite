package com.Foodservice.Controller;



import java.io.File;

import javax.mail.Message;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.FileSystemResource;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.mail.MailException;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.mail.javamail.MimeMessagePreparator;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.Foodservice.model.User;
import com.Foodservice.model.mail;


	@CrossOrigin
	@RestController
	@RequestMapping("/mail")
	public class MailController {
		
		@Autowired 
		private JavaMailSender jmail ;
		
//		@PostMapping("/booking")
//		public ResponseEntity<String> orderConfirmation(mail user) {
//			
//           
//		    String from = "servicefood799@gmail.com";
//		    String to = user.getEmail();
//		    String subject="Order Confirmation";
//		     
//	       MimeMessagePreparator preparator = new MimeMessagePreparator() 
//	       {
//	    	   @Override
//	           public void prepare(MimeMessage mimeMessage) throws Exception 
//	           {
//	              mimeMessage.setRecipient(Message.RecipientType.TO, new InternetAddress(to));
//	              mimeMessage.setFrom(new InternetAddress(from));
//	              mimeMessage.setSubject(subject);
//	             
//	              MimeMessageHelper helper = new MimeMessageHelper(mimeMessage, true);
//	             
//	              helper.setText("<html><body><img src='cid:identifier1234'></body></html>", true);
//	             
//	              FileSystemResource res = new FileSystemResource(new File("fw logo.png"));
//	              helper.addInline("identifier1234", res);
//	           }
//
//			
//			
//	       };
//	       try {
//	           jmail.send(preparator);
//	       }
//	       catch (MailException ex) {
//	           // simply log it and go on...
//	           System.err.println(ex.getMessage());
//	       }
//	       return new ResponseEntity<String>(" ",HttpStatus.OK) ;
//		}   
//		
		
		
		@PostMapping("/booking")
		public ResponseEntity<String> orderConfirmation(mail user) {
			System.out.print(user);
			SimpleMailMessage simple  = new SimpleMailMessage() ; 
			simple.setFrom("servicefood799@gmail.com") ;
			simple.setTo(user.getEmail()) ;
			simple.setSubject("Order Confirmation") ;
			simple.setText("Dear " + user.getName() + ",\n" + 
			"This email is to confirm your order on FoodService.com The price is "+ user.getTotalvalue() + "\nThanks for your visit!\nBest Regards. " ) ;
			jmail.send(simple) ;
			return new ResponseEntity<String>(" ",HttpStatus.OK) ;
		}

	
}


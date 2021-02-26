 function search() {
 	     clr = document.querySelector("#search").style.color 
 	     if(clr != "rgb(255, 167, 0)"){
   	  	    document.querySelector("#imgsearch").src = "C:/Users/mohamedsulaiman/Documents/webdevelopment/foodService/images/search.png" ; 	 
   	  	    document.querySelector("#search").style.color = "#ffa700" ;
             $("#visi").removeClass("visible") ;
   	  	    $("#visi").addClass("hide")  ;
             $("#hide").addClass("vis") ;
             $("#hide").removeClass("hide") ;
   	  	}
   	  	 else{
   	  	 	document.querySelector("#imgsearch").src = "C:/Users/mohamedsulaiman/Documents/webdevelopment/foodService/images/search1.jpg" ;
   	  	 	document.querySelector("#search").style.color = "black" ;
   	  	 	$("#visi").removeClass("hide") ; 
            $("#visi").addClass("visible") ;
            $("#hide").removeClass("vis") ;
             $("#hide").addClass("hide")  ;


   	  	 }



   	  }
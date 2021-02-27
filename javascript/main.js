var  img = "C:/Users/mohamedsulaiman/Documents/webdevelopment/foodService/images/"
 var fooditems = {
  pizza : {
    vegpizza : {
      name : "Veg.Pizza"  ,
      image : "pizza3.jpg" ,
      rupee : 200 ,
      description : "Foods Hot Spice And Delicious Pizza"
    },
     pizza : {
       name : "Delicious Veg.Pizza" ,
       image : "pizza2.jpg" ,
       rupee : 250 ,
       description : "Spicy Pizza Hut to Add 25 Percent More Cheese "
     },
     chickenpizza : {
      name : "Crispy Chicken.Pizza"  ,
      image : "pizza.jpg" ,
      rupee :  300,
      description : "Chicken Tikka, Chicken Malai Tikka, Onion, Red Paprika"
    }

  }

 };

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

  $("document").ready( function(){
      $("#sear").on("keyup" , function(event) {
         if(event.key === 'Enter'){
               for(var i in fooditems){
                   if(i == $("#sear").val()){
                      var cnt = 1 ;
                      var obj = fooditems[i]
                      for(var j in obj){
                         var obj2 = obj[j]
                         for(var k in obj2){
                             if(k == "name") {
                               $("#foodhead"+cnt).html(obj2[k]) ;}
                             else if(k == "image"){
                                $("#food"+cnt).attr("src" , img + obj2[k]) ;
                             }
                             else if(k == "rupee")
                                 $("#foodprice"+cnt).html("Rs:" + obj2[k]) ;
                              else if(k == "description")
                                  $("#foodbody"+cnt).html(obj2[k]) ;
                         }
                         cnt++ ;

                      }
                      break ;
                   }

               }
         }
      });

  });
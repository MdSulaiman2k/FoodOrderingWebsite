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

  },
  cake : {
       Strawberrycake  : {
       name  : "Strawberry Cake" ,
       image : "cake.jpg" ,
       rupee : 350 ,
       description : "Cake Flavour- Strawberry Type of Cake- Cream CakeWeight- Half KgShape- RoundServes- 4-6 PeopleSize- 6 Inches in Diameter"
      },
      chocolatecake : {
       name  : "Chocolate Cake" ,
       image : "cake2.jpg" ,
       rupee : 300 ,
       description : "Cake Flavour- Chocolate Type of Cake-Cream CakeWeight"
     },
     chcake : {
       name  : "Chocolate cake" ,
       image : "cake4.jpg" ,
       rupee : 230 ,
       description : "Cake Flavour- Chocolate"

     }
 },
 chicken :{
      tanchicken : {
        name  : "Tandoori Chicken" ,
       image : "tandoori.jpg" ,
       rupee : 400 ,
       description : "Casual Dining - Chinese, North Indian, South Indian, BBQ, Seafood, Beverages"
      },
      chicken : {
        name  : "Chicken Tikka" ,
       image : "tandoori2.jpg" ,
       rupee : 450 ,
       description : "North Indian, South Indian, BBQ, Seafood, Beverages"
      },
      tandoori : {
        name  : "Chicken 65" ,
       image : "tandoori4.jpg" ,
       rupee : 380 ,
       description : "A classic Indian dinner that marinates chicken legs in a creamy yogurt base, blended spice ..."
      }
 },
 biriyani :{
      chickenBiriyani : {
        name  : "Chicken Biriyani" ,
       image : "biriyani2.jpg" ,
       rupee : 245 ,
       description : "Casual Dining - Chinese, North Indian, South Indian, Biriyani, Seafood, Beverages"
      },
      Biriyanichicken : {
        name  : "Chicken Biriyani" ,
       image : "biriyani1.jpg" ,
       rupee : 220 ,
       description : "North Indian, South Indian, Biriyani, Beverages"
      },
      ChBiriyani : {
        name  : "Spicy Chicken Biriyani" ,
       image : "biriyani.jpg" ,
       rupee : 250 ,
       description : "A classic Indian Lunch that marinates chicken legs in a creamy yogurt base, blended spice ..."
      }
 },
 icecream:{
      Strawberryicecream : {
        name  : "Strawberry icecream" ,
       image : "icecream1.jpg" ,
       rupee : 75 ,
       description : "Make you feel cool"
      },
     Chocolateicecream : {
        name  : "Chocolate IceCream" ,
       image : "icecream.jpg" ,
       rupee : 120 ,
       description : "Rich, ultra-creamy and chocolatey"
      },
      Venila  : {
        name  : "Venila IceCream" ,
       image : "icecream2.jpg" ,
       rupee : 75 ,
       description : "Vanilla ice cream with chocolate sauce"
      }
 },
 shawarma:{
      chickshawarma : {
        name  : "Chicken Shawarma" ,
       image : "swarma.jpg" ,
       rupee : 145 ,
       description : "Casual Dining - Chinese, North Indian, South Indian, BBQ, Seafood, Beverages"
      },
      chickenshawar : {
        name  : "Spicy.shawarma" ,
       image : "shawarma.jpg" ,
       rupee : 150 ,
       description : "North Indian, South Indian, BBQ, Seafood, Beverages"
      },
      tandoori : {
        name  : "Chickent Hot Shawarma" ,
       image : "shawarma1.jpg" ,
       rupee : 200 ,
       description : "A classic Indian dinner that marinates chicken crispy in a creamy yogurt base, blended spice ..."
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
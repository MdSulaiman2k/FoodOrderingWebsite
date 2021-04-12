var  img = "../images/" ;
var total = 0 ;

var totcnt = 0 ;
var cnt = [0 , 0 , 0 , 0 , 0, 0 , 0, 0 ,0 ]
var amt  = [0, 0, 0, 0, 0, 0, 0, 0, 0]
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

var jsarray = []

function setarray(){
jsarray = [
  {
    name : "Veg.Pizza"  ,
    imgsrc : "../images/pizza3.jpg" ,
    amount : 200 ,
    description : "Foods Hot Spice And Delicious Pizza"
  },
  {
    name  : "Chicken Shawarma" ,
    imgsrc : "../images/swarma.jpg" ,
    amount : 145 ,
   description : "Casual Dining - Chinese, North Indian, South Indian, BBQ, Seafood, Beverages"
  },
  {
    name  : "Chickent Hot Shawarma" ,
    imgsrc : "../images/shawarma1.jpg" ,
    amount : 200 ,
       description : "A classic Indian dinner that marinates chicken crispy in a creamy yogurt base, blended spice ..."

  },
  {
    name  : "Venila IceCream" ,
    imgsrc : "../images/icecream2.jpg" ,
    amount : 75 ,
   description : "Vanilla ice cream with chocolate sauce"
  },
  {
    name  : "Strawberry Cake" ,
    imgsrc : "../images/cake.jpg" ,
    amount : 350 ,
    description : "Cake Flavour- Strawberry Type of Cake- Cream  in Diameter"
   },
   {
    name : "Delicious Veg.Pizza" ,
    imgsrc : "../images/pizza2.jpg" ,
    amount : 250 ,
    description : "Spicy Pizza Hut to Add 25 Percent More Cheese "
  },
  {
    name  : "Chocolate cake" ,
    imgsrc : "../images/cake4.jpg" ,
    amount : 230 ,
    description : "Cake Flavour- Chocolate"

  },
  {
    name  : "Chicken Biriyani" ,
    imgsrc : "../images/biriyani1.jpg" ,
    amount : 220 ,
   description : "North Indian, South Indian, Biriyani, Beverages"
  },
  {
    name  : "Chicken Tikka" ,
    imgsrc : "../images/tandoori2.jpg" ,
    amount : 450 ,
   description : "North Indian, South Indian, BBQ, Seafood, Beverages"
  }

]
}

 function search() {
 	     clr = document.querySelector("#search").style.color 
 	     if(clr != "rgb(255, 167, 0)"){
   	  	    document.querySelector("#imgsearch").src = "../images/search.png" ; 	 
   	  	    document.querySelector("#search").style.color = "#ffa700" ;
             $("#visi").removeClass("visible") ;
   	  	    $("#visi").addClass("hide")  ;
             $("#hide").addClass("vis") ;
             $("#hide").removeClass("hide") ;
   	  	}
   	  	 else{
   	  	 	document.querySelector("#imgsearch").src = "../images/search1.jpg" ;
   	  	 	document.querySelector("#search").style.color = "black" ;
   	  	 	$("#visi").removeClass("hide") ; 
            $("#visi").addClass("visible") ;
            $("#hide").removeClass("vis") ;
             $("#hide").addClass("hide")  ;
   	  	 }
   	  }

      $("#subtn").on("click" , function(){
        value = {
          totalvalue : $("#totalamount").html() ,
          email : sessionStorage.getItem("email") ,
          name : sessionStorage.getItem("name") 
      }
        console.log(value) 
        if(sessionStorage.getItem("email") == null || sessionStorage.getItem("email") == "null"){
            alert("SIgn in first")
            return false ;
        }
        else{
          console.log("varala")
        $.ajax({
          url: 'http://localhost:8080/mail/booking',
          method: 'POST',
          dataType: 'json',
          data: value,
          success: function(data , status){
                 console.log(data , $("#myonoffswitch").val())
                  jsarray = data  
          },
          async : false 
        });
        alert("you will receive mail")
        return true ;
      }
      });


  

  function setvalue(jsarray){
    
       for(var i = 0 ; i < 9 && jsarray.length > i ; i++ ){
           let cnt = parseInt(i+1)
           $("#foodhead"+cnt).html(jsarray[i]["name"])
           $("#foodbody"+cnt).html(jsarray[i]["description"]) 
           $("#foodprice"+cnt).html("&#x20B9" + " " + jsarray[i]["amount"] )
           console.log( jsarray[i]["imgsrc"] ) 
           $("#food"+cnt).attr("src" , jsarray[i]["imgsrc"] )

       }
  }



  $("document").ready(function(){
    $("#myonoffswitch").click(function(){
      if($("#myonoffswitch").val() == 1){
        console.log($("#myonoffswitch").val())
        $("#myonoffswitch").val(0)   
        $.ajax({
          url: 'http://localhost:8080/veg/vegItems',
          method: 'POST',
          dataType: 'json',
          data: {
            "dish" : "veg" 
          },
          success: function(data , status){
                 console.log(data , $("#myonoffswitch").val())
                  jsarray = data  
          },
          async : false 
        });
        setvalue(jsarray)

      }
      else{
        
        $("#myonoffswitch").val(1)
        console.log(jsarray)
        setarray()
        setvalue(jsarray)

      }
    
    });
  });

  $("document").ready(function(){
    console.log(sessionStorage.getItem("name"))
    if(sessionStorage.getItem("name") != null  && sessionStorage.getItem("name") != "null"  ){
      $("#signuser").css("display" , "none")
       $("#user").html(sessionStorage.getItem("name")) ;
 
    }
 });

 $("#user").click(function(){
  if(sessionStorage.getItem("name") != "null"  ){
    sessionStorage.setItem("name" , "null") ;
    sessionStorage.setItem("email" , "null") ;
    $("#user").css("display" , "none") ;
    $("#signuser").css("top" , "5px")
    $("#signuser").css("display" , "inline-block")
  }  
});





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
                                 $("#foodprice"+cnt).html("&#x20B9"+ " " + obj2[k]) ;
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

  function getTotal(){
      var total = 0 ;
      for( i = 0 ; i < cnt.length ; i++ ){
            total = total + cnt[i] * amt[i] ;
      }
      return total;
  }

  $("button").click(function(){
      var val = this.className ;
      var ind = parseInt(this.id.substring(4) )-1 ;
      var i = 1
      if(val == "add" || val == "btn")
        {
           var i = "#minu" + this.id.substring(4) ;
           $(i).css("display" , "inline-block") ;
           totcnt++ ;
           cnt[ind]++;
           
           $(".cart").css("display" , "inline-block") ;
           $("#addi"+(ind+1)).html(cnt[ind]) 
           if(cnt[ind] == 1){
              
              var html = '\
                  <div class="price' +(parseInt(ind)+1)+'">\
                         <p id="itemname">'+$("#foodhead"+ (ind+1)).text() +'</p>\
                        <button class="cnti' + (ind+1) + '" class="btn">1</button>\
                         <p id="itemprice">' +$("#foodprice"+(ind+1)).text()+'</p>\
                         <div>' ;
              document.getElementById('itemsamount').insertAdjacentHTML('beforeend' ,html);
              amt[ind] = parseInt($("#foodprice"+(ind+1)).text().substring(1)) ;

        }
        else{
          $(".cnti"+(ind+1)).html(cnt[ind]) 
        }
          $("#totalamount").html("&#x20B9" +" "+ getTotal() )
        }
      else if(val == "min"){
        totcnt-- ;
        cnt[ind]--;
        if(cnt[ind] == 0){
           $("#"+this.id).css("display" , "none")  ;
           $("#addi"+(ind+1)).html("Add") ;
           $('.price'+(ind+1)).css("display" , "none") ;
           amt[ind] = 0 ; 
        }
        else{
          $("#addi"+(ind+1)).html(cnt[ind]);
          $(".cnti"+(ind+1)).html(cnt[ind]) 
        }
        if(totcnt == 0){
          $(".cart").css("display" , "none") ;
        }
         
        $("#totalamount").html("&#x20B9" +" "+ getTotal() )
         
      }
    

  });

  $("document").ready(function(){
     $("#subtn").click(function(){
           
     });
  });

function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  var expires = "expires="+d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  var name = cname + "=";
  var ca = document.cookie.split(';');
  for(var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function delete_cookie(name) {
  document.cookie = name +'=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}

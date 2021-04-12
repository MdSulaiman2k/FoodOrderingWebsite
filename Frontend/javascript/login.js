$("#checkbox").on("click" , function(){
    if($("#checkbox").val() == "1"){
        $("#checkbox").val("0")
        $("#password").attr("type" , "text")
    }
    else{
        $("#checkbox").val("1")
        $("#password").attr("type" , "password") 
    }    
});

$("#checkbox1").on("click" , function(){
    if($("#checkbox1").val() == "1"){
        $("#checkbox1").val("0")
        $("#password1").attr("type" , "text")
    }
    else{
        $("#checkbox1").val("1")
        $("#password1").attr("type" , "password") 
    }    
});

$("form").submit(function(){
    var found =  false ;
    var js = {
        email  :  $("#login").val(),
        password : $("#password").val() 
  }
  console.log(js) ;
    var data = $.ajax({
        url : "http://localhost:8080/api/user/login" ,
        method: 'POST',
        dataType: 'json',
        data: js,
        success: function(data , status){
          console.log(data.email)
           if(data.email != null){
               sessionStorage.setItem("email" , data.email) ;
               sessionStorage.setItem("name" , data.name) ;
               found = true ;
               return true ;
           }
           else{
               sessionStorage.setItem("name" , "null") ;
               sessionStorage.setItem("email" , "null") ;
              $("#login").css("color" , "red") ;
              $("#login").css("border-color" , "red")
              $("#password").css("color" , "red") ;
              $("#password").css("border-color" , "red")
              found = false ;
            // document.getElementById("thirdlabel").insertAdjacentHTML("beforebegin" , "<p class='error'>Email id not found </p>")
             $("#error").css("display" , "inline-block") ;
             return false ;
           }
       },
       async : false 
    }); 
    return found  ;        
});

$("#login").on("input" , function(){
    cnt = 0 ;
   $("#login").css("border-color" , "#E0E0E0") ;
   $("#login").css("color" , "#333") ;
 
 });
 
 $("#password").on("input" , function(){
    $("#password").css("border-color" , "#E0E0E0") ;
    $("#password").css("color" , "#333") ;
  });

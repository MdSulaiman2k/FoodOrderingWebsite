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

const sendingdata = ( ) => {
    var found =  false ;
    var js = {
        name : $("#name").val() ,
        email  :  $("#login").val(),
        password : $("#password").val() 
  }
  console.log(js) ;
    var data = $.ajax({
        url : "http://localhost:8080/api/user/register" ,
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
              found = false ;
            // document.getElementById("thirdlabel").insertAdjacentHTML("beforebegin" , "<p class='error'>Email id not found </p>")
             $("#error").css("display" , "inline-block") ;
             return false ;
           }
       },
       async : false 
    }); 
    return found  ;        

}
 const passwordverfication = () => {
     let pass1 =  $("#password").val() 
     let pass2 =   $("#password1").val() 
     if(pass1 == pass2){
         return true ;
     }
     return false ;
 }

$("form").submit(function(){
    found = false ;
    if(passwordverfication()){
        found = sendingdata()
        if(!found )
            $("#mailverify").css("display" , "inline-block") 
    }
    else 
        $("#passverify").css("display" , "inline-block")
    
    return found 
});

$("#login").on("input" , function(){
    cnt = 0 ;
    $("#passverify").css("display" , "none")
    $("#mailverify").css("display" , "none") 
 
 });
 
 $("#password").on("input" , function(){
    $("#passverify").css("display" , "none")
    $("#mailverify").css("display" , "none") 
  });

  $("#password1").on("input" , function(){
    $("#passverify").css("display" , "none")
    $("#mailverify").css("display" , "none") 
  });

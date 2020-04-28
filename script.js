  
             function authenticate(){
        'use strict';
       var userId=document.getElementById("userId").value;
       var userPassword=document.getElementById("userPassword").value;

       if(userId=="demo" && userPassword=="demo"){
            document.write("Login Successful");  
            window.location.href="covid.html";
           //document.write("Login Successful");
       }
       else{
            document.getElementById("message").innerHTML="Login Failure.!!!";
       }
       
       if( userId=="surajchapagain" && userPassword==("nepal")){
            document.write("Login Successful");
            window.location.href="covid.html";
       }
       else{
            document.getElementById("message").innerHTML="Login Failure.!!!";
       }
   }     


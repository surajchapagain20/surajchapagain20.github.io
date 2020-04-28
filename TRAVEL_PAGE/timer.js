function timer(){  
    var d= new Date();

  var h=d.getHours();
  var m=d.getMinutes();
  var s= d.getSeconds();

  document.getElementById("time").innerHTML=h +":"+m+":"+s;
  setTimeout(timer,500);
}  



// login script to verify the userid and password for login page
function authenticate(){
  'use strict';
 var userId=document.getElementById("userId").value;
 var userPassword=document.getElementById("userPassword").value;

 if(userId=="demo" && userPassword=="demo"){
      document.write("Login Successful");  
      window.location.href="sales1.html";
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
      document.getElementById("message").innerHTML = "Login Failure.!!!";
 }
}    
// login page Ends

// rotateImage New page Starts from here

function rotateImage() {
var img = document.getElementById('myimage');
img.style.transform = 'rotate(180deg)';
}

// rotateImage New page Ends from here

// New page Starts from here for image sping allways
//function rotateImage() {
//var img = document.getElementById('myimage');
//img.style.transform = 'rotate(180deg)';/
//}
// New page Ends from here for image sping allways
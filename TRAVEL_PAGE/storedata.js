function timer(){  
    var d= new Date();

  var h=d.getHours();
  var m=d.getMinutes();
  var s= d.getSeconds();

  document.getElementById("time").innerHTML=h +":"+m+":"+s;
  setTimeout(timer,500);
}  

////////////////////////////////////////////////////////////////////////
//  STORE DATA AND POPULATE DATA //////////////////////////////////////
////////////////////////////////////////////////////////////////////////


function AssignValues (){
    localStorage.setItem("text1",document.form1.text1.value);
    localStorage.setItem("text2",document.form1.text2.value);
    localStorage.setItem("text3",document.form1.text3.value);
}

function Values1 (){
    //document.write("Value 1 is " + localStorage.getItem("text1"));
    alert ("Value 1 is " + localStorage.getItem("text1"));

}

function Values2 (){
    alert ("Value 2 is " + localStorage.getItem("text2"));
    
    }

    
function Values3 (){
    alert ("Value 3 is " + localStorage.getItem("text3"));
    
    }

    function ShowLength(){
        alert("No of items in local storage is " + localStorage.length);
    }

function ClearStorage(){
    localStorage.clear();
    alert("No of items in local storage is " + localStorage.length);
}
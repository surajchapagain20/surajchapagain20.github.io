function insertCustomerDetails() {
    // insert values
    valueViewer("dateD", "DATE : ", receiveString("date"), "");
    valueViewer("invoiceNumberD", "INVOICE# : ", receiveValues("invoiceNumber"), "");
    valueViewer("customerNameD", "NAME : ", receiveString("customerName"), "");
    valueViewer("customerCompanyD", "COMPANY : ", receiveString("customerCompany"), "");
    valueViewer("customerAddressD", "ADDRESS : ", receiveString("customerAddress"), "");
    valueViewer("customerPhoneD", "PHONE : ", receiveValues("customerPhone"), "");
    ////////////////////////////////////////////////////////////////////////////////////////

    function getItemForm1b() {
        var SOneDateFrom = JSON.parse(localStorage.getItem("SOneDateFrom"));
    }
    
    function deleteStorage() {
        localStorage.clear();
    }

    
    <script>
   ////////////////////////////////////////////////////////////////////////
        //  STORE DATA AND POPULATE DATA //////////////////////////////////////
        ////////////////////////////////////////////////////////////////////////
        
        
        function AssignValues (){
            localStorage.setItem("date",document.form1.date.value);
            localStorage.setItem("Invoice",document.form1.Invoice.value);
            localStorage.setItem("Name",document.form1.Name.value);
            localStorage.setItem("Company",document.form1.Company.value);
            localStorage.setItem("Address",document.form1.Address.value);
            localStorage.setItem("PhoneNumber",document.form1.PhoneNumber.value);
            
            localStorage.setItem("itemsName",document.form1.itemsName.value);
            localStorage.setItem("qty",document.form1.qty.value);
            localStorage.setItem("rate",document.form1.rate.value);
        }
           
        function calculaterate (){
            localStorage.setItem("itemsName",document.form2.itemsName.value);
            localStorage.setItem("qty",document.form2.qty.value);
            localStorage.setItem("rate",document.form2.rate.value);
        }
            </script>


<script>

function Calculate() {
    var Amt1 = parseInt(num1 = document.getElementById("rate").value); + "<br>";
    var Amt2 = parseInt(num1 = document.getElementById("qty").value); + "<br>";
    
    var Final_Amt = Amt1 * Amt2;
   // var tax =  Final_Amt * 13 / 100;
    

    document.getElementById("TOTALAMOUNT").innerHTML = 'FINAL PAYMENT NPR: ' + (Final_Amt);
}
</script>

<script>
   // function Values1 (){
   //     alert ("Value 1 is " + localStorage.getItem("text1"));
       // document.write("Value 1 is " + localStorage.getItem("text1"));
  //  }
    
 //   function Values2 (){
 //       alert ("Value 2 is " + localStorage.getItem("text2"));
  //      
  //      }
    
        
 //   function Values3 (){
   //     alert ("Value 3 is " + localStorage.getItem("text3"));
        
  //      }
    
        function ShowLength(){
            alert("No of items in local storage is " + localStorage.length);
        }
    
    function ClearStorage(){
        localStorage.clear();
        alert("No of items in local storage is " + localStorage.length);
    }


        </script>


        function addToList(key, value) {    
            var ul = document.getElementById("items");
            var li = document.createElement("li");
            li.innerHTML = favoriteGenre"Key: " + key + ", value: " + value;
            ul.appendChild(li);
        }    
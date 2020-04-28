function Calculate() {
    var Amt1 = parseInt(num1 = document.getElementById("ticketAmt").value); + "<br>";
    var Amt2 = parseInt(num1 = document.getElementById("ServiceAmt").value); + "<br>";
    var Amt3 = parseInt(num1 = document.getElementById("SalesAmt").value); + "<br>";
    
    var Final_Amt = Amt1 + Amt2 + Amt3 ;
    var tax =  1.3;

    document.getElementById("Total_Amount").innerHTML = 'Total With VAT NPR: ' + (Final_Amt * tax);
    document.getElementById("TAX_AMT").innerHTML = 'VAT AMOUNT NPR: ' + (Final_Amt - tax);
}
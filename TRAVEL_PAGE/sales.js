function Calculate() {
    var Amt1 = parseInt(num1 = document.getElementById("ticketAmt").value); + "<br>";
    var Amt2 = parseInt(num1 = document.getElementById("ServiceAmt").value); + "<br>";
    var Amt3 = parseInt(num1 = document.getElementById("SalesAmt").value); + "<br>";
    
    var Final_Amt = Amt1 + Amt2 + Amt3 ;
    var tax =  Final_Amt * 13 / 100;
    var total = Final_Amt + tax;

    document.getElementById("Total_Amount").innerHTML = 'Total Amount NPR: ' + (Final_Amt);
    document.getElementById("TAX_AMT").innerHTML = 'VAT: ' + (tax);
    document.getElementById("TOTALAMOUNT").innerHTML = 'FINAL PAYMENT NPR: ' + (Final_Amt - tax);
}
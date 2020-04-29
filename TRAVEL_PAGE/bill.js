
function Calculate() {
    var COST_AMT = parseInt(num1 = document.getElementById("cost").value); + "<br>";
    var QTTY = parseInt(num1 = document.getElementById("qty").value); + "<br>";
    var Paid_amt = parseInt(num1 = document.getElementById("pAmount").value); + "<br>";
    
    var PRICE = (COST_AMT * QTTY);
    var dBalance =  PRICE - Paid_amt;
    var tax =  PRICE * 13 / 100;
    var t_amt = PRICE - dBalance + tax;
  
    document.getElementById("Total_Amount").innerHTML = 'Total Amount NPR: ' + (PRICE);
    document.getElementById("DueAmount").innerHTML = 'Due Balance: ' + (dBalance + tax);
    document.getElementById("TAX_AMT").innerHTML = 'VAT: ' + (tax);
    document.getElementById("TAMT").innerHTML = 'TOTAL AMOUNT TO PAY: ' + (tax);
}
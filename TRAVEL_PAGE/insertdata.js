    
function data_view1() {
    var invoice = document.getElementById('invoice').value;
    var name = document.getElementById('name').value;
    var Company = document.getElementById('Company').value;
    var Address = document.getElementById('Address').value;
    var Phone = document.getElementById('Phone').value;
    var itemsName = document.getElementById('itemsName').value;
 
    var html =  'INVOICE NO: ' + invoice + '<br>' + 
                'CUSTOMER NAME: ' + name + '<br class="form-control">' + 
                'COMPANY NAME: ' + Company + '<br> ' + 
                'ADDRESS: ' + Address + '<br> ' + 
                'PHONE NO: ' + Phone + '<br> ' + 
                'ITEM NAME: ' + itemsName; //+ '<br> ' + 
                //'INVOICE NO: ' + Invoice + '<br> ' + 
                //'ITEM NAME: ' + itemsName + '<br> ' + 
              //  Company;
 
    document.getElementById('result').innerHTML = html;
}
 
document.getElementById('data_view1').addEventListener('click', data_view1);


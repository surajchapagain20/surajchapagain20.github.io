
///////////////////////////////////////////////////

function setItemForm1b()
{
    //var date = document.getElementById("date");
    //localStorage.setItem("date", JSON.stringify(date.value));

    var invoice = document.getElementById("invoice");
    localStorage.setItem("invoice", JSON.stringify(invoice.value));

    var name = document.getElementById("name");
    localStorage.setItem("name", JSON.stringify(name.value));

    var Company = document.getElementById("Company");
    localStorage.setItem("Company", JSON.stringify(Company.value));

    var Address = document.getElementById("Address");
    localStorage.setItem("Address", JSON.stringify(Address.value));

    var Phone = document.getElementById("Phone");
    localStorage.setItem("Phone", JSON.stringify(Phone.value));

    var itemsName = document.getElementById("itemsName");
    localStorage.setItem("itemsName", JSON.stringify(itemsName.value));

    var Quantity = document.getElementById("Quantity");
    localStorage.setItem("Quantity", JSON.stringify(Quantity.value));

    var Unit = document.getElementById("Unit");
    localStorage.setItem("Unit", JSON.stringify(Unit.value));
}
function getItemForm1b() {
        //var name = JSON.prase(localStorage.getItem("date"));
        var name = JSON.parse(localStorage.getItem("invoice"));
        var name = JSON.parse(localStorage.getItem("name"));
        var name = JSON.parse(localStorage.getItem("Company"));
        var name = JSON.parse(localStorage.getItem("Address"));
        var name = JSON.parse(localStorage.getItem("Phone"));
        var name = JSON.parse(localStorage.getItem("itemsName"));
        var name = JSON.parse(localStorage.getItem("Quantity"));
        var name = JSON.parse(localStorage.getItem("Unit"));
    }



    
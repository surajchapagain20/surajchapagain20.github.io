
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



///////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////
$(document).ready(function(){
    var i=1;
    $("#add_row").click(function(){b=i-1;
      	$('#addr'+i).html($('#addr'+b).html()).find('td:first-child').html(i+1);
      	$('#tab_logic').append('<tr id="addr'+(i+1)+'"></tr>');
      	i++; 
  	});
    $("#delete_row").click(function(){
    	if(i>1){
		$("#addr"+(i-1)).html('');
		i--;
		}
		calc();
	});
	
	$('#tab_logic tbody').on('keyup change',function(){
		calc();
	});
	$('#tax').on('keyup change',function(){
		calc_total();
	});
	

});

function calc()
{
	$('#tab_logic tbody tr').each(function(i, element) {
		var html = $(this).html();
		if(html!='')
		{
			var qty = $(this).find('.qty').val();
			var price = $(this).find('.price').val();
			$(this).find('.total').val(qty*price);
			
			calc_total();
		}
    });
}

function calc_total()
{
	total=0;
	$('.total').each(function() {
        total += parseInt($(this).val());
    });
	$('#sub_total').val(total.toFixed(2));
	tax_sum=total/100*$('#tax').val();
	$('#tax_amount').val(tax_sum.toFixed(2));
	$('#total_amount').val((tax_sum+total).toFixed(2));
}



// <script>
  //   $(document).ready(function() {
    //   $('#Unit').keyup(function() {
      //   $('#servicetax').text($('#Unit').val() * 5 / 100);
       //});
   // });
 //</script>
//<script>
  //      $(document).ready(function() {
  //          $('#Unit').keyup(function() {
  //              $('#totalvalue').text($('#Unit').val() * 13 / 100);
  //          });
  //      });/
//</script>-->
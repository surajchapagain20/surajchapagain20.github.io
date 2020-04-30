getItemForm1b();
    $(document).delegate("textarea,select,input[type='text'],input[type='number'],input[type='date']","change",
    function() { setItemForm1b($(this));
    }
    );

    function deleteStorage() {
        localStorage.clear();
    }

    function getDate(){
    var today = new Date();

    document.getElementById("date").value = today.getFullYear() + '-' + ('0' + (today.getMonth() + 1)).slice(-2) + '-' + ('0' + today.getDate()).slice(-2);

}

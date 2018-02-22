$(function () {
    var url = window.location.href; 
    if (url.includes("?&dealerid=")){
        $('#accountID').val(window.location.href.split("?&dealerid=")[1].split("?&")[0]);
    }
    
    $('#search').click(function () {
        
    });
});
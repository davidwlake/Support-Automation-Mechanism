$(function () {
var url = window.location.href;
if(url.includes("&runTime=true")){
    setTimeout(function() {
     var changeEvent = document.createEvent("HTMLEvents");
         changeEvent.initEvent("change", true, true); 
        
     if(url.includes("&def_contact_id")){
        var template = JSON.parse(decodeURIComponent(url.split("?")[1].split("&")[6]));
        var accountID = url.split("&")[4].split("accountID=")[1];

     } else {
        var template = JSON.parse(decodeURIComponent(url.split("?")[1].split("&")[5]));
        var accountID = url.split("&")[3].split("accountID=")[1];
     }
        

    var description = template.description.replace(/{accountId}/g, accountID);
        description = description.replace(/{CMS}/g, template.cms);
     $('[name="j_id0:form:j_id9:j_id39:j_id41"]').val(description);
     $('[name="j_id0:form:j_id9:j_id39:j_id43"]').val(template.subject);

     
     document.getElementById("j_id0:form:j_id9:j_id39:j_id65").value = template.type;
     document.getElementsByName('j_id0:form:j_id9:j_id39:j_id54')[0].dispatchEvent(changeEvent, setTimeout(function(){  document.getElementsByName('j_id0:form:j_id9:j_id39:j_id58')[0].value = template.category;  document.getElementsByName('j_id0:form:j_id9:j_id39:j_id58')[0].dispatchEvent(changeEvent);
     setTimeout(function(){      
        $( '<p style="font-weight: normal; color: black; font-size: 13px;">' + template.notes + "</p>").insertBefore( ".pbBody" );        
     }, 1000);
    }, 500));
}, 1000);   //End Load Time
}
});
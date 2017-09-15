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
     $('[name="j_id0:form:j_id8:j_id38:j_id40"]').val(description);
     $('[name="j_id0:form:j_id8:j_id38:j_id42"]').val(template.subject);
     $('[name="j_id0:form:j_id8:j_id38:j_id53"]').val("DDC-Websites");
    
     document.getElementsByName('j_id0:form:j_id8:j_id38:j_id53')[0].dispatchEvent(changeEvent, setTimeout(function(){  document.getElementsByName('j_id0:form:j_id8:j_id38:j_id57')[0].value = template.category;  document.getElementsByName('j_id0:form:j_id8:j_id38:j_id57')[0].dispatchEvent(changeEvent,setTimeout( function() {                          document.getElementsByName('j_id0:form:j_id8:j_id38:j_id61')[0].value = template.subCategory ;} 
     , 500));
    }, 500));
}, 1000);   //End Load Time
}
});
var template = JSON.parse(localStorage.getItem("SAM:matrixTemplate"));
var toMatrix = localStorage.getItem("SAM:matrixTemplateFlag");

var changeEvent = document.createEvent("HTMLEvents");
changeEvent.initEvent("change", true, true); 

if(toMatrix == "true"){
    chrome.runtime.sendMessage({report: "analytics", package:" Matrix Creation | " + template.title});        
  
    $(".dateFormat a")[0].click();
    $('#00N60000002zGKI').val(template.category);
    document.getElementById('00N60000002zGKI').dispatchEvent(changeEvent);

    setTimeout(function(){ 
      $('#00N60000002zGKV').val(template.subCategory);
      var accountID = $("#CF00N32000002wz4o").val();
      var description = template.description;
      description = description.replace(/{CMS}/g, template.cms);
      description = description.replace(/{accountId}/g, accountID)
      
      var subject = template.subject.replace(/{accountId}/g, accountID);
      $('#00N60000002zGKW').val(subject);
      $('#00N60000002zGKL').val(description);
      
      document.getElementById('00N60000002zGKV').dispatchEvent(changeEvent);      
    }, 1000);
    
    localStorage.setItem("SAM:matrixTemplateFlag", false);
}
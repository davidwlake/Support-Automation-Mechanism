var url = window.location.href;
var changeEvent = document.createEvent("HTMLEvents");
         changeEvent.initEvent("change", true, true); 

if(url.includes("runTime=VoiceMail")){
    $("#00N60000001maZs").val("Call - Outbound");
    document.getElementsByClassName("dateFormat")[0].childNodes[1].click();
    $("#tsk12").val("Completed");
         document.getElementById('00N60000001maZs').dispatchEvent(changeEvent, setTimeout(function(){  
                 $("#00N60000002HjXN").val("MPR");      
                 $("#00N60000002HjXI").val("Left Message");

    }, 1000));
} 

if(url.includes("runTime=Email")){
    $("#00N60000001maZs").val("Email – Outbound");
    document.getElementsByClassName("dateFormat")[0].childNodes[1].click();
    $("#tsk12").val("Completed");
         document.getElementById('00N60000001maZs').dispatchEvent(changeEvent, setTimeout(function(){  
                 $("#00N60000002HjXN").val("MPR");      
    }, 500));
} 

if(url.includes("runTime=OBC")){
    $("#00N60000001maZs").val("Call - Outbound");
    document.getElementsByClassName("dateFormat")[0].childNodes[1].click();
    $("#tsk12").val("Completed");
         document.getElementById('00N60000001maZs').dispatchEvent(changeEvent, setTimeout(function(){  
                 $("#00N60000002HjXN").val("MPR");      
    }, 500));
} 


if(url.includes("runTime=IBC")){
    $("#00N60000001maZs").val("Call - Inbound");
    document.getElementsByClassName("dateFormat")[0].childNodes[1].click();
    $("#tsk12").val("Completed");
         document.getElementById('00N60000001maZs').dispatchEvent(changeEvent, setTimeout(function(){  
                 $("#00N60000002HjXN").val("MPR");      

    }, 500));
} 
$(function () {
    if(localStorage.getItem("SAM:runTime")=="True"){
        var user = document.getElementById("cas1_ileinner").getElementsByTagName("a")[0].title;
        var userRole = document.getElementById("00N60000002yJIV_ileinner").innerHTML.replace("SVC-", "");
        var assigned = document.getElementById("cas3_ileinner").innerText; 
        var config = JSON.parse(decodeURIComponent(localStorage.getItem("SAM:config")));
        var buffer = userRole + " | Case Creation | " + user + " | ";

        if(assigned.length <= 1 || assigned == user ){
            assigned = "Unassigned | ";
        } else {
            assigned = "User Selected | ";
        }
        chrome.runtime.sendMessage({report: "analytics", package: userRole + " | Case Creation | " + assigned});
        buffer += assigned;

        if(config.internal == true){
            buffer += "Internal | ";
            chrome.runtime.sendMessage({report: "analytics", package: userRole + " | Case Creation | Internal | "});
            
        }
        
        if(config.roc == true){
            buffer += "ROC";         
            chrome.runtime.sendMessage({report: "analytics", package: userRole + " | Case Creation | ROC | "});            
        }

        chrome.runtime.sendMessage({report: "analytics", package: buffer});
        localStorage.setItem("SAM:runTime", "Edit");
        $("input[name='edit']")[0].click();
    } else if(localStorage.getItem("SAM:runTime")=="ROC")  {
        $("input[name='close']")[0].click()

    }
});
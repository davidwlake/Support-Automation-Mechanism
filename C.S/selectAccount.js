var i,x, table = [];

temp = document.getElementsByClassName("reportTable tabularReportTable")[0].rows;

for(i = 1; i < (temp.length - 2); i++){
        if (!table[i-1]) {                 
        table[i-1] = [];              
    }

    for(x = 0; x < temp[i].cells.length; x++){
        table[i-1][x] = temp[i].cells[x].innerText;
    }
}

var url = window.location.href;
var accountID = url.split("?")[1].replace("pv0=", "");


if(url.includes("&?firstName=")){
    localStorage.setItem("SAM:firstName", window.location.href.split("?firstName=")[1].split("&")[0]);
    localStorage.setItem("SAM:lastName", window.location.href.split("&?lastName=")[1].split("&")[0]);
    localStorage.setItem("SAM:sfAccountID", table[0][1]);
    localStorage.setItem("SAM:accountID", accountID);
    localStorage.setItem("SAM:template", url.split("?")[4]);
    localStorage.setItem("SAM:config", url.split("?")[5]);
    localStorage.setItem("SAM:runTime", "True");
    localStorage.setItem("SAM:matrixTemplateFlag", false);
    


    var url2 = "https://dealertrack-production.my.salesforce.com/00O32000004mUKH?pv0=" + window.location.href.split("?firstName=")[1] + "&pv1=" + window.location.href.split("&?lastName=")[1];  
    window.open(url2, '_top'); 
} else if (url.includes("&?runTime=OffPlat")) {
    localStorage.setItem("SAM:firstName", "None");
    localStorage.setItem("SAM:lastName", "None");
    localStorage.setItem("SAM:sfAccountID", "0013200001GeoJ9");
    localStorage.setItem("SAM:accountID", "spptdemo4");
    localStorage.setItem("SAM:template", url.split("?")[2]);
    localStorage.setItem("SAM:config", url.split("?")[3].split("&")[0]);
    localStorage.setItem("SAM:runTime", "True");
    localStorage.setItem("SAM:matrixTemplateFlag", false);
    
    var url = "https://dealertrack-production--c.na26.visual.force.com/apex/MLCSelectionPage?def_account_id=0013200001GeoJ9&FromNewCase=true&runTime=true&accountID=" + "-1" + "&&" + url.split("?")[2] + "&PSAProject=null&RecordType=012600000009PeO"; 
    window.open(url, '_top');
} else {
    
    localStorage.setItem("SAM:firstName", "None");
    localStorage.setItem("SAM:lastName", "None");
    localStorage.setItem("SAM:sfAccountID", table[0][1]);
    localStorage.setItem("SAM:accountID", accountID);
    localStorage.setItem("SAM:template", url.split("?")[2]);
    localStorage.setItem("SAM:config", url.split("?")[3]);
    localStorage.setItem("SAM:runTime", "True");
    localStorage.setItem("SAM:matrixTemplateFlag", false);
    
    
    var url = "https://dealertrack-production--c.na26.visual.force.com/apex/MLCSelectionPage?def_account_id="+ table[0][1] +"&FromNewCase=true&runTime=true&accountID="+accountID.replace("pv0=", "") + "&"; 
    localStorage.setItem("SAM:caseURL", url);
    window.open("https://dealertrack-production.my.salesforce.com/00O0e000004iSLk?pv0="+ accountID+"&runTime=Notes", '_top'); 
}
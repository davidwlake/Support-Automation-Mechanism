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

if(url.includes("&?firstName=")){
   var url2 = "https://dealertrack-production.my.salesforce.com/00O32000004mUKH?pv0=" + window.location.href.split("&?firstName=")[1] + "&?pv1=" + window.location.href.split("&?lastName=")[1] + "&?accountId="+ table[0][1];  
   window.open(url2, '_top'); 
} else {
    var url = "https://dealertrack-production--c.na26.visual.force.com/apex/MLCSelectionPage?def_account_id="+ table[0][1] +"&FromNewCase=true&PSAProject=null&RecordType=012600000009PeO";  
    window.open(url, '_top');
}

















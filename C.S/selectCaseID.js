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
   
    var url2 = "https://dealertrack-production.my.salesforce.com/00T/e?what_id=" + table[0][11] + "&retURL=%2F" + table[0][11] + "&RecordType=012320000001Ewh&ent=Task&runTime="+url.split("&runTime=")[1]; 
    window.open(url2, '_top');




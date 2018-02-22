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

if(url.includes("&runTime=Notes")){
    var url2 = "https://dealertrack-production.my.salesforce.com/00O0e000004iUqa?pv0=" + table[0][1] +","+ table[0][3]+","+table[0][5];
    window.open(url2, '_top');
} else if(url.includes("&runTime=Display")){
  var url2 = "https://dealertrack-production.my.salesforce.com/00O0e000004iUqa?pv0=" + table[0][1] +","+ table[0][3]+","+table[0][5] + "&" + table[0][6] + "&" + table[0][7] +"&runTime=Display";
  window.open(url2, '_top');

} else {
    localStorage.setItem("SAM:firstName", "None");
    localStorage.setItem("SAM:lastName", "None");
    localStorage.setItem("SAM:sfAccountID", table[0][5]);
    localStorage.setItem("SAM:accountID", table[0][4]);
    localStorage.setItem("SAM:template", url.split("?")[2]);
    localStorage.setItem("SAM:config", url.split("?")[3]);
    localStorage.setItem("SAM:runTime", "True");

    var url2 = "https://dealertrack-production.my.salesforce.com/00O0e000004iSLu?pv0=" + table[0][1] +","+ table[0][3]+","+table[0][5];
    window.open(url2, '_top');

}

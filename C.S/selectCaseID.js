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

localStorage.setItem("SAM:matrixTemplate", decodeURIComponent(url.split("?")[2]));
localStorage.setItem("SAM:matrixTemplateFlag", true);

window.open("https://dealertrack-production.my.salesforce.com/"+ table[0][1], '_top'); 

var i,x, table = [];

temp = document.getElementsByClassName("reportTable tabularReportTable")[0].rows;

for(i = 1; i < (temp.length - 2); i++){
        if (!table[i-1]) {                 
        table[i-1] = [];              
    }
temp[i].onclick = function() {
    var buffer = [];
    for(x = 0; x < this.cells.length; x++){
        buffer[x] = this.cells[x].innerText;
    }
    if(buffer[4] != '\xa0' && buffer[4] != undefined){
        var url = "https://dealertrack-production--c.na26.visual.force.com/apex/MLCSelectionPage?def_account_id=" + localStorage.getItem("SAM:sfAccountID") + "&def_contact_id=" + buffer[4] + "+&FromNewCase=true&runTime=true&accountID=" + localStorage.getItem("SAM:accountID") + "&" + localStorage.getItem("SAM:template") + "&PSAProject=null&RecordType=012600000009PeO";

        window.open(url, '_top');

    }
    };

    for(x = 0; x < temp[i].cells.length; x++){
        table[i-1][x] = temp[i].cells[x].innerText;
        if(table[i-1][4]!= '\xa0' && table[i-1][4] != undefined){
            $(temp[i]).find("img").wrap("<a target='_blank' href='https://dealertrack-production.my.salesforce.com/"+temp[i].cells[temp[i].cells.length - 2].innerText +"'></a>");
            $(temp[i]).hover(function(){
                $(this).css("background-color", "yellow");
            }, function(){
                $(this).css("background-color", "");
            }); 
        }
    }
}



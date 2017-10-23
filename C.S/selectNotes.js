$( ".dataCol first" ).append( '<div id="continue_div" title="Take Action"><button class="button-ui myButton" id="continue_btn" name="continue">Select Contact Later</button></div>');

var template = JSON.parse(decodeURIComponent(localStorage.getItem("SAM:template")));
var temp = document.getElementsByClassName("reportTable tabularReportTable")[0].rows;
var buffer = "";

for(i = 1; i < (temp.length - 2); i++){  
    template.notes += temp[i].cells[2].innerText + "\n\n";
}

window.open(localStorage.getItem("SAM:caseURL")  + encodeURIComponent(JSON.stringify(template)) + "&PSAProject=null&RecordType=012600000009PeO", '_top');         



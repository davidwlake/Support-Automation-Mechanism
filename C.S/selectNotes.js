
var temp = document.getElementsByClassName("reportTable tabularReportTable")[0].rows;
var buffer = "";
var url = window.location.href;
var tempNotes = "";

if(url.includes("&runTime=Display")){
  for(i = 1; i < (temp.length - 2); i++){
      tempNotes += temp[i].cells[2].innerText + "\n\n";
  }
  var header = "<div><font face='Helvetica' size='3'><b>Client Services Segment Direct Parent: " + url.split('&')[1] + "</b><br> <b>Client Services Segment Service Level: " + url.split('&')[2] + " </b></font></div>  " + tempNotes ;
  $( ".outerNoSidebar" ).prepend(header);

} else {
  var template = JSON.parse(decodeURIComponent(localStorage.getItem("SAM:template")));

  for(i = 1; i < (temp.length - 2); i++){
      template.notes += temp[i].cells[2].innerText + "\n\n";
  }

  window.open(localStorage.getItem("SAM:caseURL")  + encodeURIComponent(JSON.stringify(template)) + "&PSAProject=null&RecordType=012600000009PeO", '_top');
}

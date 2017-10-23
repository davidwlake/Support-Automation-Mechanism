
/*

// Analytics Button Click Event
function trackButtonClick(e) {
    if(e.target.id === "createCase"){
        if($("#internal").is(':checked') === true){
            _gaq.push(['_trackEvent', "Internal", 'clicked']);
        }
        if($("#roc").is(':checked') === true){
            _gaq.push(['_trackEvent', "R.O.C", 'clicked']);
        }
         if($("#cms").is(':checked') === true){
            _gaq.push(['_trackEvent', "CMS", 'clicked']);
        }
        _gaq.push(['_trackEvent', "" + $( "#template option:selected" ).val(), 'selected']); 
    }
  _gaq.push(['_trackEvent', ""+e.target.id, 'clicked']);
}

document.addEventListener('DOMContentLoaded', function () {
  var buttons = document.querySelectorAll('.myButton');
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', trackButtonClick);
  }
});


// Code that enables a diffrent profile 

$( document ).ready(function() {
    if(localStorage.getItem("MAG") == "true"){
        $('#title').text("Support Automation Mechanism MAG");
        $('#magCheckbox').prop('checked', true);
    } else {
        $('#title').text("Support Automation Mechanism");
        $('#magCheckbox').prop('checked', false);
    }
});
$( "#magCheckbox" ).checkboxradio();    

$('#magCheckbox').click(function () {
    localStorage.setItem("MAG", $('#magCheckbox').is(':checked'));
});
*/
//Popup functions
$(function () {



//Styling 
$( "#accordion" ).accordion({
    collapsible: true,
    active: false,
    heightStyle: "content",
    header: "h3",
    icons: { "header": "ui-icon-plus", "activeHeader": "ui-icon-minus" }
});
$( "#accordion2" ).accordion({
    collapsible: true,
    active: false,
    heightStyle: "content",
    header: "h3",
    icons: { "header": "ui-icon-plus", "activeHeader": "ui-icon-minus" }
});
$( "#files" ).selectmenu().selectmenu( "menuWidget" ).addClass( "overflow" );
$( ".button-ui" ).button();
$( "#internal" ).checkboxradio(); 
$( "#roc" ).checkboxradio();    
$( "#cms" ).checkboxradio();    

 
$('#help').click(function () {
    window.open("https://fuel.coxautoinc.com/docs/DOC-144080", '_blank');
});

$('#createCase').click(function () {
        var template;
        $.getJSON("/lib/data.json", function(json) {
        var config = {internal:  $("#internal").is(':checked'),
                      roc:  $("#roc").is(':checked'),
                      isCMS: $("#cms").is(':checked')
                     };    
        for(var i = 0; i < json.templates.length; i++) {
            if(json.templates[i].title == $( "#template option:selected" ).val()) {
                template = json.templates[i];
                break;
                }
            }
            if(template.title == "defaultCase"){
                template.description = localStorage.getItem("SAM:body");
                template.subject = localStorage.getItem("SAM:subject");
            }
        chrome.tabs.executeScript( {
            code: 'var config ='+ JSON.stringify(config) + '; var template =' + JSON.stringify(template)
        }, function() {
            chrome.tabs.executeScript( {file: 'C.S/scraper.js'});
        });
            
            
});
});
    
$('#logCase').click(function () {
        var template;
        $.getJSON("/lib/data.json", function(json) {
        for(var i = 0; i < json.templates.length; i++) {
            if(json.templates[i].title == $( "#template option:selected" ).val()) {
                template = json.templates[i];
                break;
                }
            }
            if(template.title == "defaultCase"){
                template.description = localStorage.getItem("SAM:body");
                template.subject = localStorage.getItem("SAM:subject");
            }
        if($("#FirstName").val() != "" && $("#LastName").val() != ""){
            var config = {firstName:  $("#FirstName").val(),
                          lastName:   $("#LastName").val(), 
                          internal:  $("#internal").is(':checked'),
                          roc:  $("#roc").is(':checked'),
                          isCMS: $("#cms").is(':checked')

                         };
            chrome.tabs.executeScript( {
            code: 'var config ='+ JSON.stringify(config) + '; var template =' + JSON.stringify(template)
        }, function() {
            chrome.tabs.executeScript( {file: 'C.S/contactScraper.js'});
        });
        }                 
    });
});
    
$('#accountCases').click(function () {
    chrome.tabs.executeScript( {file: 'C.S/accountCases.js'});
});    
    
$('#accountContacts').click(function () {
    var template;
        $.getJSON("/lib/data.json", function(json) {
        var config = {internal:  $("#internal").is(':checked'),
                      roc:  $("#roc").is(':checked'),
                      isCMS: $("#cms").is(':checked')
                     };    
        for(var i = 0; i < json.templates.length; i++) {
            if(json.templates[i].title == $( "#template option:selected" ).val()) {
                template = json.templates[i];
                break;
                }
            }
            if(template.title == "defaultCase"){
                template.description = localStorage.getItem("SAM:body");
                template.subject = localStorage.getItem("SAM:subject");
            }
        chrome.tabs.executeScript( {
            code: 'var config ='+ JSON.stringify(config) + '; var template =' + JSON.stringify(template)
        }, function() {
            chrome.tabs.executeScript( {file: 'C.S/accountContacts.js'});
        });
}); 
});
        
$('#logVoicemail').click(function () {
    chrome.tabs.executeScript( {file: 'C.S/logVoicemail.js'});
});     
    
$('#logEmail').click(function () {
    chrome.tabs.executeScript( {file: 'C.S/logEmail.js'});
});     
  
$('#logOBC').click(function () {
    chrome.tabs.executeScript( {file: 'C.S/logOBC.js'});
});     
    
$('#logIBC').click(function () {
    chrome.tabs.executeScript( {file: 'C.S/logIBC.js'});
}); 
    
$('#clientSegment').click(function () {
    chrome.tabs.executeScript( {file: 'C.S/clientSegment.js'});
});     
  
    
//End 
});


// Analytics Code
var _AnalyticsCode = 'UA-97981252-1';
var _gaq = _gaq || [];

_gaq.push(['_setAccount', _AnalyticsCode]);
_gaq.push(['_trackPageview']);

(function() {
  var ga = document.createElement('script');
  ga.type = 'text/javascript';
  ga.async = true;
  ga.src = 'https://ssl.google-analytics.com/ga.js';
  var s = document.getElementsByTagName('script')[0];
  s.parentNode.insertBefore(ga, s);
})();

// Analytics Button Click Event
function trackButtonClick(e) {
  _gaq.push(['_trackEvent', e.target.id, 'clicked']);
}

document.addEventListener('DOMContentLoaded', function () {
  var buttons = document.querySelectorAll('.myButton');
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', trackButtonClick);
  }
});

//Popup functions
$(function () {

    $('#createCase').click(function () {
        if($("#FirstName").val() != "" && $("#LastName").val() != ""){ 
            var config = {firstName:  $("#FirstName").val(),
                          lastName:   $("#LastName").val()};
            chrome.tabs.executeScript( {
            code: 'var config ='+ JSON.stringify(config) 
        }, function() {
            chrome.tabs.executeScript( {file: 'C.S/contactScraper.js'});
        });
        } else {
            chrome.tabs.executeScript( {file: 'C.S/scraper.js'});
        }
    });
    
});


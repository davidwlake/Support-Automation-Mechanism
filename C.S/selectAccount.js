var i = 0;
var accountID = "-1";
var dataBuffer = document.getElementsByClassName("dataCell");

chrome.storage.sync.get('accountID', function (items) {
    if(items.accountID) {
     accountID = items.accountID;
        
      for (i = 0; i < dataBuffer.length; i++) {
        if (hasUpperCase(dataBuffer[i].innerText) != true &&
            dataBuffer[i+5].innerText == "Service Account"
           ) {
            var linkHref = dataBuffer[i].getElementsByTagName("a")[0].href;
            var sfID = linkHref.slice(49,64);
            var url = "https://dealertrack-production--c.na26.visual.force.com/apex/MLCSelectionPage?def_account_id="+ sfID +"&FromNewCase=true&PSAProject=null&RecordType=012600000009PeO";  
            
            window.open(url, '_top');

            break;
        }
      }// End For */

    }
});




function hasUpperCase(str) {
    if(str.toLowerCase() != str) {
        return true;
    }
    return false;
}

//////////////////
// 
// Anylstics
//
/////////////////

var _AnalyticsCode = 'UA-106814047-1';
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
 

chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
      if (request.report == "analytics"){
        _gaq.push(['_trackEvent', request.package , 'clicked']);    
      }
});

//////////////
//
// Commands
//
/////////////

try {
    chrome.commands.onCommand.addListener(function (command) {
        chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
            chrome.tabs.sendMessage(tabs[0].id, { text: command });
        });
    });
} catch (err) {
    console.log(err.message);
}


var menuItem = {
    "id": "samCuts",
    "title": "SAM Cuts",
    "contexts": ["all"]
};

var influxView = {
    "id": "influxView",
    "title": "Influx View",
    "contexts": ["all"],
    "parentId": "samCuts"
};
var pageInComposer = {
    "id": "pageInComposer",
    "title": "Page In Composer",
    "contexts": ["all"],
    "parentId": "samCuts"
};
var inventory = {
    "id": "inventory",
    "title": "Inventory / Audit Trail",
    "contexts": ["all"],
    "parentId": "samCuts"
};
var mpr = {
    "id": "mpr",
    "title": "MPR",
    "contexts": ["all"],
    "parentId": "samCuts"
};
chrome.contextMenus.create(menuItem);
chrome.contextMenus.create(influxView);
chrome.contextMenus.create(pageInComposer);
chrome.contextMenus.create(inventory);
chrome.contextMenus.create(mpr);

chrome.contextMenus.onClicked.addListener(function (clickData) {

    if (clickData.menuItemId == "influxView") {

        chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
            chrome.tabs.sendMessage(tabs[0].id, { text: 'influx' });
        });
    }
    if (clickData.menuItemId == "pageInComposer") {

        chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
            chrome.tabs.sendMessage(tabs[0].id, { text: 'composer' });
        });
    }
    if (clickData.menuItemId == "mpr") {

        chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
            chrome.tabs.sendMessage(tabs[0].id, { text: 'mpr' });
        });
    }
    if (clickData.menuItemId == "inventory") {

        chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
            chrome.tabs.sendMessage(tabs[0].id, { text: 'inventory' });
        });
    }
});

chrome.runtime.onMessage.addListener(function (msg, sender) {
    // First, validate the message's structure
    if ((msg.from === 'content') && (msg.subject === 'showPageAction')) {
      // Enable the page-action for the requesting tab
      chrome.pageAction.show(sender.tab.id);
    }
  });

/*

var ddcLinks = {
   "id": "ddcLinks",
   "title": "DDC Website Links",
   "contexts":["all"]
}; 

var influxView = {
   "id": "influxView",
   "title": "Influx View",
   "contexts":["all"],
   "parentId": "Inventory"
};  
var exportView = {
   "id": "exportView",
   "title": "Export View",
   "contexts":["all"],
   "parentId": "Inventory"
};  
var pageInComposer = {
   "id": "pageInComposer",
   "title": "Page In Composer",
   "contexts":["all"],
   "parentId": "ddcLinks"
};  
var dnaById = {
   "id": "dnaById",
   "title": "Account in DNA",
   "contexts":["all"],
   "parentId": "ddcLinks"
};

var dataView = {
   "id": "dataView",
   "title": "Data Viewer",
   "contexts":["all"],
   "parentId": "ddcLinks"
};  


chrome.contextMenus.create(menuItem);

chrome.contextMenus.create(influxView);
chrome.contextMenus.create(exportView);
chrome.contextMenus.create(ivr);

chrome.contextMenus.create(pageInComposer);
chrome.contextMenus.create(dnaById);

chrome.contextMenus.create(dataView);


chrome.contextMenus.onClicked.addListener(function (clickData) {
    
    if(clickData.menuItemId == "IVR" && clickData.selectionText){  
        
        chrome.tabs.executeScript( {
            code: 'var url ='+ JSON.stringify("http://influxtools.dealer.com/cgi-bin/feed_archives.cgi?action=vehicleQuery&vin="+clickData.selectionText) 
        }, function() {
            chrome.tabs.executeScript( {file: 'C.S/goTo.js'});
        });
        
    }
 
    
if(clickData.menuItemId == "dataView" && clickData.selectionText){  
        window.open("lib/pages/dataView.html", '_blank');
    } else  if(clickData.menuItemId == "dataView"){
     function doStuffWithID(accountId) {
          window.open("lib/pages/dataView.html?&dealerid=" + accountId, '_blank');
     }
     chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
         chrome.tabs.sendMessage(tabs[0].id, {text: 'getID'}, doStuffWithID);
     });
     
 }
    
    
    
    
    if(clickData.menuItemId == "pageInComposer"){  
     function doStuffWithID(data) {
         var url = 
        chrome.tabs.executeScript( {
            code: 'var url ='+ JSON.stringify(url) 
        }, function() {
            chrome.tabs.executeScript( {file: 'C.S/goTo.js'});
        });
     }
     chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
         chrome.tabs.sendMessage(tabs[0].id, {text: 'getPage'}, doStuffWithID);
     });
     
 }
    
    
    
    
    
    
  if(clickData.menuItemId == "influxView" && clickData.selectionText){  
    var url = "http://influxtools.dealer.com//cgi-bin/feed_archives.cgi?action=viewDealer&dealerid=" + clickData.selectionText.replace(" ", "");
    chrome.tabs.executeScript( {
        code: 'var url ='+ JSON.stringify(url) 
    }, function() {
        chrome.tabs.executeScript( {file: 'C.S/goTo.js'});
    });      
   } else  if(clickData.menuItemId == "influxView"){
     function doStuffWithID(accountId) {
        var url = "http://influxtools.dealer.com//cgi-bin/feed_archives.cgi?action=viewDealer&dealerid=" + accountId;
        chrome.tabs.executeScript( {
            code: 'var url ='+ JSON.stringify(url) 
        }, function() {
            chrome.tabs.executeScript( {file: 'C.S/goTo.js'});
        });         
     }
     chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
         chrome.tabs.sendMessage(tabs[0].id, {text: 'getID'}, doStuffWithID);
     });
     
 }
  if(clickData.menuItemId == "dnaById" && clickData.selectionText){  
    var url = "http://dna.dealer.com/views/main?currentModule=ClientsRedirect&currentURI=/views/clients/link-to-client-dashboard%3FaccountId=" + clickData.selectionText.replace(" ", "");
    chrome.tabs.executeScript( {
            code: 'var url ='+ JSON.stringify(url) 
    }, function() {
        chrome.tabs.executeScript( {file: 'C.S/goTo.js'});
    });      
   } else  if(clickData.menuItemId == "dnaById"){
     function doStuffWithID(accountId) {
          var url = "http://dna.dealer.com/views/main?currentModule=ClientsRedirect&currentURI=/views/clients/link-to-client-dashboard%3FaccountId=" + accountId;
        chrome.tabs.executeScript( {
            code: 'var url ='+ JSON.stringify(url) 
        }, function() {
            chrome.tabs.executeScript( {file: 'C.S/goTo.js'});
        }); 
     }
     chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
         chrome.tabs.sendMessage(tabs[0].id, {text: 'getID'}, doStuffWithID);
     });
     
 }
    
  if(clickData.menuItemId == "exportView" && clickData.selectionText){  
    var url = "http://influxtools.dealer.com//cgi-bin/export.cgi?action=viewExportConf&string=="  + clickData.selectionText.replace(" ", "");
    chrome.tabs.executeScript( {
        code: 'var url ='+ JSON.stringify(url) 
    }, function() {
        chrome.tabs.executeScript( {file: 'C.S/goTo.js'});
    });       
   } else  if(clickData.menuItemId == "exportView"){
     function doStuffWithID(accountId) {
        var url = "http://influxtools.dealer.com//cgi-bin/export.cgi?action=viewExportConf&string==" + accountId;
        chrome.tabs.executeScript( {
            code: 'var url ='+ JSON.stringify(url) 
        }, function() {
            chrome.tabs.executeScript( {file: 'C.S/goTo.js'});
        });          
     }
     chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
         chrome.tabs.sendMessage(tabs[0].id, {text: 'getID'}, doStuffWithID);
     });
     
 }
    
});

*/
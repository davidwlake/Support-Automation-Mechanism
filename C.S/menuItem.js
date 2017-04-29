var menuItem = {
   "id": "Inventory",
   "title": "Inventory",
   "contexts":["selection"]
}; 
var ivr = {
   "id": "IVR",
   "title": "Influx Vehicle Record",
   "contexts":["selection"],
    "parentId": "Inventory"
};  
   
chrome.contextMenus.create(menuItem);
chrome.contextMenus.create(ivr);

chrome.contextMenus.onClicked.addListener(function (clickData) {
   if(clickData.menuItemId == "IVR" && clickData.selectionText){  
    window.open("http://influxtools.dealer.com/cgi-bin/feed_archives.cgi?action=vehicleQuery&vin=" + clickData.selectionText.replace(" ", ""), '_blank');
   }
});
chrome.runtime.onMessage.addListener(function(msg, sender, sendResponse) {
    function getSelectedText() {
    var text = "";
    if (typeof window.getSelection != "undefined") {
        text = window.getSelection().toString();
    } else if (typeof document.selection != "undefined" && document.selection.type == "Text") {
        text = document.selection.createRange().text;
    }
    return text;
}
function winLocation(term) {
    return window.location.href.includes(term);
}
function getData() {
    var url = window.location.href;
    var splitUrl = url.split(/-|[/]|[.]/);
    var length = splitUrl.length;
    if (splitUrl[length - 2].length === 32) {
        var vehID = splitUrl[length - 2];
    } else {
        var vehID = "NONE";
    }
    var vin = document.body.innerHTML.match(/[">]{1}[0-9A-Z]{8}[0-9X]{1}[0-9A-Z]{3}[0-9]{5}["<]{1}/);
    var classification = "NONE";
    switch (true) {
            case winLocation("exotic-new"):
                classification = "Exotic new"
                break;
            case winLocation("commercial-new"):
                classification = "Exotic new"
                break;
            case winLocation("new"):
                classification = "Primary new"
                break;
            case winLocation("exotic-used"):
                classification = "Exotic used"
                break;
            case winLocation("commercial-used"):
                classification = "Exotic used"
                break;
            case winLocation("certified"):
                classification = "certified"
                break;
            case winLocation("bargain"):
                classification = "Exotic used"
                break;
            case winLocation("used"):
                classification = "Primary used"
                break;
            default:
                break;
        }
    if(vin) {
        vin = vin[0].replace(/["]/g, '');
    if (vin.length != 17) {
        var vin = "NONE";
    }
    }


    if (url.includes(".composer.dealer.com")) {
        var accountid = url.split('.composer')[0].split('//')[1];
        var pageURL = "";
    } else {
        var accountid = document.body.innerHTML.match(/^accountId: '(.*?)'/gm)[0].slice(12, -1);
        if (url.includes(".com")) {
            var pageURL = url.split(".com")[1];
        } else if(url.includes(".net")) {
            var pageURL = url.split(".net")[1];
        } else if(url.includes(".ca")){
            var pageURL = url.split(".ca")[1];
        }
    }

    return [accountid, pageURL, vehID, url, vin, classification];
}
    // If the received message has the expected format...
    var selectedText = getSelectedText();
    var data = getData();
    if (selectedText) {
        switch (msg.text) {
            case "influx":
                window.open("http://influxtools.dealer.com/cgi-bin/feed_archives.cgi?action=vehicleQuery&vin=" + selectedText, '_blank');
                break;
            case "composer":
                window.open("http://" + selectedText + ".composer.dealer.com/website/as/" + selectedText + "/" + selectedText + "-admin/composer/index#", '_blank');
                break;
            case "mpr":
                window.open("https://apps.dealer.com/analytics/as/"+ selectedText +"/" + selectedText + "-admin/report/executive-summary", '_blank');               window.open("https://apps.dealer.com/analytics/as/"+ selectedText +"/" + selectedText + "-admin/report/referral-details?defaultDataTableColumns=referrerChannel%2Cvisits%2CqualityVisits%2CavgQualityScore%2CbounceRate%2CformSubmissions%2CvdpViewsPerVisit%2CavgTimeOnSite%2CformSubmissionRate%2CpageViewsPerVisit", '_blank');
                break;
            case "inventory":
                window.open("https://apps.dealer.com/inventory/as/"+ selectedText + "/"+ selectedText +"-admin/i/index#/vehicle~summary?quickFilter=all", '_blank');
                break;
            default:
        }
    } else {
        switch (msg.text) {
            case "influx":
                if (data[2] != "NONE") {
                    window.open("http://influxtools.dealer.com/cgi-bin/feed_archives.cgi?action=vehicleQuery&vin=" + data[2], '_blank');
                } else {
                    window.open("http://influxtools.dealer.com//cgi-bin/feed_archives.cgi?action=viewDealer&dealerid=" + data[0], '_blank');
                }
                break;
            case "composer":
                window.open("http://" + data[0] + ".composer.dealer.com/website/as/" + data[0] + "/" + data[0] + "-admin/composer/index#?goTo=" + data[1], '_blank');
                break;
            case "mpr":
                window.open("https://apps.dealer.com/analytics/as/"+ data[0] +"/" + data[0] + "-admin/report/executive-summary", '_blank');  
                 setTimeout( function(){
                    window.open("https://apps.dealer.com/analytics/as/"+ data[0] +"/" + data[0] + "-admin/report/referral-details?defaultDataTableColumns=referrerChannel%2Cvisits%2CqualityVisits%2CavgQualityScore%2CbounceRate%2CformSubmissions%2CvdpViewsPerVisit%2CavgTimeOnSite%2CformSubmissionRate%2CpageViewsPerVisit", '_blank');
                }, 500 );
                
                break;
            case "inventory":
                if (data[2] != "NONE") {
                    window.open("https://apps.dealer.com/inventory/as/" + data[0]+ "/" + data[0] + "-admin/i/index#/vehicle~summary?vin=" + data[4] + "&history", '_blank');
                } else {
                    window.open("https://apps.dealer.com/inventory/as/"+ data[0] + "/"+ data[0] +"-admin/i/index#/vehicle~summary?quickFilter=all", '_blank');
                }
                break;   
            default:
        }
    }

});


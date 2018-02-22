var url = window.location.href;

if(url.includes(".composer.dealer.com")){
    var accountid = url.split('.composer')[0].split('//')[1];
    var pageURL = url.split(".com")[2];
} else if ((url.includes("admiral.dealer.com") || url.includes("admiral-ui.dealer.com")) && !(url.includes("templates") || url.includes("releases"))){
    switch(true){
        case /extensionsManager/.test(url):
            var accountid = url.split("/")[url.split("/").length-2];
            if(/\?/.test(accountid))
                accountid = accountid.split("?")[0];
            break;
        default:
            var accountid = url.split("/")[url.split("/").length-1];
            if(/\?/.test(accountid))
                accountid = accountid.split("?")[0];
            break;
    }
} else {
    var accountid = document.body.innerHTML.match(/^accountId: '(.*?)'/gm)[0].slice(12,-1);
    if (url.includes(".com")) {
        var pageURL = url.split(".com")[1];
    } else {
        var pageURL = url.split(".net")[1];
    }
}

if(config.includeCMS){
    template.cms += "\n General CMS Link: \n";
    template.cms += "http://"+ accountid + ".cms.dealer.com\n";
}

if(config.currentCMS){
    template.cms += url + "\n";
}

if(config.includeVLP){
    template.cms += "http://" + accountid + ".cms.dealer.com/new-inventory/index.htm\n";
    template.cms += "http://" + accountid + ".cms.dealer.com/used-inventory/index.htm\n";
    template.cms += "http://" + accountid + ".cms.dealer.com/certified-inventory/index.htm\n";
}

if(config.includeVDP){
    template.cms += "http://" + accountid + ".cms.dealer.com/new-inventory/vehicle-details.htm\n";
    template.cms += "http://" + accountid + ".cms.dealer.com/used-inventory/vehicle-details.htm\n";
    template.cms += "http://" + accountid + ".cms.dealer.com/certified-inventory/vehicle-details.htm\n";
}

if(config.includeShowRoom){
    template.cms += "http://" + accountid + ".cms.dealer.com/showroom/index.htm\n";
}


if(accountid !== undefined || accountid !== null ){
            window.sessionStorage.setItem("accountID",accountid);
        var url = "https://dealertrack-production.my.salesforce.com/00O0e000004iSLk?pv0=" + accountid+ "&?" + encodeURIComponent(JSON.stringify(template))+"?"+encodeURIComponent(JSON.stringify(config));
        window.open(url, '_blank');
};

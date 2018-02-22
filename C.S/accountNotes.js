var url = window.location.href;

if(url.includes(".composer.dealer.com")){
    var accountid = url.split('.composer')[0].split('//')[1];
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
}

if(accountid !== undefined || accountid !== null ){
        var url = "https://dealertrack-production.my.salesforce.com/00O0e000004iSLk?pv0=" + accountid + "&runTime=Display";
        window.open(url, '_blank');
};

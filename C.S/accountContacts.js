var url = window.location.href;

if(url.includes(".composer.dealer.com")){
    var accountid = url.split('.composer')[0].split('//')[1];
    var pageURL = url.split(".com")[2];
} else {
    var accountid = document.body.innerHTML.match(/^accountId: '(.*?)'/gm)[0].slice(12,-1);
    if (url.includes(".com")) {
        var pageURL = url.split(".com")[1];
    } else {
        var pageURL = url.split(".net")[1];
    }
}
if(config.isCMS){
    template.cms += pageURL;
}

if(accountid !== undefined || accountid !== null ){
            window.sessionStorage.setItem("accountID",accountid);
        var url = "https://dealertrack-production.my.salesforce.com/00O0e000004iSLk?pv0=" + accountid+ "&?" + encodeURIComponent(JSON.stringify(template))+"?"+encodeURIComponent(JSON.stringify(config));
        window.open(url, '_blank');
};
 
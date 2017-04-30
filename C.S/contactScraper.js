var url = window.location.href;

if(url.includes(".composer.dealer.com")){
    var accountid = url.split('.composer')[0].split('//')[1];
} else {
    var accountid = document.body.innerHTML.match(/^accountId: '(.*?)'/gm)[0].slice(12,-1);
}


if(accountid !== undefined || accountid !== null ){
        window.sessionStorage.setItem("accountID",accountid)
        var url = "https://dealertrack-production.my.salesforce.com/00O32000004mUKC?pv0=" + accountid + "&?firstName=" + config.firstName + "&?lastName=" + config.lastName;
        window.open(url, '_blank');
};
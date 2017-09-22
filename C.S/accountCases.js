var url = window.location.href;

if(url.includes(".composer.dealer.com")){
    var accountid = url.split('.composer')[0].split('//')[1];
} else {
    var accountid = document.body.innerHTML.match(/^accountId: '(.*?)'/gm)[0].slice(12,-1);
}

if(accountid !== undefined || accountid !== null ){
        var url = "https://dealertrack-production.my.salesforce.com/00O0e000004q94B?pv0=" + accountid + "&pv3=" + accountid;
        window.open(url, '_blank');
};
    


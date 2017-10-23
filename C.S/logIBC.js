var url = window.location.href;

if(url.includes(".composer.dealer.com")){
    var accountid = url.split('.composer')[0].split('//')[1];
    if(accountid !== undefined || accountid !== null ){
        window.sessionStorage.setItem("accountID",accountid);
        var url = "https://dealertrack-production.my.salesforce.com/00O0e000004iSQB?pv1=" + accountid + "&runTime=IBC";
        window.open(url, '_blank');
    }
} else if(url.includes("salesforce.com/500")){ 
    var url = "https://dealertrack-production.my.salesforce.com/00T/e?what_id=" + window.location.href.split(".com/")[1].substring(0,15) + "&retURL=%2F" + window.location.href.split(".com/")[1].substring(0,15) + "&RecordType=012320000001Ewh&ent=Task&runTime=IBC";
    window.open(url, '_blank');
} else {
    var accountid = document.body.innerHTML.match(/^accountId: '(.*?)'/gm)[0].slice(12,-1);
    if(accountid !== undefined || accountid !== null ){
        window.sessionStorage.setItem("accountID",accountid);
        var url = "https://dealertrack-production.my.salesforce.com/00O0e000004iSQB?pv1=" + accountid + "&runTime=IBC";
        window.open(url, '_blank');
    }
}


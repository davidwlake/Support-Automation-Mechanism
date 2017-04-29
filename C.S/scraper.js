var url = window.location.href;

if(url.includes(".composer.dealer.com")){
    var accountid = url.split('.composer')[0].split('//')[1];
} else {
    var accountid = document.body.innerHTML.match(/^accountId: '(.*?)'/gm)[0].slice(12,-1);
}


if(accountid !== undefined || accountid !== null ){
    chrome.storage.sync.set({"accountID" : accountid}, function() {
        var url = "https://dealertrack-production.my.salesforce.com/_ui/search/ui/UnifiedSearchResults?searchType=2&sen=001&sen=003&sen=00T&sen=005&sen=00U&sen=500&sen=a6R&sen=00O&str="+ accountid + "#!/fen=001&initialViewMode=detail&str=" + accountid;
        window.open(url, '_blank');
    });
    

};

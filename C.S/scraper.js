
var accountid = document.body.innerHTML.match(/^accountId: '(.*?)'/gm);

if(accountid !== undefined || accountid !== null ){
    var acctid = accountid.toString(); // if active window has a DDC account ID, change to a string
	var acct = acctid.slice(12,-1);
    
    chrome.storage.sync.set({"accountID" : acct}, function() {
        var url = "https://dealertrack-production.my.salesforce.com/_ui/search/ui/UnifiedSearchResults?searchType=2&sen=001&sen=003&sen=00T&sen=005&sen=00U&sen=500&sen=a6R&sen=00O&str="+ acct + "#!/fen=001&initialViewMode=detail&str=" + acct;
        window.open(url, '_blank');

    });
    

};

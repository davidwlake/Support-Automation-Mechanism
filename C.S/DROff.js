var urlTemp = window.location.href;
template.cms = urlTemp;

var url = "https://dealertrack-production.my.salesforce.com/00O32000004mUKC?pv0=-1" + "&?" + encodeURIComponent(JSON.stringify(template))+"?"+encodeURIComponent(JSON.stringify(config)) + "&?runTime=OffPlat"; 
window.open(url, '_blank');

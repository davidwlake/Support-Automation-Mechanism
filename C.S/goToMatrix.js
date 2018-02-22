function winLocation(term) {
    return window.location.href.includes(term);
}
var url = window.location.href;

if(winLocation("dealertrack-production.my.salesforce.com/500")) {
    template.cms += "\nGeneral CMS Link: \n";    
    template.cms += "http://{accountId}.cms.dealer.com\n";
    
    if(config.currentCMS){
        template.cms += "\nCurrent CMS Link: \n";    
        template.cms += url + "\n";
    }
    
    if(config.includeVLP){
        template.cms += "\nVehicle Listing Pages: \n";    
        template.cms += "http://{accountId}.cms.dealer.com/new-inventory/index.htm\n";
        template.cms += "http://{accountId}.cms.dealer.com/used-inventory/index.htm\n";
        template.cms += "http://{accountId}.cms.dealer.com/certified-inventory/index.htm\n";
    }
    
    if(config.includeVDP){
        template.cms += "\nVehicle Details Pages: \n";        
        template.cms += "http://{accountId}.cms.dealer.com/new-inventory/vehicle-details.htm\n";
        template.cms += "http://{accountId}.cms.dealer.com/used-inventory/vehicle-details.htm\n";
        template.cms += "http://{accountId}.cms.dealer.com/certified-inventory/vehicle-details.htm\n";
    }
    
    if(config.includeShowRoom){
        template.cms += "\nShowroom Index Page: \n";            
        template.cms += "http://{accountId}.cms.dealer.com/showroom/index.htm\n";
    }

    localStorage.setItem("SAM:matrixTemplate", JSON.stringify(template));
    localStorage.setItem("SAM:matrixTemplateFlag", true);
    
    document.getElementsByName("new_matrix")[0].click();
} else {
        template.cms += "\nGeneral CMS Link: \n";    
        template.cms += "http://{accountId}.cms.dealer.com\n";
    
    
    if(config.currentCMS){
        template.cms += "\nCurrent CMS Link: \n";    
        template.cms += url + "\n";
    }
    
    if(config.includeVLP){
        template.cms += "\nVehicle Listing Pages: \n";    
        template.cms += "http://{accountId}.cms.dealer.com/new-inventory/index.htm\n";
        template.cms += "http://{accountId}.cms.dealer.com/used-inventory/index.htm\n";
        template.cms += "http://{accountId}.cms.dealer.com/certified-inventory/index.htm\n";
    }
    
    if(config.includeVDP){
        template.cms += "\nVehicle Details Pages: \n";        
        template.cms += "http://{accountId}.cms.dealer.com/new-inventory/vehicle-details.htm\n";
        template.cms += "http://{accountId}.cms.dealer.com/used-inventory/vehicle-details.htm\n";
        template.cms += "http://{accountId}.cms.dealer.com/certified-inventory/vehicle-details.htm\n";
    }
    
    if(config.includeShowRoom){
        template.cms += "\nShowroom Index Page: \n";            
        template.cms += "http://{accountId}.cms.dealer.com/showroom/index.htm\n";
    }
    var url = "https://dealertrack-production.my.salesforce.com/00O0e000004iXtN?pv0=" + config.caseNumber + "&?" + encodeURIComponent(JSON.stringify(template));
    window.open(url, '_blank');
}
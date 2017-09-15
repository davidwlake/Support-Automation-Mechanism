$(function () {
    if(localStorage.getItem("SAM:runTime")=="Edit"){
        var config = JSON.parse(decodeURIComponent(localStorage.getItem("SAM:config")));
        var template = JSON.parse(decodeURIComponent(localStorage.getItem("SAM:template")));

        $("#cas5").val(template.type);
        
        if(config.internal == true){
            $("#cas11").val("Internal")
        }
        
        if(config.roc == true){
            localStorage.setItem("SAM:runTime", "ROC");
            $("input[name='save']")[0].click();
        } else {
            localStorage.setItem("SAM:runTime", "Done");
            $("input[name='save']")[0].click();
        }
        
        
    }
});
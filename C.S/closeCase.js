$(function () {
    if(localStorage.getItem("SAM:runTime")=="ROC"){
        localStorage.setItem("SAM:runTime","Done");
        var template = JSON.parse(decodeURIComponent(localStorage.getItem("SAM:template")));

        $("#cas7").val("Resolved Confirmed");
        $("#cas6").val(template.reason);
        $("#00N60000002HUjy").click();
    }
});
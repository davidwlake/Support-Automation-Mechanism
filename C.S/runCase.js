$(function () {
    if(localStorage.getItem("SAM:runTime")=="True"){
        localStorage.setItem("SAM:runTime", "Edit");
        $("input[name='edit']")[0].click();
    } else if(localStorage.getItem("SAM:runTime")=="ROC")  {
        $("input[name='close']")[0].click()

    }
});
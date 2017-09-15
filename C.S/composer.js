var url = window.location.href ;
    if(url.includes("?goTo=")){
        //alert("Go TO");
        var goTo = url.split("?")[1].split("goTo=")[1];
        console.log(goTo);
        setTimeout(function(){$("iframe").attr("src", goTo +"?_renderer=desktop&buildingPage=false&useAjaxWrap=true&locale=en_US&_variant=CONTROL");
        window.location.href = url.split("?")[0];}, 1000);

        
    }
    

setTimeout(function(){ 

function setPriorityColor(){
    var SFDocument = window.frames["ext-comp-1005"].document;
    
    SFDocument.onchange = function(){setTimeout(function(){ setPriorityColor(); }, 2000);};
    SFDocument.querySelectorAll('[id*="_refresh"]')[0].addEventListener('click', function(){setTimeout(function(){ setPriorityColor(); }, 1000);}, false);

    if(document.getElementById("ext-gen33").innerText == "Matrix"){
        var elements = SFDocument.querySelectorAll('[id*="_00N60000002zGKS"]');
    } else {
        var elements = SFDocument.querySelectorAll('[id*="_CASES_PRIORITY"]');
    }
    
    for(i = 0; i < elements.length; i++){
        switch(elements[i].innerText) {
            case "P5-Low - Feature Request":	
                elements[i].style.backgroundColor = "rgba(66,139,202,0.75)"; //Light blue
                elements[i].style.color = "white";
                elements[i].style.textShadow = "-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black";
                break;
            case "P3-Medium - Partial Impairment":
                elements[i].style.backgroundColor = "rgba(255,210,0,0.75)"; //Yellow
                elements[i].style.color = "white";
                elements[i].style.textShadow = "-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black";
                break;
            case "P2-High - Major Impairment": 
                elements[i].style.backgroundColor = "rgba(252,100,0,0.75)"; //Orange
                elements[i].style.color = "white";
                elements[i].style.textShadow = "-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black";
                break;
            case "P1-Critical - Total Outage": 
                elements[i].style.backgroundColor = "rgba(210,0,0,0.75)"; //Red
                elements[i].style.color = "white";
                elements[i].style.textShadow = "-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black";
                break;
                
            case "Low": 
                elements[i].style.backgroundColor = "rgba(0,135,255,0.75)"; //Light Green
                elements[i].style.color = "white";
                elements[i].style.textShadow = "-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black";
                break;
                
            case "Medium": 
                elements[i].style.backgroundColor = "rgba(0,160,0,0.75)"; //Dark Green
                elements[i].style.color = "white";
                elements[i].style.textShadow = "-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black";
                break;
                
            case "High": 
                elements[i].style.backgroundColor = "rgba(255,210,0,0.75)"; //Yellow
                elements[i].style.color = "white";
                elements[i].style.textShadow = "-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black";
                break;
                
            case "Critical": 
                elements[i].style.backgroundColor = "rgba(252,100,0,0.75)"; //Orange
                elements[i].style.color = "white";
                elements[i].style.textShadow = "-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black";
                break;
                
            case "Escalated (Prod Only)": 
                elements[i].style.backgroundColor = "rgba(210,0,0,0.75)"; //Red
                elements[i].style.color = "white";
                elements[i].style.textShadow = "-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black";
                break;
                
            default: //Priority is set to "None" or No Value
                //elements[i].style.backgroundColor = "green";                
         } // End Switch
    } // End For Loop
}



setPriorityColor();

}, 5000);
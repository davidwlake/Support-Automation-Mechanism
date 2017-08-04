$(function () {
    $("#subject").val(localStorage.getItem("SAM:subject"));
    $("#body").val(localStorage.getItem("SAM:body"));
    
    $("#clear").click(function() {
        $("#subject").val("");
        $("#body").val("");
        $("#save").click();
    });
    
    $("#save").click(function() {
        var subject = $("#subject").val(); 
        var body = $("#body").val(); 
        localStorage.setItem("SAM:subject", subject);
        localStorage.setItem("SAM:body", body);
        $("#alert").append("<div class=\"ui-widget\"> <div class=\"ui-state-highlight ui-corner-all elementToFadeInAndOut\" style=\"margin-top: 20px; padding: 0 .7em;\"><p><span class=\"ui-icon ui-icon-info\" style=\"float: left; margin-right: .3em;\"></span><strong>Default Template Set!</strong></p></div></div>");
        $('#accordion').accordion('option', {active: false});
        setTimeout(function() {
            $("#alert").empty();
        }, 4500);

    });
    
    $("#subject").click(function() {
        $("#addID").off();
        $("#addID").click(function() {
            $("#subject").insertAtCaret("{accountId}");
        });
        
        $("#addCMS").off();
        $("#addCMS").click(function() {
            $("#subject").insertAtCaret("{CMS}");
        });
    });
    
    $("#body").click(function() {
        $("#addID").off();
        $("#addID").click(function() {
            $("#body").insertAtCaret("{accountId}");
        });
        
        $("#addCMS").off();
        $("#addCMS").click(function() {
        $("#body").insertAtCaret("{CMS}");
        });     
    });
    
});

jQuery.fn.extend({
insertAtCaret: function(myValue){
  return this.each(function(i) {
    if (document.selection) {
      //For browsers like Internet Explorer
      this.focus();
      sel = document.selection.createRange();
      sel.text = myValue;
      this.focus();
    }
    else if (this.selectionStart || this.selectionStart == '0') {
      //For browsers like Firefox and Webkit based
      var startPos = this.selectionStart;
      var endPos = this.selectionEnd;
      var scrollTop = this.scrollTop;
      this.value = this.value.substring(0, startPos)+myValue+this.value.substring(endPos,this.value.length);
      this.focus();
      this.selectionStart = startPos + myValue.length;
      this.selectionEnd = startPos + myValue.length;
      this.scrollTop = scrollTop;
    } else {
      this.value += myValue;
      this.focus();
    }
  })
}
});
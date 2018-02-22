$(function () {
    $("#subject").val(localStorage.getItem("SAM:subject"));
    $("#body").val(localStorage.getItem("SAM:body"));
    
    $("#clear").click(function() {
        $("#subject").val("");
        $("#body").val("");
    });
    
    $("#save").click(function() {
        var subject = $("#subject").val(); 
        var body = $("#body").val(); 
        localStorage.setItem("SAM:subject", subject);
        localStorage.setItem("SAM:body", body);

        var url = "https://dealertrack-production--c.na26.visual.force.com/apex/?&subject=" + encodeURI(subject) + "?&body="+encodeURI(body);
        window.open(url);
    });
    
    $("#subject").click(function() {
        $("#addID").off();
        $("#addID").click(function() {
            $("#subject").insertAtCaret("{accountId}");
        });
    });
    
    $("#body").click(function() {
        $("#addID").off();
        $("#addID").click(function() {
            $("#body").insertAtCaret("{accountId}");
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
var i,x, table = [[],[]];

$( ".content" ).append( '<div id="dialog" title="Take Action"><button class="button-ui myButton" id="logACall_btn" name="logACall">Log A Call</button><button class="button-ui myButton" id="updateRequest_btn" name="updateRequest">Client Update Request</button><button class="button-ui myButton" id="npr_btn" name="npr">NPR</button></div>');

$( ".content" ).append('<div id="logACall_div" title="Log a Call"><p class="validateTips">All form fields are required.</p><form><fieldset><label for="name">Name</label><input type="text" name="name" id="name" value="Jane Smith" class="text ui-widget-content ui-corner-all"><br><label for="email">Email</label><input type="text" name="email" id="email" value="jane@smith.com" class="text ui-widget-content ui-corner-all"><br><label for="message">Message</label><textarea rows="4" cols="30" id="message"></textarea><br><input type="submit" ></fieldset></form></div>');

temp = document.getElementsByClassName("reportTable tabularReportTable")[0].rows;

for(i = 1; i < (temp.length - 2); i++){

temp[i].onclick = function() {
    var buffer = [];
    for(x = 0; x < this.cells.length; x++){
        buffer[x] = this.cells[x].innerText;
    }
    $( "#dialog" ).dialog( "open" );   
};
    for(x = 0; x < temp[i].cells.length; x++){
        table[i-1][x] = temp[i].cells[x].innerText;
            $(temp[i]).hover(function(){
                $(this).css("background-color", "yellow"); 
            }, function(){
                $(this).css("background-color", "");
            }); 
        }
}
setTimeout(function(){
  $( "#dialog" ).dialog({
      autoOpen: false,
      show: {
        effect: "blind",
        duration: 500
      },
      hide: {
        effect: "clip",
        duration: 200
      }
    });
     $( "#logACall_div" ).dialog({
      autoOpen: false,
      height: 400,
      width: 350,
      show: {
        effect: "blind",
        duration: 500
      },
      hide: {
        effect: "clip",
        duration: 200
      }
    });
    $( "#updateRequest_btn" ).button(); 
    $( "#npr_btn" ).button(); 

   
    $( "#logACall_btn" ).button();
    $('#logACall_btn').click(function () {
    $( "#logACall_div" ).dialog( "open" ); 
    $( "#logACall_div" ).find( "form" ).on( "submit", function( event ) {
      event.preventDefault();
        var name = $( "#name" ).val();
      window.open("https://docs.dealer.com/display/Support/S.A.M%27s+Space?" + name, '_blank');
    });
});

}, 500);




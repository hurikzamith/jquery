$("h1").css("color", "black");


$(document).keydown(function(event){
  var keyPressed = event.key;
  $("h1").html(keyPressed);
})

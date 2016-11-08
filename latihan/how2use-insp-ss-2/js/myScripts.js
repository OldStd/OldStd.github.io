/* js codes here */
function myFunction (num){
var ifrm_notes = document.getElementById("iframe_notes");
var nts = "step" + num + ".html";
ifrm_notes.src = nts;

var img_display1 = document.getElementById("img_display");
var wdsp = "images\\Step_" + num + ".png";
img_display1.src = wdsp;
}

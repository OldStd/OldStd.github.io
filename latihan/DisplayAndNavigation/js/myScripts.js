function myFunction (num){
var ifrm_notes = document.getElementById("iframe_notes");
var nts = "n" + num + ".html";
ifrm_notes.src = nts;

var lnk = document.getElementById("link2");
var href1 = "css\\ss" + num + ".css";
lnk.href=href1;
}
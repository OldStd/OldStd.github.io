/* js codes here */

function myFunction (num){


var lnk = document.getElementById("link2");
var href2 = "css\\ss" + num + ".css";
lnk.href=href2;

var rttdeg = 20 * num;


var spn = document.getElementById("spn1");
spn.innerHTML =  
" rotated by " + rttdeg + " degrees"
}
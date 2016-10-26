/* js codes here */

function myFunction (num){


var lnk = document.getElementById("link2");
var href2 = "css\\ss" + num + ".css";
lnk.href=href2;

var rightnum = 50 * num;
var downnum = 100 * num;

var spn = document.getElementById("spn1");
spn.innerHTML = "" + rightnum + " pixels to the right and " + downnum + " pixels down from the original position."


}
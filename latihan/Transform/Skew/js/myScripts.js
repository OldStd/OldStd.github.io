/* js codes here */


function myFunction (num){


var lnk = document.getElementById("link2");
var href2 = "css\\ss" + num + ".css";
lnk.href=href2;

var skw = 20 * num;


var spn = document.getElementById("spn1");
spn.innerHTML = " skewed by " + skw + " degrees"


}

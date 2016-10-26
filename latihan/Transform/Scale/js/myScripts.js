/* js codes here */


function myFunction (num){


var lnk = document.getElementById("link2");
var href2 = "css\\ss" + num + ".css";
lnk.href=href2;

var text;

       if (num==1){
            text = "This div element is two times of its original width, and three times of its original height.";
}else if (num==2)
        {
        text = "This div element is decreased to be half of its original width and height.";
    }
    else {text=="Error!"}
    
    document.getElementById("spn1").innerHTML = text;
}

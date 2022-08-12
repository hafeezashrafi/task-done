  function Store(){
    var n = document.getElementById("name").value;
    var p = document.getElementById("password").value;
    var Email = document.getElementById("mail").value;

   var name = localStorage.setItem("n", n);
   var password = localStorage.setItem("p" , p);
   var mail = localStorage.setItem("Email" , Email);

   var name = localStorage.getItem("n", n);
   var password = localStorage.getItem("p" , p);
   var mail = localStorage.getItem("Email" , Email);

   var a,b,c;
   a = "hafeez";
   b = 123456;
   c = "hafeezashrafi200@gmail.com";

   if (a == name && b == password && c==mail){
    alert("successful!!");
   }else{
    alert("rejected");
   }
}
 
 
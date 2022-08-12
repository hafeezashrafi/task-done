  function Store(){
    var name = document.getElementById("name").value;
    var password = document.getElementById("password").value;
    var Email = document.getElementById("mail").value;

   var n = localStorage.setItem("name", name);
   var p = localStorage.setItem("password" , password);
   var mail = localStorage.setItem("Email" , Email);

   var n = localStorage.getItem("name", n);
   var p = localStorage.getItem("password" , password);
   var mail = localStorage.getItem("Email" , Email);

   var a,b,c;
   a = "hafeez";
   b = 123456;
   c = "hafeezashrafi200@gmail.com";

   if (a == n && b == p && c==mail){
    alert("successful!!");
   }else{
    alert("rejected");
   }
}
 
 
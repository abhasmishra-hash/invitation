let birthday = new Date("July 25, 2026 00:00:00").getTime();

setInterval(function(){

let now=new Date().getTime();

let distance=birthday-now;

let days=Math.floor(distance/(1000*60*60*24));

document.getElementById("countdown").innerHTML=

days+" Days Left";

},1000);

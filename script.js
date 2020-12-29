let heure = document.getElementById("heure");
let minute = document.getElementById("minute");
let seconde = document.getElementById("seconde");
setInterval(()=>{
    heure.style.transform += "rotate(1deg)";
    minute.style.transform += "rotate(10deg)";
    seconde.style.transform += "rotate(20deg)";
}, 50)
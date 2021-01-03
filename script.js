let aiguilleHeure = document.getElementById("heure");
let aiguilleMinute = document.getElementById("minute");
let aiguilleSeconde = document.getElementById("seconde");
let date = new Date();
let time = date.getSeconds() + 60*date.getMinutes() + 3600*date.getHours()

aiguilleHeure.style.transform = "rotate("+time / 120+"deg)";
aiguilleMinute.style.transform = "rotate("+time / 10+"deg)";
aiguilleSeconde.style.transform = "rotate("+time * 6+"deg)";

setInterval(()=>{
    time++;
    aiguilleHeure.style.transform = "rotate("+time / 120+"deg)";
    aiguilleMinute.style.transform = "rotate("+time / 10+"deg)";
    aiguilleSeconde.style.transform = "rotate("+time * 6+"deg)";
}, 1000)
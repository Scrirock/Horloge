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

let mid = document.getElementById("mid");
let stroke = document.getElementById("stroke");
let midColor = document.getElementById("bgHexa1");
let strokeColor = document.getElementById("bgHexa2");

document.getElementById("bgRed").addEventListener("click",()=>{
    mid.style.fill = "#bf2536";
    stroke.style.fill = "#891125";
});

document.getElementById("bgBlue").addEventListener("click",()=>{
    mid.style.fill = "#405dae";
    stroke.style.fill = "#282e8e";
});

document.getElementById("bgGreen").addEventListener("click",()=>{
    mid.style.fill = "#1ab733";
    stroke.style.fill = "#007c18";
});

document.getElementById("bgDefault").addEventListener("click",()=>{
    mid.style.fill = "#caceff";
    stroke.style.fill = "#9c9fcc";
});

document.getElementById("bgValid").addEventListener("click",()=>{
    mid.style.fill = "#" + midColor.value;
    stroke.style.fill = "#" + strokeColor.value;

    midColor.value = "";
    strokeColor.value = "";
});

document.getElementById("red").addEventListener("click",()=>{
    aiguilleHeure.style.stroke = "#bf2536";
    aiguilleMinute.style.stroke = "#891125";
});

document.getElementById("blue").addEventListener("click",()=>{
    aiguilleHeure.style.stroke = "#405dae";
    aiguilleMinute.style.stroke = "#282e8e";
});

document.getElementById("green").addEventListener("click",()=>{
    aiguilleHeure.style.stroke = "#1ab733";
    aiguilleMinute.style.stroke = "#007c18";
});

document.getElementById("default").addEventListener("click",()=>{
    aiguilleHeure.style.stroke = "black";
    aiguilleMinute.style.stroke = "black";
});

let aiguilleColor = document.getElementById("hexa");

document.getElementById("valid").addEventListener("click",()=>{
    aiguilleHeure.style.stroke = "#" + aiguilleColor.value;
    aiguilleMinute.style.stroke = "#" + aiguilleColor.value;

    aiguilleColor.value = "";
});
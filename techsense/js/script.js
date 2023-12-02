// Script for Navigation Bar

let menuBox = document.getElementById("menuBox");
let menuIcon = document.getElementById("menuIcon");

menuIcon.onclick = function(){
    menuBox.classList.toggle("open-menu");

    if(menuBox.classList.contains("open-menu")){
        menuIcon.src = "images/close.png";
    }else{
        menuIcon.src = "images/menu.png";
    }
    }

// Script for Service Section

var service1 = document.getElementById("service1");
var service2 = document.getElementById("service2");
var service3 = document.getElementById("service3");
var service4 = document.getElementById("service4");
var btn1 = document.getElementById("btn1");
var btn2 = document.getElementById("btn2");
var btn3 = document.getElementById("btn3");
var btn4 = document.getElementById("btn4");

function openONE(){
    service1.style.transform = "translateX(0)";
    service2.style.transform = "translateX(100%)";
    service3.style.transform = "translateX(100%)";
    service4.style.transform = "translateX(100%)";
    btn1.style.backgroundColor = "#162044";
    btn2.style.backgroundColor = "transparent";
    btn3.style.backgroundColor = "#transparent";
    btn4.style.backgroundColor = "#transparent";
    btn1.style.color = "#fff";
    btn2.style.color = "#162044";
    btn3.style.color = "#162044";
    btn4.style.color = "#162044";
    service1.style.transitionDelay = "0.3s";
    service2.style.transitionDelay = "0s";
    service3.style.transitionDelay = "0s";
    service4.style.transitionDelay = "0s";
}

function openTWO(){
    service1.style.transform = "translateX(100%)";
    service2.style.transform = "translateX(0)";
    service3.style.transform = "translateX(100%)";
    service4.style.transform = "translateX(100%)";
    btn1.style.backgroundColor = "transparent";
    btn2.style.backgroundColor = "#162044";
    btn3.style.backgroundColor = "transparent";
    btn4.style.backgroundColor = "transparent";
    btn1.style.color = "#162044";
    btn2.style.color = "#fff";
    btn3.style.color = "#162044";
    btn4.style.color = "#162044";
    service1.style.transitionDelay = "0s";
    service2.style.transitionDelay = "0.3s";
    service3.style.transitionDelay = "0s";
    service4.style.transitionDelay = "0s";
}

function openTHREE(){
    service1.style.transform = "translateX(100%)";
    service2.style.transform = "translateX(100%)";
    service3.style.transform = "translateX(0)";
    service4.style.transform = "translateX(100%)";
    btn1.style.backgroundColor = "transparent";
    btn2.style.backgroundColor = "transparent";
    btn3.style.backgroundColor = "#162044";
    btn4.style.backgroundColor = "transparent";
    btn1.style.color = "#162044";
    btn2.style.color = "#162044";
    btn3.style.color = "#fff";
    btn4.style.color = "#162044";
    service1.style.transitionDelay = "0s";
    service2.style.transitionDelay = "0s";
    service3.style.transitionDelay = "0.3s";
    service4.style.transitionDelay = "0s";
}

function openFOUR(){
    service1.style.transform = "translateX(100%)";
    service2.style.transform = "translateX(100%)";
    service3.style.transform = "translateX(100%)";
    service4.style.transform = "translateX(0)";
    btn1.style.backgroundColor = "transparent";
    btn2.style.backgroundColor = "transparent";
    btn3.style.backgroundColor = "transparent";
    btn4.style.backgroundColor = "#162044";
    btn1.style.color = "#162044";
    btn2.style.color = "#162044";
    btn3.style.color = "#162044";
    btn4.style.color = "#fff";
    service1.style.transitionDelay = "0s";
    service2.style.transitionDelay = "0s";
    service3.style.transitionDelay = "0s";
    service4.style.transitionDelay = "0.3s";
}

// End


var positionX1 = 0;
var positionY1 = 0;
var velocity1 = 2;
var velocityX1 = 2;
var xMin = 0;
var XMax = (window.innerWidth);
var Ymin = 0;
var Ymax = (window.innerHeight);
var reverseBall1 = true;
var ball1 = document.getElementById("ball1")

function moveBall1(){
    if (reverseBall1){
        positionX1 = positionX1 + velocityX1;
        positionY1 = positionY1 + velocity1;
        ball1.style.left = positionX1 + "px";
        ball1.style.top = positionY1 + "px";
    }
    else {
        positionX1 = positionX1 + velocityX1;
        positionY1 = positionY1 - velocity1;
        ball1.style.left = positionX1 + "px";
        ball1.style.top = positionY1 + "px";
    }

    if ((positionY1 + 100) >= Ymax || positionY1 === Ymin) reverseBall1 = !reverseBall1;
    if ((positionX1 + 100) >= XMax || positionX1 === xMin) velocityX1 = -velocityX1;
}

setInterval (moveBall1, 10);

var positionX2 = 0;
var positionY2 = 0;
var velocity2 = 3;
var velocityX2 = 3;
var reverseBall2 = true;
var ball2 = document.getElementById("ball2")

function moveBall2(){
    if (reverseBall2){
        positionX2 = positionX2 + velocityX2;
        positionY2 = positionY2 + velocity2;
        ball2.style.left = positionX2 + "px";
        ball2.style.top = positionY2 + "px";
    }
    else {
        positionX2 = positionX2 + velocityX2;
        positionY2 = positionY2 - velocity2;
        ball2.style.left = positionX2 + "px";
        ball2.style.top = positionY2 + "px";
    }

    if ((positionY2 + 80) >= Ymax || positionY2 === Ymin) reverseBall2 = !reverseBall2;
    if ((positionX2 + 80) >= XMax || positionX2 === xMin) velocityX2 = -velocityX2;
}

setInterval (moveBall2, 10);

var positionX3 = 0;
var positionY3 = 0;
var velocity3 = 4;
var velocityX3 = 4;
var reverseBall3 = true;
var ball3 = document.getElementById("ball3")

function moveBall3(){
    if (reverseBall3){
        positionX3 = positionX3 + velocityX3;
        positionY3 = positionY3 + velocity3;
        ball3.style.left = positionX3 + "px";
        ball3.style.top = positionY3 + "px";
    }
    else {
        positionX3 = positionX3 + velocityX3;
        positionY3 = positionY3 - velocity3;
        ball3.style.left = positionX3 + "px";
        ball3.style.top = positionY3 + "px";
    }

    if ((positionY3 + 60) >= Ymax || positionY3 === Ymin) reverseBall3 = !reverseBall3;
    if ((positionX3 + 60) >= XMax || positionX3 === xMin) velocityX3 = -velocityX3;
}

setInterval (moveBall3, 10);

var positionX4 = 0;
var positionY4 = 0;
var velocity4 = 1;
var velocityX4 = 1;
var reverseBall4 = true;
var ball4 = document.getElementById("ball4")

function moveBall4(){
    if (reverseBall4){
        positionX4 = positionX4 + velocityX4;
        positionY4 = positionY4 + velocity4;
        ball4.style.left = positionX4 + "px";
        ball4.style.top = positionY4 + "px";
    }
    else {
        positionX4 = positionX4 + velocityX4;
        positionY4 = positionY4 - velocity4;
        ball4.style.left = positionX4 + "px";
        ball4.style.top = positionY4 + "px";
    }

    if ((positionY4 + 150) >= Ymax || positionY4 === Ymin) reverseBall4 = !reverseBall4;
    if ((positionX4 + 150) >= XMax || positionX4 === xMin) velocityX4 = -velocityX4;
}

setInterval (moveBall4, 10);
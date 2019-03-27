"use strict"

const WIDTH = 1024;
const HEIGHT = 576;

const img    = document.getElementById("logo");
const canvas = document.getElementById("canvas");

const ctx = canvas.getContext("2d");

const logo = {
    e: img,
    x: 0,
    y: 0,
    dx: 4,
    dy: 4
};

console.log(img.width);

function draw() {
    ctx.clearRect(0, 0, WIDTH, HEIGHT);

    ctx.drawImage(logo.e, logo.x, logo.y);

    logo.x += logo.dx;
    logo.y += logo.dy;

    if (logo.x + img.width  >= WIDTH  || logo.x <= 0) logo.dx *= -1;
    if (logo.y + img.height >= HEIGHT || logo.y <= 0) logo.dy *= -1;

    window.requestAnimationFrame(draw);
}

draw();
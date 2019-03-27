"use strict"

const WIDTH = 1024;
const HEIGHT = 576;
const DELTA  = 4;

const TARGETS = [
    {x: 0,       y: 0},   
    {x: WIDTH,   y: 0},     
    {x: 0,       y: HEIGHT},
    {x: WIDTH,   y: HEIGHT}
];

const img    = document.getElementById("logo");
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");



class Logo {
    constructor() {
        this.x = Math.floor(Math.random() * 500);
        this.y = Math.floor(Math.random() * 500);
        this.dx = DELTA;
        this.dy = DELTA;
        this.target = 0;
    }

    update(ctx) {
        this.x += this.dx;
        this.y += this.dy;
    
        if (this.x + img.width  >= WIDTH  || this.x <= 0) this.dx *= -1;
        if (this.y + img.height >= HEIGHT || this.y <= 0) this.dy *= -1;

        ctx.drawImage(img, this.x, this.y);
    }
}

const logos = []
for (let i = 0; i < 1; i++)
logos.push(new Logo());

function draw() {
    ctx.clearRect(0, 0, WIDTH, HEIGHT);

    for (const logo of logos) {
        logo.update(ctx);
    }



    window.requestAnimationFrame(draw);
}

draw();
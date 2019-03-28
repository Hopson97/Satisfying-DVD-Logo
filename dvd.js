"use strict"

const img = document.getElementById("logo");
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const logos = []
for (let i = 0; i < 2; i++)
logos.push(new Logo(img));

function draw() {
    ctx.clearRect(0, 0, WIDTH, HEIGHT);

    for (const logo of logos) {
        logo.update(ctx);
    }

    window.requestAnimationFrame(draw);
}
draw();
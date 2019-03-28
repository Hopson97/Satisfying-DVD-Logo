"use strict"

const img = document.getElementById("logo");
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

class Confetti {
    constructor(x, y) {
        this.x = x;
        this.y = y;

        this.vx = (Math.random() - 0.5) * 10;
        this.vy = -(Math.random()) * 30;
        this.start = getTime();
        this.colour = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;
    }

    update(ctx) {
        this.x += this.vx;
        this.y += this.vy;

        this.vy += 1;

        ctx.fillStyle = this.colour;
        ctx.fillRect(this.x, this.y, 5, 5);
    }
}

const logos = []
let confettis = [];

for (let i = 0; i < 2; i++)
    logos.push(new Logo(img));

function draw() {
    ctx.clearRect(0, 0, WIDTH, HEIGHT);

    for (const logo of logos) {
        if (logo.update(ctx)) {
            for (let i = 0; i < 100; i++) {
                confettis.push(new Confetti(
                    logo.x + logo.image.width  / 2, 
                    logo.y + logo.image.height / 2)
                );
            }
        }
    }

    for (const confeti of confettis) {
        confeti.update(ctx);
    }

    confettis = confettis.filter((v, i) => {
        return getTime() - v.start < 5;
    });

    window.requestAnimationFrame(draw);
}
draw();
"use strict";

class Logo {
    constructor(image) {
        this.image = image;

        this.x = Math.floor(Math.random() * 500);
        this.y = Math.floor(Math.random() * 200);
        this.dx = DELTA;
        this.dy = DELTA;
        this.target = 0;
        this.cornerCount = 0;
        this.targetIsCorner = false;

        this.targets = [
            {x: 0,                      y: 0},   
            {x: WIDTH - image.width,    y: 0},     
            {x: 0,                      y: HEIGHT - image.height},
            {x: WIDTH - image.width,    y: HEIGHT - image.height}
        ];
    }

    updateVel() {
        if (Math.random() * 100 > 60 || this.cornerCount > 2) {
            this.cornerCount = 0;
            return;
        }
        else {
            this.cornerCount++;
        }
        if (this.dx < 0 && this.dy < 0) {
            this.target = this.targets[0];
        }
        else if (this.dx > 0 && this.dy < 0) {
            this.target = this.targets[1];
        }
        else if (this.dx < 0 && this.dy > 0) {
            this.target = this.targets[2];
        }
        else if (this.dx > 0 && this.dy > 0) {
            this.target = this.targets[3];
        }

        const dx = -(this.x - this.target.x);
        const dy = -(this.y - this.target.y);

        const length = Math.sqrt(dx * dx + dy * dy);

        const vx = (dx / length) * DELTA;
        const vy = (dy / length) * DELTA;

        this.dx = vx;
        this.dy = vy;

        if (Math.abs(this.dx) < 0.01) {
            this.dx = this.dy;
        }
        else if (Math.abs(this.dy) < 0.05) {
            this.dy = this.dx;
        }

    }

    update(ctx) {
        this.x += this.dx;
        this.y += this.dy;

        let ret = false;

        
    
        if (this.x + this.image.width  >= WIDTH  || this.x <= 0) {
            this.dx *= -1;
            ret = true;
            this.updateVel();

        }
        if (this.y + this.image.height >= HEIGHT || this.y <= 0) {
            this.dy *= -1;
            ret = true;
            this.updateVel();
        }

        ctx.drawImage(this.image, this.x, this.y);

        return ret;
    }
}
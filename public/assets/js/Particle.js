// Particle.js

class Particle {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.lifetime = 255; // Duration of the particle's life
        this.size = random(5, 10); // Size of the particle
        this.speed = random(2, 5); // Speed of the particle
        this.angle = random(TWO_PI); // Direction of the particle
        this.color = color(random(255), random(255), random(255)); // Random color
    }

    update() {
        // Update particle position based on speed and angle
        this.x += this.speed * cos(this.angle);
        this.y += this.speed * sin(this.angle);
        this.lifetime -= 5; // Decrease lifetime
    }

    display() {
        noStroke();
        fill(this.color.levels[0], this.color.levels[1], this.color.levels[2], this.lifetime);
        ellipse(this.x, this.y, this.size);
    }
}

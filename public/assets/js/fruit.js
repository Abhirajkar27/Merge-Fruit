class Fruit {
    constructor(world, rannum) {
        this.color = fruitsdata[rannum].color;
        this.level = fruitsdata[rannum].level;
        this.size = fruitsdata[rannum].size;

        this.isfixed = true;
        this.radius = this.size;
        this.x = handpos[0];
        this.y = handpos[1];
// console.log(1000/this.size);
        // Setting restitution to make fruits bounce on any collision (ground or other fruits)
        const options = {
            restitution: 0.6, // Controls how bouncy the fruit is
            density: 10/this.size // Adjust density as needed
        };

        // Create the fruit's body with the bounce effect
        this.body = Bodies.circle(this.x, this.y, this.radius, options);
        Composite.add(world, [this.body]);
    }
    applyBounceEffect() {
        const bounceStrength = 0.1; // Adjust this value to control the bounce

        // Loop through all fruits in the world
        for (let fruit of fruits) {
            if (fruit === this) continue; // Skip self

            // Calculate distance between this fruit and other fruit
            let distance = dist(this.body.position.x, this.body.position.y,
                                fruit.body.position.x, fruit.body.position.y);

            // Apply bounce effect if within a certain range
            if (distance < 100) { // Adjust range as needed
                let angle = atan2(fruit.body.position.y - this.body.position.y,
                                   fruit.body.position.x - this.body.position.x);

                // Apply a bounce force to the neighboring fruit
                Matter.Body.applyForce(fruit.body, fruit.body.position, {
                    x: bounceStrength * cos(angle),
                    y: bounceStrength * sin(angle)
                });
            }
        }
    }
    display() {
        this.x = handpos[0];
        this.y = handpos[1];

        if (this.isfixed) {
            Matter.Body.setPosition(this.body, { x: this.x, y: this.y });
        }

        let pos = this.body.position;
        const angle = this.body.angle;
        const radius = this.body.circleRadius;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        noStroke();
        image(fruitsdata[this.level].image, -radius, -radius, radius * 2, radius * 2);
        pop();
    }
}

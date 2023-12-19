// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

// Simple Particle System

// A simple Particle class

class Particle {
  constructor(x, y, z,a) {
    this.position = createVector(x, y);
    this.velocity = createVector(0,1);
    this.velocity.rotate(z);
    this.acceleration = createVector(0, 0);
    this.lifespan = 500;
    this.co=a
  }

  run() {
    this.update();
    this.show();
  }

  applyForce(f) {
    this.acceleration.add(f);
  }

  // Method to update position
  update() {
    this.velocity.add(this.acceleration);
    this.position.add(this.velocity);
    this.lifespan -= 2;
    this.acceleration.mult(0);
  }

  // Method to display
  show() {
    noStroke()
    fill(10,this.co);
    
   ellipse(this.position.x, this.position.y,10,2);
  
  }

  // Is the particle still useful?
  isDead() {
    return this.lifespan < 0.0;
  }
}

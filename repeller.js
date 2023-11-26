class Repeller {
  constructor(x, y) {
    this.position = createVector(x, y);
    //{!1} How strong is the repeller?
    this.power = 0.3;
  }

  show() {
    stroke(0);
    strokeWeight(2);
    fill(127);
    circle(this.position.x, this.position.y, 32);
  }

  repel(particle) {
    //{!6 .code-wide} This is the same repel algorithm we used in Chapter 2: forces based on gravitational attraction.
   
    let force = p5.Vector.sub(this.position, particle.position);
    let distance = force.mag();
    
    if(distance>height/2-50){
      let strength = this.power/ distance*distance;
    force.setMag(strength);
      return force
    }
    else{
      let strength =-0.3* (this.power);
      force.setMag(strength);
        return force;

    }
  }
}

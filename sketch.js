// One ParticleSystem
let emitter;

//{!1} One repeller
let repeller;

function setup() {
  createCanvas(windowWidth,windowHeight);
  emitter = new Emitter(width / 2, 20);
  
}

function draw() {
  background(255);
 
  repeller = new Repeller(mouseX, mouseY);
  emitter.addParticle();
  // We’re applying a universal gravity.
  let gravity = createVector(0,0);
  emitter.applyForce(gravity);
  //{!1} Applying the repeller
  emitter.applyRepeller(repeller);
  emitter.run();


  repeller.show();
}

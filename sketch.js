// One ParticleSystem
let emitter;

//{!1} One repeller
let repeller;
let rotata=0;
let a=1000;
let b=1;
let c = 1;
let d;
function setup() {
  colorMode(HSB);
  createCanvas(windowWidth,windowHeight);
  emitter = new Emitter(width / 2, height/2);
  
}

function draw() {
  background(255);
  a+=0.0001
  b+=0.01
 c= sin(b)
 d= map(c,-1,1,0,330);
  repeller = new Repeller(width/2,height/2);
  for(i=0;i<20;i++){
    rotata=rotata+a;
  emitter.addParticle(rotata,d);
  };
  // We’re applying a universal gravity.
  let gravity = createVector(0,0);
  emitter.applyForce(gravity);
  //{!1} Applying the repeller
  emitter.applyRepeller(repeller);
  emitter.run();


  
}

// One ParticleSystem
let emitter;

//{!1} One repeller
let repeller;
let rotata=0;

let b=1;
let c = 1;
let d;
function setup() {
  colorMode(HSB);
  createCanvas(windowWidth,windowHeight);
  emitter = new Emitter(width / 2, height/2);
  slider1 = createSlider(0, 255);
  slider1.position(20, 20);
  slider2 = createSlider(0,100);
  slider2.position(20, 2);
  slider3 = createSlider(0,100);
  slider3.position(20, 38);
}

function draw() {

  const a = slider1.value();
  const alp = slider2.value();
  const sinn = slider3.value();
  let sinn2 = map(sinn,0,100,0,0.1);
  let alp2 = map(alp,0,100,0,1);
  background(255,alp2);
  b+=sinn2
 c= sin(b)
 d= map(c,-1,1,0,1);
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

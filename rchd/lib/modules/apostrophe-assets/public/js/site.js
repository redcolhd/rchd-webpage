const totalParticles = 5000;
let v;
let angle = 0;
let particles = [];
let mySketch;
let divfondo;

let urlactual = window.location.href;
console.log(urlactual);
if (urlactual == "http://localhost:3000/") {
  function setup() {
    mySketch = createCanvas(screen.width, screen.height, WEBGL);
    mySketch.parent("imagenFondoH");
    makeParticles();
    frameRate(180);
  }

  function draw() {
    background(0);
    rotateY(angle);
    for (let i = 0; i <= particles.length - 1; i++) {
      strokeWeight(1);
      stroke(255);
      point(particles[i].x, particles[i].y, particles[i].z);
    }
    angle += 0.003;
  }

  function makeParticles() {
    for (let i = 0; i < totalParticles; i++) {
      v = p5.Vector.random3D();

      v.mult(6000);

      particles.push(v);
    }
  }
}

const totalParticles = 5000;
let v;
let angle = 0;
let particles = [];
let mySketch;
let divfondo;
let urlactual = window.location.href;

console.log(urlactual);
function setup() {
  if (urlactual == "http://localhost:3000/") {
    mySketch = createCanvas(screen.width, screen.height, WEBGL);
    mySketch.parent("imagenFondoH");
  }
  if (urlactual == "http://localhost:3000/quienes-somos") {
    mySketch = createCanvas(screen.width, screen.height, WEBGL);
    mySketch.parent("imagenFondoQS");
  }
  if (urlactual == "http://localhost:3000/miembros") {
    mySketch = createCanvas(screen.width, screen.height, WEBGL);
    mySketch.parent("imagenFondoMS");
  }
  if (
    urlactual == "http://localhost:3000/actualizaciones" ||
    urlactual == "http://localhost:3000/contacto" ||
    urlactual == "http://localhost:3000/convocatorias"
  ) {
    mySketch = createCanvas(screen.width, screen.height * 0.2, WEBGL);
    mySketch.parent("imagenFondoHeader");
  }
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

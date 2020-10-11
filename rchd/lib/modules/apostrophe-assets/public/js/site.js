const totalParticles = 5000;
let v;
let angle = 0;
let particles = [];
let mySketch;
let divfondo;
let urlactual = window.location.href;
let domain = "http://localhost:3000/";

console.log(urlactual);
function setup() {
  if (urlactual == domain) {
    mySketch = createCanvas(screen.width, screen.height, WEBGL);
    mySketch.parent("imagenFondoH");
  }
  if (urlactual == `${domain}quienes-somos`) {
    mySketch = createCanvas(screen.width, screen.height, WEBGL);
    mySketch.parent("imagenFondoQS");
  }
  if (urlactual == `${domain}miembros`) {
    mySketch = createCanvas(screen.width, screen.height, WEBGL);
    mySketch.parent("imagenFondoMS");
  }
  if (
    urlactual == `${domain}actualizaciones` ||
    urlactual == `${domain}contacto` ||
    urlactual == `${domain}convocatorias`
  ) {
    mySketch = createCanvas(screen.width, screen.height * 0.2, WEBGL);
    mySketch.parent("imagenFondoHeader");
  } else {
    mySketch = createCanvas(0, 0, WEBGL);
    mySketch.parent("sinGif");
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
    if (
      urlactual == `${domain}actualizaciones` ||
      urlactual == `${domain}contacto` ||
      urlactual == `${domain}convocatorias`
    ) {
      v.mult(1500);
    } else {
      v.mult(6000);
    }

    particles.push(v);
  }
}

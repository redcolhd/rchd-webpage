let totalParticles = 5000;
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
  else if (urlactual == `${domain}quienes-somos`) {
    mySketch = createCanvas(screen.width, screen.height, WEBGL);
    mySketch.parent("imagenFondoQS");
  }
  else if (urlactual == `${domain}miembros` || urlactual.includes("miembros?") == true) {
    mySketch = createCanvas(screen.width, screen.height, WEBGL);
    mySketch.parent("imagenFondoMS");
  }
  else if (
    urlactual.includes("/miembros/") == true || 
    urlactual == `${domain}actualizaciones` ||
    urlactual == `${domain}contacto` ||
    urlactual == `${domain}convocatorias` ||
    urlactual == `${domain}proyectos`||
    urlactual.includes("/proyectos/") == true 
  ) {
    mySketch = createCanvas(screen.width, screen.height * 0.2, WEBGL);
    mySketch.parent("imagenFondoHeader");
  } 
  else {
    mySketch = createCanvas(0, 0, WEBGL);
    mySketch.parent("sinGif");
  }
  
  makeParticles();
  frameRate(180);
}

function draw() {
  background(0);
  strokeWeight(1);
  stroke(255);
  rotateY(angle);
  for (let i = 0; i <= particles.length - 1; i++) {
    point(particles[i].x, particles[i].y, particles[i].z);
  }
  if (  urlactual.includes("/miembros/") == true ||
  urlactual == `${domain}actualizaciones` ||
  urlactual == `${domain}contacto` ||
  urlactual == `${domain}convocatorias`||
  urlactual == `${domain}proyectos`||
  urlactual.includes("/proyectos/") == true ){
    angle += 0.002;
  }
  else {
  angle += 0.003;
  }
}

function makeParticles() {
  for (let i = 0; i < totalParticles; i++) {
    v = p5.Vector.random3D();
    if (  urlactual.includes("/miembros/") == true ||
      urlactual == `${domain}actualizaciones` ||
      urlactual == `${domain}contacto` ||
      urlactual == `${domain}convocatorias`||
      urlactual == `${domain}proyectos`||
      urlactual.includes("/proyectos/") == true 
    ) {
      v.mult(1200);
      totalParticles = 800;
    } else {
      v.mult(6000);
    }

    particles.push(v);
  }
}

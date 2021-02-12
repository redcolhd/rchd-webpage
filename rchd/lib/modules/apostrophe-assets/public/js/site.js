let totalParticles = 5000;
let v;
let angle = 0;
let particles = [];
let mySketch;
let divfondo;
let urlactual = window.location.href;
let domain = "http://localhost:3000/";


function setup(type) {
  if (urlactual == domain) {
    mySketch = createCanvas(screen.width, screen.height, WEBGL);
    mySketch.parent("imagenFondoH");
  }
  else if (urlactual == `${domain}quienes-somos`) {
    if (screen.width > 600) {
          mySketch = createCanvas(screen.width, screen.height*1.3, WEBGL);
        }
      else if (screen.width <= 600) {
           mySketch = createCanvas(screen.width, screen.height*1.3, WEBGL);
        }
     mySketch.parent("imagenFondoQS");
  }
  else if (urlactual == `${domain}miembros` || urlactual.includes("miembros?") == true) {
    if (screen.width<600){
      mySketch = createCanvas(screen.width, screen.height*1.2, WEBGL);
    }else{
      mySketch = createCanvas(screen.width, screen.height*1.1, WEBGL);
    }
    mySketch.parent("imagenFondoMS");
  }
  else if (
    urlactual.includes("/miembros/") == true ||
    urlactual == `${domain}comite-base-historico` ||
    urlactual == `${domain}colaboradores` ||
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
  
  makeParticles(type);
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
  urlactual == `${domain}comite-base-historico` ||
  urlactual == `${domain}colaboradores` ||
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

function makeParticles(type) {
  
  type == true ? totalParticles = 0 : totalParticles = 5000;

  for (let i = 0; i < totalParticles; i++) {
    v = p5.Vector.random3D();
    
    if (  urlactual.includes("/miembros/") == true ||
      urlactual == `${domain}comite-base-historico` ||
      urlactual == `${domain}colaboradores` ||
      urlactual == `${domain}actualizaciones` ||
      urlactual == `${domain}contacto` ||
      urlactual == `${domain}convocatorias`||
      urlactual == `${domain}proyectos`||
      urlactual.includes("/proyectos/") == true ) 
    {
       if (screen.width > 600)
        {
          v.mult(1200);
          totalParticles = 800;
        }
      else if (screen.width <= 600)
        {
          v.mult(900);
          totalParticles = 600;
        }
      } 
    
      else if (urlactual == `${domain}miembros` || urlactual.includes("miembros?") == true
      || urlactual == `${domain}quienes-somos`|| urlactual == domain) {
           if (screen.width > 600)
          {
             v.mult(6000);
          }
      else if (screen.width <= 600)
          {
            v.mult(1200);
          }
    } 
      else {
      v.mult(6000);
    }

    particles.push(v);
  }

}

$(window).resize(function(){
  setup(true);
});
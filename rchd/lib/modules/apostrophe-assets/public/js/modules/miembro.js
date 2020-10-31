$(document).ready(function () {
  $(".proyectosButton").click(function () {
    $(".miembroProyectos").removeClass("panelOculto");
    $(".miembroPractica").addClass("panelOculto");
    $(".miembroIntereses").addClass("panelOculto");
    $(".proyectosButton").addClass("activeCirculoMiembro");
    $(".practicaButton").removeClass("activeCirculoMiembro");
    $(".interesesButton").removeClass("activeCirculoMiembro");
  });
  $(".practicaButton").click(function () {
    $(".miembroProyectos").addClass("panelOculto");
    $(".miembroPractica").removeClass("panelOculto");
    $(".miembroIntereses").addClass("panelOculto");
    $(".proyectosButton").removeClass("activeCirculoMiembro");
    $(".practicaButton").addClass("activeCirculoMiembro");
    $(".interesesButton").removeClass("activeCirculoMiembro");
  });
  $(".interesesButton").click(function () {
    $(".miembroProyectos").addClass("panelOculto");
    $(".miembroPractica").addClass("panelOculto");
    $(".miembroIntereses").removeClass("panelOculto");
    $(".proyectosButton").removeClass("activeCirculoMiembro");
    $(".practicaButton").removeClass("activeCirculoMiembro");
    $(".interesesButton").addClass("activeCirculoMiembro");
  });
});

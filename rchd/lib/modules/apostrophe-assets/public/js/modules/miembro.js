$(document).ready(function () {
  $(".proyectosButton").click(function () {
    $(".miembroProyectos").removeClass("panelOculto");
    $(".miembroInteresesGR").addClass("panelOculto");
    $(".miembroInteresesHD").addClass("panelOculto");
  });
  $(".interesesGRButton").click(function () {
    $(".miembroProyectos").addClass("panelOculto");
    $(".miembroInteresesGR").removeClass("panelOculto");
    $(".miembroInteresesHD").addClass("panelOculto");
  });
  $(".interesesHDButton").click(function () {
    $(".miembroProyectos").addClass("panelOculto");
    $(".miembroInteresesGR").addClass("panelOculto");
    $(".miembroInteresesHD").removeClass("panelOculto");
  });
});

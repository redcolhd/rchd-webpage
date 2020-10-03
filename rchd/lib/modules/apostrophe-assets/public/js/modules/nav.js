$(document).ready(function () {
  $("#checkbox").click(function () {
    $("body").toggleClass("menu_shown");
    $(".navIcon").toggleClass("pressedIcon");
    $(".indexNav").toggleClass("indexModified");
  });
});

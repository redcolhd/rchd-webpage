$(document).ready(function () {
  console.log("Esta funcionando");
  $(".tag-filters li:has(ul)").click(function (e) {
    e.preventDefault();

    if ($(this).hasClass("activado")) {
      $(this).removeClass("activado");
      $(this).children("ul").slideUp();
    } else {
      $(".tag-filters li ul").slideUp();
      $(".tag-filters li ul").removeClass("activado");
      $(this).addClass("activado");
      $(this).children("ul").slideDown();
      $(this).children("ul").addClass("activadoMenu");
    }
  });
  $(".tag-filters li ul li a").click(function () {
    window.location.href = $(this).attr("href");
  });
});

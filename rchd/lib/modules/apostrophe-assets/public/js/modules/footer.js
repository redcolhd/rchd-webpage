$(document).ready(function () {
  var windowHeight = $(window).height();
  var contentHeight = $(".apos-refreshable").height();

  console.log(windowHeight);
  console.log(contentHeight);

  if (contentHeight > windowHeight) {
    $(".footer").addClass("footerRelative");
  } else if (contentHeight <= windowHeight) {
    $(".footer").addClass("footerAbsolute");
  }
});

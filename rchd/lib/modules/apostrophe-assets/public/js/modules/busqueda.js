$(document).ready(function () {
  console.log("Esta funcionando");
  $(".tag-filters li:has(ul)").click(function (e) {
    e.preventDefault();
  });
});

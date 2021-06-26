///navbar//////
$("#header").prepend('<div id="menu-icon"><span class="first"></span><span class="second"></span><span class="third"></span></div>');

$("#menu-icon").on("click", function () {
  $("nav").slideToggle();
  $(this).toggleClass("active");
});
///navbar//////
///card//////
$(document).ready(function () {
  $(".card")
    .delay(1800)
    .queue(function (next) {
      $(this).removeClass("hover");
      $("a.hover").removeClass("hover");
      next();
    });
});
///card//////

/* ///////////details page///////// */

/* ///////////details page///////// */

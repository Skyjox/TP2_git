const cards = document.querySelectorAll(".cards__single");

function flipCard() {
  this.classList.toggle("flip");
}
cards.forEach((card) => card.addEventListener("click", flipCard));

$(".hover").mouseleave(function () {
  $(this).removeClass("hover");
});

$(document).ready(function () {
  var mouseX, mouseY;
  var ww = $(window).width();
  var wh = $(window).height();
  var traX, traY;
  $(document).mousemove(function (e) {
    mouseX = e.pageX;
    mouseY = e.pageY;
    traX = (4 * mouseX) / 570 + 40;
    traY = (4 * mouseY) / 570 + 50;
    console.log(traX);
    $(".atitle").css({ "background-position": traX + "%" + traY + "%" });
  });
});

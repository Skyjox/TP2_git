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
    $(".atitle").css({ "background-position": traX + "%" + traY + "%" });
  });
  $("#sun").click(function () {
    if ($("body").hasClass("dark")) {
      $("body").removeClass("dark");
      $(".bglinear").removeClass("dark");
      $("#llogo").attr("src", "../img/logo-removebg-preview.png");
      $(".l_lille").removeClass("golden");
      $("#sun").removeClass("moon");
      $("#sun").attr("src", "../js/soleil-removebg-preview.png");
      $(".menu").removeClass("menu-dark");
      $(".lvideo-background").removeClass("lvdm");
      $(".lieux").removeClass("lieuxdm");
      $("#logo2").attr("src", "../img/logo-removebg-preview.png");
      $("#txtb1").removeClass("txtdm");
      $("#txtb2").removeClass("txtdm");
      $("#txtb3").removeClass("txtdm");
      $("#txtb4").removeClass("txtdm");
      $("#txtb5").removeClass("txtdm");
      $("#txtb6").removeClass("txtdm");
      $("#txtb7").removeClass("txtdm");
      $("#txtb8").removeClass("txtdm");
      $("#txtb9").removeClass("txtdm");
      $("#txtb10").removeClass("txtdm");
    } else {
      $("body").addClass("dark");
      $(".bglinear").addClass("dark");
      $("#llogo").attr("src", "../img/logoDM-removebg-preview-copie.png");
      $(".l_lille").addClass("golden");
      $("#sun").addClass("moon");
      $("#sun").attr("src", "../js/moon-removebg-preview.png");
      $(".menu").addClass("menu-dark");
      $(".lieux").addClass("lieuxdm");
      $("#logo2").attr("src", "../img/logoDM-removebg-preview-copie.png");
      $(".lvideo-background").addClass("lvdm");
      $("#txtb1").addClass("txtdm");
      $("#txtb2").addClass("txtdm");
      $("#txtb3").addClass("txtdm");
      $("#txtb4").addClass("txtdm");
      $("#txtb5").addClass("txtdm");
      $("#txtb6").addClass("txtdm");
      $("#txtb7").addClass("txtdm");
      $("#txtb8").addClass("txtdm");
      $("#txtb9").addClass("txtdm");
      $("#txtb10").addClass("txtdm");
    }
  });
  /*---------------------------------------------------*/
  /*---------------------------------------------------*/
  /*--------------------carrousel----------------------*/
  $("#figure").slick({
    autoplay: true,
    infinite: true,
    fade: true,
    cssEase: "ease-in-out",
    speed: 1000,
    nextArrow: false,
    prevArrow: false,
  });
});

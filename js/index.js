/*hover des villas*/
$(document).ready(function () {
  $("#boite1").mouseleave(function () {
    $(this).find("#txtb1").slideToggle("fast").stop(true);
  }); /*Le this permet de callback la fonction au dessus et ainsi activer le mouseover uniqument sur l image survolée*/
  $("#boite1").hover(function () {
    $("#txtb1").slideUp("slow").slideToggle("slow");
  });

  $("#boite2").mouseleave(function () {
    $(this).find("#txtb2").slideToggle("slow").stop(true);
  }); /*Le this permet de callback la fonction au dessus et ainsi activer le mouseover uniqument sur l image survolée*/
  $("#boite2").hover(function () {
    $("#txtb2").slideUp("slow").slideToggle("slow");
  });

  $("#boite3").mouseleave(function () {
    $(this).find("#txtb3").slideToggle("fast").stop(true);
  }); /*Le this permet de callback la fonction au dessus et ainsi activer le mouseover uniqument sur l image survolée*/
  $("#boite3").hover(function () {
    $("#txtb3").slideUp("slow").slideToggle("slow");
  });

  $("#boite4").mouseleave(function () {
    $(this).find("#txtb4").slideToggle("fast").stop(true);
  }); /*Le this permet de callback la fonction au dessus et ainsi activer le mouseover uniqument sur l image survolée*/
  $("#boite4").hover(function () {
    $("#txtb4").slideUp("slow").slideToggle("slow");
  });

  $("#boite5").mouseleave(function () {
    $(this).find("#txtb5").slideToggle("fast").stop(true);
  }); /*Le this permet de callback la fonction au dessus et ainsi activer le mouseover uniqument sur l image survolée*/
  $("#boite5").hover(function () {
    $("#txtb5").slideUp("slow").slideToggle("slow");
  });

  $("#boite6").mouseleave(function () {
    $(this).find("#txtb6").slideToggle("fast").stop(true);
  }); /*Le this permet de callback la fonction au dessus et ainsi activer le mouseover uniqument sur l image survolée*/
  $("#boite6").hover(function () {
    $("#txtb6").slideUp("slow").slideToggle("slow");
  });

  $("#boite7").mouseleave(function () {
    $(this).find("#txtb7").slideToggle("fast").stop(true);
  }); /*Le this permet de callback la fonction au dessus et ainsi activer le mouseover uniqument sur l image survolée*/
  $("#boite7").hover(function () {
    $("#txtb7").slideUp("slow").slideToggle("slow");
  });

  $("#boite8").mouseleave(function () {
    $(this).find("#txtb8").slideToggle("fast").stop(true);
  }); /*Le this permet de callback la fonction au dessus et ainsi activer le mouseover uniqument sur l image survolée*/
  $("#boite8").hover(function () {
    $("#txtb8").slideUp("slow").slideToggle("slow");
  });

  $("#boite9").mouseleave(function () {
    $(this).find("#txtb9").slideToggle("fast").stop(true);
  }); /*Le this permet de callback la fonction au dessus et ainsi activer le mouseover uniqument sur l image survolée*/
  $("#boite9").hover(function () {
    $("#txtb9").slideUp("slow").slideToggle("slow");
  });

  $("#boite10").mouseleave(function () {
    $(this).find("#txtb10").slideToggle("fast").stop(true);
  }); /*Le this permet de callback la fonction au dessus et ainsi activer le mouseover uniqument sur l image survolée*/
  $("#boite10").hover(function () {
    $("#txtb10").slideUp("slow").slideToggle("slow");
  });
  /* Fin hover des villas  */
  /*---------------------------------------------------*/
  /*---------------------------------------------------*/
  /*---------------------------------------------------*/

  /*darkmode*/
  $("#sun").click(function () {
    if ($("body").hasClass("dark")) {
      $("body").removeClass("dark");
      $(".bglinear").removeClass("dark");
      $("#llogo").attr("src", "./img/logo-removebg-preview.png");
      $(".l_lille").removeClass("golden");
      $("#sun").removeClass("moon");
      $("#sun").attr("src", "./js/soleil-removebg-preview.png");
      $(".menu").removeClass("menu-dark");
      $(".lvideo-background").removeClass("lvdm");
      $(".lieux").removeClass("lieuxdm");
      $("#logo2").attr("src", "./img/logo-removebg-preview.png");
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
      $("#llogo").attr("src", "./img/logoDM-removebg-preview-copie.png");
      $(".l_lille").addClass("golden");
      $("#sun").addClass("moon");
      $("#sun").attr("src", "./js/moon-removebg-preview.png");
      $(".menu").addClass("menu-dark");
      $(".lieux").addClass("lieuxdm");
      $("#logo2").attr("src", "./img/logoDM-removebg-preview-copie.png");
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

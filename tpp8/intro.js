$(document).ready(function(){
   $(".T-imglot2").hide();
   $(".flecheG2").hide();
   $(".flecheD2").hide();
   $(".T-agimmo-contact").hide();
   $(".btn1").hide();
   $(".btn2").hide();
   $(".btn3").hide();
   $(".btn4").hide();
   $(".btn5").hide();
   $(".btn6").hide();
   $(".btn7").hide();
   $(".btn8").hide();
   $(".btn9").hide();
   $(".btn10").hide();
   $(".T-overlay1").hide();
   $(".T-overlay2").hide();
   $(".T-overlay3").hide();
   $(".T-overlay4").hide();
   $(".T-overlay5").hide();
   $(".T-overlay6").hide();
   $(".T-overlay7").hide();
   $(".T-overlay8").hide();
   $(".T-overlay9").hide();
   $(".T-overlay10").hide();
   $(".T-B_overlay1").hide();
   $(".T-B_overlay2").hide();
   $(".T-B_overlay3").hide();
   $(".T-B_overlay4").hide();
   $(".T-B_overlay5").hide();
   $(".T-B_overlay6").hide();
   $(".T-B_overlay7").hide();
   $(".T-B_overlay8").hide();
   $(".T-B_overlay9").hide();
   $(".T-B_overlay10").hide();
   $(".photo_body_sub_T-B_overlay1-2").hide();
   $(".photo_body_sub_T-B_overlay1-3").hide();
   $(".photo_body_sub_T-B_overlay1-4").hide();
   $(".photo_body_sub_T-B_overlay1-5").hide();
   $(".photo_body_sub_T-B_overlay1-6").hide();
   $(".photo_body_sub_T-B_overlay2-2").hide();
   $(".photo_body_sub_T-B_overlay2-3").hide();
   $(".photo_body_sub_T-B_overlay2-4").hide();
   $(".photo_body_sub_T-B_overlay2-5").hide();
   $(".photo_body_sub_T-B_overlay2-6").hide();
   $(".photo_body_sub_T-B_overlay3-2").hide();
   $(".photo_body_sub_T-B_overlay3-3").hide();
   $(".photo_body_sub_T-B_overlay3-4").hide();
   $(".photo_body_sub_T-B_overlay3-5").hide();
   $(".photo_body_sub_T-B_overlay3-6").hide();
   $(".photo_body_sub_T-B_overlay4-2").hide();
   $(".photo_body_sub_T-B_overlay4-3").hide();
   $(".photo_body_sub_T-B_overlay4-4").hide();
   $(".photo_body_sub_T-B_overlay4-5").hide();
   $(".photo_body_sub_T-B_overlay4-6").hide();
   $(".photo_body_sub_T-B_overlay5-2").hide();
   $(".photo_body_sub_T-B_overlay5-3").hide();
   $(".photo_body_sub_T-B_overlay5-4").hide();
   $(".photo_body_sub_T-B_overlay5-5").hide();
   $(".photo_body_sub_T-B_overlay5-6").hide();
   $(".photo_body_sub_T-B_overlay6-2").hide();
   $(".photo_body_sub_T-B_overlay6-3").hide();
   $(".photo_body_sub_T-B_overlay6-4").hide();
   $(".photo_body_sub_T-B_overlay6-5").hide();
   $(".photo_body_sub_T-B_overlay6-6").hide();
   $(".photo_body_sub_T-B_overlay7-2").hide();
   $(".photo_body_sub_T-B_overlay7-3").hide();
   $(".photo_body_sub_T-B_overlay7-4").hide();
   $(".photo_body_sub_T-B_overlay7-5").hide();
   $(".photo_body_sub_T-B_overlay7-6").hide();
   $(".photo_body_sub_T-B_overlay8-2").hide();
   $(".photo_body_sub_T-B_overlay8-3").hide();
   $(".photo_body_sub_T-B_overlay8-4").hide();
   $(".photo_body_sub_T-B_overlay8-5").hide();
   $(".photo_body_sub_T-B_overlay8-6").hide();
   $(".photo_body_sub_T-B_overlay9-2").hide();
   $(".photo_body_sub_T-B_overlay9-3").hide();
   $(".photo_body_sub_T-B_overlay9-4").hide();
   $(".photo_body_sub_T-B_overlay9-5").hide();
   $(".photo_body_sub_T-B_overlay9-6").hide();
   $(".photo_body_sub_T-B_overlay10-2").hide();
   $(".photo_body_sub_T-B_overlay10-3").hide();
   $(".photo_body_sub_T-B_overlay10-4").hide();
   $(".photo_body_sub_T-B_overlay10-5").hide();
   $(".photo_body_sub_T-B_overlay10-6").hide();
   

   $(".flecheG").click(function(){
      $(".T-imglot1").hide();
      $(".T-imglot2").show();
      $(".flecheG").hide();
      $(".flecheG2").show();
      $(".flecheD").hide();
      $(".flecheD2").show();
      });

   $(".flecheD").click(function(){
      $(".T-imglot1").hide();
      $(".T-imglot2").show();
      $(".flecheG").hide();
      $(".flecheG2").show();
      $(".flecheD").hide();
      $(".flecheD2").show();
   });

    $(".flecheG2").click(function(){
      $(".T-imglot2").hide();
      $(".T-imglot1").show();
      $(".flecheG2").hide();
      $(".flecheG").show();
      $(".flecheD2").hide();
      $(".flecheD").show();
      });
   
      $(".flecheD2").click(function(){
         $(".T-imglot2").hide();
         $(".T-imglot1").show();
         $(".flecheG2").hide();
         $(".flecheG").show();
         $(".flecheD2").hide();
         $(".flecheD").show();
      });

      
      $(".T-agimmo-photo").click(function(){
         $(".T-agimmo-contact").show();
      });

      $(".T-agimmo-contact").click(function(){
         $(".T-agimmo-contact").hide();
      });

      $(".img1").mouseenter(function() {
         $(".btn1").show();
         $(".T-overlay1").show();
      });

      $(".img1").mouseleave(function() {
         $(".btn1").hide();
         $(".T-overlay1").hide();
      });

      $(".img2").mouseenter(function() {
         $(".btn2").show();
         $(".T-overlay2").show();
      });

      $(".img2").mouseleave(function() {
         $(".btn2").hide();
         $(".T-overlay2").hide();
      });

      $(".img3").mouseenter(function() {
         $(".btn3").show();
         $(".T-overlay3").show();
      });

      $(".img3").mouseleave(function() {
         $(".btn3").hide();
         $(".T-overlay3").hide();
      });

      $(".img4").mouseenter(function() {
         $(".btn4").show();
         $(".T-overlay4").show();
      });

      $(".img4").mouseleave(function() {
         $(".btn4").hide();
         $(".T-overlay4").hide();
      });

      $(".img5").mouseenter(function() {
         $(".btn5").show();
         $(".T-overlay5").show();
      });

      $(".img5").mouseleave(function() {
         $(".btn5").hide();
         $(".T-overlay5").hide();
      });

      $(".img6").mouseenter(function() {
         $(".btn6").show();
         $(".T-overlay6").show();
      });

      $(".img6").mouseleave(function() {
         $(".btn6").hide();
         $(".T-overlay6").hide();
      });

      $(".img7").mouseenter(function() {
         $(".btn7").show();
         $(".T-overlay7").show();
      });

      $(".img7").mouseleave(function() {
         $(".btn7").hide();
         $(".T-overlay7").hide();
      });

      $(".img8").mouseenter(function() {
         $(".btn8").show();
         $(".T-overlay8").show();
      });

      $(".img8").mouseleave(function() {
         $(".btn8").hide();
         $(".T-overlay8").hide();
      });

      $(".img9").mouseenter(function() {
         $(".btn9").show();
         $(".T-overlay9").show();
      });

      $(".img9").mouseleave(function() {
         $(".btn9").hide();
         $(".T-overlay9").hide();
      });

      $(".img10").mouseenter(function() {
         $(".btn10").show();
         $(".T-overlay10").show();
      });

      $(".img10").mouseleave(function() {
         $(".btn10").hide();
         $(".T-overlay10").hide();
      });

      //1ère overlay début
      $(".btn1").click(function() {
         $(".T-B_overlay1").show();
      });

      $(".remover_cruz_head_sub_T-B_overlay1").click(function() {
         $(".T-B_overlay1").hide();
      });

      $(".FG_photo_body_sub_T-B_overlay1-1").click(function() {
         $(".photo_body_sub_T-B_overlay1-1").hide();
         $(".photo_body_sub_T-B_overlay1-6").show();
      });

      $(".FD_photo_body_sub_T-B_overlay1-1").click(function() {
         $(".photo_body_sub_T-B_overlay1-1").hide();
         $(".photo_body_sub_T-B_overlay1-2").show();
      });

      $(".FG_photo_body_sub_T-B_overlay1-2").click(function() {
         $(".photo_body_sub_T-B_overlay1-2").hide();
         $(".photo_body_sub_T-B_overlay1-1").show();
      });

      $(".FD_photo_body_sub_T-B_overlay1-2").click(function() {
         $(".photo_body_sub_T-B_overlay1-2").hide();
         $(".photo_body_sub_T-B_overlay1-3").show();
      });

      $(".FG_photo_body_sub_T-B_overlay1-3").click(function() {
         $(".photo_body_sub_T-B_overlay1-3").hide();
         $(".photo_body_sub_T-B_overlay1-2").show();
      });

      $(".FD_photo_body_sub_T-B_overlay1-3").click(function() {
         $(".photo_body_sub_T-B_overlay1-3").hide();
         $(".photo_body_sub_T-B_overlay1-4").show();
      });

      $(".FG_photo_body_sub_T-B_overlay1-4").click(function() {
         $(".photo_body_sub_T-B_overlay1-4").hide();
         $(".photo_body_sub_T-B_overlay1-3").show();
      });

      $(".FD_photo_body_sub_T-B_overlay1-4").click(function() {
         $(".photo_body_sub_T-B_overlay1-4").hide();
         $(".photo_body_sub_T-B_overlay1-5").show();
      });

      $(".FG_photo_body_sub_T-B_overlay1-5").click(function() {
         $(".photo_body_sub_T-B_overlay1-5").hide();
         $(".photo_body_sub_T-B_overlay1-4").show();
      });

      $(".FD_photo_body_sub_T-B_overlay1-5").click(function() {
         $(".photo_body_sub_T-B_overlay1-5").hide();
         $(".photo_body_sub_T-B_overlay1-6").show();
      });

      $(".FG_photo_body_sub_T-B_overlay1-6").click(function() {
         $(".photo_body_sub_T-B_overlay1-6").hide();
         $(".photo_body_sub_T-B_overlay1-5").show();
      });

      $(".FD_photo_body_sub_T-B_overlay1-6").click(function() {
         $(".photo_body_sub_T-B_overlay1-6").hide();
         $(".photo_body_sub_T-B_overlay1-1").show();
      });
      //1ère overlay fin

      //2eme overlay début
      $(".btn2").click(function() {
         $(".T-B_overlay2").show();
      });

      $(".remover_cruz_head_sub_T-B_overlay2").click(function() {
         $(".T-B_overlay2").hide();
      });

      $(".FG_photo_body_sub_T-B_overlay2-1").click(function() {
         $(".photo_body_sub_T-B_overlay2-1").hide();
         $(".photo_body_sub_T-B_overlay2-6").show();
      });

      $(".FD_photo_body_sub_T-B_overlay2-1").click(function() {
         $(".photo_body_sub_T-B_overlay2-1").hide();
         $(".photo_body_sub_T-B_overlay2-2").show();
      });

      $(".FG_photo_body_sub_T-B_overlay2-2").click(function() {
         $(".photo_body_sub_T-B_overlay2-2").hide();
         $(".photo_body_sub_T-B_overlay2-1").show();
      });

      $(".FD_photo_body_sub_T-B_overlay2-2").click(function() {
         $(".photo_body_sub_T-B_overlay2-2").hide();
         $(".photo_body_sub_T-B_overlay2-3").show();
      });

      $(".FG_photo_body_sub_T-B_overlay2-3").click(function() {
         $(".photo_body_sub_T-B_overlay2-3").hide();
         $(".photo_body_sub_T-B_overlay2-2").show();
      });

      $(".FD_photo_body_sub_T-B_overlay2-3").click(function() {
         $(".photo_body_sub_T-B_overlay2-3").hide();
         $(".photo_body_sub_T-B_overlay2-4").show();
      });

      $(".FG_photo_body_sub_T-B_overlay2-4").click(function() {
         $(".photo_body_sub_T-B_overlay2-4").hide();
         $(".photo_body_sub_T-B_overlay2-3").show();
      });

      $(".FD_photo_body_sub_T-B_overlay2-4").click(function() {
         $(".photo_body_sub_T-B_overlay2-4").hide();
         $(".photo_body_sub_T-B_overlay2-5").show();
      });

      $(".FG_photo_body_sub_T-B_overlay2-5").click(function() {
         $(".photo_body_sub_T-B_overlay2-5").hide();
         $(".photo_body_sub_T-B_overlay2-4").show();
      });

      $(".FD_photo_body_sub_T-B_overlay2-5").click(function() {
         $(".photo_body_sub_T-B_overlay2-5").hide();
         $(".photo_body_sub_T-B_overlay2-6").show();
      });

      $(".FG_photo_body_sub_T-B_overlay2-6").click(function() {
         $(".photo_body_sub_T-B_overlay2-6").hide();
         $(".photo_body_sub_T-B_overlay2-5").show();
      });

      $(".FD_photo_body_sub_T-B_overlay2-6").click(function() {
         $(".photo_body_sub_T-B_overlay2-6").hide();
         $(".photo_body_sub_T-B_overlay2-1").show();
      });
      //2eme overlay fin
      //3eme overlay début
      $(".btn3").click(function() {
         $(".T-B_overlay3").show();
      });

      $(".remover_cruz_head_sub_T-B_overlay3").click(function() {
         $(".T-B_overlay3").hide();
      });

      $(".FG_photo_body_sub_T-B_overlay3-1").click(function() {
         $(".photo_body_sub_T-B_overlay3-1").hide();
         $(".photo_body_sub_T-B_overlay3-6").show();
      });

      $(".FD_photo_body_sub_T-B_overlay3-1").click(function() {
         $(".photo_body_sub_T-B_overlay3-1").hide();
         $(".photo_body_sub_T-B_overlay3-2").show();
      });

      $(".FG_photo_body_sub_T-B_overlay3-2").click(function() {
         $(".photo_body_sub_T-B_overlay3-2").hide();
         $(".photo_body_sub_T-B_overlay3-1").show();
      });

      $(".FD_photo_body_sub_T-B_overlay3-2").click(function() {
         $(".photo_body_sub_T-B_overlay3-2").hide();
         $(".photo_body_sub_T-B_overlay3-3").show();
      });

      $(".FG_photo_body_sub_T-B_overlay3-3").click(function() {
         $(".photo_body_sub_T-B_overlay3-3").hide();
         $(".photo_body_sub_T-B_overlay3-2").show();
      });

      $(".FD_photo_body_sub_T-B_overlay3-3").click(function() {
         $(".photo_body_sub_T-B_overlay3-3").hide();
         $(".photo_body_sub_T-B_overlay3-4").show();
      });

      $(".FG_photo_body_sub_T-B_overlay3-4").click(function() {
         $(".photo_body_sub_T-B_overlay3-4").hide();
         $(".photo_body_sub_T-B_overlay3-3").show();
      });

      $(".FD_photo_body_sub_T-B_overlay3-4").click(function() {
         $(".photo_body_sub_T-B_overlay3-4").hide();
         $(".photo_body_sub_T-B_overlay3-5").show();
      });

      $(".FG_photo_body_sub_T-B_overlay3-5").click(function() {
         $(".photo_body_sub_T-B_overlay3-5").hide();
         $(".photo_body_sub_T-B_overlay3-4").show();
      });

      $(".FD_photo_body_sub_T-B_overlay3-5").click(function() {
         $(".photo_body_sub_T-B_overlay3-5").hide();
         $(".photo_body_sub_T-B_overlay3-6").show();
      });

      $(".FG_photo_body_sub_T-B_overlay3-6").click(function() {
         $(".photo_body_sub_T-B_overlay3-6").hide();
         $(".photo_body_sub_T-B_overlay3-5").show();
      });

      $(".FD_photo_body_sub_T-B_overlay3-6").click(function() {
         $(".photo_body_sub_T-B_overlay3-6").hide();
         $(".photo_body_sub_T-B_overlay3-1").show();
      });
      //3eme overlay fin
      //4eme overlay début
      $(".btn4").click(function() {
         $(".T-B_overlay4").show();
      });

      $(".remover_cruz_head_sub_T-B_overlay4").click(function() {
         $(".T-B_overlay4").hide();
      });

      $(".FG_photo_body_sub_T-B_overlay4-1").click(function() {
         $(".photo_body_sub_T-B_overlay4-1").hide();
         $(".photo_body_sub_T-B_overlay4-6").show();
      });

      $(".FD_photo_body_sub_T-B_overlay4-1").click(function() {
         $(".photo_body_sub_T-B_overlay4-1").hide();
         $(".photo_body_sub_T-B_overlay4-2").show();
      });

      $(".FG_photo_body_sub_T-B_overlay4-2").click(function() {
         $(".photo_body_sub_T-B_overlay4-2").hide();
         $(".photo_body_sub_T-B_overlay4-1").show();
      });

      $(".FD_photo_body_sub_T-B_overlay4-2").click(function() {
         $(".photo_body_sub_T-B_overlay4-2").hide();
         $(".photo_body_sub_T-B_overlay4-3").show();
      });

      $(".FG_photo_body_sub_T-B_overlay4-3").click(function() {
         $(".photo_body_sub_T-B_overlay4-3").hide();
         $(".photo_body_sub_T-B_overlay4-2").show();
      });

      $(".FD_photo_body_sub_T-B_overlay4-3").click(function() {
         $(".photo_body_sub_T-B_overlay4-3").hide();
         $(".photo_body_sub_T-B_overlay4-4").show();
      });

      $(".FG_photo_body_sub_T-B_overlay4-4").click(function() {
         $(".photo_body_sub_T-B_overlay4-4").hide();
         $(".photo_body_sub_T-B_overlay4-3").show();
      });

      $(".FD_photo_body_sub_T-B_overlay4-4").click(function() {
         $(".photo_body_sub_T-B_overlay4-4").hide();
         $(".photo_body_sub_T-B_overlay4-5").show();
      });

      $(".FG_photo_body_sub_T-B_overlay4-5").click(function() {
         $(".photo_body_sub_T-B_overlay4-5").hide();
         $(".photo_body_sub_T-B_overlay4-4").show();
      });

      $(".FD_photo_body_sub_T-B_overlay4-5").click(function() {
         $(".photo_body_sub_T-B_overlay4-5").hide();
         $(".photo_body_sub_T-B_overlay4-6").show();
      });

      $(".FG_photo_body_sub_T-B_overlay4-6").click(function() {
         $(".photo_body_sub_T-B_overlay4-6").hide();
         $(".photo_body_sub_T-B_overlay4-5").show();
      });

      $(".FD_photo_body_sub_T-B_overlay4-6").click(function() {
         $(".photo_body_sub_T-B_overlay4-6").hide();
         $(".photo_body_sub_T-B_overlay4-1").show();
      });
      //4eme overlay fin
      //5eme overlay début
      $(".btn5").click(function() {
         $(".T-B_overlay5").show();
      });

      $(".remover_cruz_head_sub_T-B_overlay5").click(function() {
         $(".T-B_overlay5").hide();
      });

      $(".FG_photo_body_sub_T-B_overlay5-1").click(function() {
         $(".photo_body_sub_T-B_overlay5-1").hide();
         $(".photo_body_sub_T-B_overlay5-6").show();
      });

      $(".FD_photo_body_sub_T-B_overlay5-1").click(function() {
         $(".photo_body_sub_T-B_overlay5-1").hide();
         $(".photo_body_sub_T-B_overlay5-2").show();
      });

      $(".FG_photo_body_sub_T-B_overlay5-2").click(function() {
         $(".photo_body_sub_T-B_overlay5-2").hide();
         $(".photo_body_sub_T-B_overlay5-1").show();
      });

      $(".FD_photo_body_sub_T-B_overlay5-2").click(function() {
         $(".photo_body_sub_T-B_overlay5-2").hide();
         $(".photo_body_sub_T-B_overlay5-3").show();
      });

      $(".FG_photo_body_sub_T-B_overlay5-3").click(function() {
         $(".photo_body_sub_T-B_overlay5-3").hide();
         $(".photo_body_sub_T-B_overlay5-2").show();
      });

      $(".FD_photo_body_sub_T-B_overlay5-3").click(function() {
         $(".photo_body_sub_T-B_overlay5-3").hide();
         $(".photo_body_sub_T-B_overlay5-4").show();
      });

      $(".FG_photo_body_sub_T-B_overlay5-4").click(function() {
         $(".photo_body_sub_T-B_overlay5-4").hide();
         $(".photo_body_sub_T-B_overlay5-3").show();
      });

      $(".FD_photo_body_sub_T-B_overlay5-4").click(function() {
         $(".photo_body_sub_T-B_overlay5-4").hide();
         $(".photo_body_sub_T-B_overlay5-5").show();
      });

      $(".FG_photo_body_sub_T-B_overlay5-5").click(function() {
         $(".photo_body_sub_T-B_overlay5-5").hide();
         $(".photo_body_sub_T-B_overlay5-4").show();
      });

      $(".FD_photo_body_sub_T-B_overlay5-5").click(function() {
         $(".photo_body_sub_T-B_overlay5-5").hide();
         $(".photo_body_sub_T-B_overlay5-6").show();
      });

      $(".FG_photo_body_sub_T-B_overlay5-6").click(function() {
         $(".photo_body_sub_T-B_overlay5-6").hide();
         $(".photo_body_sub_T-B_overlay5-5").show();
      });

      $(".FD_photo_body_sub_T-B_overlay5-6").click(function() {
         $(".photo_body_sub_T-B_overlay5-6").hide();
         $(".photo_body_sub_T-B_overlay5-1").show();
      });
      //5eme overlay fin
      //6eme overlay début
      $(".btn6").click(function() {
         $(".T-B_overlay6").show();
      });

      $(".remover_cruz_head_sub_T-B_overlay6").click(function() {
         $(".T-B_overlay6").hide();
      });

      $(".FG_photo_body_sub_T-B_overlay6-1").click(function() {
         $(".photo_body_sub_T-B_overlay6-1").hide();
         $(".photo_body_sub_T-B_overlay6-6").show();
      });

      $(".FD_photo_body_sub_T-B_overlay6-1").click(function() {
         $(".photo_body_sub_T-B_overlay6-1").hide();
         $(".photo_body_sub_T-B_overlay6-2").show();
      });

      $(".FG_photo_body_sub_T-B_overlay6-2").click(function() {
         $(".photo_body_sub_T-B_overlay6-2").hide();
         $(".photo_body_sub_T-B_overlay6-1").show();
      });

      $(".FD_photo_body_sub_T-B_overlay6-2").click(function() {
         $(".photo_body_sub_T-B_overlay6-2").hide();
         $(".photo_body_sub_T-B_overlay6-3").show();
      });

      $(".FG_photo_body_sub_T-B_overlay6-3").click(function() {
         $(".photo_body_sub_T-B_overlay6-3").hide();
         $(".photo_body_sub_T-B_overlay6-2").show();
      });

      $(".FD_photo_body_sub_T-B_overlay6-3").click(function() {
         $(".photo_body_sub_T-B_overlay6-3").hide();
         $(".photo_body_sub_T-B_overlay6-4").show();
      });

      $(".FG_photo_body_sub_T-B_overlay6-4").click(function() {
         $(".photo_body_sub_T-B_overlay6-4").hide();
         $(".photo_body_sub_T-B_overlay6-3").show();
      });

      $(".FD_photo_body_sub_T-B_overlay6-4").click(function() {
         $(".photo_body_sub_T-B_overlay6-4").hide();
         $(".photo_body_sub_T-B_overlay6-5").show();
      });

      $(".FG_photo_body_sub_T-B_overlay6-5").click(function() {
         $(".photo_body_sub_T-B_overlay6-5").hide();
         $(".photo_body_sub_T-B_overlay6-4").show();
      });

      $(".FD_photo_body_sub_T-B_overlay6-5").click(function() {
         $(".photo_body_sub_T-B_overlay6-5").hide();
         $(".photo_body_sub_T-B_overlay6-6").show();
      });

      $(".FG_photo_body_sub_T-B_overlay6-6").click(function() {
         $(".photo_body_sub_T-B_overlay6-6").hide();
         $(".photo_body_sub_T-B_overlay6-5").show();
      });

      $(".FD_photo_body_sub_T-B_overlay6-6").click(function() {
         $(".photo_body_sub_T-B_overlay6-6").hide();
         $(".photo_body_sub_T-B_overlay6-1").show();
      });
      //6eme overlay fin
      //7eme overlay début
      $(".btn7").click(function() {
         $(".T-B_overlay7").show();
      });

      $(".remover_cruz_head_sub_T-B_overlay7").click(function() {
         $(".T-B_overlay7").hide();
      });

      $(".FG_photo_body_sub_T-B_overlay7-1").click(function() {
         $(".photo_body_sub_T-B_overlay7-1").hide();
         $(".photo_body_sub_T-B_overlay7-6").show();
      });

      $(".FD_photo_body_sub_T-B_overlay7-1").click(function() {
         $(".photo_body_sub_T-B_overlay7-1").hide();
         $(".photo_body_sub_T-B_overlay7-2").show();
      });

      $(".FG_photo_body_sub_T-B_overlay7-2").click(function() {
         $(".photo_body_sub_T-B_overlay7-2").hide();
         $(".photo_body_sub_T-B_overlay7-1").show();
      });

      $(".FD_photo_body_sub_T-B_overlay7-2").click(function() {
         $(".photo_body_sub_T-B_overlay7-2").hide();
         $(".photo_body_sub_T-B_overlay7-3").show();
      });

      $(".FG_photo_body_sub_T-B_overlay7-3").click(function() {
         $(".photo_body_sub_T-B_overlay7-3").hide();
         $(".photo_body_sub_T-B_overlay7-2").show();
      });

      $(".FD_photo_body_sub_T-B_overlay7-3").click(function() {
         $(".photo_body_sub_T-B_overlay7-3").hide();
         $(".photo_body_sub_T-B_overlay7-4").show();
      });

      $(".FG_photo_body_sub_T-B_overlay7-4").click(function() {
         $(".photo_body_sub_T-B_overlay7-4").hide();
         $(".photo_body_sub_T-B_overlay7-3").show();
      });

      $(".FD_photo_body_sub_T-B_overlay7-4").click(function() {
         $(".photo_body_sub_T-B_overlay7-4").hide();
         $(".photo_body_sub_T-B_overlay7-5").show();
      });

      $(".FG_photo_body_sub_T-B_overlay7-5").click(function() {
         $(".photo_body_sub_T-B_overlay7-5").hide();
         $(".photo_body_sub_T-B_overlay7-4").show();
      });

      $(".FD_photo_body_sub_T-B_overlay7-5").click(function() {
         $(".photo_body_sub_T-B_overlay7-5").hide();
         $(".photo_body_sub_T-B_overlay7-6").show();
      });

      $(".FG_photo_body_sub_T-B_overlay7-6").click(function() {
         $(".photo_body_sub_T-B_overlay7-6").hide();
         $(".photo_body_sub_T-B_overlay7-5").show();
      });

      $(".FD_photo_body_sub_T-B_overlay7-6").click(function() {
         $(".photo_body_sub_T-B_overlay7-6").hide();
         $(".photo_body_sub_T-B_overlay7-1").show();
      });
      //7eme overlay fin
      //8eme overlay début
      $(".btn8").click(function() {
         $(".T-B_overlay8").show();
      });

      $(".remover_cruz_head_sub_T-B_overlay8").click(function() {
         $(".T-B_overlay8").hide();
      });

      $(".FG_photo_body_sub_T-B_overlay8-1").click(function() {
         $(".photo_body_sub_T-B_overlay8-1").hide();
         $(".photo_body_sub_T-B_overlay8-6").show();
      });

      $(".FD_photo_body_sub_T-B_overlay8-1").click(function() {
         $(".photo_body_sub_T-B_overlay8-1").hide();
         $(".photo_body_sub_T-B_overlay8-2").show();
      });

      $(".FG_photo_body_sub_T-B_overlay8-2").click(function() {
         $(".photo_body_sub_T-B_overlay8-2").hide();
         $(".photo_body_sub_T-B_overlay8-1").show();
      });

      $(".FD_photo_body_sub_T-B_overlay8-2").click(function() {
         $(".photo_body_sub_T-B_overlay8-2").hide();
         $(".photo_body_sub_T-B_overlay8-3").show();
      });

      $(".FG_photo_body_sub_T-B_overlay8-3").click(function() {
         $(".photo_body_sub_T-B_overlay8-3").hide();
         $(".photo_body_sub_T-B_overlay8-2").show();
      });

      $(".FD_photo_body_sub_T-B_overlay8-3").click(function() {
         $(".photo_body_sub_T-B_overlay8-3").hide();
         $(".photo_body_sub_T-B_overlay8-4").show();
      });

      $(".FG_photo_body_sub_T-B_overlay8-4").click(function() {
         $(".photo_body_sub_T-B_overlay8-4").hide();
         $(".photo_body_sub_T-B_overlay8-3").show();
      });

      $(".FD_photo_body_sub_T-B_overlay8-4").click(function() {
         $(".photo_body_sub_T-B_overlay8-4").hide();
         $(".photo_body_sub_T-B_overlay8-5").show();
      });

      $(".FG_photo_body_sub_T-B_overlay8-5").click(function() {
         $(".photo_body_sub_T-B_overlay8-5").hide();
         $(".photo_body_sub_T-B_overlay8-4").show();
      });

      $(".FD_photo_body_sub_T-B_overlay8-5").click(function() {
         $(".photo_body_sub_T-B_overlay8-5").hide();
         $(".photo_body_sub_T-B_overlay8-6").show();
      });

      $(".FG_photo_body_sub_T-B_overlay8-6").click(function() {
         $(".photo_body_sub_T-B_overlay8-6").hide();
         $(".photo_body_sub_T-B_overlay8-5").show();
      });

      $(".FD_photo_body_sub_T-B_overlay8-6").click(function() {
         $(".photo_body_sub_T-B_overlay8-6").hide();
         $(".photo_body_sub_T-B_overlay8-1").show();
      });
      //8eme overlay fin
      //9eme overlay début
      $(".btn9").click(function() {
         $(".T-B_overlay9").show();
      });

      $(".remover_cruz_head_sub_T-B_overlay9").click(function() {
         $(".T-B_overlay9").hide();
      });

      $(".FG_photo_body_sub_T-B_overlay9-1").click(function() {
         $(".photo_body_sub_T-B_overlay9-1").hide();
         $(".photo_body_sub_T-B_overlay9-6").show();
      });

      $(".FD_photo_body_sub_T-B_overlay9-1").click(function() {
         $(".photo_body_sub_T-B_overlay9-1").hide();
         $(".photo_body_sub_T-B_overlay9-2").show();
      });

      $(".FG_photo_body_sub_T-B_overlay9-2").click(function() {
         $(".photo_body_sub_T-B_overlay9-2").hide();
         $(".photo_body_sub_T-B_overlay9-1").show();
      });

      $(".FD_photo_body_sub_T-B_overlay9-2").click(function() {
         $(".photo_body_sub_T-B_overlay9-2").hide();
         $(".photo_body_sub_T-B_overlay9-3").show();
      });

      $(".FG_photo_body_sub_T-B_overlay9-3").click(function() {
         $(".photo_body_sub_T-B_overlay9-3").hide();
         $(".photo_body_sub_T-B_overlay9-2").show();
      });

      $(".FD_photo_body_sub_T-B_overlay9-3").click(function() {
         $(".photo_body_sub_T-B_overlay9-3").hide();
         $(".photo_body_sub_T-B_overlay9-4").show();
      });

      $(".FG_photo_body_sub_T-B_overlay9-4").click(function() {
         $(".photo_body_sub_T-B_overlay9-4").hide();
         $(".photo_body_sub_T-B_overlay9-3").show();
      });

      $(".FD_photo_body_sub_T-B_overlay9-4").click(function() {
         $(".photo_body_sub_T-B_overlay9-4").hide();
         $(".photo_body_sub_T-B_overlay9-5").show();
      });

      $(".FG_photo_body_sub_T-B_overlay9-5").click(function() {
         $(".photo_body_sub_T-B_overlay9-5").hide();
         $(".photo_body_sub_T-B_overlay9-4").show();
      });

      $(".FD_photo_body_sub_T-B_overlay9-5").click(function() {
         $(".photo_body_sub_T-B_overlay9-5").hide();
         $(".photo_body_sub_T-B_overlay9-6").show();
      });

      $(".FG_photo_body_sub_T-B_overlay9-6").click(function() {
         $(".photo_body_sub_T-B_overlay9-6").hide();
         $(".photo_body_sub_T-B_overlay9-5").show();
      });

      $(".FD_photo_body_sub_T-B_overlay9-6").click(function() {
         $(".photo_body_sub_T-B_overlay9-6").hide();
         $(".photo_body_sub_T-B_overlay9-1").show();
      });
      //9eme overlay fin
      //10eme overlay début
      $(".btn10").click(function() {
         $(".T-B_overlay10").show();
      });

      $(".remover_cruz_head_sub_T-B_overlay10").click(function() {
         $(".T-B_overlay10").hide();
      });

      $(".FG_photo_body_sub_T-B_overlay10-1").click(function() {
         $(".photo_body_sub_T-B_overlay10-1").hide();
         $(".photo_body_sub_T-B_overlay10-6").show();
      });

      $(".FD_photo_body_sub_T-B_overlay10-1").click(function() {
         $(".photo_body_sub_T-B_overlay10-1").hide();
         $(".photo_body_sub_T-B_overlay10-2").show();
      });

      $(".FG_photo_body_sub_T-B_overlay10-2").click(function() {
         $(".photo_body_sub_T-B_overlay10-2").hide();
         $(".photo_body_sub_T-B_overlay10-1").show();
      });

      $(".FD_photo_body_sub_T-B_overlay10-2").click(function() {
         $(".photo_body_sub_T-B_overlay10-2").hide();
         $(".photo_body_sub_T-B_overlay10-3").show();
      });

      $(".FG_photo_body_sub_T-B_overlay10-3").click(function() {
         $(".photo_body_sub_T-B_overlay10-3").hide();
         $(".photo_body_sub_T-B_overlay10-2").show();
      });

      $(".FD_photo_body_sub_T-B_overlay10-3").click(function() {
         $(".photo_body_sub_T-B_overlay10-3").hide();
         $(".photo_body_sub_T-B_overlay10-4").show();
      });

      $(".FG_photo_body_sub_T-B_overlay10-4").click(function() {
         $(".photo_body_sub_T-B_overlay10-4").hide();
         $(".photo_body_sub_T-B_overlay10-3").show();
      });

      $(".FD_photo_body_sub_T-B_overlay10-4").click(function() {
         $(".photo_body_sub_T-B_overlay10-4").hide();
         $(".photo_body_sub_T-B_overlay10-5").show();
      });

      $(".FG_photo_body_sub_T-B_overlay10-5").click(function() {
         $(".photo_body_sub_T-B_overlay10-5").hide();
         $(".photo_body_sub_T-B_overlay10-4").show();
      });

      $(".FD_photo_body_sub_T-B_overlay10-5").click(function() {
         $(".photo_body_sub_T-B_overlay10-5").hide();
         $(".photo_body_sub_T-B_overlay10-6").show();
      });

      $(".FG_photo_body_sub_T-B_overlay10-6").click(function() {
         $(".photo_body_sub_T-B_overlay10-6").hide();
         $(".photo_body_sub_T-B_overlay10-5").show();
      });

      $(".FD_photo_body_sub_T-B_overlay10-6").click(function() {
         $(".photo_body_sub_T-B_overlay10-6").hide();
         $(".photo_body_sub_T-B_overlay10-1").show();
      });
      //10eme overlay fin
      $("#sun").click(function(){
         if ($("body").hasClass("dark")){
             $("body").removeClass("dark");
             $("#llogo").attr('src','../logoDM-removebg-preview.png');
             $("#sun").removeClass('moon');
             $("#sun").attr('src','../js/soleil-removebg-preview.png');
             $('.menu').removeClass("menu-dark");
             $(".lvideo-background").removeClass("lvdm");
             $(".lieux").removeClass("lieuxdm");
             $("#logo2").attr('src','../img/logo-removebg-preview.png');
             $("#txtb1").removeClass('txtdm');
             $("#txtb2").removeClass('txtdm');
             $("#txtb3").removeClass('txtdm');
             $("#txtb4").removeClass('txtdm');
             $("#txtb5").removeClass('txtdm');
             $("#txtb6").removeClass('txtdm');
             $("#txtb7").removeClass('txtdm');
             $("#txtb8").removeClass('txtdm');
             $("#txtb9").removeClass('txtdm');
             $("#txtb10").removeClass('txtdm');
         }
         else{
             $("body").addClass("dark");
             $(".bglinear").addClass("dark");
             $("#llogo").attr('src', '../js/logoDM-removebg-preview.png');
             $(".l_lille").addClass('golden');
             $("#sun").addClass('moon');
             $("#sun").attr('src','../js/moon-removebg-preview.png');
             $(".menu").addClass("menu-dark");
             $(".lieux").addClass("lieuxdm");
             $("#logo2").attr('src', '../js/logoDM-removebg-preview.png');
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
     $('figure').slick({
       autoplay: true,
       infinite: true,
       fade: true,
       cssEase:'ease-in-out',
       speed: 1000,
       nextArrow:false,
       prevArrow:false,
     });
});
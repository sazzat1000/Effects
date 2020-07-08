$(document).ready(function () {
  var hide = $("#hide");
  var show = $("#show");
  var toggle = $("#toggle");
  var block_1 = $(".block-1");
  var fade_in = $("#fade_in");
  var fade_out = $("#fade_out");
  var fade_toggle = $("#fade_toggle");
  var fade_to = $("#fade_to");
  var block_2 = $(".block-2");
  var slide_up = $("#slide_up");
  var slide_down = $("#slide_down");
  var slide_toggle = $("#slide_toggle");
  var block_3 = $(".block-3");
  var button = $("#button");
  var block_4 = $(".block-4");
  var blue = $("#blue");
  var deeppink = $("#deeppink");
  var yellow = $("#yellow");
  var red = $("#red");
  var block_5 = $(".block-5");

  // Hide, Show & Toggle Effects

  hide.click(function () {
    block_1.hide(1000, function () {
      show.show();
      hide.hide();
    });
  });
  show.click(function () {
    block_1.show(1000, function () {
      hide.show();
      show.hide();
    });
  });
  toggle.click(function () {
    block_1.toggle(900);
  });

  // Fade In, Fade Out, Fade Toggle, Fade To

  fade_in.mouseover(function () {
    block_2.fadeIn(800);
  });
  fade_out.mouseover(function () {
    block_2.fadeOut(800);
  });
  fade_toggle.mouseover(function () {
    block_2.fadeToggle(500);
  });
  fade_to.mouseover(function () {
    block_2.fadeTo(1000, 0.5);
  });

  // Slide Up, Slide Down, Slide Toggle

  slide_up.dblclick(function () {
    block_3.slideUp(1300);
  });
  slide_down.dblclick(function () {
    block_3.slideDown(1300);
  });
  slide_toggle.dblclick(function () {
    block_3.slideToggle(1300);
  });

  // Multiple Event

  button.on({
    click: function () {
      block_4.css("background-color", "red");
    },
    dblclick: function () {
      block_4.css("background-color", "blue");
    },
  });

  // Add & Remove Class

  blue.click(function () {
    block_5.addClass("blue");
    block_5.removeClass("deeppink");
    block_5.removeClass("yellow");
    block_5.removeClass("red");
  });
  deeppink.click(function () {
    block_5.addClass("deeppink");
    block_5.removeClass("blue");
    block_5.removeClass("yellow");
    block_5.removeClass("red");
  });
  yellow.click(function () {
    block_5.addClass("yellow");
    block_5.removeClass("deeppink");
    block_5.removeClass("blue");
    block_5.removeClass("red");
  });
  red.click(function () {
    block_5.addClass("red");
    block_5.removeClass("deeppink");
    block_5.removeClass("yellow");
    block_5.removeClass("blue");
  });






});

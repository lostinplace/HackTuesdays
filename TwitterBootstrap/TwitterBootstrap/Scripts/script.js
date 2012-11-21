﻿$(function () {
  $("#txtcmd").val("").focus().on("keyup", function (e) {
    if (e.keyCode == 13 || (e.keyCode >=37 && e.keyCode <= 40)) {
      var cmd = $(this).val();
      $(".cmdlist").append("<li>" + ("<span>31337&gt; " + cmd + "</span>") + "<p>no</p>" + "</li>");
      $(this).val("");
      $(".activeline").html("");
    } else {
      $(".activeline").html($(this).val().replace(" ", "&nbsp;"));
    }
  }).on("blur", function () {
    var val = $(this).val();
    $(this).focus().val(val);
  });

  $("body").on("click", function () {
    $("#txtcmd").focus();
  });

  var CursorInit = (function () {
    setInterval(function () {
      $('.cursor').css('color', '#222');
      setTimeout(function () {
        $('.cursor').css('color', '#00ff90');
      }, 500);
    }, 1000);
  })();
});
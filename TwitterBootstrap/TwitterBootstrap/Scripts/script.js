$(function () {
  $("#txtcmd").val("").focus().on("keyup", function () {
    $(".activeline").text($(this).val());
    //$(this).css("width", (($(this).val().length + 2) * .6) + "em");
  }).on("blur", function () {
    var val = $(this).val();
    $(this).focus().val(val);
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
$(function () {
  $("#txtcmd").val("").focus().on("keypress", function () {
    $(this).css("width", (($(this).val().length + 2) * .6) + "em");
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
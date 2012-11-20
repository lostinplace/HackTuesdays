$(function () {
  $("#txtcmd").focus();
  var CursorInit = (function () {
    setInterval(function () {
      $('.cursor').css('color', '#222');
      setTimeout(function () {
        $('.cursor').css('color', '#00ff90');
      }, 500);
    }, 1000);
  })();
});
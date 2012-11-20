$(function () {
  $("#txtcmd").val("").focus().on("keypress", function () {
    $(this).css("width", (($(this).val().length + 2) * .6) + "em");
  });
});
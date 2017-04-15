/*
Theme Name: Skype Docs
Description: Front-end script
Author: Skype Docs Team
Author URI: 
Tags: Skype-Docs
*/
$(document).ready(function () {
    $("#backBtn").hide();
});

var current = $(window).scrollTop();
$(window).scroll(function() {
    $(window).scrollTop(current);
});

$( "#viewMoreButton" ).click(function() {
  $(window).off('scroll');
  $("#viewMoreButton").hide();
  $("#secondary").slideDown('10');
  $("#primary").slideUp('1000');
  $("#logo").addClass("invert");
  $(".header").addClass("gradientBackground");
  $("#changelog").hide();
  $("#backBtn").show();

});

$( "#backBtn" ).click(function() {
  $("#backBtn").hide();
});

$( "#changelog" ).click(function() {
    $('#changelogModal').modal('show');
});



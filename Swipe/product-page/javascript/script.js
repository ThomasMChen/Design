/*
Theme Name: Skype Docs
Description: Front-end script
Author: Skype Docs Team
Author URI: 
Tags: Skype-Docs
*/
$(document).ready(function () {

});


$( "#viewMoreButton" ).click(function() {
  $("#viewMoreButton").hide();
  $("#secondary").slideDown('10');
  $("#primary").slideUp('1000');
  $(".header").addClass("gradientBackground");
  $("#logo").addClass(".invert");
});



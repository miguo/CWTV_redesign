$(document).ready(function() {


$("#myCarousel").carousel({
	interval: 8000
}); 

/* Cover photo carousel */
$('#cover_left').click(function() {
  $('#myCarousel').carousel('prev');
});

$('#cover_right').click(function() {
  $('#myCarousel').carousel('next');
});

/* Smaller thumbnails carousel */
$('#carousel_one_left').click(function() {
  $('#carousel_one').carousel('prev');
});

$('#carousel_one_right').click(function() {
  $('#carousel_one').carousel('next');
});

$('#carousel_two_left').click(function() {
  $('#carousel_two').carousel('prev');
});

$('#carousel_two_right').click(function() {
  $('#carousel_two').carousel('next');
});

/* Episode details popover when hovering over thumbnails */
$(".pop_test").popover("hover");

/*
$('.imageSm').hover(function() {
$(this).find('.play').show();
}, function() {
$(this).find('.play').hide();
}); */

});


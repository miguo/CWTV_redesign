$(document).ready(function() {


$(".carousel").carousel({
	interval: 8000
}); 

$('.carousel-control.left').click(function() {
  $('#myCarousel').carousel('prev');
});

$('.carousel-control.right').click(function() {
  $('#myCarousel').carousel('next');
});

/*
$('.imageSm').hover(function() {
$(this).find('.play').show();
}, function() {
$(this).find('.play').hide();
}); */

});
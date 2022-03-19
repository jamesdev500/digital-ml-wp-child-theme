jQuery.noConflict();

(function ($) {

// $(document).on('click', 'a[href^="#"]', function(e) {

//     var id = $(this).attr('href');

//     var $id = $(id);
//     if ($id.length === 0) {
//         return;
//     }

//     e.preventDefault();

//     var pos = $id.offset().top;

//     $('body, html').animate({scrollTop: pos});
// });


$(document).ready(function () {

// test scripts here

$(".floating-box-close").click(function(){
$(".floating-box").css("display", "none");
});


$(window).scroll(function() {    
var scroll = $(window).scrollTop();

if (scroll >= 100) {
$(".main-header").addClass("scrolled");
$(".back-to-top-button").addClass("scrolled");
} else {
$(".main-header").removeClass("scrolled");
$(".back-to-top-button").removeClass("scrolled");
}
});

$(window).scroll(function() {    
var scroll = $(window).scrollTop();

if (scroll >= 300) {
$(".jump-button").addClass("scrolled");
} else {
$(".jump-button").removeClass("scrolled");
}
});

});

$(document).ready(function() {
$(".slick-slide").click(function () {
    $(".slick-slide").removeClass("active");
    // $(".slick-slide").addClass("active"); // instead of this do the below 
    $(this).addClass("active");   
});

$(".toggle-carousel .slick-slide:first-child").addClass("active");

	
$(".menu-upcoming-webinars .theplus-posts-not-found").text("Currently no upcoming webinars");

});

})(jQuery);
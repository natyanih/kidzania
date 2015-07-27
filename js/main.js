$.preloadImages = function( images ) {
  for (var i = 0; i < images.length; i++) {
    $("<img />").attr("src", images[i]);
  }
};

var images = [
    '../images/assets/city/slices/color/1/1.png',
    '../images/assets/city/slices/color/1/2.png',
    '../images/assets/city/slices/color/1/3.png',
    '../images/assets/city/slices/color/1/4.png',
    '../images/assets/city/slices/color/1/5.png',
    '../images/assets/city/slices/color/1/6.png',
    '../images/assets/city/slices/color/1/7.png',
    '../images/assets/city/slices/color/1/8.png',

    '../images/assets/city/slices/color/2/1.png',
    '../images/assets/city/slices/color/2/2.png',
    '../images/assets/city/slices/color/2/3.png',
    '../images/assets/city/slices/color/2/4.png',
    '../images/assets/city/slices/color/2/5.png',
    '../images/assets/city/slices/color/2/6.png',
    '../images/assets/city/slices/color/2/7.png',
    '../images/assets/city/slices/color/2/8.png',

    '../images/assets/city/slices/color/3/1.png',
    '../images/assets/city/slices/color/3/2.png',
    '../images/assets/city/slices/color/3/3.png',
    '../images/assets/city/slices/color/3/4.png',
    '../images/assets/city/slices/color/3/5.png',
    '../images/assets/city/slices/color/3/6.png',
    '../images/assets/city/slices/color/3/7.png',
    '../images/assets/city/slices/color/3/8.png',

    '../images/assets/city/slices/color/4/1.png',
    '../images/assets/city/slices/color/4/2.png',
    '../images/assets/city/slices/color/4/3.png',
    '../images/assets/city/slices/color/4/4.png',
    '../images/assets/city/slices/color/4/5.png',
    '../images/assets/city/slices/color/4/6.png',
    '../images/assets/city/slices/color/4/7.png',
    '../images/assets/city/slices/color/4/8.png',

    '../images/assets/city/slices/color/5/1.png',
    '../images/assets/city/slices/color/5/2.png',
    '../images/assets/city/slices/color/5/3.png',
    '../images/assets/city/slices/color/5/4.png',
    '../images/assets/city/slices/color/5/5.png',
    '../images/assets/city/slices/color/5/6.png',
    '../images/assets/city/slices/color/5/7.png',
    '../images/assets/city/slices/color/5/8.png',

    '../images/assets/crv/slices/color/1/1.png',
    '../images/assets/crv/slices/color/1/2.png',
    '../images/assets/crv/slices/color/1/3.png',
    '../images/assets/crv/slices/color/1/4.png',
    '../images/assets/crv/slices/color/1/5.png',
    '../images/assets/crv/slices/color/1/6.png',
    '../images/assets/crv/slices/color/1/7.png',
    '../images/assets/crv/slices/color/1/8.png',

    '../images/assets/crv/slices/color/2/1.png',
    '../images/assets/crv/slices/color/2/2.png',
    '../images/assets/crv/slices/color/2/3.png',
    '../images/assets/crv/slices/color/2/4.png',
    '../images/assets/crv/slices/color/2/5.png',
    '../images/assets/crv/slices/color/2/6.png',
    '../images/assets/crv/slices/color/2/7.png',
    '../images/assets/crv/slices/color/2/8.png',

    '../images/assets/crv/slices/color/3/1.png',
    '../images/assets/crv/slices/color/3/2.png',
    '../images/assets/crv/slices/color/3/3.png',
    '../images/assets/crv/slices/color/3/4.png',
    '../images/assets/crv/slices/color/3/5.png',
    '../images/assets/crv/slices/color/3/6.png',
    '../images/assets/crv/slices/color/3/7.png',
    '../images/assets/crv/slices/color/3/8.png',

    '../images/assets/crv/slices/color/4/1.png',
    '../images/assets/crv/slices/color/4/2.png',
    '../images/assets/crv/slices/color/4/3.png',
    '../images/assets/crv/slices/color/4/4.png',
    '../images/assets/crv/slices/color/4/5.png',
    '../images/assets/crv/slices/color/4/6.png',
    '../images/assets/crv/slices/color/4/7.png',
    '../images/assets/crv/slices/color/4/8.png',

    '../images/assets/crv/slices/color/5/1.png',
    '../images/assets/crv/slices/color/5/2.png',
    '../images/assets/crv/slices/color/5/3.png',
    '../images/assets/crv/slices/color/5/4.png',
    '../images/assets/crv/slices/color/5/5.png',
    '../images/assets/crv/slices/color/5/6.png',
    '../images/assets/crv/slices/color/5/7.png',
    '../images/assets/crv/slices/color/5/8.png',

    '../images/assets/jazz/slices/color/1/1.png',
    '../images/assets/jazz/slices/color/1/2.png',
    '../images/assets/jazz/slices/color/1/3.png',
    '../images/assets/jazz/slices/color/1/4.png',
    '../images/assets/jazz/slices/color/1/5.png',
    '../images/assets/jazz/slices/color/1/6.png',
    '../images/assets/jazz/slices/color/1/7.png',
    '../images/assets/jazz/slices/color/1/8.png',

    '../images/assets/jazz/slices/color/2/1.png',
    '../images/assets/jazz/slices/color/2/2.png',
    '../images/assets/jazz/slices/color/2/3.png',
    '../images/assets/jazz/slices/color/2/4.png',
    '../images/assets/jazz/slices/color/2/5.png',
    '../images/assets/jazz/slices/color/2/6.png',
    '../images/assets/jazz/slices/color/2/7.png',
    '../images/assets/jazz/slices/color/2/8.png',

    '../images/assets/jazz/slices/color/3/1.png',
    '../images/assets/jazz/slices/color/3/2.png',
    '../images/assets/jazz/slices/color/3/3.png',
    '../images/assets/jazz/slices/color/3/4.png',
    '../images/assets/jazz/slices/color/3/5.png',
    '../images/assets/jazz/slices/color/3/6.png',
    '../images/assets/jazz/slices/color/3/7.png',
    '../images/assets/jazz/slices/color/3/8.png',

    '../images/assets/jazz/slices/color/4/1.png',
    '../images/assets/jazz/slices/color/4/2.png',
    '../images/assets/jazz/slices/color/4/3.png',
    '../images/assets/jazz/slices/color/4/4.png',
    '../images/assets/jazz/slices/color/4/5.png',
    '../images/assets/jazz/slices/color/4/6.png',
    '../images/assets/jazz/slices/color/4/7.png',
    '../images/assets/jazz/slices/color/4/8.png',

    '../images/assets/jazz/slices/color/5/1.png',
    '../images/assets/jazz/slices/color/5/2.png',
    '../images/assets/jazz/slices/color/5/3.png',
    '../images/assets/jazz/slices/color/5/4.png',
    '../images/assets/jazz/slices/color/5/5.png',
    '../images/assets/jazz/slices/color/5/6.png',
    '../images/assets/jazz/slices/color/5/7.png',
    '../images/assets/jazz/slices/color/5/8.png',

    '../images/assets/jazz/slices/color/6/1.png',
    '../images/assets/jazz/slices/color/6/2.png',
    '../images/assets/jazz/slices/color/6/3.png',
    '../images/assets/jazz/slices/color/6/4.png',
    '../images/assets/jazz/slices/color/6/5.png',
    '../images/assets/jazz/slices/color/6/6.png',
    '../images/assets/jazz/slices/color/6/7.png',
    '../images/assets/jazz/slices/color/6/8.png'
    ];

$.preloadImages( images );

$(document).ready(function($) {

		 methods.hideDiv();

		 function welcomePage () {
				 var welcome = setInterval( function () {
						 $('#welcome').fadeOut('fast');
						 $('#loading').fadeIn('slow');
						 clearInterval(welcome);
						 loadingPage();
				 }, 3000 );
		 }

		 function loadingPage () {
				 var progress = setInterval(function() {
						 var $bar = $('.progress-bar');

						 if ($bar.width() >= 400) {
								 clearInterval(progress);
								 $('.progress-bar').removeClass('active');
								 $('#loading').fadeOut('fast');
								 $('#carousel').fadeIn('fast');
								 $('.customizer-main').hide();
								 $('.jazz-customizer-holder').hide();
								 $('.preview-main').hide();
								 $('.btn-customizer-group').hide();
								 $('.btn-view-car').hide();
								 $('.btn-start-over').hide();
								 $('.btn-race-car').hide();
								 $('.race-main').hide();
								 $('.btn-back-carousel').hide();
								 $('.btn-back-preview').hide();
								 carousel();
						 } else {
								 $bar.width($bar.width() + Math.floor(Math.random() * (40)) + 1);
						 }
				 }, 200);
		 }
		 welcomePage();
});

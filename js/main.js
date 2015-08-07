$(document).ready(function($) {

		 methods.hideDiv();

		 function welcomePage () {
				 var welcome = setInterval( function () {
						 $('#welcome').hide();
						 $('#loading').show();
						 clearInterval(welcome);
						 loadingPage();
				 }, 3000 );
				// for print
				//document.styleSheets[11].addRule( '.print-button', 'display : none' );
				//document.styleSheets[11].addRule( '#congrats-screen', '-webkit-print-color-adjust : exact' );
				//document.styleSheets[11].addRule( '.pic-holder-congrats', 'top : 8px; left : 10px;' );
				//document.styleSheets[11].addRule( '.pic-holder-congrats > img', 'width : 255px;' );
				//document.styleSheets[11].addRule( '.urbano-congrats', 'top : 250px; left : 947px' );
				//document.styleSheets[11].addRule( '#car-name-congrats-cont', 'color: white !important;' );
		 }

		 function loadingPage () {
				 var progress = setInterval(function() {
						 var $bar = $('.progress-bar');

						 if ($bar.width() >= 400) {
								 clearInterval(progress);
								 $('.progress-bar').removeClass('active');
								 $('#loading').hide();
								 $('#carousel').show();
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

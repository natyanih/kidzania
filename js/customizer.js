'use strict';

$( document ).ready( function ( $ ) {
	var selectCar;
	var currentCar = {
		'name' : ''
	};

	function carousel () {
		$( '#carousel-main' ).carousel( { interval : 3000 } );
		$( '#carousel-main' ).bind( 'slid.bs.carousel', function ( e ) {
		   var carouselData = $( this ).data( 'bs.carousel' );

			selectCar = carouselData.$element.find( '.item.active' ).attr( 'id' );
		} );
	}

	carousel();

	var progress = setInterval(function() {
		var $bar = $( '.progress-bar' );

		if ( $bar.width() >= 400 ) {
			clearInterval( progress );
			$( '.progress-bar' ).removeClass( 'active' );
			$( '#loading' ).fadeOut( 'fast' );
			$( '#carousel' ).fadeIn( 'fast' );
			$( '.customizer-main' ).hide();
			$( '.preview-main' ).hide();
			$( '.btn-customizer-group' ).hide();
			$( '.btn-view-car' ).hide();
			$( '.btn-race-car' ).hide();
			$( '.race-main' ).hide();
			carousel();
		} else {
			$bar.width( $bar.width() + Math.floor( Math.random() * ( 40 ) ) + 1 );
		}
	}, 300);


function hideDiv ( id ) {

	switch ( id ) {
		// from carousel to customizer
		case 'carousel' :
			$( '#loading' ).hide();
			$( '#carousel-main' ).hide();
			$( '.customizer-main' ).show();
			$( '.btn-view-car' ).show();
			$( '.btn-customizer-group' ).show();
			$( '.btn-select-car' ).hide();

			// hide other customizer divs
			$( '.div-car-tint' ).hide();
			$( '.div-car-decal' ).hide();
			$( '.div-car-rims' ).hide();
			$( '.div-car-body' ).hide();

			// add color to car color button
			$( '.customizer-car-color > p' ).addClass( 'active' );
			break;

		// customizer to car preview
		case 'customizer' :
			$( '#loading' ).hide();
			$( '#carousel-main' ).hide();
			$( '.customizer-main' ).hide();
			$( '.preview-main' ).show();
			$( '.btn-race-car' ).show();
			$( '.btn-view-car' ).hide();
			$( '.btn-customizer-group' ).hide();
			break;

		// car preview to race
		case 'preview' :
			$( '#loading' ).hide();
			$( '#carousel-main' ).hide();
			$( '#carousel' ).hide();
			$( '.race-main' ).show();
			$( '.race-main' ).removeClass( 'hidden' );
			break;

		// if no id
		default :
			$( '#carousel' ).hide();
			break;
		}
	}

	hideDiv();

	function showCustomizer ( customizer ) {
		var divClass = '.div-car-' + customizer;
		var btnClass = '.customizer-car-' + customizer;
		$( '.customizer-container' ).hide();
		$( divClass ).show();
		$( '.btn-customizer > p.active' ).removeClass( 'active' );
		$( btnClass).find( 'p' ).addClass( 'active' );
	}

	// EVENT LISTENERS
	$( '.btn-select-car' ).on( 'click', function () {
		currentCar.name = selectCar;
		hideDiv( 'carousel' );
	} );

	$( '.btn-view-car' ).on( 'click', function () {
		hideDiv( 'customizer' );
	} );

	$( '.btn-race-car' ).on( 'click', function () {
		hideDiv( 'preview' );
	} );

	// EVENT LISTENERS FOR CUSTOMIZER BUTTONS
	$( '.customizer-car-color' ).on( 'click', function () {
		showCustomizer( 'color' );
	} );

	$( '.customizer-car-tint' ).on( 'click', function () {
		showCustomizer( 'tint' );
	} );

	$( '.customizer-car-decal' ).on( 'click', function () {
		showCustomizer( 'decal' );
	} );

	$( '.customizer-car-rims' ).on( 'click', function () {
		showCustomizer( 'rims' );
	} );

	$( '.customizer-car-body' ).on( 'click', function () {
		showCustomizer( 'body' );
	} );

    window.addEventListener( 'DOMContentLoaded', function () {

        if( navigator.getUserMedia ) {
            navigator.getUserMedia( videoObj, function ( stream ) {
                video.src = stream;
                video.play();
            }, errBack );
        } else if( navigator.webkitGetUserMedia ) {
            navigator.webkitGetUserMedia( videoObj, function ( stream ){
                video.src = window.webkitURL.createObjectURL( stream );
                video.play();
            }, errBack );
        }
        else if( navigator.mozGetUserMedia ) {
            navigator.mozGetUserMedia( videoObj, function ( stream ){
                video.src = window.URL.createObjectURL( stream );
                video.play();
            }, errBack );
        }
    }, false );

    var canvas = document.getElementById( 'canvas' ),
    context    = canvas.getContext( '2d' ),
    video      = document.getElementById( 'video' ),
    videoObj   = { 'video': true },
    errBack    = function ( error ) {
        console.log( 'Video capture error: ', error.code );
    };

    document.getElementById( 'take-picture' ).addEventListener( 'click', function ( e ) {
        context.drawImage( video, 0, 0, 300, 225 );
        e.target.textContent = 'Retake Picture';
        $( '.print-congrats' ).removeClass( 'hidden' );
    }  );

    $( '.print-congrats' ).on( 'click', function () {
        window.print();
    } );
} );



// ( function () {
// /* jshint -W098, -W117 */
// 'use strict';

// // properties of current car
// var currentCar = {
// 	'name'   : '',
// 	'side'   : 'semi-left',
// 	'color'  : '',
// 	'decals' : '',
// 	'tires'  : '',
// 	'grills' : ''
// };

// var selectCar = 'car1';

// // list of sides
// //  semi-left = when car is displayed diagonally at the driver side
// var sides = [ 'semi-left', 'left', 'back', 'right', 'semi-right', 'front' ];

// // function to change image
// // will use the currentCar properties
// function changeImage () {
// 	console.log( 'change image' );
// }

// function changeSide( rotation ) {
// 	var currentIndex = sides.indexOf( currentCar.side );

// 	switch( rotation ) {
// 	case 'clockwise' :
// 		// if current side is front, set it to semi-left
// 		// else return the next items in the sides list
// 		if ( currentIndex === 5 ) {
// 			currentCar.side = sides[ 0 ];
// 		} else {
// 			currentCar.side = sides[ currentIndex    1 ];
// 		}

// 		changeImage();
// 		break;

// 	case 'counter' :

// 		// if current side is front, set it to semi-left
// 		// else return the next items in the sides list
// 		if ( currentIndex === 0 ) {
// 			currentCar.side = sides[ 5 ];
// 		} else {
// 			currentCar.side = sides[ currentIndex - 1 ];
// 		}

// 		changeImage();
// 		break;
// 	}
// }

// function carousel () {
// 	$( '#carousel' ).carousel( { interval : 1500 } );
// 	$( '#carousel' ).bind( 'slid.bs.carousel', function ( e ) {
// 	   var carouselData = $( this ).data( 'bs.carousel' );

// 		selectCar = carouselData.$element.find( '.item.active' ).attr( 'id' )
// 	} );

// 	$( '.car-select' ).on( 'click', function () {
// 		$( '#customizer-div' ).removeClass( 'hidden' );
// 		$( '#main-div' ) .addClass( 'hidden' );
// 		$( '#carName' ).text( selectCar );
// 		currentCar.name = selectCar;
// 		console.log( currentCar )
// 	} );

// }


// carousel();

// } )();

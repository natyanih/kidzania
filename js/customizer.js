'use strict';

$( document ).ready( function ( $ ) {
	var selectCar;
	var currentCar;

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
			$( '.btn-select-car' ).hide();
			break;

		// customizer to car preview
		case 'customizer' :
			$( '#loading' ).hide();
			$( '#carousel-main' ).hide();
			$( '.customizer-main' ).hide();
			$( '.preview-main' ).show();
			$( '.btn-race-car' ).show();
			$( '.btn-view-car' ).hide();
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

    // EVENT LISTENERS
    $( '.btn-select-car' ).on( 'click', function () {
    	hideDiv( 'carousel' );
    } );

    $( '.btn-view-car' ).on( 'click', function () {
		hideDiv( 'customizer' );
    } );

    $( '.btn-race-car' ).on( 'click', function () {
    	hideDiv( 'preview' );
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

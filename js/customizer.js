'use strict';

$( document ).ready( function ( $ ) {
	var selectCar;
	var currentCar = {
		'name'        : null,
		'color'       : null,
		'tint'        : null,
		'decal'       : null,
		'rim'         : null,
		'grill'       : null,
		'skirt'       : null,
		'spoiler'     : null,
		'currentSide' : null
	};

	var defaultCars = {
		'jazz' : '../images/assets/jazz/color/1.png'
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

				// display default car - yellow
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

	function applyAsset( args ) {
		var type = args.type;
		var id   = args.id;

		currentCar[ type ] = id;
		console.log( currentCar );

		console.log( 'type: ' + type + ' - id: ' + id );
	}

	function initCanvas() {
		var canvas  = document.getElementById( 'customizer-car-container' );
		var context = canvas.getContext( '2d' );
		var img     = new Image();
		img.src     = defaultCars[ currentCar.name ];

		img.onload = function () {
			context.drawImage( img, 0, 120 );
		};
	}
	// EVENT LISTENERS
	$( '.btn-select-car' ).on( 'click', function () {
		currentCar.name = selectCar;
		hideDiv( 'carousel' );

		// display default car
		// jazz = yellow
		initCanvas();
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

	// COLORS EVENT HANDLERS
	$( '.customizer-color-1' ).on( 'click', function () {
		applyAsset( { 'type' : 'color', 'id' : 1 } );
	} );

	$( '.customizer-color-2' ).on( 'click', function () {
		applyAsset( { 'type' : 'color', 'id' : 2 } );
	} );

	$( '.customizer-color-3' ).on( 'click', function () {
		applyAsset( { 'type' : 'color', 'id' : 3 } );
	} );

	$( '.customizer-color-4' ).on( 'click', function () {
		applyAsset( { 'type' : 'color', 'id' : 4 } );
	} );

	$( '.customizer-color-5' ).on( 'click', function () {
		applyAsset( { 'type' : 'color', 'id' : 5 } );
	} );

	$( '.customizer-color-6' ).on( 'click', function () {
		applyAsset( { 'type' : 'color', 'id' : 6 } );
	} );

	// TINT EVENT HANDLERS
	$( '.customizer-tint-1' ).on( 'click', function () {
		applyAsset( { 'type' : 'tint', 'id' : 1 } );
	} );

	$( '.customizer-tint-2' ).on( 'click', function () {
		applyAsset( { 'type' : 'tint', 'id' : 2 } );
	} );

	// DECAL EVENT HANDLERS
	$( '.customizer-decal-1' ).on( 'click', function () {
		applyAsset( { 'type' : 'decal', 'id' : 1 } );
	} );

	$( '.customizer-decal-2' ).on( 'click', function () {
		applyAsset( { 'type' : 'decal', 'id' : 2 } );
	} );

	$( '.customizer-decal-3' ).on( 'click', function () {
		applyAsset( { 'type' : 'decal', 'id' : 3 } );
	} );

	$( '.customizer-decal-4' ).on( 'click', function () {
		applyAsset( { 'type' : 'decal', 'id' : 4 } );
	} );

	$( '.customizer-decal-5' ).on( 'click', function () {
		applyAsset( { 'type' : 'decal', 'id' : 5 } );
	} );

	$( '.customizer-decal-6' ).on( 'click', function () {
		applyAsset( { 'type' : 'decal', 'id' : 6 } );
	} );

	// RIMS EVENT HANDLERS
	$( '.customizer-rim-1' ).on( 'click', function () {
		applyAsset( { 'type' : 'rim', 'id' : 1 } );
	} );

	$( '.customizer-rim-2' ).on( 'click', function () {
		applyAsset( { 'type' : 'rim', 'id' : 2 } );
	} );

	$( '.customizer-rim-3' ).on( 'click', function () {
		applyAsset( { 'type' : 'rim', 'id' : 3 } );
	} );

	$( '.customizer-rim-4' ).on( 'click', function () {
		applyAsset( { 'type' : 'rim', 'id' : 4 } );
	} );

	$( '.customizer-rim-5' ).on( 'click', function () {
		applyAsset( { 'type' : 'rim', 'id' : 5 } );
	} );

	$( '.customizer-rim-6' ).on( 'click', function () {
		applyAsset( { 'type' : 'rim', 'id' : 6 } );
	} );

	// GRILL EVENT HANDLERS
	$( '.customizer-grill-1' ).on( 'click', function () {
		applyAsset( { 'type' : 'grill', 'id' : 1 } );
	} );

	$( '.customizer-grill-2' ).on( 'click', function () {
		applyAsset( { 'type' : 'grill', 'id' : 2 } );
	} );

	$( '.customizer-grill-3' ).on( 'click', function () {
		applyAsset( { 'type' : 'grill', 'id' : 3 } );
	} );

	// SKIRT EVENT HANDLERS
	$( '.customizer-skirt-1' ).on( 'click', function () {
		applyAsset( { 'type' : 'skirt', 'id' : 1 } );
	} );

	$( '.customizer-skirt-2' ).on( 'click', function () {
		applyAsset( { 'type' : 'skirt', 'id' : 2 } );
	} );

	$( '.customizer-skirt-3' ).on( 'click', function () {
		applyAsset( { 'type' : 'skirt', 'id' : 3 } );
	} );

	// SPOILER EVENT HANDLERS
	$( '.customizer-spoiler-1' ).on( 'click', function () {
		applyAsset( { 'type' : 'spoiler', 'id' : 1 } );
	} );

	$( '.customizer-spoiler-2' ).on( 'click', function () {
		applyAsset( { 'type' : 'spoiler', 'id' : 2 } );
	} );

	$( '.customizer-spoiler-3' ).on( 'click', function () {
		applyAsset( { 'type' : 'spoiler', 'id' : 3 } );
	} );

	// CONGRATS PAGE AND PRINTING
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

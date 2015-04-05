'use strict';

$( '.btn-view-car' ).on( 'click', function () {
	$( '.header-title' ).text( 'SELECT BACKGROUND' );
	methods.showCustomizer( 'background' );
} );

// EVENT LISTENERS FOR CUSTOMIZER BUTTONS
$( '.customizer-car-color' ).on( 'click', function () {
	methods.showCustomizer( 'color' );
} );

$( '.customizer-car-tint' ).on( 'click', function () {
	methods.showCustomizer( 'tint' );
} );

$( '.customizer-car-decal' ).on( 'click', function () {
	methods.showCustomizer( 'decal' );
} );

$( '.customizer-car-rims' ).on( 'click', function () {
	methods.showCustomizer( 'rims' );
} );

$( '.customizer-car-body' ).on( 'click', function () {
	methods.showCustomizer( 'body' );
} );

$( '.customizer-start-over' ).on( 'click', function () {
	methods.resetCar();
} );

$( '.btn-start-over' ).on( 'click', function () {
	methods.resetCar();
	methods.hideDiv( 'carousel' );

	// change back background to garage
	$( '.customizer-main' ).removeClass( 'preview-main' );
} );

$( '.preview-background-1' ).on( 'click', function () {
	methods.applyAsset({
        'type' : 'raceBG',
        'id'   : 1
    });
} );

$( '.preview-background-2' ).on( 'click', function () {
	methods.applyAsset({
        'type' : 'raceBG',
        'id'   : 2
    });
} );

$( '.preview-background-3' ).on( 'click', function () {
	methods.applyAsset({
        'type' : 'raceBG',
        'id'   : 3
    });
} );

$( '.btn-rotate-counter' ).on( 'click', function () {
	var current      = currentCar.currentSide;
	var currentIndex = sequence.indexOf( current );
	// return last index if current index is 0
	if ( currentIndex === 0 ) {
		methods.applyAsset( {
			'type' : 'currentSide',
			'id'   : sequence[ 7 ]
		} );
	} else {
		methods.applyAsset( {
			'type' : 'currentSide',
			'id'   : sequence[ currentIndex - 1 ]
		} );
	}
} );

$( '.btn-rotate-clockwise' ).on( 'click', function () {
	var current      = currentCar.currentSide;
	var currentIndex = sequence.indexOf( current );
	// return last index if current index is 0
	if ( currentIndex === 7 ) {
		methods.applyAsset( {
			'type' : 'currentSide',
			'id'   : sequence[ 0 ]
		} );
	} else {
		methods.applyAsset( {
			'type' : 'currentSide',
			'id'   : sequence[ currentIndex + 1 ]
		} );
	}
} );

$( '.btn-back-carousel' ).on( 'click', function () {
	methods.hideDiv( 'loading' );
} );

$( '.btn-back-preview' ).on( 'click', function () {
	customizer.renderCar();
	methods.hideDiv( 'carousel' );

	// change back background to garage
	$( '.customizer-main' ).removeClass( 'preview-main' );
} );

$( '.customizer-selector' ).on( 'click', function () {
	if ( $( this ).find( '.selection-indicator' ).length > 0 ) {
		$( this ).find( '.selection-indicator' ).remove();
	} else {
		// find other selection indicators and remove
		$( this ).siblings().find( '.selection-indicator' ).remove();
		$( this ).prepend( '<i class="fa fa-check-circle fa-3 selection-indicator"></i>' );
	}
} );

'use strict';

$( '.btn-view-car' ).on( 'click', function () {
	$( '.header-title' ).text( 'SELECT BACKGROUND' );
	methods.showCustomizer( 'background' );
	// certificate car display
	$( '.car-congrats-body-' + currentCar.prevCarName + '-' + currentCar.prevColor ).addClass( 'hidden' );
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
	methods.hideDiv( 'loading' );
} );

$( '.btn-start-over' ).on( 'click', function () {
	methods.hideDiv( 'loading' );
} );

$( '.preview-background-1' ).on( 'click', function () {
    $( '.preview-main' ).removeClass( 'summer-beach' );
    $( '.preview-main' ).removeClass( 'city-street' );
    $( '.preview-main' ).removeClass( 'motor-sport' );
    if ( currentCar.raceBG === 1 ) {
    	$( '.preview-main' ).removeClass( 'sunset-forest' );
    	currentCar.raceBG = null;
    } else {
    	$( '.preview-main' ).addClass( 'sunset-forest' );
    	currentCar.raceBG = 1;
    }
} );

$( '.preview-background-2' ).on( 'click', function () {
	$( '.preview-main' ).removeClass( 'city-street' );
    $( '.preview-main' ).removeClass( 'sunset-forest' );
    $( '.preview-main' ).removeClass( 'motor-sport' );
    if ( currentCar.raceBG === 2 ) {
		$( '.preview-main' ).removeClass( 'summer-beach' );
		currentCar.raceBG = null;
    } else {
    	$( '.preview-main' ).addClass( 'summer-beach' );
    	currentCar.raceBG = 2;
    }
} );

$( '.preview-background-3' ).on( 'click', function () {
    $( '.preview-main' ).removeClass( 'sunset-forest' );
	$( '.preview-main' ).removeClass( 'summer-beach' );
	$( '.preview-main' ).removeClass( 'motor-sport' );
	if ( currentCar.raceBG === 3 ) {
		$( '.preview-main' ).removeClass( 'city-street' );
		currentCar.raceBG = null;
	} else {
		$( '.preview-main' ).addClass( 'city-street' );
		currentCar.raceBG = 3;
	}
} );

$( '.preview-background-4' ).on( 'click', function () {
    $( '.preview-main' ).removeClass( 'sunset-forest' );
	$( '.preview-main' ).removeClass( 'summer-beach' );
	$( '.preview-main' ).removeClass( 'city-street' );
	if ( currentCar.raceBG === 4 ) {
		$( '.preview-main' ).removeClass( 'motor-sport' );
		currentCar.raceBG = null;
	} else {
		$( '.preview-main' ).addClass( 'motor-sport' );
		currentCar.raceBG = 4;
	}
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
	$( '.preview-main' ).removeClass( 'sunset-forest' );
	$( '.preview-main' ).removeClass( 'summer-beach' );
	$( '.preview-main' ).removeClass( 'city-street' );
	$( '.preview-main' ).removeClass( 'motor-sport' );
	currentCar.currentSide = 1;
	customizer.renderCar( { 'customize' : true, 'render' : 'wholeCar' } );
	methods.hideDiv( 'carousel' );

	// change back background to garage
	$( '.customizer-main' ).removeClass( 'preview-main' );
} );

$( '.customizer-selector' ).on( 'click', function () {
	if ( $( this ).find( '.selection-indicator' ).length > 0 ) {
		console.log( 'customizer-select' );

		$( this ).find( '.selection-indicator' ).remove();

		// if color and no more color selected
		if ( $( this ).hasClass( 'type-color' ) ) {
			customizer.selectDefaultColor();
		}

		if ( $( this ).hasClass( 'type-tint' ) ) {
			console.log( 'has Class tint' );
			customizer.selectDefaultTint();
		}

		if ( $(this).hasClass( 'type-background' ) ) {
			customizer.selectDefaultBackground();
		}

	} else {

		if ( $( this ).hasClass( 'type-grill' ) ) {
			$( this ).siblings( '.type-grill' ).find( '.selection-indicator' ).remove();
		} else if ( $( this ).hasClass( 'type-skirt' ) ) {
			$( this ).siblings( '.type-skirt' ).find( '.selection-indicator' ).remove();
		} else if  ( $( this ).hasClass( 'type-spoiler' ) ) {
			$( this ).siblings( '.type-spoiler' ).find( '.selection-indicator' ).remove();
		} else {
			// find other selection indicators and remove
			$( this ).siblings().find( '.selection-indicator' ).remove();
		}
		$( this ).prepend( '<i class="fa fa-check-circle fa-3 selection-indicator"></i>' );
	}
} );

'use strict';

$( '.btn-view-car' ).on( 'click', function () {
	methods.showCustomizer( 'background' );
} );

$( '.btn-race-car' ).on( 'click', function () {
	methods.hideDiv( 'preview' );

	currentCar.color = currentCar.color || 1;
	currentCar.rims  = currentCar.rims || 1;

	// ADDING CUSTOMIZE STYLE IN RACE CAR
	if ( currentCar.skirt && currentCar.skirt !== 1 ) {
		$( '.race-car1-skirt' ).attr( 'src', 'images/assets/' + currentCar.name + '/slices/skirt/' + currentCar.skirt + '/6.png' ).addClass( 'race-skirt-' + currentCar.name );
	}
	if ( currentCar.spoiler && currentCar.spoiler !== 1 ) {
		$( '.race-car1-spoiler' ).attr( 'src', 'images/assets/' + currentCar.name + '/slices/spoiler/' + currentCar.spoiler + '/6.png' ).addClass( 'race-spoiler-' + currentCar.name );
	}

	if ( currentCar.tint ) {
		$( '.race-car1-tint' ).attr( 'src', 'images/assets/' + currentCar.name + '/slices/tint/' + currentCar.tint + '/6.png' ).addClass( 'race-tint-' + currentCar.name );
	}

	if ( currentCar.decal ) {
		$( '.race-car1-decal' ).attr( 'src', 'images/assets/' + currentCar.name + '/slices/decal/' + currentCar.decal + '/6.png' ).addClass( 'race-decal-' + currentCar.name + '-' + currentCar.decal );
	}

	$( '.race-car1' ).attr( 'src', 'images/assets/' + currentCar.name + '/slices/color/' + currentCar.color + '/6.png' );
	$( '.race-car1-rim-back, .race-car1-rim-front' ).attr( 'src', 'images/assets/' + currentCar.name + '/buttons/rims/' + currentCar.rims + '.png' );
	$( '.race-car1-rim-back' ).addClass( 'race-rim-back-' + currentCar.name );
	$( '.race-car1-rim-front' ).addClass( 'race-rim-front-' + currentCar.name );
	// END
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

'use strict';

$( '.btn-view-car' ).on( 'click', function () {
	methods.hideDiv( 'customizer' );
} );

$( '.btn-race-car' ).on( 'click', function () {
	methods.hideDiv( 'preview' );

	// ADDING CUSTOMIZE STYLE IN RACE CAR
	if ( currentCar.skirt !== 1 ) {
		$( '.race-car1-skirt' ).attr( 'src', 'images/assets/' + currentCar.name + '/slices/skirt/' + currentCar.skirt + '/6.png' ).addClass( 'race-skirt-' + currentCar.name );
	}
	if ( ( currentCar.name !== 'crv' && !currentCar.spoiler === 3 ) || currentCar.name === 'crv' && currentCar.spoiler !== 1 ) {
		$( '.race-car1-spoiler' ).attr( 'src', 'images/assets/' + currentCar.name + '/slices/spoiler/' + currentCar.spoiler + '/6.png' ).addClass( 'race-spoiler-' + currentCar.name );
	}

	$( '.race-car1' ).attr( 'src', 'images/assets/' + currentCar.name + '/slices/color/' + currentCar.color + '/6.png' );
	$( '.race-car1-tint' ).attr( 'src', 'images/assets/' + currentCar.name + '/slices/tint/' + currentCar.tint + '/6.png' ).addClass( 'race-tint-' + currentCar.name );
	$( '.race-car1-rim-back, .race-car1-rim-front' ).attr( 'src', 'images/assets/' + currentCar.name + '/buttons/rims/' + currentCar.rims + '.png' );
	$( '.race-car1-rim-back' ).addClass( 'race-rim-back-' + currentCar.name );
	$( '.race-car1-rim-front' ).addClass( 'race-rim-front-' + currentCar.name );
	$( '.race-car1-decal' ).attr( 'src', 'images/assets/' + currentCar.name + '/slices/decal/' + currentCar.decal + '/6.png' ).addClass( 'race-decal-' + currentCar.name );
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

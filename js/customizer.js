'use strict';

$( '.btn-view-car' ).on( 'click', function () {
	methods.hideDiv( 'customizer' );
} );

$( '.btn-race-car' ).on( 'click', function () {
	methods.hideDiv( 'preview' );
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

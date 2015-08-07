// CONGRATS PAGE AND PRINTING


function showPrintModal () {
	$( '.print-modal' ).removeClass( 'hidden' );
	setTimeout( function () {
		$( '.password' ).focus();
	} );
    //var access = prompt( "PRINT ACCESSIBILITY" );
		//if ( access === 'print' ) {
			//window.print();
			//return true;
		//}
		//alert( 'Wrong password' );
    //return false;
}

// ****Close modal
function closeModal () {
	$( '.print-modal' ).addClass( 'hidden' );
	$( '.password' ).val( '' );
}
$( '.close-modal' ).click( function () {
	closeModal();
} );

function printPage () {
	var pass = $( '.password' ).val();

    if ( !window.localStorage.getItem( 'password' ) ) {
        window.localStorage.setItem( 'password', 'admin' );
    }

    var adminPass = window.localStorage.getItem( 'password' );
	if ( pass === adminPass ) {
		window.print();
		return closeModal();
	}
	$( '.password-cont' ).addClass( 'has-error' );
	return true;
}

$( '.footer-modal' ).click( function () {
	printPage();
} );

var canvas  = document.getElementById('canvas'),

    context = canvas.getContext('2d'),
    video = document.getElementById('video'),
    videoObj = {
        'video': true
    },
    errBack = function(error) {
        console.log('Video capture error: ', error.code);
    };

var centerX = canvas.width / 2;
var centerY = canvas.height / 2;
var radius  = 70;
context.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
console.log( context )
document.getElementById('take-picture').addEventListener('click', function(e) {
    $( '#canvas' ).removeClass( 'hidden' );
    context.drawImage(video, 0, 0, 300, 225);
    $( this ).addClass( 'hidden' );
    $( '#retake-picture' ).removeClass( 'hidden' );
    $( '#print-congrats-done' ).removeClass( 'hidden' );
});

document.getElementById('retake-picture').addEventListener('click', function(e) {
		$( '#print-congrats-done' ).addClass( 'hidden' );
    $( '#canvas' ).addClass( 'hidden' );
    $( this ).addClass( 'hidden' );
    $( '#take-picture' ).removeClass( 'hidden' );
    //$('.print-button').removeClass('hidden');
});

$( '.print-button' ).click( function(e) {
	showPrintModal();
} );

function done ( event ) {
	$( '#car-name-congrats-cont' ).css( { 'display' : 'block' } );
	$( '#desinger-name-congrats-cont' ).css( { 'display' : 'block' } );
	$( '#car-name-congrats' ).css( { 'display' : 'none' } );
	$( '#desinger-name-congrats' ).css( { 'display' : 'none' } );
	$( '#retake-picture' ).addClass( 'hidden' );
	$('.print-button').removeClass('hidden');
	$( '#print-congrats-done' ).addClass( 'hidden' );
	return false;
}

$( '.desinger-name-congrats' ).keydown( function ( e ) {
    console.log( this.value + String.fromCharCode(e.keyCode) )
} );

function getValue ( id, target, event ) {

    var input = document.getElementById( id );
    var value = input.value;

		if ( id !== 'desinger-name-congrats' ) {
			value = '"' + input.value + '"';
		}

    if ( document.getElementById( id ).value.match( /^\s*$/ ) ) {

        document.getElementById( id ).setCustomValidity( 'Please fill out this field' );
    } else {
        document.getElementById( id ).setCustomValidity('');
    }

    var span = document.getElementById( target );
    span.innerText = value;

		if ( event.keyCode === 13 ) {
			event.preventDefault();
			return false;
		}
}
var newCar1 = $( '.race-car1-container' ).clone();
var newCar2 = $( '.race-car2-container' ).clone();

$( '.congrats-back-home' ).on( 'click', function () {

		// backgrounds
		$( '.forest-bg' ).addClass( 'hidden' );
		$( '.beach-bg' ).addClass( 'hidden' );
		$( '.sport-bg' ).addClass( 'hidden' );
		$( '.street-bg' ).addClass( 'hidden' );

		$( '.print-modal' ).addClass( 'hidden' );

		$('.print-button').addClass('hidden');
		$( '#car-name-congrats-cont' ).css( { 'display' : 'none' } );
		$( '#desinger-name-congrats-cont' ).css( { 'display' : 'none' } );
		$( '#car-name-congrats' ).css( { 'display' : 'inline-block' } );
		$( '#desinger-name-congrats' ).css( { 'display' : 'inline-block' } );
    currentCar.prevCarName = currentCar.name;
		currentCar.prevColor = currentCar.color;
    document.getElementById( 'desinger-name-congrats' ).value = '';
    document.getElementById( 'car-name-congrats' ).value = '';
    $( '#retake-picture' ).addClass( 'hidden' );
    $( '#take-picture' ).removeClass( 'hidden' );
    $( '#congrats-screen' ).addClass( 'hidden' );
    $( '.race-carsmoke' ).hide();
    $( '.race-enemy-tire, .race-enemy-tireback' ).hide();
    $( '#canvas' ).addClass( 'hidden' );
    $('#carousel').show();
    $( '.race-prestart-overlay' ).show();
    $( '.race-game-precounter' ).hide();
    $( '.race-game-precounter span' ).show();
    $( '.race-game-precounter span' ).remove( 'race-start-game' );
    $( '.race-car1-rim-back, .race-car1-rim-front' ).removeClass( 'race-rim-animate' );
    $( '.race-car1-container, .race-background, .race-car2-container' ).removeClass( 'race-accelerate-car' );
    $( '.race-car1-container, .race-car2-container, .race-finish-line-container, .race-mini-map-container .race-car1-mini' ).removeClass( 'race-finish-game' );
    $( '.race-car1-container' ).remove();
    $( '.race-car2-container' ).remove();
    $( '.race-background' ).append( [ newCar1, newCar2 ] );
    addCarStyle();
    $( '.race-restart-overlay' ).addClass( 'hidden' );
    $( '.car-details-congrats' ).html( '' );
    methods.hideDiv( 'loading' );
} );

// CONGRATS PAGE AND PRINTING
window.addEventListener('DOMContentLoaded', function() {

    if (navigator.getUserMedia) {
        navigator.getUserMedia(videoObj, function(stream) {
            video.src = stream;
            video.play();
        }, errBack);
    } else if (navigator.webkitGetUserMedia) {
        navigator.webkitGetUserMedia(videoObj, function(stream) {
            video.src = window.webkitURL.createObjectURL(stream);
            video.play();
        }, errBack);
    } else if (navigator.mozGetUserMedia) {
        navigator.mozGetUserMedia(videoObj, function(stream) {
            video.src = window.URL.createObjectURL(stream);
            video.play();
        }, errBack);
    }
}, false);

var canvas = document.getElementById('canvas'),
    context = canvas.getContext('2d'),
    video = document.getElementById('video'),
    videoObj = {
        'video': true
    },
    errBack = function(error) {
        console.log('Video capture error: ', error.code);
    };

document.getElementById('take-picture').addEventListener('click', function(e) {
    context.drawImage(video, 0, 0, 300, 225);
    e.target.textContent = 'Retake Picture';
    $('.print-congrats').removeClass('hidden');
});

$('.print-congrats').on('click', function() {
    window.print();
});

$( '.desinger-name-congrats' ).keydown( function ( e ) {
    console.log( this.value + String.fromCharCode(e.keyCode) )
} );

function getValue ( id, target ) {

    var input = document.getElementById( id );
    var value = input.value;

    var span = document.getElementById( target );
    span.innerText = value;
}
var newCar1 = $( '.race-car1-container' ).clone();
var newCar2 = $( '.race-car2-container' ).clone();

$( '.congrats-back-home' ).on( 'click', function () {
    $( '#congrats-screen' ).addClass( 'hidden' );
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

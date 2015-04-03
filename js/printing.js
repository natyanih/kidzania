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

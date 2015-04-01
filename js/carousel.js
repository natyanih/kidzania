function carousel () {
	$( '#carousel-main' ).carousel( { interval : 3000 } );
	$( '#carousel-main' ).bind( 'slid.bs.carousel', function ( e ) {
	   var carouselData = $( this ).data( 'bs.carousel' );

		selectCar = carouselData.$element.find( '.item.active' ).attr( 'id' );
	} );
}

// EVENT LISTENERS
$( '.btn-select-car' ).on( 'click', function () {
	currentCar.name = selectCar;
	methods.hideDiv( 'carousel' );

	// display default car
	// jazz = yellow
	methods.initCanvas();
} );

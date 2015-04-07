$( '.btn-race-car' ).on( 'click', function () {
    methods.hideDiv( 'preview' );

    currentCar.color = currentCar.color || 1;
    currentCar.rims  = currentCar.rims || 1;

    addCarStyle();

    // DEFAULT RACE BG
    $( '.race-background' ).addClass( 'race-city-background' );

    if ( currentCar.raceBG === 1 ) {
	$( '.race-background' ).addClass( 'race-forest-background' );
    }

    if ( currentCar.raceBG === 2 ) {
	$( '.race-background' ).addClass( 'race-beach-background' );
    }

} );

function addCarStyle () {
     // ADDING CUSTOMIZE STYLE IN RACE CAR
    if ( currentCar.skirt && currentCar.skirt !== 1 ) {
	$( '.race-car1-skirt' ).attr( 'src', 'images/assets/' + currentCar.name + '/slices/skirt/' + currentCar.skirt + '/6.png' );
	if ( !$( '.race-car1-skirt' ).hasClass( 'race-skirt-city' ) || !$( '.race-car1-skirt' ).hasClass( 'race-skirt-crv' ) || !$( '.race-car1-skirt' ).hasClass( 'race-skirt-jazz' ) ) {
	    $( '.race-car1-skirt' ).addClass( 'race-skirt-' + currentCar.name );
	}
    }
    if ( currentCar.spoiler && currentCar.spoiler !== 1 ) {
	$( '.race-car1-spoiler' ).attr( 'src', 'images/assets/' + currentCar.name + '/slices/spoiler/' + currentCar.spoiler + '/6.png' );
	if ( !$( '.race-car1-spoiler' ).hasClass( 'race-spoiler-city' ) || !$( '.race-car1-spoiler' ).hasClass( 'race-spoiler-crv' ) || !$( '.race-car1-spoiler' ).hasClass( 'race-spoiler-jazz' ) ) {
	    $( '.race-car1-spoiler' ).addClass( 'race-spoiler-' + currentCar.name );
	}
    }
    if ( currentCar.tint ) {
	$( '.race-car1-tint' ).attr( 'src', 'images/assets/' + currentCar.name + '/slices/tint/' + currentCar.tint + '/6.png' );
	if ( !$( '.race-car1-tint' ).hasClass( 'race-tint-city' ) || !$( '.race-car1-tint' ).hasClass( 'race-tint-crv' ) || !$( '.race-car1-tint' ).hasClass( 'race-tint-jazz' ) ) {
	    $( '.race-car1-tint' ).addClass( 'race-tint-' + currentCar.name );
	}
    }

    if ( currentCar.decal ) {
	$( '.race-car1-decal' ).attr( 'src', 'images/assets/' + currentCar.name + '/slices/decal/' + currentCar.decal + '/6.png' );
	if ( !$( '.race-car1-decal' ).hasClass( 'race-decal-city' ) || !$( '.race-car1-decal' ).hasClass( 'race-decal-crv' ) || !$( '.race-car1-decal' ).hasClass( 'race-decal-jazz' ) ) {
	    $( '.race-car1-decal' ).addClass( 'race-decal-' + currentCar.name );
	}
    }

    $( '.race-car1' ).attr( 'src', 'images/assets/' + currentCar.name + '/slices/color/' + currentCar.color + '/6.png' );
    $( '.race-car1-rim-back, .race-car1-rim-front' ).attr( 'src', 'images/assets/' + currentCar.name + '/buttons/rims/' + currentCar.rims + '.png' );
    if ( !$( '.race-car1-rim-back' ).hasClass( 'race-rim-back-city' ) || !$( '.race-car1-rim-back' ).hasClass( 'race-rim-back-crv' ) || !$( '.race-car1-rim-back' ).hasClass( 'race-rim-back-jazz' ) ) {
	$( '.race-car1-rim-back' ).addClass( 'race-rim-back-' + currentCar.name );
    }
    if ( !$( '.race-car1-rim-front' ).hasClass( 'race-rim-front-city' ) || !$( '.race-car1-rim-front' ).hasClass( 'race-rim-front-crv' ) || !$( '.race-car1-rim-front' ).hasClass( 'race-rim-front-jazz' ) ) {
	$( '.race-car1-rim-front' ).addClass( 'race-rim-front-' + currentCar.name );
    }
}

$( document ).ready( function ( $ ) {

    var raceAgain = false;

    $( window ).resize( function () {
       $( '.race-height-follower' ).height( $( window ).height() );
    } );
    $( window ).resize();

	$( '.race-accelerate-btn' ).on( 'click', function () {
        $( '.race-car1-container, .race-background, .race-car2-container' ).addClass( 'race-accelerate-car' );
        $( '.race-accelerate-btn img' ).addClass( 'race-flip' );
        $( '.race-carsmoke' ).show();
        $( '.race-speedometer-indicator' ).addClass( 'race-speedup-engine' );
        setTimeout( function () {
            $( '.race-car1-container, .race-car2-container' ).removeClass( 'race-accelerate-car' );
            $( '.race-accelerate-btn img' ).removeClass( 'race-flip' );
            $( '.race-speedometer-indicator' ).removeClass( 'race-speedup-engine' );
            $( '.race-speedometer-indicator' ).addClass( 'race-maintain-engine' );
        }, 5000 );
    } );
    var newCar1 = $( '.race-car1-container' ).clone();
    var newCar2 = $( '.race-car2-container' ).clone();

    $( '.race-start-btn' ).on( 'click', function () {
	$( '.race-car1-container, .race-car2-container, .race-finish-line-container, .race-mini-map-container .race-car1-mini' ).removeClass( 'race-finish-game' );
        $( '.race-prestart-overlay' ).hide();
        $( '.race-game-precounter' ).show();
        setTimeout( function () {
            $( '.race-background, .race-mini-map-container .race-car1-mini, .race-beach-sun, .race-beach-tower' ).addClass( 'race-start-game' );
            $( '.race-speedometer-indicator' ).addClass( 'race-start-engine' );
	    $( '.race-enemy-tire, .race-enemy-tireback' ).show();
	    $( '.race-car1-rim-back, .race-car1-rim-front' ).addClass( 'race-rim-animate' );
            $( '.race-accelerate-overlay' ).hide();
        }, 2000 );
        $( '.race-game-precounter span' ).addClass( 'race-start-game' );
        setTimeout( function () {
            $( '.race-game-precounter span' ).hide();
            $( '.race-game-precounter-go' ).show();
            $( '.race-game-precounter-go span' ).addClass( 'race-start-game' );
            setTimeout( function () {
                $( '.race-game-precounter-go' ).hide();
            }, 2000 );
        }, 2000 );
        setTimeout( function () {
            $( '.race-car1-container, .race-car2-container, .race-finish-line-container, .race-mini-map-container .race-car1-mini' ).addClass( 'race-finish-game' );
	    $( '.race-speedometer-indicator' ).removeClass( 'race-start-engine' );
        }, 10000 );
        setTimeout( function () {
            $( '.race-winner-container, .race-winner-fallingpapers-container' ).show();
        }, 10500 );
        setTimeout( function () {
            $( '.race-background, .race-mini-map-container .race-car1-mini' ).removeClass( 'race-start-game' );
            $( '.race-car1-container, .race-background, .race-car2-container' ).removeClass( 'race-accelerate-car' );
            $( '.race-accelerate-overlay' ).show();
        }, 12500 );
        setTimeout( function () {
	    $( '.race-winner-container' ).hide();
	    $( '.race-restart-overlay' ).removeClass( 'hidden' );
	}, 13500 );
	setTimeout( function () {
	    if ( !raceAgain ) {
                $( '.race-main' ).addClass( 'hidden' );
                $( '#congrats-screen' ).removeClass( 'hidden' );
		    // ADDING CUSTOMIZE STYLE IN RACE CAR
		    if ( currentCar.name === 'crv' ) {
		    $( '.car-congrats' ).css( 'top', 301 );
			$( '.car-details-congrats' ).append( '<h2> HONDA CRV </h2> <p>A new engine and new technology make CR-V one of the highest fuel efficiency SUVs on the market.'
			    + '<br /> Your favorite SUV now includes more available technology than ever before, like Lane Keeping Assist System, Adaptive Cruise Control and our Collision Mitigation Braking System.</p>' );
		    }

		    if ( currentCar.name === 'city' ) {
		    $( '.car-congrats' ).css( 'top', 320 );
			$( '.car-details-congrats' ).append( '<h2> HONDA CITY </h2> <p>The All New City is offered with Honda’s improved 1.5 liter i-VTEC engine that delivers maximum power'
			    + ' output of 120 ps at 6600 rpm. The 1.5 liter i-VTEC engine is mated to a new 5-speed Manual Transmission and developed under the Honda’s Earth Dreams Technology, '
			    + ' new Continuously Variable Transmission (CVT with 7-speed paddle shifters).</p>' );
		    }

		    if ( currentCar.name === 'jazz' ) {
			$( '.car-details-congrats' ).append( '<h2> HONDA JAZZ </h2> <p>Space, performance, and style - the perfect combo for an extremely breathtaking experience on the road.'
			    + ' To add up excitement, the All-New Honda Jazz has the ULTR to fit every lifestyle through various seat configurations.</p' );
		    }

		    if ( currentCar.skirt && currentCar.skirt !== 1 ) {
			$( '.car-congrats-skirt' ).attr( 'src', 'images/assets/' + currentCar.name + '/slices/skirt/' + currentCar.skirt + '/6.png' ).addClass( 'car-congrats-skirt-' + currentCar.name );
		    }
		    if ( currentCar.spoiler && currentCar.spoiler !== 1 ) {
			$( '.car-congrats-spoiler' ).attr( 'src', 'images/assets/' + currentCar.name + '/slices/spoiler/' + currentCar.spoiler + '/6.png' ).addClass( 'car-congrats-spoiler-' + currentCar.name );
		    }

		    if ( currentCar.tint ) {
			$( '.car-congrats-tint' ).attr( 'src', 'images/assets/' + currentCar.name + '/slices/tint/' + currentCar.tint + '/6.png' ).addClass( 'car-congrats-tint-' + currentCar.name );
		    }

		    if ( currentCar.decal ) {
			$( '.car-congrats-decal' ).attr( 'src', 'images/assets/' + currentCar.name + '/slices/decal/' + currentCar.decal + '/6.png' ).addClass( 'car-congrats-decal-' + currentCar.name + '-' + currentCar.decal );
		    }

		    $( '.car-congrats-body' ).attr( 'src', 'images/assets/' + currentCar.name + '/slices/color/' + currentCar.color + '/6.png' );
		    $( '.car-congrats-rim-back, .car-congrats-rim-front' ).attr( 'src', 'images/assets/' + currentCar.name + '/buttons/rims/' + currentCar.rims + '.png' );
		    $( '.car-congrats-rim-back' ).addClass( 'car-congrats-rim-back-' + currentCar.name );
		    $( '.car-congrats-rim-front' ).addClass( 'car-congrats-rim-front-' + currentCar.name );
		    // END
	    }
	    raceAgain = false;

	}, 17500);
    } );

    $( '.race-restart-btn' ).on( 'click', function () {
	raceAgain = true;
	$( '.race-game-precounter span' ).remove( 'race-start-game' );
	$( '.race-game-precounter' ).show();
	$( '.race-game-precounter span' ).show();
	$( '.race-car1-rim-back, .race-car1-rim-front' ).removeClass( 'race-rim-animate' );
	$( '.race-car1-container, .race-background, .race-car2-container' ).removeClass( 'race-accelerate-car' );
	$( '.race-finish-line-container, .race-mini-map-container .race-car1-mini' ).removeClass( 'race-finish-game' );
	$( '.race-car1-container' ).remove();
	$( '.race-car2-container' ).remove();
	$( '.race-background' ).append( [ newCar1, newCar2 ] );
	addCarStyle();
	$( '.race-restart-overlay' ).addClass( 'hidden' );
	$( '.race-start-btn' ).click();
    } );

    $( 'body') .keydown( function ( e ) {
      if ( e.keyCode === 37 ) { // left
        //
      } else if( e.keyCode === 39 ) { // right
	if ( !$( '.race-prestart-overlay' ).is( ':visible' ) && !$( '.race-restart-overlay' ).is( ':visible' ) ) {
            $( '.race-accelerate-btn img' ).click();
	    $( '.race-enemy-tire, .race-enemy-tireback' ).show();
	    $( '.race-car1-rim-back, .race-car1-rim-front' ).addClass( 'race-rim-animate' );
        }
      }
    } );
} );

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

$( document ).ready( function ( $ ) {

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
    $( '.race-start-btn' ).on( 'click', function () {
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
            $( '.race-main' ).addClass( 'hidden' );
            $( '#congrats-screen' ).removeClass( 'hidden' );

	    // ADDING CUSTOMIZE STYLE IN RACE CAR
	    if ( currentCar.name === 'crv' ) {
		$( '.car-details-congrats' ).append( '<h2> HONDA CRV </h2> <p>A new engine and new technology make CR-V one of the highest fuel efficiency SUVs on the market.'
		    + '<br /> Your favorite SUV now includes more available technology than ever before, like Lane Keeping Assist System, Adaptive Cruise Control and our Collision Mitigation Braking System.</p>' );
	    }

	    if ( currentCar.name === 'city' ) {
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

        }, 15500);
    } );

    $( 'body') .keydown( function ( e ) {
      if ( e.keyCode === 37 ) { // left
        //
      } else if( e.keyCode === 39 ) { // right
        if ( !$( '.race-winner-container' ).is( ':visible' ) ) {
            $( '.race-accelerate-btn img' ).click();
	    $( '.race-enemy-tire, .race-enemy-tireback' ).show();
	    $( '.race-car1-rim-back, .race-car1-rim-front' ).addClass( 'race-rim-animate' );
        }
      }
    } );
} );

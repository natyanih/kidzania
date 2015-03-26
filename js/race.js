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
            $( '.race-tire, .race-tireback, .race-enemy-tire, .race-enemy-tireback' ).show();
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
            $( '#congrats-screen' ).show();
        }, 15500);
    } );

    $( 'body') .keydown( function ( e ) {
      if ( e.keyCode === 37 ) { // left
        //
      } else if( e.keyCode === 39 ) { // right
        if ( !$( '.race-winner-container' ).is( ':visible' ) ) {
            $( '.race-accelerate-btn img' ).click();
        }
      }
    } );
} );

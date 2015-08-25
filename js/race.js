$( '.btn-race-car' ).on( 'click', function () {
    methods.hideDiv( 'preview' );

 //    currentCar.color  = currentCar.color || 1;
 //    currentCar.rims   = currentCar.rims || 1;
 //    currentCar.raceBG = currentCar.raceBG || 3;

 //    addCarStyle();

 //    // DEFAULT RACE BG

 //    $( '.race-background' ).removeClass( 'race-city-background' );
 //    $( '.race-background' ).removeClass( 'race-forest-background' );
 //    $( '.race-background' ).removeClass( 'race-beach-background' );

 //    $( '.race-background' ).addClass( 'race-city-background' );
 //    if ( currentCar.raceBG === 1 ) {
	// $( '.race-background' ).addClass( 'race-forest-background' );
 //    }

 //    if ( currentCar.raceBG === 2 ) {
	// $( '.race-background' ).addClass( 'race-beach-background' );
 //    }

	$( '#car-name-congrats-cont' ).css( { 'color' : 'white' } );
	$( '.car-details-congrats' ).css( { 'color' : 'white' } );
	$( '.car-details-congrats' ).addClass( 'print-white' );

	var ruleLength = document.styleSheets[11].rules.length - 1;

	if ( currentCar.prevCarName ) {
			document.styleSheets[11].deleteRule( ruleLength );
			$( '.car-congrats-tint' ).css( { 'top': '', 'left' : '' } );
			$( '.car-congrats-skirt' ).css( { 'top': '', 'left' : '' } );
			$( '.car-congrats-spoiler' ).css( { 'top': '', 'left' : '' } );
			$( '.car-congrats-rim-back' ).css( { 'top': '', 'left' : '' } );
			$( '.car-congrats-rim-front' ).css( { 'top': '', 'left' : '' } );
		$( '.car-congrats-body' ).css( { 'width' : '' } );
		if ( document.styleSheets[11].rules[30].selectorText === '.car-congrats-rim-back' || document.styleSheets[11].rules[31] === '.car-congrats-rim-front' ) {
			document.styleSheets[11].deleteRule( 30 );
			document.styleSheets[11].deleteRule( 30 );
		}
	if ( document.styleSheets[11].rules[1].selectorText === '#car-name-congrats-cont' ) {
			document.styleSheets[11].deleteRule( 1 );
		}
	}

	document.styleSheets[11].addRule( '#car-name-congrats-cont', 'color: white !important;', 1 );

	if ( currentCar.raceBG === 1 ) {
		$( '.forest-bg' ).removeClass( 'hidden' );
		$( '.forest-bg' ).addClass( 'bg-under-congrats-backup' );
	} else if ( currentCar.raceBG === 2 ) {
		$( '.beach-bg' ).removeClass( 'hidden' );
		$( '.beach-bg' ).addClass( 'bg-under-congrats-backup' );
	}  else if ( currentCar.raceBG === 4 ) {
		$( '.sport-bg' ).removeClass( 'hidden' );
		$( '.sport-bg' ).addClass( 'bg-under-congrats-backup' );
	} else {
		$( '#car-name-congrats-cont' ).css( { 'color' : '' } );
		$( '.car-details-congrats' ).css( { 'color' : '' } );
		$( '.car-details-congrats' ).removeClass( 'print-white' );
		$( '.street-bg' ).removeClass( 'hidden' );
		$( '.street-bg' ).addClass( 'bg-under-congrats-backup' );
		document.styleSheets[11].deleteRule( 1 );
	}
	setTimeout( function () {
		$( '#desinger-name-congrats' ).focus();
	} );
		$( '#congrats-screen' ).removeClass( 'hidden' );

	$( '#desinger-name-congrats' ).attr('autocomplete', 'off');
	$( '#car-name-congrats' ).attr('autocomplete', 'off');

	    if ( currentCar.name === 'crv' ) {
			$( '.car-congrats' ).css( { 'top': 278, 'left' : 396 } );
			$( '.car-congrats-body' ).css( { 'width' : 800 } );
			document.styleSheets[11].addRule( '.car-congrats', 'top: 250px !important; left: 280px !important;' );
	// document.querySelector( 'style' ).textContent += "@media print{ .car-congrats { top: 419px !important; } }";
	//document.styleSheets[11].addRule( '.car-congrats', 'top: 419px !important;' );
	    $( '.car-details-congrats' ).append( '<h2> HONDA CRV: Be Daring </h2> <p>This Sports Utility Vehicle (SUV) is designed to look good on the road while carrying heavy loads. '
	    + ' Shaped like a cocoon, passengers will feel like they are protected from the busy world around them.'
		+ ' And with Daytime Running Lights (DRL), you can be assured that you will have a safe drive as it provides optimum road visibility. <em><strong>Be Daring!</strong></em></p>' );
	    }

	    if ( currentCar.name === 'city' ) {
	$( '.car-congrats' ).css( { 'top': 310, 'left' : 390 } );
	document.styleSheets[11].addRule( '.car-congrats', 'top: 263px !important; left: 210px !important;' );
    // document.querySelector( 'style' ).textContent += "@media print{ .car-congrats { top: 446px !important; } }";
	$( '.car-details-congrats' ).append( '<h2> HONDA CITY: The Future Is Here </h2> <p>This is a car that was innovatively designed to give the driver a comfortable and enjoyable ride.'
	+ ' With its touch-screen multi-informational panel, you can access songs, movies, your cellphone, and even information about your call in just a single touch. <em><strong>Truly, the car of the future!</strong></em></p>' );
	}

	if ( currentCar.name === 'civic' ) {
			$( '.car-congrats' ).css( { 'top': 319, 'left' : 357 } );
			document.styleSheets[11].addRule( '.car-congrats', 'top: 270px !important; left: 214px !important;' );
	// document.querySelector( 'style' ).textContent += "@media print{ .car-congrats { top: 446px !important; } }";
	    $( '.car-details-congrats' ).append( '<h2> HONDA CIVIC </h2> <p>The spirit of racing is now in your fingertips. Enjoy fast drives knowing that you are protected with the state-of-the-art safety features of this' +
	' powerful car. Driving this makes you feel like you are the King of the Road.</p>' );
	    }

	    if ( currentCar.name === 'jazz' ) {
		$( '.car-congrats' ).css( { 'top': 243, 'left' : 314 } );
		$( '.car-congrats-body' ).css( { 'width' : 1000 } );
		document.styleSheets[11].addRule( '.car-congrats', 'top: 230px !important; left: 210px !important;' );
	// document.querySelector( 'style' ).textContent += "@media print{ .car-congrats { top: 405px !important; } }";
	//document.styleSheets[11].addRule( '.car-congrats', 'top: 405px !important;' );
	    $( '.car-details-congrats' ).append( '<h2> HONDA JAZZ: The One </h2> <p>Supporting every kind of lifestyle with stylish exteriors and easily adjustable seats,'
		+ ' you can’t go wrong with this outstanding car. Powerful and fuel efficient, you will definitely be a confident driver on the road. With space, performance, and style all together, this truly is <em><strong>The One!</strong></em></p>' );
	    }

	if ( currentCar.name === 'crz' ) {
	    $( '.car-congrats' ).css( { 'top': 253, 'left' : 381 } );
			document.styleSheets[11].addRule( '.car-congrats', 'top: 243px !important; left: 264px !important;' );
	// document.querySelector( 'style' ).textContent += "@media print{ .car-congrats { top: 446px !important; } }";
	    $( '.car-details-congrats' ).append( '<h2> HONDA CRZ </h2> <p>Whether you drive it every day to work, go up to the mountains for the weekend, or take it on long trips over the holidays – you cannot go wrong with this vehicle. With its 3 Mode Drive System, you can' +
	' choose to add extra power during rough drives, maximize your fuel on long ones, or enjoy the city route with a simple press of a button.</p>' );
	    }

	if ( currentCar.name === 'brio' ) {
		$( '.car-congrats' ).css( { 'top': 324, 'left' : 486 } );
		$( '.car-congrats-body' ).css( { 'width' : 700 } );
		document.styleSheets[11].addRule( '.car-congrats', 'top: 300px !important; left: 351px !important;' );
	// document.querySelector( 'style' ).textContent += "@media print{ .car-congrats { top: 446px !important; } }";
	    $( '.car-details-congrats' ).append( '<h2> HONDA BRIO: Break Free </h2> <p>If you are adventurous and like exploring places, then this is the right car for you. Drive far with a powerful engine. Go fast with its fuel efficient feature.' +
	' <em><strong>Break Free!</strong></em></p>' );
	    }

	if ( currentCar.name === 'amaze' ) {
		$( '.car-congrats' ).css( { 'top': 328, 'left' : 456 } );

		if ( currentCar.skirt === 1 ) {
			$( '.car-congrats-skirt' ).css( { 'top': 0, 'left' : 0 } );
		} else if ( currentCar.skirt === 2 ) {
			$( '.car-congrats-skirt' ).css( { 'top': 0, 'left' : 0 } );
		} else {
			$( '.car-congrats-skirt' ).css( { 'top': 0, 'left' : -1 } );
		}
		if ( currentCar.color !== 1 && currentCar.color !== 2 ) {
			$( '.car-congrats' ).css( { 'top': 328, 'left' : 444 } );
			$( '.car-congrats-tint' ).css( { 'top': 0, 'left' : 0 } );
			$( '.car-congrats-spoiler' ).css( { 'top': 0, 'left' : 11 } );
			$( '.car-congrats-rim-back' ).css( { 'top': 212, 'left' : 135 } );
			$( '.car-congrats-rim-front' ).css( { 'top': 214, 'left' : 516 } );
			document.styleSheets[11].addRule( '.car-congrats-rim-back', 'left: 116px !important;', 30 );
			document.styleSheets[11].addRule( '.car-congrats-rim-front', 'left: 442px !important;', 31 );
		} else {
			$( '.car-congrats-tint' ).css( { 'top': 0, 'left' : -11 } );
			$( '.car-congrats-spoiler' ).css( { 'top': 0, 'left' : 0 } );
			$( '.car-congrats-rim-back' ).css( { 'top': 212, 'left' : 135 } );
			$( '.car-congrats-rim-front' ).css( { 'top': 214, 'left' : 516 } );
			document.styleSheets[11].addRule( '.car-congrats-rim-back', 'left: 116px !important;', 30 );
			document.styleSheets[11].addRule( '.car-congrats-rim-front', 'left: 442px !important;', 31 );
		}

		$( '.car-congrats-body' ).css( { 'width' : 700 } );
		document.styleSheets[11].addRule( '.car-congrats', 'top: 299px !important; left: 340px !important;' );
	// document.querySelector( 'style' ).textContent += "@media print{ .car-congrats { top: 446px !important; } }";
	    $( '.car-details-congrats' ).append( '<h2> HONDA BRIO AMAZE: Everyday Amazing </h2> <p>Enjoy performance and efficiency in a more compact sized vehicle. With a spacious and comfortable cabin that eliminates noise and vibrations of the outside world, your drive is definitely' +
	' <em><strong>Everyday Amazing!</strong></em></p>' );
	    }

	    if ( currentCar.name === 'accord' ) {
	$( '.car-congrats' ).css( { 'top': 325, 'left' : 497 } );
	$( '.car-congrats-body' ).css( { 'width' : 700 } );
	document.styleSheets[11].addRule( '.car-congrats', 'top: 299px !important; left: 344px !important;' );
    // document.querySelector( 'style' ).textContent += "@media print{ .car-congrats { top: 446px !important; } }";
	$( '.car-details-congrats' ).append( '<h2> HONDA ACCORD: Lead </h2> <p>Classy and elegant from inside and out, you can make sure that this car will make you feel good both as the driver and as a passenger. From its smooth premium leather interiors to its powerful and fuel efficient engine, what more can you ask for?'
	+ ' It’s time to <em><strong>Lead</strong></em> others through your confidence in driving on the best quality car.</p>' );
	}

	    if ( currentCar.name === 'pilot' ) {
	$( '.car-congrats' ).css( { 'top': 317, 'left' : 468 } );
	$( '.car-congrats-body' ).css( { 'width' : 700 } );
	document.styleSheets[11].addRule( '.car-congrats', 'top: 288px !important; left: 331px !important;' );
    // document.querySelector( 'style' ).textContent += "@media print{ .car-congrats { top: 446px !important; } }";
	$( '.car-details-congrats' ).append( '<h2> HONDA PILOT </h2> <p>Rugged, yet refined, the Pilot is an SUV with character and style.</p>' );
	}

    $( '.car-congrats-skirt' ).removeClass( 'car-congrats-skirt-' + currentCar.prevCarName );
    $( '.car-congrats-spoiler' ).removeClass( 'car-congrats-spoiler-' + currentCar.prevCarName );
    $( '.car-congrats-tint' ).removeClass( 'car-congrats-tint-' + currentCar.prevCarName );
    $( '.car-congrats-decal' ).removeClass( 'car-congrats-decal-' + currentCar.prevCarName + '-1' );
    $( '.car-congrats-decal' ).removeClass( 'car-congrats-decal-' + currentCar.prevCarName + '-2' );
    $( '.car-congrats-decal' ).removeClass( 'car-congrats-decal-' + currentCar.prevCarName + '-3' );
		$( '.car-congrats-decal' ).removeClass( 'car-congrats-decal-' + currentCar.prevCarName + '-4' );
		$( '.car-congrats-decal' ).removeClass( 'car-congrats-decal-' + currentCar.prevCarName + '-5' );
    $( '.car-congrats-rim-back' ).removeClass( 'car-congrats-rim-back-' + currentCar.prevCarName );
    $( '.car-congrats-rim-front' ).removeClass( 'car-congrats-rim-front-' + currentCar.prevCarName );
    $( '.car-congrats-rim-back' ).removeClass( 'car-congrats-rim-back-' + currentCar.prevCarName  + '-1' );
    $( '.car-congrats-rim-back' ).removeClass( 'car-congrats-rim-back-' + currentCar.prevCarName  + '-2' );
    $( '.car-congrats-rim-back' ).removeClass( 'car-congrats-rim-back-' + currentCar.prevCarName  + '-3' );
    $( '.car-congrats-rim-back' ).removeClass( 'car-congrats-rim-back-' + currentCar.prevCarName  + '-4' );
    $( '.car-congrats-rim-back' ).removeClass( 'car-congrats-rim-back-' + currentCar.prevCarName  + '-5' );
    $( '.car-congrats-rim-front' ).removeClass( 'car-congrats-rim-front-' + currentCar.prevCarName + '-1' );
    $( '.car-congrats-rim-front' ).removeClass( 'car-congrats-rim-front-' + currentCar.prevCarName + '-2' );
    $( '.car-congrats-rim-front' ).removeClass( 'car-congrats-rim-front-' + currentCar.prevCarName + '-3' );
    $( '.car-congrats-rim-front' ).removeClass( 'car-congrats-rim-front-' + currentCar.prevCarName + '-4' );
    $( '.car-congrats-rim-front' ).removeClass( 'car-congrats-rim-front-' + currentCar.prevCarName + '-5' );
		$( '.car-congrats-body' ).removeClass( 'car-congrats-body-' + currentCar.prevCarName );

		$( '.car-congrats-body' ).addClass( 'car-congrats-body-' + currentCar.name );
	if ( currentCar.skirt && currentCar.skirt !== null ) {
	$( '.car-congrats-skirt' ).attr( 'src', 'images/assets/' + currentCar.name + '/slices/skirt/' + currentCar.skirt + '/6.png' );
	if ( !$( '.car-congrats-skirt' ).hasClass( 'car-congrats-skirt-city' ) && !$( '.car-congrats-skirt' ).hasClass( 'car-congrats-skirt-crv' ) && !$( '.car-congrats-skirt' ).hasClass( 'car-congrats-skirt-jazz' ) && !$( '.car-congrats-skirt' ).hasClass( 'car-congrats-skirt-crz' ) ) {
	    $( '.car-congrats-skirt' ).addClass( 'car-congrats-skirt-' + currentCar.name );
	}else{
	     $( '.car-congrats-skirt' ).addClass( 'car-congrats-skirt-' + currentCar.name );
	}
	} else {
		//if ( currentCar.name === 'crz' ) {
			//$( '.car-congrats-skirt' ).attr( 'src', 'images/assets/' + currentCar.name + '/slices/skirt/' + currentCar.skirt + '/6.png' );
			//$( '.car-congrats-skirt' ).addClass( 'car-congrats-skirt-' + currentCar.name );
		//} else {
			$( '.car-congrats-skirt' ).attr( 'src', '' );
		//}
	}
	if ( currentCar.spoiler && currentCar.spoiler !== null ) {
	$( '.car-congrats-spoiler' ).attr( 'src', 'images/assets/' + currentCar.name + '/slices/spoiler/' + currentCar.spoiler + '/6.png' );
	if ( !$( '.car-congrats-spoiler' ).hasClass( 'car-congrats-spoiler-city' ) && !$( '.car-congrats-spoiler' ).hasClass( 'car-congrats-spoiler-crv' ) && !$( '.car-congrats-spoiler' ).hasClass( 'car-congrats-spoiler-jazz' ) ) {
	    $( '.car-congrats-spoiler' ).addClass( 'car-congrats-spoiler-' + currentCar.name );
	} else {
	     $( '.car-congrats-spoiler' ).addClass( 'car-congrats-spoiler-' + currentCar.name );
	}
	}else {
		//if ( currentCar.name === 'crz' ) {
			//$( '.car-congrats-spoiler' ).attr( 'src', 'images/assets/' + currentCar.name + '/slices/spoiler/' + currentCar.spoiler + '/6.png' );
			//$( '.car-congrats-spoiler' ).addClass( 'car-congrats-spoiler-' + currentCar.name );
		//} else {
			$( '.car-congrats-spoiler' ).attr( 'src', '' );
		//}
    }
	if ( currentCar.tint !== 1 ) {
	$( '.car-congrats-tint' ).attr( 'src', 'images/assets/' + currentCar.name + '/slices/tint/' + currentCar.tint + '/6.png' );
	if ( !$( '.car-congrats-tint' ).hasClass( 'car-congrats-tint-city' ) && !$( '.car-congrats-tint' ).hasClass( 'car-congrats-tint-crv' ) && !$( '.car-congrats-tint' ).hasClass( 'car-congrats-tint-jazz' ) ) {
	    $( '.car-congrats-tint' ).addClass( 'car-congrats-tint-' + currentCar.name );
	} else {
	    $( '.car-congrats-tint' ).addClass( 'car-congrats-tint-' + currentCar.name );
	}
	}else {
	$( '.car-congrats-tint' ).attr( 'src', '' );
    }


	if ( currentCar.decal ) {
	$( '.car-congrats-decal' ).attr( 'src', 'images/assets/' + currentCar.name + '/slices/decal/' + currentCar.decal + '/6.png' );
	if ( !$( '.car-congrats-decal' ).hasClass( 'car-congrats-decal-city-1' ) && !$( '.car-congrats-decal' ).hasClass( 'car-congrats-decal-city-2' ) && !$( '.car-congrats-decal' ).hasClass( 'car-congrats-decal-city-3' ) && !$( '.car-congrats-decal' ).hasClass( 'car-congrats-decal-crv-1' ) && !$( '.car-congrats-decal' ).hasClass( 'car-congrats-decal-crv-2' ) && !$( '.car-congrats-decal' ).hasClass( 'car-congrats-decal-crv-3' ) && !$( '.car-congrats-decal' ).hasClass( 'car-congrats-decal-jazz-1' ) && !$( '.car-congrats-decal' ).hasClass( 'car-congrats-decal-jazz-2' ) && !$( '.car-congrats-decal' ).hasClass( 'car-congrats-decal-jazz-3' ) ) {
	    $( '.car-congrats-decal' ).addClass( 'car-congrats-decal-' + currentCar.name + '-' + currentCar.decal );
	} else {
	     $( '.car-congrats-decal' ).addClass( 'car-congrats-decal-' + currentCar.name + '-' + currentCar.decal );
	}
		if ( currentCar.name === 'amaze' && ( currentCar.color !== 1 && currentCar.color !== 2 ) ) {
				$( '.car-congrats-decal-amaze-1' ).css( { 'top': 0, 'left' : 0 } );
				$( '.car-congrats-decal-amaze-2' ).css( { 'top': 0, 'left' : 11 } );
				$( '.car-congrats-decal-amaze-3' ).css( { 'top': 0, 'left' : 11 } );
				$( '.car-congrats-decal-amaze-4' ).css( { 'top': -5, 'left' : 5 } );
				$( '.car-congrats-decal-amaze-5' ).css( { 'top': 0, 'left' : 11 } );
		} else {
				$( '.car-congrats-decal-amaze-1' ).css( { 'top': '', 'left' : '' } );
				$( '.car-congrats-decal-amaze-2' ).css( { 'top': '', 'left' : '' } );
				$( '.car-congrats-decal-amaze-3' ).css( { 'top': '', 'left' : '' } );
				$( '.car-congrats-decal-amaze-4' ).css( { 'top': '', 'left' : '' } );
				$( '.car-congrats-decal-amaze-5' ).css( { 'top': '', 'left' : '' } );
		}
	}else {
	$( '.car-congrats-decal' ).attr( 'src', '' );
    }


	$( '.car-congrats-body-' + currentCar.name + '-' + currentCar.color ).removeClass( 'hidden' );
	if ( currentCar.rims ) {
		$( '.car-congrats-rim-back, .car-congrats-rim-front' ).attr( 'src', 'images/assets/' + currentCar.name + '/buttons/rims/' + currentCar.rims + '.png' );
		if ( currentCar.name === 'accord' ) {
			$( '.car-congrats-rim-back' ).addClass( 'car-congrats-rim-back-' + currentCar.name + '-' + currentCar.color );
			$( '.car-congrats-rim-front' ).addClass( 'car-congrats-rim-front-' + currentCar.name + '-' + currentCar.color );
		} else {
			if ( !$( '.car-congrats-rim-back' ).hasClass( 'car-congrats-rim-back-city' ) && !$( '.car-congrats-rim-back' ).hasClass( 'car-congrats-rim-back-crv' ) && !$( '.car-congrats-rim-back' ).hasClass( 'car-congrats-rim-back-jazz' ) ) {
			$( '.car-congrats-rim-back' ).addClass( 'car-congrats-rim-back-' + currentCar.name );
			} else {
					$( '.car-congrats-rim-back' ).addClass( 'car-congrats-rim-back-' + currentCar.name );
			}
			if ( !$( '.car-congrats-rim-front' ).hasClass( 'car-congrats-rim-front-city' ) && !$( '.car-congrats-rim-front' ).hasClass( 'car-congrats-rim-front-crv' ) && !$( '.car-congrats-rim-front' ).hasClass( 'car-congrats-rim-front-jazz' ) ) {
			$( '.car-congrats-rim-front' ).addClass( 'car-congrats-rim-front-' + currentCar.name );
			} else {
					$( '.car-congrats-rim-front' ).addClass( 'car-congrats-rim-front-' + currentCar.name );
			}
		}
	} else {
		$( '.car-congrats-rim-back, .car-congrats-rim-front' ).attr( 'src', '' );
	}

	if ( currentCar.name  === 'pilot' ) {
		$( '.car-congrats-spoiler' ).attr( 'src', '' );
	}
	loadCamera();
} );

function addCarStyle () {
     // ADDING CUSTOMIZE STYLE IN RACE CAR
     $( '.race-car1-skirt' ).removeClass( 'race-skirt-' + currentCar.prevCarName );
     $( '.race-car1-spoiler' ).removeClass( 'race-spoiler-' + currentCar.prevCarName );
     $( '.race-car1-tint' ).removeClass( 'race-tint-' + currentCar.prevCarName );
    $( '.race-car1-decal' ).removeClass( 'race-decal-' + currentCar.prevCarName + '-1' );
     $( '.race-car1-decal' ).removeClass( 'race-decal-' + currentCar.prevCarName + '-2' );
     $( '.race-car1-decal' ).removeClass( 'race-decal-' + currentCar.prevCarName + '-3' );
     $( '.race-car1-rim-back' ).removeClass( 'race-rim-back-' + currentCar.prevCarName );
     $( '.race-car1-rim-front' ).removeClass( 'race-rim-front-' + currentCar.prevCarName );
    if ( currentCar.skirt && currentCar.skirt !== 1 ) {
	$( '.race-car1-skirt' ).attr( 'src', 'images/assets/' + currentCar.name + '/slices/skirt/' + currentCar.skirt + '/6.png' );
	if ( !$( '.race-car1-skirt' ).hasClass( 'race-skirt-city' ) && !$( '.race-car1-skirt' ).hasClass( 'race-skirt-crv' ) && !$( '.race-car1-skirt' ).hasClass( 'race-skirt-jazz' ) ) {
	    $( '.race-car1-skirt' ).addClass( 'race-skirt-' + currentCar.name );
	}else{
	 $( '.race-car1-skirt' ).addClass( 'race-skirt-' + currentCar.name );
    }
    } else {
	$( '.race-car1-skirt' ).attr( 'src', '' );
    }
    if ( currentCar.spoiler && currentCar.spoiler !== 1 ) {
	$( '.race-car1-spoiler' ).attr( 'src', 'images/assets/' + currentCar.name + '/slices/spoiler/' + currentCar.spoiler + '/6.png' );
	if ( !$( '.race-car1-spoiler' ).hasClass( 'race-spoiler-city' ) && !$( '.race-car1-spoiler' ).hasClass( 'race-spoiler-crv' ) && !$( '.race-car1-spoiler' ).hasClass( 'race-spoiler-jazz' ) ) {
	    $( '.race-car1-spoiler' ).addClass( 'race-spoiler-' + currentCar.name );
	} else {
	 $( '.race-car1-spoiler' ).addClass( 'race-spoiler-' + currentCar.name );
    }
    } else {
	$( '.race-car1-spoiler' ).attr( 'src', '' );
    }
    if ( currentCar.tint ) {
	$( '.race-car1-tint' ).attr( 'src', 'images/assets/' + currentCar.name + '/slices/tint/' + currentCar.tint + '/6.png' );
	if ( !$( '.race-car1-tint' ).hasClass( 'race-tint-city' ) && !$( '.race-car1-tint' ).hasClass( 'race-tint-crv' ) && !$( '.race-car1-tint' ).hasClass( 'race-tint-jazz' ) ) {
	    $( '.race-car1-tint' ).addClass( 'race-tint-' + currentCar.name );
	} else {
	$( '.race-car1-tint' ).addClass( 'race-tint-' + currentCar.name );
    }
    } else {
	$( '.race-car1-tint' ).attr( 'src', '' );
    }

    if ( currentCar.decal ) {
	$( '.race-car1-decal' ).attr( 'src', 'images/assets/' + currentCar.name + '/slices/decal/' + currentCar.decal + '/6.png' );
	if ( !$( '.race-car1-decal' ).hasClass( 'race-decal-city-1' ) && !$( '.race-car1-decal' ).hasClass( 'race-decal-city-2' ) && !$( '.race-car1-decal' ).hasClass( 'race-decal-city-3' ) && !$( '.race-car1-decal' ).hasClass( 'race-decal-crv-1' ) && !$( '.race-car1-decal' ).hasClass( 'race-decal-crv-2' ) && !$( '.race-car1-decal' ).hasClass( 'race-decal-crv-3' ) && !$( '.race-car1-decal' ).hasClass( 'race-decal-jazz-1' ) && !$( '.race-car1-decal' ).hasClass( 'race-decal-jazz-2' ) && !$( '.race-car1-decal' ).hasClass( 'race-decal-jazz-3' ) ) {
	    $( '.race-car1-decal' ).addClass( 'race-decal-' + currentCar.name + '-' + currentCar.decal );
	} else {
	     $( '.race-car1-decal' ).addClass( 'race-decal-' + currentCar.name + '-' + currentCar.decal );
	}
    } else {
	$( '.race-car1-decal' ).attr( 'src', '' );
    }

    $( '.race-car1' ).attr( 'src', 'images/assets/' + currentCar.name + '/slices/color/' + currentCar.color + '/6.png' );
    $( '.race-car1-rim-back, .race-car1-rim-front' ).attr( 'src', 'images/assets/' + currentCar.name + '/buttons/rims/' + currentCar.rims + '.png' );
    if ( !$( '.race-car1-rim-back' ).hasClass( 'race-rim-back-city' ) && !$( '.race-car1-rim-back' ).hasClass( 'race-rim-back-crv' ) && !$( '.race-car1-rim-back' ).hasClass( 'race-rim-back-jazz' ) ) {
	   $( '.race-car1-rim-back' ).addClass( 'race-rim-back-' + currentCar.name );
    } else {
	   $( '.race-car1-rim-back' ).addClass( 'race-rim-back-' + currentCar.name );
    }
    if ( !$( '.race-car1-rim-front' ).hasClass( 'race-rim-front-city' ) && !$( '.race-car1-rim-front' ).hasClass( 'race-rim-front-crv' ) && !$( '.race-car1-rim-front' ).hasClass( 'race-rim-front-jazz' ) ) {
	   $( '.race-car1-rim-front' ).addClass( 'race-rim-front-' + currentCar.name );
    } else {
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
    } );

    $( '.race-proceed-btn' ).on( 'click', function () {
	console.log( 123 )

				$( '.race-main' ).addClass( 'hidden' );
	$( '#desinger-name-congrats' ).attr('autocomplete', 'off');
	$( '#car-name-congrats' ).attr('autocomplete', 'off');
	$( '.race-car1-container, .race-car2-container, .race-finish-line-container, .race-mini-map-container .race-car1-mini' ).removeClass( 'race-finish-game' );
	    // ADDING CUSTOMIZE STYLE IN RACE CAR
        document.styleSheets[11].addRule( '.sep-congrats span', 'color : #B6B6B6 !important;' );
	    if ( currentCar.name === 'crv' ) {
	    $( '.car-congrats' ).css( { 'top': 281, 'left' : 413 } );
	    document.styleSheets[11].addRule( '.car-congrats', 'top: 543px !important; left: 493px !important;' );
	// document.querySelector( 'style' ).textContent += "@media print{ .car-congrats { top: 419px !important; } }";
	//document.styleSheets[11].addRule( '.car-congrats', 'top: 419px !important;' );
	    $( '.car-details-congrats' ).append( '<h2> HONDA CRV </h2> <p>A new engine and new technology make CR-V one of the highest fuel efficiency SUVs on the market.'
		+ '<br /> Your favorite SUV now includes more available technology than ever before, like Lane Keeping Assist System, Adaptive Cruise Control and our Collision Mitigation Braking System.</p>' );
	    }

	    if ( currentCar.name === 'city' ) {
	$( '.car-congrats' ).css( { 'top': 308, 'left' : 402 } );
	document.styleSheets[11].addRule( '.car-congrats', 'top: 563px !important; left: 493px !important;' );
    // document.querySelector( 'style' ).textContent += "@media print{ .car-congrats { top: 446px !important; } }";
	$( '.car-details-congrats' ).append( '<h2> HONDA CITY </h2> <p>The All New City is offered with Honda’s improved 1.5 liter i-VTEC engine that delivers maximum power'
	+ ' output of 120 ps at 6600 rpm. The 1.5 liter i-VTEC engine is mated to a new 5-speed Manual Transmission and developed under the Honda’s Earth Dreams Technology, '
	+ ' new Continuously Variable Transmission (CVT with 7-speed paddle shifters).</p>' );
	}

	if ( currentCar.name === 'civic' ) {
	    $( '.car-congrats' ).css( { 'top': 298, 'left' : 427 } );
	    document.styleSheets[11].addRule( '.car-congrats', 'top: 563px !important; left: 493px !important;' );
	// document.querySelector( 'style' ).textContent += "@media print{ .car-congrats { top: 446px !important; } }";
	    $( '.car-details-congrats' ).append( '<h2> HONDA CIVIC </h2> <p>The spirit of racing has been running through Honda’s pipelines and powertrain since the era of its ' +
	'great grandfathers. With MUGEN, The All-New Civic can relive and bask in its ancestors’ glory of being kings of the road.</p>' );
	    }

	    if ( currentCar.name === 'jazz' ) {
		$( '.car-congrats' ).css( { 'top': 271, 'left' : 420 } );
		document.styleSheets[11].addRule( '.car-congrats', 'top: 483px !important; left: 493px !important;' );
	// document.querySelector( 'style' ).textContent += "@media print{ .car-congrats { top: 405px !important; } }";
	//document.styleSheets[11].addRule( '.car-congrats', 'top: 405px !important;' );
	    $( '.car-details-congrats' ).append( '<h2> HONDA JAZZ </h2> <p>Space, performance, and style - the perfect combo for an extremely breathtaking experience on the road.'
		+ ' To add up excitement, the All-New Honda Jazz has the ULTR to fit every lifestyle through various seat configurations.</p' );
	    }

    $( '.car-congrats-skirt' ).removeClass( 'car-congrats-skirt-' + currentCar.prevCarName );
    $( '.car-congrats-spoiler' ).removeClass( 'car-congrats-spoiler-' + currentCar.prevCarName );
    $( '.car-congrats-tint' ).removeClass( 'car-congrats-tint-' + currentCar.prevCarName );
    $( '.car-congrats-decal' ).removeClass( 'car-congrats-decal-' + currentCar.prevCarName + '-1' );
    $( '.car-congrats-decal' ).removeClass( 'car-congrats-decal-' + currentCar.prevCarName + '-2' );
    $( '.car-congrats-decal' ).removeClass( 'car-congrats-decal-' + currentCar.prevCarName + '-3' );
    $( '.car-congrats-rim-back' ).removeClass( 'car-congrats-rim-back-' + currentCar.prevCarName );
    $( '.car-congrats-rim-front' ).removeClass( 'car-congrats-rim-front-' + currentCar.prevCarName );
	if ( currentCar.skirt && currentCar.skirt !== 1 ) {
	$( '.car-congrats-skirt' ).attr( 'src', 'images/assets/' + currentCar.name + '/slices/skirt/' + currentCar.skirt + '/6.png' );
	if ( !$( '.car-congrats-skirt' ).hasClass( 'car-congrats-skirt-city' ) && !$( '.car-congrats-skirt' ).hasClass( 'car-congrats-skirt-crv' ) && !$( '.car-congrats-skirt' ).hasClass( 'car-congrats-skirt-jazz' ) ) {
	    $( '.car-congrats-skirt' ).addClass( 'car-congrats-skirt-' + currentCar.name );
	}else{
	     $( '.car-congrats-skirt' ).addClass( 'car-congrats-skirt-' + currentCar.name );
	}
	} else {
	$( '.car-congrats-skirt' ).attr( 'src', '' );
    }
	if ( currentCar.spoiler && currentCar.spoiler !== 1 ) {
	$( '.car-congrats-spoiler' ).attr( 'src', 'images/assets/' + currentCar.name + '/slices/spoiler/' + currentCar.spoiler + '/6.png' );
	if ( !$( '.car-congrats-spoiler' ).hasClass( 'car-congrats-spoiler-city' ) && !$( '.car-congrats-spoiler' ).hasClass( 'car-congrats-spoiler-crv' ) && !$( '.car-congrats-spoiler' ).hasClass( 'car-congrats-spoiler-jazz' ) ) {
	    $( '.car-congrats-spoiler' ).addClass( 'car-congrats-spoiler-' + currentCar.name );
	} else {
	     $( '.car-congrats-spoiler' ).addClass( 'car-congrats-spoiler-' + currentCar.name );
	}
	}else {
	$( '.car-congrats-spoiler' ).attr( 'src', '' );
    }
	if ( currentCar.tint ) {
	$( '.car-congrats-tint' ).attr( 'src', 'images/assets/' + currentCar.name + '/slices/tint/' + currentCar.tint + '/6.png' );
	if ( !$( '.car-congrats-tint' ).hasClass( 'car-congrats-tint-city' ) && !$( '.car-congrats-tint' ).hasClass( 'car-congrats-tint-crv' ) && !$( '.car-congrats-tint' ).hasClass( 'car-congrats-tint-jazz' ) ) {
	    $( '.car-congrats-tint' ).addClass( 'car-congrats-tint-' + currentCar.name );
	} else {
	    $( '.car-congrats-tint' ).addClass( 'car-congrats-tint-' + currentCar.name );
	}
	}else {
	$( '.car-congrats-tint' ).attr( 'src', '' );
    }


	if ( currentCar.decal ) {
	$( '.car-congrats-decal' ).attr( 'src', 'images/assets/' + currentCar.name + '/slices/decal/' + currentCar.decal + '/6.png' );
	if ( !$( '.car-congrats-decal' ).hasClass( 'car-congrats-decal-city-1' ) && !$( '.car-congrats-decal' ).hasClass( 'car-congrats-decal-city-2' ) && !$( '.car-congrats-decal' ).hasClass( 'car-congrats-decal-city-3' ) && !$( '.car-congrats-decal' ).hasClass( 'car-congrats-decal-crv-1' ) && !$( '.car-congrats-decal' ).hasClass( 'car-congrats-decal-crv-2' ) && !$( '.car-congrats-decal' ).hasClass( 'car-congrats-decal-crv-3' ) && !$( '.car-congrats-decal' ).hasClass( 'car-congrats-decal-jazz-1' ) && !$( '.car-congrats-decal' ).hasClass( 'car-congrats-decal-jazz-2' ) && !$( '.car-congrats-decal' ).hasClass( 'car-congrats-decal-jazz-3' ) ) {
	    $( '.car-congrats-decal' ).addClass( 'car-congrats-decal-' + currentCar.name + '-' + currentCar.decal );
	} else {
	     $( '.car-congrats-decal' ).addClass( 'car-congrats-decal-' + currentCar.name + '-' + currentCar.decal );
	}
	}else {
	$( '.car-congrats-decal' ).attr( 'src', '' );
    }


	$( '.car-congrats-body' ).attr( 'src', 'images/assets/' + currentCar.name + '/slices/color/' + currentCar.color + '/6.png' );
	$( '.car-congrats-rim-back, .car-congrats-rim-front' ).attr( 'src', 'images/assets/' + currentCar.name + '/buttons/rims/' + currentCar.rims + '.png' );
	if ( !$( '.car-congrats-rim-back' ).hasClass( 'car-congrats-rim-back-city' ) && !$( '.car-congrats-rim-back' ).hasClass( 'car-congrats-rim-back-crv' ) && !$( '.car-congrats-rim-back' ).hasClass( 'car-congrats-rim-back-jazz' ) ) {
	$( '.car-congrats-rim-back' ).addClass( 'car-congrats-rim-back-' + currentCar.name );
	} else {
	    $( '.car-congrats-rim-back' ).addClass( 'car-congrats-rim-back-' + currentCar.name );
	}
	if ( !$( '.car-congrats-rim-front' ).hasClass( 'car-congrats-rim-front-city' ) && !$( '.car-congrats-rim-front' ).hasClass( 'car-congrats-rim-front-crv' ) && !$( '.car-congrats-rim-front' ).hasClass( 'car-congrats-rim-front-jazz' ) ) {
	$( '.car-congrats-rim-front' ).addClass( 'car-congrats-rim-front-' + currentCar.name );
	} else {
	    $( '.car-congrats-rim-front' ).addClass( 'car-congrats-rim-front-' + currentCar.name );
	}
	    // END


    } );

    $( '.race-restart-btn' ).on( 'click', function () {

    $( '.race-carsmoke' ).hide();
	$( '.race-game-precounter span' ).remove( 'race-start-game' );
	$( '.race-game-precounter' ).show();
	$( '.race-game-precounter span' ).show();
	$( '.race-car1-rim-back, .race-car1-rim-front' ).removeClass( 'race-rim-animate' );
	$( '.race-car1-container, .race-background, .race-car2-container' ).removeClass( 'race-accelerate-car' );
	$( '.race-car1-container, .race-car2-container, .race-finish-line-container, .race-mini-map-container .race-car1-mini' ).removeClass( 'race-finish-game' );
	$( '.race-car1-container' ).remove();
	$( '.race-car2-container' ).remove();
	$( '.race-background' ).append( [ newCar1, newCar2 ] );
	$( '.race-car1-container, .race-car2-container, .race-finish-line-container, .race-mini-map-container .race-car1-mini' ).removeClass( 'race-finish-game' );
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

function loadCamera() {

    $( function() {
        if (navigator.getUserMedia) {
            navigator.getUserMedia(videoObj, function(stream) {
                video.src = stream;
                video.play();
            }, errBack);
        } else if (navigator.webkitGetUserMedia) {
            navigator.webkitGetUserMedia(videoObj, function(stream) {
							console.log(stream);
                video.src = window.webkitURL.createObjectURL(stream);
                video.play();
            }, errBack);
        } else if (navigator.mozGetUserMedia) {
            navigator.mozGetUserMedia(videoObj, function(stream) {
                video.src = window.URL.createObjectURL(stream);
                video.play();
            }, errBack);
        }
    } );
}

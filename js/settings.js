var self;

$( '.current-pass' ).focus();

if ( !window.localStorage.getItem( 'password' ) ) {
	window.localStorage.setItem( 'password', 'admin' );
}
function savePass () {

	var newPass = $( '.new-pass' ).val();
	var retype  = $( '.retype' ).val();
	var equal   = newPass === retype ? true : false;
	var current = window.localStorage.getItem( 'password' );
	console.log( current )
	if ( equal ) {
		if ( current === $( '.current-pass' ).val() ) {
			window.localStorage.setItem( 'password', $( '.retype' ).val() );
			$( '.current-cont' ).removeClass( 'has-error' );
			$( '.retype-cont' ).removeClass( 'has-error' );
			$( '.new-cont' ).removeClass( 'has-error' );
			alert( 'Password changed successfully.' );
			return true;
		}
		$( '.current-cont' ).addClass( 'has-error' );
		return false;
	}
	$( '.retype-cont' ).addClass( 'has-error' );
	$( '.new-cont' ).addClass( 'has-error' );
	return false;
}

function getValue ( event, name ) {
	var newPass = $( '.new-pass' ).val();
	var retype  = $( '.retype' ).val();
	var equal   = newPass === retype ? true : false;

		if ( event.keyCode === 13 || event.keyCode === 9 ) {
			event.preventDefault();
			return false;
		}
		if ( name === 'retype' || name === 'new' && newPass !== '' && retype !== '' ) {
			self = equal;
			if ( !equal ) {
				$( '.retype-cont' ).addClass( 'has-error' );
				$( '.new-cont' ).addClass( 'has-error' );
				return false;
			}
			$( '.retype-cont' ).removeClass( 'has-error' );
			$( '.new-cont' ).removeClass( 'has-error' );
			return false;
		}
}

var self;

$( '.current-pass' ).focus();

if ( !window.localStorage.getItem( 'password' ) ) {
	window.localStorage.setItem( 'password', 'admin' );
}
function savePass () {

	var current = window.localStorage.getItem( 'password' );
	console.log( current )
	if ( self ) {
		if ( current === $( '.current-pass' ).val() ) {
			window.localStorage.setItem( 'password', $( '.retype' ).val() );
			$( '.current-cont' ).removeClass( 'has-error' );
			alert( 'Password changed successfully.' );
			return true;
		}
		$( '.current-cont' ).addClass( 'has-error' );
	}
	return false;
}

function getValue ( event, name ) {
	var newPass = $( '.new-pass' ).val();
	var retype  = $( '.retype' ).val();
	var equal   = newPass === retype ? true : false;

		if ( event.keyCode === 13 ) {
			event.preventDefault();
			return false;
		}

		if ( name === 'retype' || name === 'new' ) {
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

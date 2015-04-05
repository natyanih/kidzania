var customizer = ( function (){
	var canvas  = document.getElementById('customizer-car-container');
	var context = canvas.getContext('2d');

	return {
		'clearCanvas' : function () {
			context.clearRect ( 0 , 0 , canvas.width, canvas.height );
			this.renderColor();
		},

		'renderCar' : function () {
			$( '#customizer-car-container' ).hide();
			this.clearCanvas();
		},

		'renderColor' : function () {
			var self    = this;
			var color   = currentCar.color || 1;
			var side    = currentCar.currentSide || 1;
			var width   = adjustment[ currentCar.name ].dimension.color[ side ].width;
			var offsetX = adjustment[ currentCar.name ].offset.color[ side ].x;
			var offsetY = adjustment[ currentCar.name ].offset.color[ side ].y;
			var img     = new Image();

			img.src   = 'images/assets/' + currentCar.name + '/slices/color/' + color + '/' + side + '.png';

			img.onload = function() {
				context.drawImage( img, offsetX, offsetY, width, img.height * width / img.width );
				self.renderTint();
				self.renderDecal();
				self.renderRims();
				self.renderGrill();
				self.renderSkirt();
				self.renderSpoiler();
			};
		},

		'renderTint' : function () {
			var img = new Image();
			if ( currentCar.tint ) {
				var side    = currentCar.currentSide || 1;
				var width   = adjustment[ currentCar.name ].dimension.tint[ side ].width;
				var offsetX = adjustment[ currentCar.name ].offset.tint[ side ].x;
				var offsetY = adjustment[ currentCar.name ].offset.tint[ side ].y;

				img.src = 'images/assets/' + currentCar.name + '/slices/tint/' + currentCar.tint + '/' + side + '.png';

				img.onload = function() {
					context.drawImage( img, offsetX, offsetY, width, img.height * width / img.width );
				};
			}

		},

		'renderDecal' : function () {
			var img = new Image();
			if ( currentCar.decal && currentCar.currentSide !== 2 && currentCar.currentSide !== 3 ) {
				var side    = currentCar.currentSide || 1;
				var width   = adjustment[ currentCar.name ].dimension.decal[ side ].width;
				var offsetX = adjustment[ currentCar.name ].offset.decal[ side ].x;
				var offsetY = adjustment[ currentCar.name ].offset.decal[ side ].y;

				img.src = 'images/assets/' + currentCar.name + '/slices/decal/' + currentCar.decal + '/' + side + '.png';

				img.onload = function() {
					context.drawImage( img, offsetX, offsetY, width, img.height * width / img.width );
				};
			}
		},

		'renderRims' : function () {
			var img = new Image();
			if ( currentCar.rims && currentCar.currentSide !== 2 && currentCar.currentSide !== 3 ) {
				var side    = currentCar.currentSide || 1;
				var width   = adjustment[ currentCar.name ].dimension.rims[ side ].width;
				var offsetX = adjustment[ currentCar.name ].offset.rims[ side ].x;
				var offsetY = adjustment[ currentCar.name ].offset.rims[ side ].y;

				img.src = 'images/assets/' + currentCar.name + '/slices/rims/' + currentCar.rims + '/' + side + '.png';

				img.onload = function() {
					context.drawImage( img, offsetX, offsetY, width, img.height * width / img.width );
				};
			}

		},

		'renderGrill' : function () {
			var img = new Image();
			if ( currentCar.grill && currentCar.grill !== 1 ) {
				var side    = currentCar.currentSide || 1;
				var width   = adjustment[ currentCar.name ].dimension.grill[ side ].width;
				var offsetX = adjustment[ currentCar.name ].offset.grill[ side ].x;
				var offsetY = adjustment[ currentCar.name ].offset.grill[ side ].y;

				img.src = 'images/assets/' + currentCar.name + '/slices/grill/' + currentCar.grill + '/' + side + '.png';

				img.onload = function() {
					context.drawImage( img, offsetX, offsetY, width, img.height * width / img.width );
				};
			}

		},

		'renderSkirt' : function () {
			var img = new Image();
			if ( currentCar.skirt && currentCar.skirt !== 1 && currentCar.currentSide !== 2 && currentCar.currentSide !== 3 ) {
				var side    = currentCar.currentSide || 1;
				var width   = adjustment[ currentCar.name ].dimension.skirt[ side ].width;
				var offsetX = adjustment[ currentCar.name ].offset.skirt[ side ].x;
				var offsetY = adjustment[ currentCar.name ].offset.skirt[ side ].y;

				img.src = 'images/assets/' + currentCar.name + '/slices/skirt/' + currentCar.skirt + '/' + side + '.png';

				img.onload = function() {
					context.drawImage( img, offsetX, offsetY, width, img.height * width / img.width );
				};
			}
		},

		'renderSpoiler' : function () {
			var img = new Image();
			if ( currentCar.spoiler && currentCar.spoiler !== 1 && currentCar.currentSide !== 3  ) {
				var side    = currentCar.currentSide || 1;
				var width   = adjustment[ currentCar.name ].dimension.spoiler[ side ].width;
				var offsetX = adjustment[ currentCar.name ].offset.spoiler[ side ].x;
				var offsetY = adjustment[ currentCar.name ].offset.spoiler[ side ].y;

				img.src = 'images/assets/' + currentCar.name + '/slices/spoiler/' + currentCar.spoiler + '/' + side + '.png';

				img.onload = function() {
					context.drawImage( img, offsetX, offsetY, width, img.height * width / img.width );
				};
			}
			$( '#customizer-car-container' ).fadeIn();
		}

	};
})();

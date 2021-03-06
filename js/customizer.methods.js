var customizer = ( function (){
	var carCanvas  = document.getElementById('customizer-car-container');
	var carContext = carCanvas.getContext('2d');

	var canvas  = document.getElementById('customizer-car-container-2');
	var context = canvas.getContext('2d');

	return {
		'clearAssetCanvas' : function () {
			var self    = this;

			context.clearRect ( 0 , 0 , canvas.width, canvas.height );
			this.renderTint();
			this.renderTint();
			self.renderDecal();
			self.renderRims();
			self.renderGrill();
			self.renderSkirt();
			self.renderSpoiler();
		},

		'renderCar' : function ( args ) {
			// $( '#customizer-car-container' ).hide();

			// args.customize = false - preview car
			// args.customize = true
			if ( !args.customize ) {
				this.renderColor();
				this.clearAssetCanvas();
			} else if ( args.customize && args.render === 'color' ) {
				this.renderColor();
			} else if ( args.customize && args.render === 'asset' ) {
				this.clearAssetCanvas();
			} else {
				// resetCar - render both color and assets
				this.renderColor();
				this.clearAssetCanvas();
			}
		},

		'renderColor' : function () {
			var self    = this;
			var color   = currentCar.color || 1;
			var side    = currentCar.currentSide || 1;
			var width   = adjustment[ currentCar.name ].dimension.color[ side ].width;
			var offsetX = adjustment[ currentCar.name ].offset.color[ side ].x;
			var offsetY = adjustment[ currentCar.name ].offset.color[ side ].y;
			var img     = new Image();

			carContext.clearRect ( 0 , 0 , carCanvas.width, carCanvas.height );
			img.src   = 'images/assets/' + currentCar.name + '/slices/color/' + color + '/' + side + '.png';

			img.onload = function() {
				width = img.width > width ? width : img.width;
				// width = currentCar.name === 'crv' && currentCar.currentSide === 2 ? 270 : width;
				// width = currentCar.name === 'crv' && currentCar.currentSide === 3 ? 300 : width;
				carContext.drawImage( img, offsetX, offsetY, width, img.height * width / img.width );
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
					width = img.width > width ? width : img.width;
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
					width = img.width > width ? width : img.width;
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
					width = img.width > width ? width : img.width;
					context.drawImage( img, offsetX, offsetY, width, img.height * width / img.width );
				};
			}

		},

		'renderGrill' : function () {
			var img = new Image();
			var side    = currentCar.currentSide || 1;
			var width   = adjustment[ currentCar.name ].dimension.grill[ side ].width;
			var offsetX = adjustment[ currentCar.name ].offset.grill[ side ].x;
			var offsetY = adjustment[ currentCar.name ].offset.grill[ side ].y;

			img.src = 'images/assets/' + currentCar.name + '/slices/grill/' + currentCar.grill + '/' + side + '.png';

			if ( currentCar.name === 'brio' && currentCar.currentSide === 5 && currentCar.grill === 1 ) {
				offsetY = offsetY - 46;
			}

			img.onload = function() {
				width = img.width > width ? width : img.width;
				context.drawImage( img, offsetX, offsetY, width, img.height * width / img.width );
			};

		},

		'renderSkirt' : function () {
			var img = new Image();
			var side    = currentCar.currentSide || 1;
			var width   = adjustment[ currentCar.name ].dimension.skirt[ side ].width;
			var offsetX = adjustment[ currentCar.name ].offset.skirt[ side ].x;
			var offsetY = adjustment[ currentCar.name ].offset.skirt[ side ].y;

			img.src = 'images/assets/' + currentCar.name + '/slices/skirt/' + currentCar.skirt + '/' + side + '.png';

			img.onload = function() {
				width = img.width > width ? width : img.width;
				context.drawImage( img, offsetX, offsetY, width, img.height * width / img.width );
			};
		},

		'renderSpoiler' : function () {
			var img = new Image();
			var side    = currentCar.currentSide || 1;
			var width   = adjustment[ currentCar.name ].dimension.spoiler[ side ].width;
			var offsetX = adjustment[ currentCar.name ].offset.spoiler[ side ].x;
			var offsetY = adjustment[ currentCar.name ].offset.spoiler[ side ].y;

			img.src = 'images/assets/' + currentCar.name + '/slices/spoiler/' + currentCar.spoiler + '/' + side + '.png';
			img.onload = function() {
				width = img.width > width ? width : img.width;
				context.drawImage( img, offsetX, offsetY, width, img.height * width / img.width );
			};
			//$( '#customizer-car-container' ).fadeIn();
		},

		'selectDefaultColor' : function () {
			var parentClass = '.' + currentCar.name + '-div-car-color';
			$( parentClass ).find( '.type-default-color' ).prepend( '<i class="fa fa-check-circle fa-3 selection-indicator"></i>' );
		},

		'selectDefaultTint' : function () {
			var parentClass = '.' + currentCar.name + '-div-car-tint';
			var tintClass   = '.' + currentCar.name + '-customizer-tint-1';

			$( parentClass ).find( tintClass ).prepend( '<i class="fa fa-check-circle fa-3 selection-indicator"></i>' );
		},

		'selectDefaultRim' : function () {
			var parentClass = '.' + currentCar.name + '-div-car-rims';
			var rimClass   = '.' + currentCar.name + '-customizer-rim-6';

			if ( currentCar.name === 'amaze' && ( currentCar.rims === null || currentCar.rims === 6 ) ) {
				$( parentClass ).find( rimClass ).prepend( '<i class="fa fa-check-circle fa-3 selection-indicator"></i>' );
			}
		},

		'selectDefaultBackground' : function () {
			var parentClass = '.' + currentCar.name + '-div-car-background';
			var bgClass   = '.' + currentCar.name + '-customizer-background-3';

			$( parentClass ).find( bgClass ).prepend( '<i class="fa fa-check-circle fa-3 selection-indicator"></i>' );
		},

	};
})();

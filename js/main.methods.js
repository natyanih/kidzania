var methods = (function() {
	'use strict';

	return {
		'hideDiv': function(id) {

			switch (id) {
				// from carousel to customizer
				case 'carousel':
					$('#loading').hide();
					$('#carousel-main').hide();
					$('.customizer-main').show();
					$('.btn-view-car').show();
					$('.btn-customizer-group').show();
					$('.btn-select-car').hide();

					console.log( currentCar );

					$('.jazz-customizer-holder').hide();
					$('.city-customizer-holder').hide();
					$('.crv-customizer-holder').hide();

					// load html
					if (currentCar.name === 'jazz') {
						$('.jazz-customizer-holder').show();

						// hide other customizer divs
						$('.jazz-div-car-tint').hide();
						$('.jazz-div-car-decal').hide();
						$('.jazz-div-car-rims').hide();
						$('.jazz-div-car-body').hide();
					}

					if (currentCar.name === 'crv') {
						$('.crv-customizer-holder').show();

						// hide other customizer divs
						$('.crv-div-car-tint').hide();
						$('.crv-div-car-decal').hide();
						$('.crv-div-car-rims').hide();
						$('.crv-div-car-body').hide();
					}

					 if (currentCar.name === 'city') {
						$('.city-customizer-holder').show();

						// hide other customizer divs
						$('.city-div-car-tint').hide();
						$('.city-div-car-decal').hide();
						$('.city-div-car-rims').hide();
						$('.city-div-car-body').hide();
					}

					// add color to car color button
					$('.customizer-car-color > p').addClass('active');

					// display default car - yellow
					break;

					// customizer to car preview
				case 'customizer':
					$('#loading').hide();
					$('#carousel-main').hide();
					$('.customizer-main').hide();
					$('.preview-main').show();
					$('.btn-race-car').show();
					$('.btn-view-car').hide();
					$('.btn-customizer-group').hide();
					break;

					// car preview to race
				case 'preview':
					$('#loading').hide();
					$('#carousel-main').hide();
					$('#carousel').hide();
					$('.race-main').show();
					$('.race-main').removeClass('hidden');
					break;

					// if no id
				default:
					$('#carousel').hide();
					break;
			}
		},

		'showCustomizer': function(customizer) {
			var divClass = '.' + currentCar.name + '-div-car-' + customizer;
			console.log(divClass);
			var btnClass = '.customizer-car-' + customizer;
			$('.customizer-container').hide();
			$(divClass).show();
			$('.btn-customizer > p.active').removeClass('active');
			$(btnClass).find('p').addClass('active');
		},

		'applyAsset': function(args) {
			console.log( args );
			var type = args.type;
			var id   = args.id;

			currentCar[type] = id;

			console.log(currentCar);
			console.log('type: ' + type + ' - id: ' + id);

			// re-render whole car if asset is color
			customizer.renderCar();
		},

		'resetCar' : function () {
			currentCar = {
				'name'        : currentCar.name,
				'color'       : null,
				'tint'        : null,
				'decal'       : null,
				'rims'        : null,
				'grill'       : null,
				'skirt'       : null,
				'spoiler'     : null,
				'currentSide' : null
			};
			customizer.renderCar();
		},

		'initCanvas': function() {
			var canvas  = document.getElementById('customizer-car-container');
			var context = canvas.getContext('2d');
			var img     = new Image();

			var side    = currentCar.currentSide || 1;
			var width   = adjustment[ currentCar.name ].dimension.color[ side ].width;
			var offsetX = adjustment[ currentCar.name ].offset.color[ side ].x;
			var offsetY = adjustment[ currentCar.name ].offset.color[ side ].y;

			img.src = 'images/assets/' + currentCar.name + '/slices/color/1/' + side + '.png';

			img.onload = function() {
				context.drawImage( img, offsetX, offsetY, width, img.height * width / img.width );
			};
		}
	};

})();

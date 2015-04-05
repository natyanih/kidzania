var methods = (function() {
    'use strict';

    return {
        'hideDiv': function(id) {

            switch (id) {
            	// loading to carousel
                case 'loading' :
					$('#carousel-main').show();
					$('#loading').hide();
                    $('.customizer-main').hide();
                    $('.btn-view-car').hide();
                    $('.btn-back-carousel').hide();
                    $('.btn-back-preview').hide();
                    $('.btn-customizer-group').hide();
                    $('.btn-select-car').show();
                    $('.btn-race-car').hide();
                    $('.btn-start-over').hide();
                    $('.btn-preview-group').hide();
                    $('.btn-rotate-clockwise').hide();
                    $('.btn-rotate-counter').hide();
					// reset car
					currentCar = {
						'name'        : null,
						'color'       : 1,
						'tint'        : null,
						'decal'       : null,
						'rims'        : null,
						'grill'       : null,
						'skirt'       : null,
						'spoiler'     : null,
						'currentSide' : 1,
						'raceBG'      : null
					};
					carousel();
                	break;
				// from carousel to customizer
                case 'carousel':
                    $('#loading').hide();
                    $('#carousel-main').hide();
                    $('.customizer-main').show();
                    $('.btn-view-car').show();
                    $('.btn-back-carousel').show();
                    $('.btn-back-preview').hide();
                    $('.btn-customizer-group').show();
                    $('.btn-select-car').hide();
                    $('.btn-race-car').hide();
                    $('.btn-start-over').hide();
                    $('.btn-preview-group').hide();
                    $('.btn-rotate-clockwise').hide();
                    $('.btn-rotate-counter').hide();

                    $( '.header-title' ).text( 'GARAGE' );

                    console.log(currentCar);

                    $('.jazz-customizer-holder').hide();
                    $('.city-customizer-holder').hide();
                    $('.crv-customizer-holder').hide();

                    // load html
                    if (currentCar.name === 'jazz') {
                        $('.jazz-customizer-holder').show();
                        $('.jazz-div-car-color').show();

                        // hide other customizer divs
                        $('.jazz-div-car-tint').hide();
                        $('.jazz-div-car-decal').hide();
                        $('.jazz-div-car-rims').hide();
                        $('.jazz-div-car-body').hide();
                        $('.jazz-div-car-background').hide();
                    }

                    if (currentCar.name === 'crv') {
                        $('.crv-customizer-holder').show();
                        $('.crv-div-car-color').show();

                        // hide other customizer divs
                        $('.crv-div-car-tint').hide();
                        $('.crv-div-car-decal').hide();
                        $('.crv-div-car-rims').hide();
                        $('.crv-div-car-body').hide();
                        $('.crv-div-car-background').hide();
                    }

                    if (currentCar.name === 'city') {
                        $('.city-customizer-holder').show();
                        $('.city-div-car-color').show();

                        // hide other customizer divs
                        $('.city-div-car-tint').hide();
                        $('.city-div-car-decal').hide();
                        $('.city-div-car-rims').hide();
                        $('.city-div-car-body').hide();
                        $('.city-div-car-background').hide();
                    }

                    // add color to car color button
                    $('.customizer-car-color > p').addClass('active');
                    $('.customizer-car-container').removeClass('preview-car-container');

                    // display default car - yellow
                    break;

                    // customizer to car preview
                case 'customizer':
                    $('#loading').hide();
                    $('#carousel-main').hide();
                    $('.customizer-main').hide();
                    $('.preview-main').show();
                    $('.btn-race-car').show();
                    $('.btn-preview-group').show();
                    $('.btn-view-car').hide();
                    $('.btn-customizer-group').hide();
                    console.log( $('#customizer-car-container') )
                    $('.customizer-car-container').addClass('preview-car-container');
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

        'showPreview': function() {
            $('.btn-race-car').show();
            $('.btn-start-over').show();
            $('.btn-rotate-clockwise').show();
            $('.btn-rotate-counter').show();
            $('.btn-back-preview').show();

            // hide customizer footer buttons, .btn-view-car
            $('.btn-view-car').hide();
            $('.btn-customizer-group').hide();
            $('.btn-back-carousel').hide();

            // change background to preview background
            $('.customizer-main').addClass('preview-main');
            $('.customizer-car-container').addClass( 'preview-car-container' );
        },

        'showCustomizer': function(customizer) {
            var divClass = '.' + currentCar.name + '-div-car-' + customizer;
            console.log(divClass);
            var btnClass = '.customizer-car-' + customizer;
            $('.customizer-container').hide();
            $(divClass).show();
            $('.btn-customizer > p.active').removeClass('active');
            $(btnClass).find('p').addClass('active');

            if (customizer === 'background') {
                this.showPreview();
            }
        },

        'applyAsset': function(args) {
            console.log(args);
            var type = args.type;
            var id = args.id;

            if (currentCar[type] !== id) {
                currentCar[type] = id;

                console.log(currentCar);
                console.log('type: ' + type + ' - id: ' + id);
            } else {
            	if ( type === 'color' ) {
            		currentCar[ type ] = 1;
            	} else if ( type === 'raceBG' ) {
            		currentCar[ type ] = 3;
            	} else {
            		currentCar[ type ] = null;
            	}
            }

            customizer.renderCar();
        },

        'resetCar': function() {
            currentCar = {
                'name'        : currentCar.name,
                'color'       : 1,
                'tint'        : null,
                'decal'       : null,
                'rims'        : null,
                'grill'       : null,
                'skirt'       : null,
                'spoiler'     : null,
                'currentSide' : 1,
                'raceBG'      : 3
            };
            customizer.renderCar();
        },

        'initCanvas': function() {
            var canvas = document.getElementById('customizer-car-container');
            var context = canvas.getContext('2d');
            context.clearRect ( 0 , 0 , canvas.width, canvas.height );
            var img = new Image();

            var side = currentCar.currentSide || 1;
            var width = adjustment[currentCar.name].dimension.color[side].width;
            var offsetX = adjustment[currentCar.name].offset.color[side].x;
            var offsetY = adjustment[currentCar.name].offset.color[side].y;

            img.src = 'images/assets/' + currentCar.name + '/slices/color/1/' + side + '.png';

            img.onload = function() {
                context.drawImage(img, offsetX, offsetY, width, img.height * width / img.width);
            };
        }
    };

})();

function carousel() {
    $('#carousel-main').carousel({
        'interval' : 3000,
        'pause'    : true
    }).carousel('pause');
    $('#carousel-main').bind('slid.bs.carousel', function(e) {
        var carouselData = $(this).data('bs.carousel');

        selectCar = carouselData.$element.find('.item.active').attr('id');
    });
}

// EVENT LISTENERS
$('.btn-select-car').on('click', function() {
    console.log('Selected Car: ' + selectCar);
    currentCar = {
        'name': selectCar || 'city',
        'color': 1,
        'tint': null,
        'decal': null,
        'rims': null,
        'grill': null,
        'skirt': null,
        'spoiler': null,
        'currentSide': 1,
        'raceBG': null
    };
    // remove selection indicators
    $('.customizer-main').find('.selection-indicator').remove();

    // add default selection indicator for color
    customizer.selectDefaultColor();
    customizer.selectDefaultTint();

    methods.hideDiv('carousel');

    // display default car
    // jazz = yellow
    methods.initCanvas();
});

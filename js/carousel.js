function carousel() {
    $('#carousel-main').carousel({
        interval: 2000
    });
    $('#carousel-main').bind('slid.bs.carousel', function(e) {
        var carouselData = $(this).data('bs.carousel');

        selectCar = carouselData.$element.find('.item.active').attr('id');
    });
}

// EVENT LISTENERS
$('.btn-select-car').on('click', function() {
    console.log('Selected Car: ' + selectCar);
    currentCar = {
        'name': selectCar || 'crv',
        'color': 1,
        'tint': null,
        'decal': null,
        'rims': null,
        'grill': null,
        'skirt': null,
        'spoiler': null,
        'currentSide': 1,
        'raceBG': 3
    };
    // remove selection indicators
    $('.customizer-main').find('.selection-indicator').remove();

    // add default selection indicator for color
    var defaultColor = '.' + currentCar.name + '-customizer-color-1';
    $( defaultColor ).prepend( '<i class="fa fa-check-circle fa-3 selection-indicator"></i>' );

    methods.hideDiv('carousel');

    // display default car
    // jazz = yellow
    methods.initCanvas();
});

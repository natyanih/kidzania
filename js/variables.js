var selectCar;
var sequence   = [ 1,4,7,2,5,6,8,3 ];
var currentCar = {
    'name'        : null,
    'color'       : 1,
    'tint'        : 1,
    'decal'       : null,
    'rims'        : null,
    'grill'       : null,
    'skirt'       : null,
    'spoiler'     : null,
    'currentSide' : 1,
    'raceBG'      : null,
    'prevCarName' : null
};

var adjustment = {
	'crv' : {
		'offset' : {
			'color' : {
				// one here represent side ID, same adjustments for same side, same type
				'1' : { 'x' : 20, 'y' : 110 },
				'2' : { 'x' : 20, 'y' : 110 },
				'3' : { 'x' : 20, 'y' : 110 },
				'4' : { 'x' : 20, 'y' : 100 },
				'5' : { 'x' : 20, 'y' : 110 },
				'6' : { 'x' : 20, 'y' : 100 },
				'7' : { 'x' : 20, 'y' : 110 },
				'8' : { 'x' : 20, 'y' : 110 }
			},
			'tint' : {
				// one here represent side ID, same adjustments for same side, same type
				'1' : { 'x' : 20, 'y' : 110 },
				'2' : { 'x' : 20, 'y' : 110 },
				'3' : { 'x' : 20, 'y' : 110 },
				'4' : { 'x' : 20, 'y' : 100 },
				'5' : { 'x' : 22, 'y' : 99 },
				'6' : { 'x' : 20, 'y' : 100 },
				'7' : { 'x' : 22, 'y' : 100 },
				'8' : { 'x' : 20, 'y' : 110 }
			},
			'decal' : {
				'1' : { 'x' : 20, 'y' : 110 },
				'2' : { 'x' : 20, 'y' : 110 },
				'3' : { 'x' : 20, 'y' : 110 },
				'4' : { 'x' : 20, 'y' : 100 },
				'5' : { 'x' : 20, 'y' : 110 },
				'6' : { 'x' : 20, 'y' : 100 },
				'7' : { 'x' : 20, 'y' : 110 },
				'8' : { 'x' : 20, 'y' : 110 }
			},
			'rims' : {
				// one here represent side ID, same adjustments for same side, same type
				'1' : { 'x' : 20, 'y' : 110 },
				'2' : { 'x' : 20, 'y' : 110 },
				'3' : { 'x' : 20, 'y' : 110 },
				'4' : { 'x' : 20, 'y' : 100 },
				'5' : { 'x' : 22, 'y' : 99 },
				'6' : { 'x' : 20, 'y' : 100 },
				'7' : { 'x' : 21, 'y' : 105 },
				'8' : { 'x' : 20, 'y' : 110 }
			},
			'grill' : {
				// one here represent side ID, same adjustments for same side, same type
				'1' : { 'x' : 20, 'y' : 110 },
				'2' : { 'x' : 20, 'y' : 110 },
				'3' : { 'x' : 20, 'y' : 110 },
				'4' : { 'x' : 20, 'y' : 100 },
				'5' : { 'x' : 20, 'y' : 110 },
				'6' : { 'x' : 20, 'y' : 100 },
				'7' : { 'x' : 20, 'y' : 110 },
				'8' : { 'x' : 20, 'y' : 110 }
			},
			'skirt' : {
				'1' : { 'x' : 20, 'y' : 110 },
				'2' : { 'x' : 20, 'y' : 110 },
				'3' : { 'x' : 20, 'y' : 110 },
				'4' : { 'x' : 20, 'y' : 100 },
				'5' : { 'x' : 20, 'y' : 110 },
				'6' : { 'x' : 20, 'y' : 100 },
				'7' : { 'x' : 20, 'y' : 110 },
				'8' : { 'x' : 20, 'y' : 110 }
			},
			'spoiler' : {
				'1' : { 'x' : 20, 'y' : 111 },
				'2' : { 'x' : 20, 'y' : 110 },
				'3' : { 'x' : 20, 'y' : 110 },
				'4' : { 'x' : 17, 'y' : 125 },
				'5' : { 'x' : 20, 'y' : 98 },
				'6' : { 'x' : 23, 'y' : 125 },
				'7' : { 'x' : 20, 'y' : 98 },
				'8' : { 'x' : 20, 'y' : 105 }
			}
		},
		// adjustment to dimensions
		'dimension' : {
			'color' : {
				// one here represent side ID, same adjustments for same side, same type
				// only need the width, height will be computed : img.height * adjusment / img.width
				'1' : { 'width' : 500 },
				'2' : { 'width' : 500 },
				'3' : { 'width' : 500 },
				'4' : { 'width' : 550 },
				'5' : { 'width' : 500 },
				'6' : { 'width' : 550 },
				'7' : { 'width' : 500 },
				'8' : { 'width' : 500 }
			},
			'tint' : {
				// one here represent side ID, same adjustments for same side, same type
				'1' : { 'width' : 500 },
				'2' : { 'width' : 500 },
				'3' : { 'width' : 500 },
				'4' : { 'width' : 550 },
				'5' : { 'width' : 500 },
				'6' : { 'width' : 550 },
				'7' : { 'width' : 500 },
				'8' : { 'width' : 500 }
			},
			'decal' : {
				'1' : { 'width' : 500 },
				'2' : { 'width' : 500 },
				'3' : { 'width' : 500 },
				'4' : { 'width' : 550 },
				'5' : { 'width' : 500 },
				'6' : { 'width' : 550 },
				'7' : { 'width' : 500 },
				'8' : { 'width' : 500 }
			},
			'rims' : {
				// one here represent side ID, same adjustments for same side, same type
				'1' : { 'width' : 500 },
				'2' : { 'width' : 500 },
				'3' : { 'width' : 500 },
				'4' : { 'width' : 550 },
				'5' : { 'width' : 500 },
				'6' : { 'width' : 550 },
				'7' : { 'width' : 495 },
				'8' : { 'width' : 500 }
			},
			'grill' : {
				// one here represent side ID, same adjustments for same side, same type
				'1' : { 'width' : 500 },
				'2' : { 'width' : 500 },
				'3' : { 'width' : 500 },
				'4' : { 'width' : 550 },
				'5' : { 'width' : 500 },
				'6' : { 'width' : 550 },
				'7' : { 'width' : 500 },
				'8' : { 'width' : 500 }
			},
			'skirt' : {
				'1' : { 'width' : 500 },
				'2' : { 'width' : 500 },
				'3' : { 'width' : 500 },
				'4' : { 'width' : 550 },
				'5' : { 'width' : 500 },
				'6' : { 'width' : 550 },
				'7' : { 'width' : 500 },
				'8' : { 'width' : 500 }
			},
			'spoiler' : {
				'1' : { 'width' : 500 },
				'2' : { 'width' : 500 },
				'3' : { 'width' : 500 },
				'4' : { 'width' : 550 },
				'5' : { 'width' : 500 },
				'6' : { 'width' : 550 },
				'7' : { 'width' : 500 },
				'8' : { 'width' : 500 }
			}
		}
	},
	'jazz' : {
		'offset' : {
			'color' : {
				// one here represent side ID, same adjustments for same side, same type
				'1' : { 'x' : 20, 'y' : 110 },
				'2' : { 'x' : 20, 'y' : 110 },
				'3' : { 'x' : 20, 'y' : 110 },
				'4' : { 'x' : 20, 'y' : 110 },
				'5' : { 'x' : 20, 'y' : 110 },
				'6' : { 'x' : 20, 'y' : 110 },
				'7' : { 'x' : 20, 'y' : 110 },
				'8' : { 'x' : 20, 'y' : 110 }
			},
			'tint' : {
				// one here represent side ID, same adjustments for same side, same type
				'1' : { 'x' : 20, 'y' : 110 },
				'2' : { 'x' : 20, 'y' : 110 },
				'3' : { 'x' : 20, 'y' : 110 },
				'4' : { 'x' : 20, 'y' : 120 },
				'5' : { 'x' : 20, 'y' : 110 },
				'6' : { 'x' : 20, 'y' : 120 },
				'7' : { 'x' : 20, 'y' : 110 },
				'8' : { 'x' : 20, 'y' : 110 }
			},
			'decal' : {
				'1' : { 'x' : 20, 'y' : 110 },
				'2' : { 'x' : 20, 'y' : 110 },
				'3' : { 'x' : 20, 'y' : 110 },
				'4' : { 'x' : 20, 'y' : 120 },
				'5' : { 'x' : 20, 'y' : 110 },
				'6' : { 'x' : 20, 'y' : 120 },
				'7' : { 'x' : 20, 'y' : 110 },
				'8' : { 'x' : 20, 'y' : 110 }
			},
			'rims' : {
				// one here represent side ID, same adjustments for same side, same type
				'1' : { 'x' : 20, 'y' : 110 },
				'2' : { 'x' : 20, 'y' : 110 },
				'3' : { 'x' : 20, 'y' : 110 },
				'4' : { 'x' : 20, 'y' : 120 },
				'5' : { 'x' : 20, 'y' : 110 },
				'6' : { 'x' : 20, 'y' : 120 },
				'7' : { 'x' : 20, 'y' : 110 },
				'8' : { 'x' : 20, 'y' : 110 }
			},
			'grill' : {
				// one here represent side ID, same adjustments for same side, same type
				'1' : { 'x' : 20, 'y' : 110 },
				'2' : { 'x' : 20, 'y' : 110 },
				'3' : { 'x' : 20, 'y' : 110 },
				'4' : { 'x' : 20, 'y' : 120 },
				'5' : { 'x' : 20, 'y' : 110 },
				'6' : { 'x' : 20, 'y' : 120 },
				'7' : { 'x' : 20, 'y' : 110 },
				'8' : { 'x' : 20, 'y' : 110 }
			},
			'skirt' : {
				'1' : { 'x' : 20, 'y' : 110 },
				'2' : { 'x' : 20, 'y' : 110 },
				'3' : { 'x' : 20, 'y' : 110 },
				'4' : { 'x' : 20, 'y' : 120 },
				'5' : { 'x' : 20, 'y' : 110 },
				'6' : { 'x' : 20, 'y' : 120 },
				'7' : { 'x' : 20, 'y' : 110 },
				'8' : { 'x' : 20, 'y' : 110 }
			},
			'spoiler' : {
				'1' : { 'x' : 20, 'y' : 110 },
				'2' : { 'x' : 20, 'y' : 110 },
				'3' : { 'x' : 20, 'y' : 110 },
				'4' : { 'x' : 20, 'y' : 120 },
				'5' : { 'x' : 20, 'y' : 110 },
				'6' : { 'x' : 20, 'y' : 120 },
				'7' : { 'x' : 20, 'y' : 110 },
				'8' : { 'x' : 20, 'y' : 110 }
			}
		},
		// adjustment to dimensions
		'dimension' : {
			'color' : {
				// one here represent side ID, same adjustments for same side, same type
				// only need the width, height will be computed : img.height * adjusment / img.width
				'1' : { 'width' : 500 },
				'2' : { 'width' : 500 },
				'3' : { 'width' : 500 },
				'4' : { 'width' : 500 },
				'5' : { 'width' : 500 },
				'6' : { 'width' : 500 },
				'7' : { 'width' : 500 },
				'8' : { 'width' : 500 }
			},
			'tint' : {
				// one here represent side ID, same adjustments for same side, same type
				'1' : { 'width' : 500 },
				'2' : { 'width' : 500 },
				'3' : { 'width' : 500 },
				'4' : { 'width' : 500 },
				'5' : { 'width' : 500 },
				'6' : { 'width' : 500 },
				'7' : { 'width' : 500 },
				'8' : { 'width' : 500 }
			},
			'decal' : {
				'1' : { 'width' : 500 },
				'2' : { 'width' : 500 },
				'3' : { 'width' : 500 },
				'4' : { 'width' : 500 },
				'5' : { 'width' : 500 },
				'6' : { 'width' : 500 },
				'7' : { 'width' : 500 },
				'8' : { 'width' : 500 }
			},
			'rims' : {
				// one here represent side ID, same adjustments for same side, same type
				'1' : { 'width' : 500 },
				'2' : { 'width' : 500 },
				'3' : { 'width' : 500 },
				'4' : { 'width' : 500 },
				'5' : { 'width' : 500 },
				'6' : { 'width' : 500 },
				'7' : { 'width' : 500 },
				'8' : { 'width' : 500 }
			},
			'grill' : {
				// one here represent side ID, same adjustments for same side, same type
				'1' : { 'width' : 500 },
				'2' : { 'width' : 500 },
				'3' : { 'width' : 500 },
				'4' : { 'width' : 500 },
				'5' : { 'width' : 500 },
				'6' : { 'width' : 500 },
				'7' : { 'width' : 500 },
				'8' : { 'width' : 500 }
			},
			'skirt' : {
				'1' : { 'width' : 500 },
				'2' : { 'width' : 500 },
				'3' : { 'width' : 500 },
				'4' : { 'width' : 500 },
				'5' : { 'width' : 500 },
				'6' : { 'width' : 500 },
				'7' : { 'width' : 500 },
				'8' : { 'width' : 500 }
			},
			'spoiler' : {
				'1' : { 'width' : 500 },
				'2' : { 'width' : 500 },
				'3' : { 'width' : 500 },
				'4' : { 'width' : 500 },
				'5' : { 'width' : 500 },
				'6' : { 'width' : 500 },
				'7' : { 'width' : 500 },
				'8' : { 'width' : 500 }
			}
		}
	},
	'city' : {
		'offset' : {
			'color' : {
				// one here represent side ID, same adjustments for same side, same type
				'1' : { 'x' : 20, 'y' : 110 },
				'2' : { 'x' : 20, 'y' : 110 },
				'3' : { 'x' : 20, 'y' : 110 },
				'4' : { 'x' : 20, 'y' : 110 },
				'5' : { 'x' : 20, 'y' : 110 },
				'6' : { 'x' : 20, 'y' : 110 },
				'7' : { 'x' : 20, 'y' : 110 },
				'8' : { 'x' : 20, 'y' : 110 }
			},
			'tint' : {
				// one here represent side ID, same adjustments for same side, same type
				'1' : { 'x' : 20, 'y' : 110 },
				'2' : { 'x' : 20, 'y' : 110 },
				'3' : { 'x' : 20, 'y' : 110 },
				'4' : { 'x' : 20, 'y' : 130 },
				'5' : { 'x' : 20, 'y' : 110 },
				'6' : { 'x' : 20, 'y' : 130 },
				'7' : { 'x' : 20, 'y' : 110 },
				'8' : { 'x' : 20, 'y' : 110 }
			},
			'decal' : {
				'1' : { 'x' : 25, 'y' : 110 },
				'2' : { 'x' : 20, 'y' : 110 },
				'3' : { 'x' : 20, 'y' : 110 },
				'4' : { 'x' : 34, 'y' : 136 },
				'5' : { 'x' : 20, 'y' : 110 },
				'6' : { 'x' : 34, 'y' : 136 },
				'7' : { 'x' : 33, 'y' : 105 },
				'8' : { 'x' : 20, 'y' : 105 }
			},
			'rims' : {
				// one here represent side ID, same adjustments for same side, same type
				'1' : { 'x' : 25, 'y' : 110 },
				'2' : { 'x' : 20, 'y' : 110 },
				'3' : { 'x' : 20, 'y' : 110 },
				'4' : { 'x' : 24, 'y' : 132 },
				'5' : { 'x' : 35, 'y' : 112 },
				'6' : { 'x' : 24, 'y' : 130 },
				'7' : { 'x' : 35, 'y' : 110 },
				'8' : { 'x' : 30, 'y' : 110 }
			},
			'grill' : {
				// one here represent side ID, same adjustments for same side, same type
				'1' : { 'x' : 24, 'y' : 110 },
				'2' : { 'x' : 20, 'y' : 110 },
				'3' : { 'x' : 20, 'y' : 110 },
				'4' : { 'x' : 14, 'y' : 108 },
				'5' : { 'x' : 20, 'y' : 110 },
				'6' : { 'x' : 24, 'y' : 110 },
				'7' : { 'x' : 20, 'y' : 110 },
				'8' : { 'x' : 24, 'y' : 110 }
			},
			'skirt' : {
				'1' : { 'x' : 25, 'y' : 110 },
				'2' : { 'x' : 20, 'y' : 110 },
				'3' : { 'x' : 20, 'y' : 110 },
				'4' : { 'x' : 21, 'y' : 127 },
				'5' : { 'x' : 20, 'y' : 110 },
				'6' : { 'x' : 21, 'y' : 127 },
				'7' : { 'x' : 35, 'y' : 110 },
				'8' : { 'x' : 26, 'y' : 104 }
			},
			'spoiler' : {
				'1' : { 'x' : 20, 'y' : 110 },
				'2' : { 'x' : 20, 'y' : 110 },
				'3' : { 'x' : 20, 'y' : 110 },
				'4' : { 'x' : 20, 'y' : 134 },
				'5' : { 'x' : 30, 'y' : 114 },
				'6' : { 'x' : 20, 'y' : 134 },
				'7' : { 'x' : 20, 'y' : 110 },
				'8' : { 'x' : 20, 'y' : 110 }
			}
		},
		// adjustment to dimensions
		'dimension' : {
			'color' : {
				// one here represent side ID, same adjustments for same side, same type
				// only need the width, height will be computed : img.height * adjusment / img.width
				'1' : { 'width' : 500 },
				'2' : { 'width' : 500 },
				'3' : { 'width' : 500 },
				'4' : { 'width' : 550 },
				'5' : { 'width' : 500 },
				'6' : { 'width' : 550 },
				'7' : { 'width' : 500 },
				'8' : { 'width' : 500 }
			},
			'tint' : {
				// one here represent side ID, same adjustments for same side, same type
				'1' : { 'width' : 500 },
				'2' : { 'width' : 500 },
				'3' : { 'width' : 500 },
				'4' : { 'width' : 550 },
				'5' : { 'width' : 500 },
				'6' : { 'width' : 550 },
				'7' : { 'width' : 500 },
				'8' : { 'width' : 500 }
			},
			'decal' : {
				'1' : { 'width' : 490 },
				'2' : { 'width' : 500 },
				'3' : { 'width' : 500 },
				'4' : { 'width' : 520 },
				'5' : { 'width' : 500 },
				'6' : { 'width' : 520 },
				'7' : { 'width' : 480 },
				'8' : { 'width' : 500 }
			},
			'rims' : {
				// one here represent side ID, same adjustments for same side, same type
				'1' : { 'width' : 490 },
				'2' : { 'width' : 500 },
				'3' : { 'width' : 500 },
				'4' : { 'width' : 540 },
				'5' : { 'width' : 470 },
				'6' : { 'width' : 540 },
				'7' : { 'width' : 470 },
				'8' : { 'width' : 480 }
			},
			'grill' : {
				// one here represent side ID, same adjustments for same side, same type
				'1' : { 'width' : 490 },
				'2' : { 'width' : 500 },
				'3' : { 'width' : 500 },
				'4' : { 'width' : 550 },
				'5' : { 'width' : 500 },
				'6' : { 'width' : 550 },
				'7' : { 'width' : 500 },
				'8' : { 'width' : 490 }
			},
			'skirt' : {
				'1' : { 'width' : 490 },
				'2' : { 'width' : 500 },
				'3' : { 'width' : 500 },
				'4' : { 'width' : 545 },
				'5' : { 'width' : 500 },
				'6' : { 'width' : 545 },
				'7' : { 'width' : 470 },
				'8' : { 'width' : 490 }
			},
			'spoiler' : {
				'1' : { 'width' : 500 },
				'2' : { 'width' : 500 },
				'3' : { 'width' : 500 },
				'4' : { 'width' : 550 },
				'5' : { 'width' : 440 },
				'6' : { 'width' : 550 },
				'7' : { 'width' : 490 },
				'8' : { 'width' : 500 }
			}
		}
	},
	'civic' : {
		'offset' : {
			'color' : {
				// one here represent side ID, same adjustments for same side, same type
				'1' : { 'x' : 20, 'y' : 110 },
				'2' : { 'x' : 20, 'y' : 110 },
				'3' : { 'x' : 20, 'y' : 110 },
				'4' : { 'x' : 20, 'y' : 110 },
				'5' : { 'x' : 20, 'y' : 110 },
				'6' : { 'x' : 20, 'y' : 110 },
				'7' : { 'x' : 20, 'y' : 110 },
				'8' : { 'x' : 20, 'y' : 110 }
			},
			'tint' : {
				// one here represent side ID, same adjustments for same side, same type
				'1' : { 'x' : 20, 'y' : 110 },
				'2' : { 'x' : 20, 'y' : 110 },
				'3' : { 'x' : 20, 'y' : 110 },
				'4' : { 'x' : 20, 'y' : 110 },
				'5' : { 'x' : 20, 'y' : 110 },
				'6' : { 'x' : 20, 'y' : 110 },
				'7' : { 'x' : 20, 'y' : 110 },
				'8' : { 'x' : 20, 'y' : 110 }
			},
			'decal' : {
				'1' : { 'x' : 20, 'y' : 110 },
				'2' : { 'x' : 20, 'y' : 110 },
				'3' : { 'x' : 20, 'y' : 110 },
				'4' : { 'x' : 20, 'y' : 110 },
				'5' : { 'x' : 20, 'y' : 110 },
				'6' : { 'x' : 20, 'y' : 110 },
				'7' : { 'x' : 20, 'y' : 110 },
				'8' : { 'x' : 20, 'y' : 110 }
			},
			'rims' : {
				// one here represent side ID, same adjustments for same side, same type
				'1' : { 'x' : 20, 'y' : 110 },
				'2' : { 'x' : 20, 'y' : 110 },
				'3' : { 'x' : 20, 'y' : 110 },
				'4' : { 'x' : 20, 'y' : 110 },
				'5' : { 'x' : 20, 'y' : 110 },
				'6' : { 'x' : 20, 'y' : 110 },
				'7' : { 'x' : 20, 'y' : 110 },
				'8' : { 'x' : 20, 'y' : 110 }
			},
			'grill' : {
				// one here represent side ID, same adjustments for same side, same type
				'1' : { 'x' : 20, 'y' : 110 },
				'2' : { 'x' : 20, 'y' : 110 },
				'3' : { 'x' : 20, 'y' : 110 },
				'4' : { 'x' : 20, 'y' : 110 },
				'5' : { 'x' : 20, 'y' : 110 },
				'6' : { 'x' : 20, 'y' : 110 },
				'7' : { 'x' : 20, 'y' : 110 },
				'8' : { 'x' : 20, 'y' : 110 }
			},
			'skirt' : {
				'1' : { 'x' : 20, 'y' : 110 },
				'2' : { 'x' : 20, 'y' : 110 },
				'3' : { 'x' : 20, 'y' : 110 },
				'4' : { 'x' : 20, 'y' : 110 },
				'5' : { 'x' : 20, 'y' : 110 },
				'6' : { 'x' : 20, 'y' : 110 },
				'7' : { 'x' : 20, 'y' : 110 },
				'8' : { 'x' : 20, 'y' : 110 }
			},
			'spoiler' : {
				'1' : { 'x' : 20, 'y' : 110 },
				'2' : { 'x' : 20, 'y' : 110 },
				'3' : { 'x' : 20, 'y' : 110 },
				'4' : { 'x' : 20, 'y' : 110 },
				'5' : { 'x' : 20, 'y' : 110 },
				'6' : { 'x' : 20, 'y' : 110 },
				'7' : { 'x' : 20, 'y' : 110 },
				'8' : { 'x' : 20, 'y' : 110 }
			}
		},
		// adjustment to dimensions
		'dimension' : {
			'color' : {
				// one here represent side ID, same adjustments for same side, same type
				// only need the width, height will be computed : img.height * adjusment / img.width
				'1' : { 'width' : 500 },
				'2' : { 'width' : 500 },
				'3' : { 'width' : 500 },
				'4' : { 'width' : 550 },
				'5' : { 'width' : 500 },
				'6' : { 'width' : 550 },
				'7' : { 'width' : 500 },
				'8' : { 'width' : 500 }
			},
			'tint' : {
				// one here represent side ID, same adjustments for same side, same type
				'1' : { 'width' : 500 },
				'2' : { 'width' : 500 },
				'3' : { 'width' : 500 },
				'4' : { 'width' : 550 },
				'5' : { 'width' : 500 },
				'6' : { 'width' : 550 },
				'7' : { 'width' : 500 },
				'8' : { 'width' : 500 }
			},
			'decal' : {
				'1' : { 'width' : 500 },
				'2' : { 'width' : 500 },
				'3' : { 'width' : 500 },
				'4' : { 'width' : 550 },
				'5' : { 'width' : 500 },
				'6' : { 'width' : 550 },
				'7' : { 'width' : 500 },
				'8' : { 'width' : 500 }
			},
			'rims' : {
				// one here represent side ID, same adjustments for same side, same type
				'1' : { 'width' : 500 },
				'2' : { 'width' : 500 },
				'3' : { 'width' : 500 },
				'4' : { 'width' : 550 },
				'5' : { 'width' : 500 },
				'6' : { 'width' : 550 },
				'7' : { 'width' : 500 },
				'8' : { 'width' : 500 }
			},
			'grill' : {
				// one here represent side ID, same adjustments for same side, same type
				'1' : { 'width' : 500 },
				'2' : { 'width' : 500 },
				'3' : { 'width' : 500 },
				'4' : { 'width' : 550 },
				'5' : { 'width' : 500 },
				'6' : { 'width' : 550 },
				'7' : { 'width' : 500 },
				'8' : { 'width' : 500 }
			},
			'skirt' : {
				'1' : { 'width' : 500 },
				'2' : { 'width' : 500 },
				'3' : { 'width' : 500 },
				'4' : { 'width' : 550 },
				'5' : { 'width' : 500 },
				'6' : { 'width' : 550 },
				'7' : { 'width' : 500 },
				'8' : { 'width' : 500 }
			},
			'spoiler' : {
				'1' : { 'width' : 500 },
				'2' : { 'width' : 500 },
				'3' : { 'width' : 500 },
				'4' : { 'width' : 550 },
				'5' : { 'width' : 500 },
				'6' : { 'width' : 550 },
				'7' : { 'width' : 500 },
				'8' : { 'width' : 500 }
			}
		}
	}
};

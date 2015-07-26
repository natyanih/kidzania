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
				'1' : { 'width' : 823 },
				'2' : { 'width' : 823 },
				'3' : { 'width' : 823 },
				'4' : { 'width' : 550 },
				'5' : { 'width' : 823 },
				'6' : { 'width' : 550 },
				'7' : { 'width' : 823 },
				'8' : { 'width' : 823 }
			},
			'tint' : {
				// one here represent side ID, same adjustments for same side, same type
				'1' : { 'width' : 823 },
				'2' : { 'width' : 823 },
				'3' : { 'width' : 823 },
				'4' : { 'width' : 550 },
				'5' : { 'width' : 823 },
				'6' : { 'width' : 550 },
				'7' : { 'width' : 823 },
				'8' : { 'width' : 823 }
			},
			'decal' : {
				'1' : { 'width' : 823 },
				'2' : { 'width' : 823 },
				'3' : { 'width' : 823 },
				'4' : { 'width' : 550 },
				'5' : { 'width' : 823 },
				'6' : { 'width' : 550 },
				'7' : { 'width' : 823 },
				'8' : { 'width' : 823 }
			},
			'rims' : {
				// one here represent side ID, same adjustments for same side, same type
				'1' : { 'width' : 823 },
				'2' : { 'width' : 823 },
				'3' : { 'width' : 823 },
				'4' : { 'width' : 550 },
				'5' : { 'width' : 823 },
				'6' : { 'width' : 550 },
				'7' : { 'width' : 495 },
				'8' : { 'width' : 823 }
			},
			'grill' : {
				// one here represent side ID, same adjustments for same side, same type
				'1' : { 'width' : 823 },
				'2' : { 'width' : 823 },
				'3' : { 'width' : 823 },
				'4' : { 'width' : 550 },
				'5' : { 'width' : 823 },
				'6' : { 'width' : 550 },
				'7' : { 'width' : 823 },
				'8' : { 'width' : 823 }
			},
			'skirt' : {
				'1' : { 'width' : 823 },
				'2' : { 'width' : 823 },
				'3' : { 'width' : 823 },
				'4' : { 'width' : 550 },
				'5' : { 'width' : 823 },
				'6' : { 'width' : 550 },
				'7' : { 'width' : 823 },
				'8' : { 'width' : 823 }
			},
			'spoiler' : {
				'1' : { 'width' : 823 },
				'2' : { 'width' : 823 },
				'3' : { 'width' : 823 },
				'4' : { 'width' : 550 },
				'5' : { 'width' : 823 },
				'6' : { 'width' : 550 },
				'7' : { 'width' : 823 },
				'8' : { 'width' : 823 }
			}
		}
	},
	'jazz' : {
		'offset' : {
			'color' : {
				// one here represent side ID, same adjustments for same side, same type
				'1' : { 'x' : -120, 'y' : 10 },
				'2' : { 'x' : -120, 'y' : 0 },
				'3' : { 'x' : -120, 'y' : 10 },
				'4' : { 'x' : -120, 'y' : 20 },
				'5' : { 'x' : -120, 'y' : 0 },
				'6' : { 'x' : -120, 'y' : 20 },
				'7' : { 'x' : -120, 'y' : 0 },
				'8' : { 'x' : -120, 'y' : 0 }
			},
			'tint' : {
				// one here represent side ID, same adjustments for same side, same type
				'1' : { 'x' : 0, 'y' : 72 },
				'2' : { 'x' : -5, 'y' : 62 },
				'3' : { 'x' : -5, 'y' : 72 },
				'4' : { 'x' : 0, 'y' : 72 },
				'5' : { 'x' : 6, 'y' : 62 },
				'6' : { 'x' : 0, 'y' : 72 },
				'7' : { 'x' : -3, 'y' : 62 },
				'8' : { 'x' : 0, 'y' : 62 }
			},
			'decal' : {
				'1' : { 'x' : -120, 'y' : 10 },
				'2' : { 'x' : -120, 'y' : 0 },
				'3' : { 'x' : -120, 'y' : 10 },
				'4' : { 'x' : -120, 'y' : 20 },
				'5' : { 'x' : -120, 'y' : 0 },
				'6' : { 'x' : -120, 'y' : 20 },
				'7' : { 'x' : -120, 'y' : 0 },
				'8' : { 'x' : -120, 'y' : 0 }
			},
			'rims' : {
				// one here represent side ID, same adjustments for same side, same type
				'1' : { 'x' : -120, 'y' : 10 },
				'2' : { 'x' : -120, 'y' : 0 },
				'3' : { 'x' : -120, 'y' : 10 },
				'5' : { 'x' : -120, 'y' : 0 },
				'4' : { 'x' : -120, 'y' : 20 },
				'6' : { 'x' : -120, 'y' : 20 },
				'7' : { 'x' : -120, 'y' : 0 },
				'8' : { 'x' : -120, 'y' : 0 }
			},
			'grill' : {
				// one here represent side ID, same adjustments for same side, same type
				'1' : { 'x' : -120, 'y' : 10 },
				'2' : { 'x' : -120, 'y' : 0 },
				'3' : { 'x' : -120, 'y' : 10 },
				'5' : { 'x' : -120, 'y' : 0 },
				'4' : { 'x' : -120, 'y' : 20 },
				'6' : { 'x' : -120, 'y' : 20 },
				'7' : { 'x' : -120, 'y' : 0 },
				'8' : { 'x' : -120, 'y' : 0 }
			},
			'skirt' : {
				'1' : { 'x' : -120, 'y' : 10 },
				'2' : { 'x' : -120, 'y' : 0 },
				'3' : { 'x' : -120, 'y' : 10 },
				'5' : { 'x' : -120, 'y' : 0 },
				'4' : { 'x' : -120, 'y' : 20 },
				'6' : { 'x' : -120, 'y' : 20 },
				'7' : { 'x' : -120, 'y' : 0 },
				'8' : { 'x' : -120, 'y' : 0 }
			},
			'spoiler' : {
				'1' : { 'x' : -120, 'y' : 10 },
				'2' : { 'x' : -120, 'y' : 0 },
				'3' : { 'x' : -120, 'y' : 10 },
				'4' : { 'x' : -120, 'y' : 20 },
				'5' : { 'x' : -120, 'y' : 0 },
				'6' : { 'x' : -120, 'y' : 20 },
				'7' : { 'x' : -120, 'y' : 0 },
				'8' : { 'x' : -120, 'y' : 0 }
			}
		},
		// adjustment to dimensions
		'dimension' : {
			'color' : {
				// one here represent side ID, same adjustments for same side, same type
				// only need the width, height will be computed : img.height * adjusment / img.width
				'1' : { 'width' : 823 },
				'2' : { 'width' : 823 },
				'3' : { 'width' : 823 },
				'4' : { 'width' : 823 },
				'5' : { 'width' : 823 },
				'6' : { 'width' : 823 },
				'7' : { 'width' : 823 },
				'8' : { 'width' : 823 }
			},
			'tint' : {
				// one here represent side ID, same adjustments for same side, same type
				'1' : { 'width' : 580 },
				'2' : { 'width' : 580 },
				'3' : { 'width' : 580 },
				'4' : { 'width' : 580 },
				'5' : { 'width' : 572 },
				'6' : { 'width' : 580 },
				'7' : { 'width' : 572 },
				'8' : { 'width' : 580 }
			},
			'decal' : {
				'1' : { 'width' : 823 },
				'2' : { 'width' : 823 },
				'3' : { 'width' : 823 },
				'4' : { 'width' : 823 },
				'5' : { 'width' : 823 },
				'6' : { 'width' : 823 },
				'7' : { 'width' : 823 },
				'8' : { 'width' : 823 }
			},
			'rims' : {
				// one here represent side ID, same adjustments for same side, same type
				'1' : { 'width' : 823 },
				'2' : { 'width' : 823 },
				'3' : { 'width' : 823 },
				'4' : { 'width' : 823 },
				'5' : { 'width' : 823 },
				'6' : { 'width' : 823 },
				'7' : { 'width' : 823 },
				'8' : { 'width' : 823 }
			},
			'grill' : {
				// one here represent side ID, same adjustments for same side, same type
				'1' : { 'width' : 823 },
				'2' : { 'width' : 823 },
				'3' : { 'width' : 823 },
				'4' : { 'width' : 823 },
				'5' : { 'width' : 823 },
				'6' : { 'width' : 823 },
				'7' : { 'width' : 823 },
				'8' : { 'width' : 823 }
			},
			'skirt' : {
				'1' : { 'width' : 823 },
				'2' : { 'width' : 823 },
				'3' : { 'width' : 823 },
				'4' : { 'width' : 823 },
				'5' : { 'width' : 823 },
				'6' : { 'width' : 823 },
				'7' : { 'width' : 823 },
				'8' : { 'width' : 823 }
			},
			'spoiler' : {
				'1' : { 'width' : 823 },
				'2' : { 'width' : 823 },
				'3' : { 'width' : 823 },
				'4' : { 'width' : 823 },
				'5' : { 'width' : 823 },
				'6' : { 'width' : 823 },
				'7' : { 'width' : 823 },
				'8' : { 'width' : 823 }
			}
		}
	},
	'city' : {
		'offset' : {
			'color' : {
				// one here represent side ID, same adjustments for same side, same type
				'1' : { 'x' : -102, 'y' : 50 },
				'2' : { 'x' : -102, 'y' : 40 },
				'3' : { 'x' : -102, 'y' : 50 },
				'4' : { 'x' : -102, 'y' : 60 },
				'5' : { 'x' : -102, 'y' : 40 },
				'6' : { 'x' : -102, 'y' : 60 },
				'7' : { 'x' : -102, 'y' : 40 },
				'8' : { 'x' : -102, 'y' : 40 }
			},
			'tint' : {
				// one here represent side ID, same adjustments for same side, same type
				'1' : { 'x' : -102, 'y' : 50 },
				'2' : { 'x' : -102, 'y' : 40 },
				'3' : { 'x' : -102, 'y' : 50 },
				'4' : { 'x' : -102, 'y' : 60 },
				'5' : { 'x' : -102, 'y' : 40 },
				'6' : { 'x' : -102, 'y' : 60 },
				'7' : { 'x' : -102, 'y' : 40 },
				'8' : { 'x' : -102, 'y' : 40 }
			},
			'decal' : {
				'1' : { 'x' : -102, 'y' : 50 },
				'2' : { 'x' : -102, 'y' : 40 },
				'3' : { 'x' : -102, 'y' : 50 },
				'4' : { 'x' : -102, 'y' : 60 },
				'5' : { 'x' : -102, 'y' : 40 },
				'6' : { 'x' : -102, 'y' : 60 },
				'7' : { 'x' : -102, 'y' : 40 },
				'8' : { 'x' : -102, 'y' : 40 }
			},
			'rims' : {
				// one here represent side ID, same adjustments for same side, same type
				'1' : { 'x' : -102, 'y' : 50 },
				'2' : { 'x' : -102, 'y' : 40 },
				'3' : { 'x' : -102, 'y' : 50 },
				'4' : { 'x' : -102, 'y' : 60 },
				'5' : { 'x' : -102, 'y' : 40 },
				'6' : { 'x' : -102, 'y' : 60 },
				'7' : { 'x' : -102, 'y' : 40 },
				'8' : { 'x' : -102, 'y' : 40 }
			},
			'grill' : {
				// one here represent side ID, same adjustments for same side, same type
				'1' : { 'x' : -102, 'y' : 50 },
				'2' : { 'x' : -102, 'y' : 40 },
				'3' : { 'x' : -102, 'y' : 50 },
				'4' : { 'x' : -102, 'y' : 60 },
				'5' : { 'x' : -102, 'y' : 40 },
				'6' : { 'x' : -102, 'y' : 60 },
				'7' : { 'x' : -102, 'y' : 40 },
				'8' : { 'x' : -102, 'y' : 40 }
			},
			'skirt' : {
				'1' : { 'x' : -102, 'y' : 50 },
				'2' : { 'x' : -102, 'y' : 40 },
				'3' : { 'x' : -102, 'y' : 50 },
				'4' : { 'x' : -102, 'y' : 60 },
				'5' : { 'x' : -102, 'y' : 40 },
				'6' : { 'x' : -102, 'y' : 60 },
				'7' : { 'x' : -102, 'y' : 40 },
				'8' : { 'x' : -102, 'y' : 40 }
			},
			'spoiler' : {
				'1' : { 'x' : -102, 'y' : 50 },
				'2' : { 'x' : -102, 'y' : 40 },
				'3' : { 'x' : -102, 'y' : 50 },
				'4' : { 'x' : -102, 'y' : 60 },
				'5' : { 'x' : -102, 'y' : 40 },
				'6' : { 'x' : -102, 'y' : 60 },
				'7' : { 'x' : -102, 'y' : 40 },
				'8' : { 'x' : -102, 'y' : 40 }
			}
		},
		// adjustment to dimensions
		'dimension' : {
			'color' : {
				// one here represent side ID, same adjustments for same side, same type
				// only need the width, height will be computed : img.height * adjusment / img.width
				'1' : { 'width' : 760 },
				'2' : { 'width' : 760 },
				'3' : { 'width' : 760 },
				'4' : { 'width' : 760 },
				'5' : { 'width' : 760 },
				'6' : { 'width' : 760 },
				'7' : { 'width' : 760 },
				'8' : { 'width' : 760 }
			},
			'tint' : {
				// one here represent side ID, same adjustments for same side, same type
				'1' : { 'width' : 760 },
				'2' : { 'width' : 760 },
				'3' : { 'width' : 760 },
				'4' : { 'width' : 760 },
				'5' : { 'width' : 760 },
				'6' : { 'width' : 760 },
				'7' : { 'width' : 760 },
				'8' : { 'width' : 760 }
			},
			'decal' : {
				'1' : { 'width' : 760 },
				'2' : { 'width' : 760 },
				'3' : { 'width' : 760 },
				'4' : { 'width' : 760 },
				'5' : { 'width' : 760 },
				'6' : { 'width' : 760 },
				'7' : { 'width' : 760 },
				'8' : { 'width' : 760 }
			},
			'rims' : {
				// one here represent side ID, same adjustments for same side, same type
				'1' : { 'width' : 760 },
				'2' : { 'width' : 760 },
				'3' : { 'width' : 760 },
				'4' : { 'width' : 760 },
				'5' : { 'width' : 760 },
				'6' : { 'width' : 760 },
				'7' : { 'width' : 760 },
				'8' : { 'width' : 760 }
			},
			'grill' : {
				// one here represent side ID, same adjustments for same side, same type
				'1' : { 'width' : 760 },
				'2' : { 'width' : 760 },
				'3' : { 'width' : 760 },
				'4' : { 'width' : 760 },
				'5' : { 'width' : 760 },
				'6' : { 'width' : 760 },
				'7' : { 'width' : 760 },
				'8' : { 'width' : 760 }
			},
			'skirt' : {
				'1' : { 'width' : 760 },
				'2' : { 'width' : 760 },
				'3' : { 'width' : 760 },
				'4' : { 'width' : 760 },
				'5' : { 'width' : 760 },
				'6' : { 'width' : 760 },
				'7' : { 'width' : 760 },
				'8' : { 'width' : 760 }
			},
			'spoiler' : {
				'1' : { 'width' : 760 },
				'2' : { 'width' : 760 },
				'3' : { 'width' : 760 },
				'4' : { 'width' : 760 },
				'5' : { 'width' : 760 },
				'6' : { 'width' : 760 },
				'7' : { 'width' : 760 },
				'8' : { 'width' : 760 }
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
				'1' : { 'width' : 823 },
				'2' : { 'width' : 823 },
				'3' : { 'width' : 823 },
				'4' : { 'width' : 550 },
				'5' : { 'width' : 823 },
				'6' : { 'width' : 550 },
				'7' : { 'width' : 823 },
				'8' : { 'width' : 823 }
			},
			'tint' : {
				// one here represent side ID, same adjustments for same side, same type
				'1' : { 'width' : 823 },
				'2' : { 'width' : 823 },
				'3' : { 'width' : 823 },
				'4' : { 'width' : 550 },
				'5' : { 'width' : 823 },
				'6' : { 'width' : 550 },
				'7' : { 'width' : 823 },
				'8' : { 'width' : 823 }
			},
			'decal' : {
				'1' : { 'width' : 823 },
				'2' : { 'width' : 823 },
				'3' : { 'width' : 823 },
				'4' : { 'width' : 550 },
				'5' : { 'width' : 823 },
				'6' : { 'width' : 550 },
				'7' : { 'width' : 823 },
				'8' : { 'width' : 823 }
			},
			'rims' : {
				// one here represent side ID, same adjustments for same side, same type
				'1' : { 'width' : 823 },
				'2' : { 'width' : 823 },
				'3' : { 'width' : 823 },
				'4' : { 'width' : 550 },
				'5' : { 'width' : 823 },
				'6' : { 'width' : 550 },
				'7' : { 'width' : 823 },
				'8' : { 'width' : 823 }
			},
			'grill' : {
				// one here represent side ID, same adjustments for same side, same type
				'1' : { 'width' : 823 },
				'2' : { 'width' : 823 },
				'3' : { 'width' : 823 },
				'4' : { 'width' : 550 },
				'5' : { 'width' : 823 },
				'6' : { 'width' : 550 },
				'7' : { 'width' : 823 },
				'8' : { 'width' : 823 }
			},
			'skirt' : {
				'1' : { 'width' : 823 },
				'2' : { 'width' : 823 },
				'3' : { 'width' : 823 },
				'4' : { 'width' : 550 },
				'5' : { 'width' : 823 },
				'6' : { 'width' : 550 },
				'7' : { 'width' : 823 },
				'8' : { 'width' : 823 }
			},
			'spoiler' : {
				'1' : { 'width' : 823 },
				'2' : { 'width' : 823 },
				'3' : { 'width' : 823 },
				'4' : { 'width' : 550 },
				'5' : { 'width' : 823 },
				'6' : { 'width' : 550 },
				'7' : { 'width' : 823 },
				'8' : { 'width' : 823 }
			}
		}
	},
	'crz' : {
		'offset' : {
			'color' : {
				// one here represent side ID, same adjustments for same side, same type
				'1' : { 'x' : 20, 'y' : 110 },
				'2' : { 'x' : 20, 'y' : 110 },
				'3' : { 'x' : 20, 'y' : 110 },
				'4' : { 'x' : 20, 'y' : 90 },
				'5' : { 'x' : 20, 'y' : 110 },
				'6' : { 'x' : 20, 'y' : 90 },
				'7' : { 'x' : 20, 'y' : 110 },
				'8' : { 'x' : 20, 'y' : 110 }
			},
			'tint' : {
				// one here represent side ID, same adjustments for same side, same type
				'1' : { 'x' : 20, 'y' : 110 },
				'2' : { 'x' : 20, 'y' : 110 },
				'3' : { 'x' : 20, 'y' : 110 },
				'4' : { 'x' : 20, 'y' : 90 },
				'5' : { 'x' : 20, 'y' : 110 },
				'6' : { 'x' : 20, 'y' : 90 },
				'7' : { 'x' : 20, 'y' : 110 },
				'8' : { 'x' : 20, 'y' : 110 }
			},
			'decal' : {
				'1' : { 'x' : 20, 'y' : 110 },
				'2' : { 'x' : 20, 'y' : 110 },
				'3' : { 'x' : 20, 'y' : 110 },
				'4' : { 'x' : 20, 'y' : 90 },
				'5' : { 'x' : 20, 'y' : 110 },
				'6' : { 'x' : 20, 'y' : 90 },
				'7' : { 'x' : 20, 'y' : 110 },
				'8' : { 'x' : 20, 'y' : 110 }
			},
			'rims' : {
				// one here represent side ID, same adjustments for same side, same type
				'1' : { 'x' : 20, 'y' : 110 },
				'2' : { 'x' : 20, 'y' : 110 },
				'3' : { 'x' : 20, 'y' : 110 },
				'4' : { 'x' : 20, 'y' : 90 },
				'5' : { 'x' : 20, 'y' : 110 },
				'6' : { 'x' : 20, 'y' : 90 },
				'7' : { 'x' : 20, 'y' : 110 },
				'8' : { 'x' : 20, 'y' : 110 }
			},
			'grill' : {
				// one here represent side ID, same adjustments for same side, same type
				'1' : { 'x' : 20, 'y' : 110 },
				'2' : { 'x' : 20, 'y' : 110 },
				'3' : { 'x' : 20, 'y' : 110 },
				'4' : { 'x' : 20, 'y' : 90 },
				'5' : { 'x' : 20, 'y' : 110 },
				'6' : { 'x' : 20, 'y' : 90 },
				'7' : { 'x' : 20, 'y' : 110 },
				'8' : { 'x' : 20, 'y' : 110 }
			},
			'skirt' : {
				'1' : { 'x' : 20, 'y' : 110 },
				'2' : { 'x' : 20, 'y' : 110 },
				'3' : { 'x' : 20, 'y' : 110 },
				'4' : { 'x' : 20, 'y' : 90 },
				'5' : { 'x' : 20, 'y' : 110 },
				'6' : { 'x' : 20, 'y' : 90 },
				'7' : { 'x' : 20, 'y' : 110 },
				'8' : { 'x' : 20, 'y' : 110 }
			},
			'spoiler' : {
				'1' : { 'x' : 20, 'y' : 110 },
				'2' : { 'x' : 20, 'y' : 110 },
				'3' : { 'x' : 20, 'y' : 110 },
				'4' : { 'x' : 20, 'y' : 90 },
				'5' : { 'x' : 20, 'y' : 110 },
				'6' : { 'x' : 20, 'y' : 90 },
				'7' : { 'x' : 20, 'y' : 110 },
				'8' : { 'x' : 20, 'y' : 110 }
			}
		},
		// adjustment to dimensions
		'dimension' : {
			'color' : {
				// one here represent side ID, same adjustments for same side, same type
				// only need the width, height will be computed : img.height * adjusment / img.width
				'1' : { 'width' : 823 },
				'2' : { 'width' : 823 },
				'3' : { 'width' : 823 },
				'4' : { 'width' : 550 },
				'5' : { 'width' : 823 },
				'6' : { 'width' : 550 },
				'7' : { 'width' : 823 },
				'8' : { 'width' : 823 }
			},
			'tint' : {
				// one here represent side ID, same adjustments for same side, same type
				'1' : { 'width' : 823 },
				'2' : { 'width' : 823 },
				'3' : { 'width' : 823 },
				'4' : { 'width' : 550 },
				'5' : { 'width' : 823 },
				'6' : { 'width' : 550 },
				'7' : { 'width' : 823 },
				'8' : { 'width' : 823 }
			},
			'decal' : {
				'1' : { 'width' : 823 },
				'2' : { 'width' : 823 },
				'3' : { 'width' : 823 },
				'4' : { 'width' : 550 },
				'5' : { 'width' : 823 },
				'6' : { 'width' : 550 },
				'7' : { 'width' : 823 },
				'8' : { 'width' : 823 }
			},
			'rims' : {
				// one here represent side ID, same adjustments for same side, same type
				'1' : { 'width' : 823 },
				'2' : { 'width' : 823 },
				'3' : { 'width' : 823 },
				'4' : { 'width' : 550 },
				'5' : { 'width' : 823 },
				'6' : { 'width' : 550 },
				'7' : { 'width' : 823 },
				'8' : { 'width' : 823 }
			},
			'grill' : {
				// one here represent side ID, same adjustments for same side, same type
				'1' : { 'width' : 823 },
				'2' : { 'width' : 823 },
				'3' : { 'width' : 823 },
				'4' : { 'width' : 550 },
				'5' : { 'width' : 823 },
				'6' : { 'width' : 550 },
				'7' : { 'width' : 823 },
				'8' : { 'width' : 823 }
			},
			'skirt' : {
				'1' : { 'width' : 823 },
				'2' : { 'width' : 823 },
				'3' : { 'width' : 823 },
				'4' : { 'width' : 550 },
				'5' : { 'width' : 823 },
				'6' : { 'width' : 550 },
				'7' : { 'width' : 823 },
				'8' : { 'width' : 823 }
			},
			'spoiler' : {
				'1' : { 'width' : 823 },
				'2' : { 'width' : 823 },
				'3' : { 'width' : 823 },
				'4' : { 'width' : 550 },
				'5' : { 'width' : 823 },
				'6' : { 'width' : 550 },
				'7' : { 'width' : 823 },
				'8' : { 'width' : 823 }
			}
		}
	},
	'brio' : {
		'offset' : {
			'color' : {
				// one here represent side ID, same adjustments for same side, same type
				'1' : { 'x' : 20, 'y' : 110 },
				'2' : { 'x' : 20, 'y' : 110 },
				'3' : { 'x' : 20, 'y' : 110 },
				'4' : { 'x' : 20, 'y' : 90 },
				'5' : { 'x' : 20, 'y' : 110 },
				'6' : { 'x' : 20, 'y' : 90 },
				'7' : { 'x' : 20, 'y' : 110 },
				'8' : { 'x' : 20, 'y' : 110 }
			},
			'tint' : {
				// one here represent side ID, same adjustments for same side, same type
				'1' : { 'x' : 20, 'y' : 110 },
				'2' : { 'x' : 20, 'y' : 110 },
				'3' : { 'x' : 20, 'y' : 110 },
				'4' : { 'x' : 20, 'y' : 90 },
				'5' : { 'x' : 20, 'y' : 110 },
				'6' : { 'x' : 20, 'y' : 90 },
				'7' : { 'x' : 20, 'y' : 110 },
				'8' : { 'x' : 20, 'y' : 110 }
			},
			'decal' : {
				'1' : { 'x' : 20, 'y' : 110 },
				'2' : { 'x' : 20, 'y' : 110 },
				'3' : { 'x' : 20, 'y' : 110 },
				'4' : { 'x' : 20, 'y' : 90 },
				'5' : { 'x' : 20, 'y' : 110 },
				'6' : { 'x' : 20, 'y' : 90 },
				'7' : { 'x' : 20, 'y' : 110 },
				'8' : { 'x' : 20, 'y' : 110 }
			},
			'rims' : {
				// one here represent side ID, same adjustments for same side, same type
				'1' : { 'x' : 20, 'y' : 110 },
				'2' : { 'x' : 20, 'y' : 110 },
				'3' : { 'x' : 20, 'y' : 110 },
				'4' : { 'x' : 20, 'y' : 90 },
				'5' : { 'x' : 20, 'y' : 110 },
				'6' : { 'x' : 20, 'y' : 90 },
				'7' : { 'x' : 20, 'y' : 110 },
				'8' : { 'x' : 20, 'y' : 110 }
			},
			'grill' : {
				// one here represent side ID, same adjustments for same side, same type
				'1' : { 'x' : 20, 'y' : 110 },
				'2' : { 'x' : 20, 'y' : 110 },
				'3' : { 'x' : 20, 'y' : 110 },
				'4' : { 'x' : 20, 'y' : 90 },
				'5' : { 'x' : 20, 'y' : 110 },
				'6' : { 'x' : 20, 'y' : 90 },
				'7' : { 'x' : 20, 'y' : 110 },
				'8' : { 'x' : 20, 'y' : 110 }
			},
			'skirt' : {
				'1' : { 'x' : 20, 'y' : 110 },
				'2' : { 'x' : 20, 'y' : 110 },
				'3' : { 'x' : 20, 'y' : 110 },
				'4' : { 'x' : 20, 'y' : 90 },
				'5' : { 'x' : 20, 'y' : 110 },
				'6' : { 'x' : 20, 'y' : 90 },
				'7' : { 'x' : 20, 'y' : 110 },
				'8' : { 'x' : 20, 'y' : 110 }
			},
			'spoiler' : {
				'1' : { 'x' : 20, 'y' : 110 },
				'2' : { 'x' : 20, 'y' : 110 },
				'3' : { 'x' : 20, 'y' : 110 },
				'4' : { 'x' : 20, 'y' : 90 },
				'5' : { 'x' : 20, 'y' : 110 },
				'6' : { 'x' : 20, 'y' : 90 },
				'7' : { 'x' : 20, 'y' : 110 },
				'8' : { 'x' : 20, 'y' : 110 }
			}
		},
		// adjustment to dimensions
		'dimension' : {
			'color' : {
				// one here represent side ID, same adjustments for same side, same type
				// only need the width, height will be computed : img.height * adjusment / img.width
				'1' : { 'width' : 823 },
				'2' : { 'width' : 823 },
				'3' : { 'width' : 823 },
				'4' : { 'width' : 550 },
				'5' : { 'width' : 823 },
				'6' : { 'width' : 550 },
				'7' : { 'width' : 823 },
				'8' : { 'width' : 823 }
			},
			'tint' : {
				// one here represent side ID, same adjustments for same side, same type
				'1' : { 'width' : 823 },
				'2' : { 'width' : 823 },
				'3' : { 'width' : 823 },
				'4' : { 'width' : 550 },
				'5' : { 'width' : 823 },
				'6' : { 'width' : 550 },
				'7' : { 'width' : 823 },
				'8' : { 'width' : 823 }
			},
			'decal' : {
				'1' : { 'width' : 823 },
				'2' : { 'width' : 823 },
				'3' : { 'width' : 823 },
				'4' : { 'width' : 550 },
				'5' : { 'width' : 823 },
				'6' : { 'width' : 550 },
				'7' : { 'width' : 823 },
				'8' : { 'width' : 823 }
			},
			'rims' : {
				// one here represent side ID, same adjustments for same side, same type
				'1' : { 'width' : 823 },
				'2' : { 'width' : 823 },
				'3' : { 'width' : 823 },
				'4' : { 'width' : 550 },
				'5' : { 'width' : 823 },
				'6' : { 'width' : 550 },
				'7' : { 'width' : 823 },
				'8' : { 'width' : 823 }
			},
			'grill' : {
				// one here represent side ID, same adjustments for same side, same type
				'1' : { 'width' : 823 },
				'2' : { 'width' : 823 },
				'3' : { 'width' : 823 },
				'4' : { 'width' : 550 },
				'5' : { 'width' : 823 },
				'6' : { 'width' : 550 },
				'7' : { 'width' : 823 },
				'8' : { 'width' : 823 }
			},
			'skirt' : {
				'1' : { 'width' : 823 },
				'2' : { 'width' : 823 },
				'3' : { 'width' : 823 },
				'4' : { 'width' : 550 },
				'5' : { 'width' : 823 },
				'6' : { 'width' : 550 },
				'7' : { 'width' : 823 },
				'8' : { 'width' : 823 }
			},
			'spoiler' : {
				'1' : { 'width' : 823 },
				'2' : { 'width' : 823 },
				'3' : { 'width' : 823 },
				'4' : { 'width' : 550 },
				'5' : { 'width' : 823 },
				'6' : { 'width' : 550 },
				'7' : { 'width' : 823 },
				'8' : { 'width' : 823 }
			}
		}
	}
};

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
    'prevCarName' : null,
    'prevColor'   : null
};

var adjustment = {
	'crv' : {
		'offset' : {
			'color' : {
				// one here represent side ID, same adjustments for same side, same type
				'1' : { 'x' : -30, 'y' : 40 },
				'2' : { 'x' : -30, 'y' : 40 },
				'3' : { 'x' : -30, 'y' : 40 },
				'4' : { 'x' : -30, 'y' : 40 },
				'5' : { 'x' : -30, 'y' : 40 },
				'6' : { 'x' : -30, 'y' : 40 },
				'7' : { 'x' : -30, 'y' : 40 },
				'8' : { 'x' : -30, 'y' : 40 }
			},
			'tint' : {
				// one here represent side ID, same adjustments for same side, same type
				'1' : { 'x' : -30, 'y' : 40 },
				'2' : { 'x' : -30, 'y' : 40 },
				'3' : { 'x' : -30, 'y' : 40 },
				'4' : { 'x' : -30, 'y' : 40 },
				'5' : { 'x' : -30, 'y' : 40 },
				'6' : { 'x' : -30, 'y' : 40 },
				'7' : { 'x' : -30, 'y' : 40 },
				'8' : { 'x' : -30, 'y' : 40 }
			},
			'decal' : {
				'1' : { 'x' : -30, 'y' : 40 },
				'2' : { 'x' : -30, 'y' : 40 },
				'3' : { 'x' : -30, 'y' : 40 },
				'4' : { 'x' : -30, 'y' : 40 },
				'5' : { 'x' : -30, 'y' : 40 },
				'6' : { 'x' : -30, 'y' : 40 },
				'7' : { 'x' : -30, 'y' : 40 },
				'8' : { 'x' : -30, 'y' : 40 }
			},
			'rims' : {
				// one here represent side ID, same adjustments for same side, same type
				'1' : { 'x' : -30, 'y' : 40 },
				'2' : { 'x' : -30, 'y' : 40 },
				'3' : { 'x' : -30, 'y' : 40 },
				'4' : { 'x' : -30, 'y' : 40 },
				'5' : { 'x' : -30, 'y' : 40 },
				'6' : { 'x' : -30, 'y' : 40 },
				'7' : { 'x' : -30, 'y' : 40 },
				'8' : { 'x' : -30, 'y' : 40 }
			},
			'grill' : {
				// one here represent side ID, same adjustments for same side, same type
				'1' : { 'x' : -30, 'y' : 40 },
				'2' : { 'x' : -30, 'y' : 40 },
				'3' : { 'x' : -30, 'y' : 40 },
				'4' : { 'x' : -30, 'y' : 40 },
				'5' : { 'x' : -30, 'y' : 40 },
				'6' : { 'x' : -30, 'y' : 40 },
				'7' : { 'x' : -30, 'y' : 40 },
				'8' : { 'x' : -30, 'y' : 40 }
			},
			'skirt' : {
				'1' : { 'x' : -30, 'y' : 40 },
				'2' : { 'x' : -30, 'y' : 40 },
				'3' : { 'x' : -30, 'y' : 40 },
				'4' : { 'x' : -30, 'y' : 40 },
				'5' : { 'x' : -30, 'y' : 40 },
				'6' : { 'x' : -30, 'y' : 40 },
				'7' : { 'x' : -30, 'y' : 40 },
				'8' : { 'x' : -30, 'y' : 40 }
			},
			'spoiler' : {
				'1' : { 'x' : -30, 'y' : 40 },
				'2' : { 'x' : -30, 'y' : 40 },
				'3' : { 'x' : -30, 'y' : 40 },
				'4' : { 'x' : -30, 'y' : 40 },
				'5' : { 'x' : -30, 'y' : 40 },
				'6' : { 'x' : -30, 'y' : 40 },
				'7' : { 'x' : -30, 'y' : 40 },
				'8' : { 'x' : -30, 'y' : 40 }
			}
		},
		// adjustment to dimensions
		'dimension' : {
			'color' : {
				// one here represent side ID, same adjustments for same side, same type
				// only need the width, height will be computed : img.height * adjusment / img.width
				'1' : { 'width' : 663 },
				'2' : { 'width' : 663 },
				'3' : { 'width' : 663 },
				'4' : { 'width' : 663 },
				'5' : { 'width' : 663 },
				'6' : { 'width' : 663 },
				'7' : { 'width' : 663 },
				'8' : { 'width' : 663 }
			},
			'tint' : {
				// one here represent side ID, same adjustments for same side, same type
				'1' : { 'width' : 663 },
				'2' : { 'width' : 663 },
				'3' : { 'width' : 663 },
				'4' : { 'width' : 663 },
				'5' : { 'width' : 663 },
				'6' : { 'width' : 663 },
				'7' : { 'width' : 663 },
				'8' : { 'width' : 663 }
			},
			'decal' : {
				'1' : { 'width' : 663 },
				'2' : { 'width' : 663 },
				'3' : { 'width' : 663 },
				'4' : { 'width' : 663 },
				'5' : { 'width' : 663 },
				'6' : { 'width' : 663 },
				'7' : { 'width' : 663 },
				'8' : { 'width' : 663 }
			},
			'rims' : {
				// one here represent side ID, same adjustments for same side, same type
				'1' : { 'width' : 663 },
				'2' : { 'width' : 663 },
				'3' : { 'width' : 663 },
				'4' : { 'width' : 663 },
				'5' : { 'width' : 663 },
				'6' : { 'width' : 663 },
				'7' : { 'width' : 663 },
				'8' : { 'width' : 663 }
			},
			'grill' : {
				// one here represent side ID, same adjustments for same side, same type
				'1' : { 'width' : 663 },
				'2' : { 'width' : 663 },
				'3' : { 'width' : 663 },
				'4' : { 'width' : 663 },
				'5' : { 'width' : 663 },
				'6' : { 'width' : 663 },
				'7' : { 'width' : 663 },
				'8' : { 'width' : 663 }
			},
			'skirt' : {
				'1' : { 'width' : 663 },
				'2' : { 'width' : 663 },
				'3' : { 'width' : 663 },
				'4' : { 'width' : 663 },
				'5' : { 'width' : 663 },
				'6' : { 'width' : 663 },
				'7' : { 'width' : 663 },
				'8' : { 'width' : 663 }
			},
			'spoiler' : {
				'1' : { 'width' : 663 },
				'2' : { 'width' : 663 },
				'3' : { 'width' : 663 },
				'4' : { 'width' : 663 },
				'5' : { 'width' : 663 },
				'6' : { 'width' : 663 },
				'7' : { 'width' : 663 },
				'8' : { 'width' : 663 }
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
				'1' : { 'x' : -120, 'y' : 10 },
				'2' : { 'x' : -120, 'y' : 0 },
				'3' : { 'x' : -120, 'y' : 10 },
				'4' : { 'x' : -120, 'y' : 20 },
				'5' : { 'x' : -120, 'y' : 0 },
				'6' : { 'x' : -120, 'y' : 20 },
				'7' : { 'x' : -120, 'y' : 0 },
				'8' : { 'x' : -120, 'y' : 0 }
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
				'6' : { 'x' : -120, 'y' : 17 },
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
				'1' : { 'width' : 823 },
				'2' : { 'width' : 823 },
				'3' : { 'width' : 823 },
				'4' : { 'width' : 823 },
				'5' : { 'width' : 823 },
				'6' : { 'width' : 823 },
				'7' : { 'width' : 823 },
				'8' : { 'width' : 823 }
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
				'1' : { 'x' : -60, 'y' : 70 },
				'2' : { 'x' : -60, 'y' : 70 },
				'3' : { 'x' : -60, 'y' : 70 },
				'4' : { 'x' : -60, 'y' : 70 },
				'5' : { 'x' : -60, 'y' : 70 },
				'6' : { 'x' : -60, 'y' : 70 },
				'7' : { 'x' : -60, 'y' : 70 },
				'8' : { 'x' : -60, 'y' : 70 }
			},
			'tint' : {
				// one here represent side ID, same adjustments for same side, same type
				'1' : { 'x' : -60, 'y' : 70 },
				'2' : { 'x' : -60, 'y' : 70 },
				'3' : { 'x' : -60, 'y' : 70 },
				'4' : { 'x' : -60, 'y' : 70 },
				'5' : { 'x' : -60, 'y' : 70 },
				'6' : { 'x' : -60, 'y' : 70 },
				'7' : { 'x' : -60, 'y' : 70 },
				'8' : { 'x' : -60, 'y' : 70 }
			},
			'decal' : {
				'1' : { 'x' : -60, 'y' : 70 },
				'2' : { 'x' : -60, 'y' : 70 },
				'3' : { 'x' : -60, 'y' : 70 },
				'4' : { 'x' : -60, 'y' : 70 },
				'5' : { 'x' : -60, 'y' : 70 },
				'6' : { 'x' : -60, 'y' : 70 },
				'7' : { 'x' : -60, 'y' : 70 },
				'8' : { 'x' : -60, 'y' : 70 }
			},
			'rims' : {
				// one here represent side ID, same adjustments for same side, same type
				'1' : { 'x' : -60, 'y' : 70 },
				'2' : { 'x' : -60, 'y' : 70 },
				'3' : { 'x' : -60, 'y' : 70 },
				'4' : { 'x' : -60, 'y' : 70 },
				'5' : { 'x' : -60, 'y' : 70 },
				'6' : { 'x' : -60, 'y' : 70 },
				'7' : { 'x' : -60, 'y' : 70 },
				'8' : { 'x' : -60, 'y' : 70 }
			},
			'grill' : {
				// one here represent side ID, same adjustments for same side, same type
				'1' : { 'x' : -60, 'y' : 70 },
				'2' : { 'x' : -60, 'y' : 70 },
				'3' : { 'x' : -60, 'y' : 70 },
				'4' : { 'x' : -60, 'y' : 70 },
				'5' : { 'x' : -60, 'y' : 70 },
				'6' : { 'x' : -60, 'y' : 70 },
				'7' : { 'x' : -60, 'y' : 70 },
				'8' : { 'x' : -60, 'y' : 70 }
			},
			'skirt' : {
				'1' : { 'x' : -60, 'y' : 70 },
				'2' : { 'x' : -60, 'y' : 70 },
				'3' : { 'x' : -60, 'y' : 70 },
				'4' : { 'x' : -60, 'y' : 70 },
				'5' : { 'x' : -60, 'y' : 70 },
				'6' : { 'x' : -60, 'y' : 70 },
				'7' : { 'x' : -60, 'y' : 70 },
				'8' : { 'x' : -60, 'y' : 70 }
			},
			'spoiler' : {
				'1' : { 'x' : -60, 'y' : 70 },
				'2' : { 'x' : -60, 'y' : 70 },
				'3' : { 'x' : -60, 'y' : 70 },
				'4' : { 'x' : -60, 'y' : 70 },
				'5' : { 'x' : -60, 'y' : 70 },
				'6' : { 'x' : -60, 'y' : 70 },
				'7' : { 'x' : -60, 'y' : 70 },
				'8' : { 'x' : -60, 'y' : 70 }
			}
		},
		// adjustment to dimensions
		'dimension' : {
			'color' : {
				// one here represent side ID, same adjustments for same side, same type
				// only need the width, height will be computed : img.height * adjusment / img.width
				'1' : { 'width' : 720 },
				'2' : { 'width' : 720 },
				'3' : { 'width' : 720 },
				'4' : { 'width' : 720 },
				'5' : { 'width' : 720 },
				'6' : { 'width' : 720 },
				'7' : { 'width' : 720 },
				'8' : { 'width' : 720 }
			},
			'tint' : {
				// one here represent side ID, same adjustments for same side, same type
				'1' : { 'width' : 720 },
				'2' : { 'width' : 720 },
				'3' : { 'width' : 720 },
				'4' : { 'width' : 720 },
				'5' : { 'width' : 720 },
				'6' : { 'width' : 720 },
				'7' : { 'width' : 720 },
				'8' : { 'width' : 720 }
			},
			'decal' : {
				'1' : { 'width' : 720 },
				'2' : { 'width' : 720 },
				'3' : { 'width' : 720 },
				'4' : { 'width' : 720 },
				'5' : { 'width' : 720 },
				'6' : { 'width' : 720 },
				'7' : { 'width' : 720 },
				'8' : { 'width' : 720 }
			},
			'rims' : {
				// one here represent side ID, same adjustments for same side, same type
				'1' : { 'width' : 720 },
				'2' : { 'width' : 720 },
				'3' : { 'width' : 720 },
				'4' : { 'width' : 720 },
				'5' : { 'width' : 720 },
				'6' : { 'width' : 720 },
				'7' : { 'width' : 720 },
				'8' : { 'width' : 720 }
			},
			'grill' : {
				// one here represent side ID, same adjustments for same side, same type
				'1' : { 'width' : 720 },
				'2' : { 'width' : 720 },
				'3' : { 'width' : 720 },
				'4' : { 'width' : 720 },
				'5' : { 'width' : 720 },
				'6' : { 'width' : 720 },
				'7' : { 'width' : 720 },
				'8' : { 'width' : 720 }
			},
			'skirt' : {
				'1' : { 'width' : 720 },
				'2' : { 'width' : 720 },
				'3' : { 'width' : 720 },
				'4' : { 'width' : 720 },
				'5' : { 'width' : 720 },
				'6' : { 'width' : 720 },
				'7' : { 'width' : 720 },
				'8' : { 'width' : 720 }
			},
			'spoiler' : {
				'1' : { 'width' : 720 },
				'2' : { 'width' : 720 },
				'3' : { 'width' : 720 },
				'4' : { 'width' : 720 },
				'5' : { 'width' : 720 },
				'6' : { 'width' : 720 },
				'7' : { 'width' : 720 },
				'8' : { 'width' : 720 }
			}
		}
	},
	'crz' : {
		'offset' : {
			'color' : {
				// one here represent side ID, same adjustments for same side, same type
				'1' : { 'x' : -30, 'y' : 40 },
				'2' : { 'x' : -30, 'y' : 40 },
				'3' : { 'x' : -30, 'y' : 40 },
				'4' : { 'x' : -30, 'y' : 40 },
				'5' : { 'x' : -30, 'y' : 40 },
				'6' : { 'x' : -30, 'y' : 40 },
				'7' : { 'x' : -30, 'y' : 40 },
				'8' : { 'x' : -30, 'y' : 40 }
			},
			'tint' : {
				// one here represent side ID, same adjustments for same side, same type
				'1' : { 'x' : -30, 'y' : 40 },
				'2' : { 'x' : -30, 'y' : 40 },
				'3' : { 'x' : -30, 'y' : 40 },
				'4' : { 'x' : -30, 'y' : 40 },
				'5' : { 'x' : -30, 'y' : 40 },
				'6' : { 'x' : -30, 'y' : 40 },
				'7' : { 'x' : -30, 'y' : 40 },
				'8' : { 'x' : -30, 'y' : 40 }
			},
			'decal' : {
				'1' : { 'x' : -30, 'y' : 40 },
				'2' : { 'x' : -30, 'y' : 40 },
				'3' : { 'x' : -30, 'y' : 40 },
				'4' : { 'x' : -30, 'y' : 40 },
				'5' : { 'x' : -30, 'y' : 40 },
				'6' : { 'x' : -30, 'y' : 40 },
				'7' : { 'x' : -30, 'y' : 40 },
				'8' : { 'x' : -30, 'y' : 40 }
			},
			'rims' : {
				// one here represent side ID, same adjustments for same side, same type
				'1' : { 'x' : -30, 'y' : 40 },
				'2' : { 'x' : -30, 'y' : 40 },
				'3' : { 'x' : -30, 'y' : 40 },
				'4' : { 'x' : -30, 'y' : 40 },
				'5' : { 'x' : -30, 'y' : 40 },
				'6' : { 'x' : -30, 'y' : 40 },
				'7' : { 'x' : -30, 'y' : 40 },
				'8' : { 'x' : -30, 'y' : 40 }
			},
			'grill' : {
				// one here represent side ID, same adjustments for same side, same type
				'1' : { 'x' : -30, 'y' : 40 },
				'2' : { 'x' : -30, 'y' : 40 },
				'3' : { 'x' : -30, 'y' : 40 },
				'4' : { 'x' : -30, 'y' : 40 },
				'5' : { 'x' : -30, 'y' : 40 },
				'6' : { 'x' : -30, 'y' : 40 },
				'7' : { 'x' : -30, 'y' : 40 },
				'8' : { 'x' : -30, 'y' : 40 }
			},
			'skirt' : {
				'1' : { 'x' : -30, 'y' : 40 },
				'2' : { 'x' : -30, 'y' : 40 },
				'3' : { 'x' : -30, 'y' : 40 },
				'4' : { 'x' : -30, 'y' : 40 },
				'5' : { 'x' : -30, 'y' : 40 },
				'6' : { 'x' : -30, 'y' : 40 },
				'7' : { 'x' : -30, 'y' : 40 },
				'8' : { 'x' : -30, 'y' : 40 }
			},
			'spoiler' : {
				'1' : { 'x' : -30, 'y' : 40 },
				'2' : { 'x' : -30, 'y' : 40 },
				'3' : { 'x' : -30, 'y' : 40 },
				'4' : { 'x' : -30, 'y' : 40 },
				'5' : { 'x' : -30, 'y' : 40 },
				'6' : { 'x' : -30, 'y' : 40 },
				'7' : { 'x' : -30, 'y' : 40 },
				'8' : { 'x' : -30, 'y' : 40 }
			}
		},
		// adjustment to dimensions
		'dimension' : {
			'color' : {
				// one here represent side ID, same adjustments for same side, same type
				// only need the width, height will be computed : img.height * adjusment / img.width
				'1' : { 'width' : 663 },
				'2' : { 'width' : 663 },
				'3' : { 'width' : 663 },
				'4' : { 'width' : 663 },
				'5' : { 'width' : 663 },
				'6' : { 'width' : 663 },
				'7' : { 'width' : 663 },
				'8' : { 'width' : 663 }
			},
			'tint' : {
				// one here represent side ID, same adjustments for same side, same type
				'1' : { 'width' : 663 },
				'2' : { 'width' : 663 },
				'3' : { 'width' : 663 },
				'4' : { 'width' : 663 },
				'5' : { 'width' : 663 },
				'6' : { 'width' : 663 },
				'7' : { 'width' : 663 },
				'8' : { 'width' : 663 }
			},
			'decal' : {
				'1' : { 'width' : 663 },
				'2' : { 'width' : 663 },
				'3' : { 'width' : 663 },
				'4' : { 'width' : 663 },
				'5' : { 'width' : 663 },
				'6' : { 'width' : 663 },
				'7' : { 'width' : 663 },
				'8' : { 'width' : 663 }
			},
			'rims' : {
				// one here represent side ID, same adjustments for same side, same type
				'1' : { 'width' : 663 },
				'2' : { 'width' : 663 },
				'3' : { 'width' : 663 },
				'4' : { 'width' : 663 },
				'5' : { 'width' : 663 },
				'6' : { 'width' : 663 },
				'7' : { 'width' : 663 },
				'8' : { 'width' : 663 }
			},
			'grill' : {
				// one here represent side ID, same adjustments for same side, same type
				'1' : { 'width' : 663 },
				'2' : { 'width' : 663 },
				'3' : { 'width' : 663 },
				'4' : { 'width' : 663 },
				'5' : { 'width' : 663 },
				'6' : { 'width' : 663 },
				'7' : { 'width' : 663 },
				'8' : { 'width' : 663 }
			},
			'skirt' : {
				'1' : { 'width' : 663 },
				'2' : { 'width' : 663 },
				'3' : { 'width' : 663 },
				'4' : { 'width' : 663 },
				'5' : { 'width' : 663 },
				'6' : { 'width' : 663 },
				'7' : { 'width' : 663 },
				'8' : { 'width' : 663 }
			},
			'spoiler' : {
				'1' : { 'width' : 663 },
				'2' : { 'width' : 663 },
				'3' : { 'width' : 663 },
				'4' : { 'width' : 663 },
				'5' : { 'width' : 663 },
				'6' : { 'width' : 663 },
				'7' : { 'width' : 663 },
				'8' : { 'width' : 663 }
			}
		}
	},
	'brio' : {
		'offset' : {
			'color' : {
				// one here represent side ID, same adjustments for same side, same type
				'1' : { 'x' : 30, 'y' : 100 },
				'2' : { 'x' : 80, 'y' : 100 },
				'3' : { 'x' : 80, 'y' : 100 },
				'4' : { 'x' : 20, 'y' : 120 },
				'5' : { 'x' : 20, 'y' : 100 },
				'6' : { 'x' : 20, 'y' : 120 },
				'7' : { 'x' : 30, 'y' : 100 },
				'8' : { 'x' : 30, 'y' : 100 }
			},
			'tint' : {
				// one here represent side ID, same adjustments for same side, same type
				'1' : { 'x' : 137, 'y' : 110 },
				'2' : { 'x' : 143, 'y' : 127 },
				'3' : { 'x' : 142, 'y' : 107 },
				'4' : { 'x' : 198, 'y' : 127 },
				'5' : { 'x' : 63, 'y' : 116 },
				'6' : { 'x' : 122, 'y' : 126 },
				'7' : { 'x' : 116, 'y' : 116 },
				'8' : { 'x' : 105, 'y' : 113 }
			},
			'decal' : {
				'1' : { 'x' : 30, 'y' : 100 },
				'2' : { 'x' : 80, 'y' : 100 },
				'3' : { 'x' : 80, 'y' : 100 },
				'4' : { 'x' : 20, 'y' : 120 },
				'5' : { 'x' : 20, 'y' : 100 },
				'6' : { 'x' : 20, 'y' : 120 },
				'7' : { 'x' : 30, 'y' : 100 },
				'8' : { 'x' : 30, 'y' : 100 }
			},
			'rims' : {
				// one here represent side ID, same adjustments for same side, same type
				'1' : { 'x' : -55, 'y' : 65 },
				'2' : { 'x' : -55, 'y' : 65 },
				'3' : { 'x' : -55, 'y' : 65 },
				'4' : { 'x' : -55, 'y' : 65 },
				'5' : { 'x' : -55, 'y' : 65 },
				'6' : { 'x' : -55, 'y' : 65 },
				'7' : { 'x' : -55, 'y' : 65 },
				'8' : { 'x' : -55, 'y' : 65 }
			},
			'grill' : {
				// one here represent side ID, same adjustments for same side, same type
				'1' : { 'x' : 30, 'y' : 100 },
				'2' : { 'x' : 80, 'y' : 100 },
				'3' : { 'x' : 80, 'y' : 100 },
				'4' : { 'x' : 20, 'y' : 120 },
				'5' : { 'x' : 20, 'y' : 100 },
				'6' : { 'x' : 20, 'y' : 120 },
				'7' : { 'x' : 30, 'y' : 100 },
				'8' : { 'x' : 30, 'y' : 100 }
			},
			'skirt' : {
				'1' : { 'x' : 30, 'y' : 100 },
				'2' : { 'x' : 80, 'y' : 100 },
				'3' : { 'x' : 80, 'y' : 100 },
				'4' : { 'x' : 20, 'y' : 120 },
				'5' : { 'x' : 20, 'y' : 100 },
				'6' : { 'x' : 20, 'y' : 120 },
				'7' : { 'x' : 30, 'y' : 100 },
				'8' : { 'x' : 30, 'y' : 100 }
			},
			'spoiler' : {
				'1' : { 'x' : 30, 'y' : 100 },
				'2' : { 'x' : 80, 'y' : 100 },
				'3' : { 'x' : 80, 'y' : 100 },
				'4' : { 'x' : 20, 'y' : 120 },
				'5' : { 'x' : 20, 'y' : 100 },
				'6' : { 'x' : 20, 'y' : 120 },
				'7' : { 'x' : 30, 'y' : 100 },
				'8' : { 'x' : 30, 'y' : 100 }
			}
		},
		// adjustment to dimensions
		'dimension' : {
			'color' : {
				// one here represent side ID, same adjustments for same side, same type
				// only need the width, height will be computed : img.height * adjusment / img.width
				'1' : { 'width' : 486 },
				'2' : { 'width' : 347 },
				'3' : { 'width' : 345 },
				'4' : { 'width' : 509 },
				'5' : { 'width' : 484 },
				'6' : { 'width' : 509 },
				'7' : { 'width' : 483 },
				'8' : { 'width' : 497 }
			},
			'tint' : {
				// one here represent side ID, same adjustments for same side, same type
				'1' : { 'width' : 320 },
				'2' : { 'width' : 221 },
				'3' : { 'width' : 216 },
				'4' : { 'width' : 230 },
				'5' : { 'width' : 355 },
				'6' : { 'width' : 230 },
				'7' : { 'width' : 355 },
				'8' : { 'width' : 319 }
			},
			'decal' : {
				'1' : { 'width' : 494 },
				'2' : { 'width' : 494 },
				'3' : { 'width' : 494 },
				'4' : { 'width' : 494 },
				'5' : { 'width' : 494 },
				'6' : { 'width' : 494 },
				'7' : { 'width' : 494 },
				'8' : { 'width' : 494 }
			},
			'rims' : {
				// one here represent side ID, same adjustments for same side, same type
				'1' : { 'width' : 658 },
				'2' : { 'width' : 658 },
				'3' : { 'width' : 658 },
				'4' : { 'width' : 658 },
				'5' : { 'width' : 658 },
				'6' : { 'width' : 658 },
				'7' : { 'width' : 658 },
				'8' : { 'width' : 658 }
			},
			'grill' : {
				// one here represent side ID, same adjustments for same side, same type
				'1' : { 'width' : 486 },
				'2' : { 'width' : 347 },
				'3' : { 'width' : 345 },
				'4' : { 'width' : 509 },
				'5' : { 'width' : 484 },
				'6' : { 'width' : 509 },
				'7' : { 'width' : 483 },
				'8' : { 'width' : 497 }
			},
			'skirt' : {
				'1' : { 'width' : 486 },
				'2' : { 'width' : 347 },
				'3' : { 'width' : 345 },
				'4' : { 'width' : 509 },
				'5' : { 'width' : 484 },
				'6' : { 'width' : 509 },
				'7' : { 'width' : 483 },
				'8' : { 'width' : 497 }
			},
			'spoiler' : {
				'1' : { 'width' : 486 },
				'2' : { 'width' : 347 },
				'3' : { 'width' : 345 },
				'4' : { 'width' : 509 },
				'5' : { 'width' : 484 },
				'6' : { 'width' : 509 },
				'7' : { 'width' : 483 },
				'8' : { 'width' : 497 }
			}
		}
	},
	'amaze' : {
		'offset' : {
			'color' : {
				// one here represent side ID, same adjustments for same side, same type
				'1' : { 'x' : -30, 'y' : 40 },
				'2' : { 'x' : -30, 'y' : 40 },
				'3' : { 'x' : -30, 'y' : 40 },
				'4' : { 'x' : -30, 'y' : 40 },
				'5' : { 'x' : -30, 'y' : 40 },
				'6' : { 'x' : -30, 'y' : 40 },
				'7' : { 'x' : -30, 'y' : 40 },
				'8' : { 'x' : -30, 'y' : 40 }
			},
			'tint' : {
				// one here represent side ID, same adjustments for same side, same type
				'1' : { 'x' : -30, 'y' : 40 },
				'2' : { 'x' : -30, 'y' : 40 },
				'3' : { 'x' : -30, 'y' : 40 },
				'4' : { 'x' : -30, 'y' : 40 },
				'5' : { 'x' : -30, 'y' : 40 },
				'6' : { 'x' : -30, 'y' : 40 },
				'7' : { 'x' : -30, 'y' : 40 },
				'8' : { 'x' : -30, 'y' : 40 }
			},
			'decal' : {
				'1' : { 'x' : -30, 'y' : 40 },
				'2' : { 'x' : -30, 'y' : 40 },
				'3' : { 'x' : -30, 'y' : 40 },
				'4' : { 'x' : -30, 'y' : 40 },
				'5' : { 'x' : -30, 'y' : 40 },
				'6' : { 'x' : -30, 'y' : 40 },
				'7' : { 'x' : -30, 'y' : 40 },
				'8' : { 'x' : -30, 'y' : 40 }
			},
			'rims' : {
				// one here represent side ID, same adjustments for same side, same type
				'1' : { 'x' : -30, 'y' : 40 },
				'2' : { 'x' : -30, 'y' : 40 },
				'3' : { 'x' : -30, 'y' : 40 },
				'4' : { 'x' : -30, 'y' : 40 },
				'5' : { 'x' : -30, 'y' : 40 },
				'6' : { 'x' : -30, 'y' : 40 },
				'7' : { 'x' : -30, 'y' : 40 },
				'8' : { 'x' : -30, 'y' : 40 }
			},
			'grill' : {
				// one here represent side ID, same adjustments for same side, same type
				'1' : { 'x' : -30, 'y' : 40 },
				'2' : { 'x' : -30, 'y' : 40 },
				'3' : { 'x' : -30, 'y' : 40 },
				'4' : { 'x' : -30, 'y' : 40 },
				'5' : { 'x' : -30, 'y' : 40 },
				'6' : { 'x' : -30, 'y' : 40 },
				'7' : { 'x' : -30, 'y' : 40 },
				'8' : { 'x' : -30, 'y' : 40 }
			},
			'skirt' : {
				'1' : { 'x' : -30, 'y' : 40 },
				'2' : { 'x' : -30, 'y' : 40 },
				'3' : { 'x' : -30, 'y' : 40 },
				'4' : { 'x' : -30, 'y' : 40 },
				'5' : { 'x' : -30, 'y' : 40 },
				'6' : { 'x' : -30, 'y' : 40 },
				'7' : { 'x' : -30, 'y' : 40 },
				'8' : { 'x' : -30, 'y' : 40 }
			},
			'spoiler' : {
				'1' : { 'x' : -30, 'y' : 40 },
				'2' : { 'x' : -30, 'y' : 40 },
				'3' : { 'x' : -30, 'y' : 40 },
				'4' : { 'x' : -30, 'y' : 40 },
				'5' : { 'x' : -30, 'y' : 40 },
				'6' : { 'x' : -30, 'y' : 40 },
				'7' : { 'x' : -30, 'y' : 40 },
				'8' : { 'x' : -30, 'y' : 40 }
			}
		},
		// adjustment to dimensions
		'dimension' : {
			'color' : {
				// one here represent side ID, same adjustments for same side, same type
				// only need the width, height will be computed : img.height * adjusment / img.width
				'1' : { 'width' : 663 },
				'2' : { 'width' : 663 },
				'3' : { 'width' : 663 },
				'4' : { 'width' : 663 },
				'5' : { 'width' : 663 },
				'6' : { 'width' : 663 },
				'7' : { 'width' : 663 },
				'8' : { 'width' : 663 }
			},
			'tint' : {
				// one here represent side ID, same adjustments for same side, same type
				'1' : { 'width' : 663 },
				'2' : { 'width' : 663 },
				'3' : { 'width' : 663 },
				'4' : { 'width' : 663 },
				'5' : { 'width' : 663 },
				'6' : { 'width' : 663 },
				'7' : { 'width' : 663 },
				'8' : { 'width' : 663 }
			},
			'decal' : {
				'1' : { 'width' : 663 },
				'2' : { 'width' : 663 },
				'3' : { 'width' : 663 },
				'4' : { 'width' : 663 },
				'5' : { 'width' : 663 },
				'6' : { 'width' : 663 },
				'7' : { 'width' : 663 },
				'8' : { 'width' : 663 }
			},
			'rims' : {
				// one here represent side ID, same adjustments for same side, same type
				'1' : { 'width' : 663 },
				'2' : { 'width' : 663 },
				'3' : { 'width' : 663 },
				'4' : { 'width' : 663 },
				'5' : { 'width' : 663 },
				'6' : { 'width' : 663 },
				'7' : { 'width' : 663 },
				'8' : { 'width' : 663 }
			},
			'grill' : {
				// one here represent side ID, same adjustments for same side, same type
				'1' : { 'width' : 663 },
				'2' : { 'width' : 663 },
				'3' : { 'width' : 663 },
				'4' : { 'width' : 663 },
				'5' : { 'width' : 663 },
				'6' : { 'width' : 663 },
				'7' : { 'width' : 663 },
				'8' : { 'width' : 663 }
			},
			'skirt' : {
				'1' : { 'width' : 663 },
				'2' : { 'width' : 663 },
				'3' : { 'width' : 663 },
				'4' : { 'width' : 663 },
				'5' : { 'width' : 663 },
				'6' : { 'width' : 663 },
				'7' : { 'width' : 663 },
				'8' : { 'width' : 663 }
			},
			'spoiler' : {
				'1' : { 'width' : 663 },
				'2' : { 'width' : 663 },
				'3' : { 'width' : 663 },
				'4' : { 'width' : 663 },
				'5' : { 'width' : 663 },
				'6' : { 'width' : 663 },
				'7' : { 'width' : 663 },
				'8' : { 'width' : 663 }
			}
		}
	}

};

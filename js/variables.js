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

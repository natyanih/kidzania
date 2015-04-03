var selectCar;
var sequence   = [ 1,4,7,2,5,6,8,3 ];
var currentCar = {
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

var adjustment = {
	'crv' : {
		'offset' : {
			'color' : {
				// one here represent side ID, same adjustments for same side, same type
				'1' : { 'x' : 20, 'y' : 110 },
				'2' : { 'x' : 110, 'y' : 90 },
				'3' : { 'x' : 110, 'y' : 110 },
				'4' : { 'x' : 20, 'y' : 130 },
				'5' : { 'x' : 20, 'y' : 110 },
				'6' : { 'x' : 20, 'y' : 130 },
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
				'2' : { 'width' : 300 },
				'3' : { 'width' : 300 },
				'4' : { 'width' : 500 },
				'5' : { 'width' : 500 },
				'6' : { 'width' : 500 },
				'7' : { 'width' : 500 },
				'8' : { 'width' : 500 }
			},
			'tint' : {
				// one here represent side ID, same adjustments for same side, same type
				'1' : { 'width' : 500 },
				'2' : { 'width' : 300 },
				'3' : { 'width' : 300 },
				'4' : { 'width' : 500 },
				'5' : { 'width' : 500 },
				'6' : { 'width' : 500 },
				'7' : { 'width' : 500 },
				'8' : { 'width' : 500 }
			},
			'decal' : {
				'1' : { 'width' : 500 },
				'2' : { 'width' : 300 },
				'3' : { 'width' : 300 },
				'4' : { 'width' : 500 },
				'5' : { 'width' : 500 },
				'6' : { 'width' : 500 },
				'7' : { 'width' : 500 },
				'8' : { 'width' : 500 }
			},
			'rims' : {
				// one here represent side ID, same adjustments for same side, same type
				'1' : { 'width' : 500 },
				'2' : { 'width' : 300 },
				'3' : { 'width' : 300 },
				'4' : { 'width' : 500 },
				'5' : { 'width' : 500 },
				'6' : { 'width' : 500 },
				'7' : { 'width' : 500 },
				'8' : { 'width' : 500 }
			},
			'grill' : {
				// one here represent side ID, same adjustments for same side, same type
				'1' : { 'width' : 500 },
				'2' : { 'width' : 300 },
				'3' : { 'width' : 300 },
				'4' : { 'width' : 500 },
				'5' : { 'width' : 500 },
				'6' : { 'width' : 500 },
				'7' : { 'width' : 500 },
				'8' : { 'width' : 500 }
			},
			'skirt' : {
				'1' : { 'width' : 500 },
				'2' : { 'width' : 300 },
				'3' : { 'width' : 300 },
				'4' : { 'width' : 500 },
				'5' : { 'width' : 500 },
				'6' : { 'width' : 500 },
				'7' : { 'width' : 500 },
				'8' : { 'width' : 500 }
			},
			'spoiler' : {
				'1' : { 'width' : 500 },
				'2' : { 'width' : 300 },
				'3' : { 'width' : 300 },
				'4' : { 'width' : 500 },
				'5' : { 'width' : 500 },
				'6' : { 'width' : 500 },
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
	}
};

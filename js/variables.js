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
				'1' : { 'x' : -98, 'y' : 10 },
				'2' : { 'x' : -89, 'y' : 0 },
				'3' : { 'x' : -90, 'y' : 10 },
				'4' : { 'x' : -120, 'y' : 20 },
				'5' : { 'x' : -111, 'y' : 0 },
				'6' : { 'x' : -111, 'y' : 20 },
				'7' : { 'x' : -90, 'y' : 0 },
				'8' : { 'x' : -96, 'y' : 0 }
			},
			'tint' : {
				// one here represent side ID, same adjustments for same side, same type
				'1' : { 'x' : -98, 'y' : 10 },
				'2' : { 'x' : -89, 'y' : 0 },
				'3' : { 'x' : -90, 'y' : 10 },
				'4' : { 'x' : -120, 'y' : 20 },
				'5' : { 'x' : -111, 'y' : 0 },
				'6' : { 'x' : -111, 'y' : 20 },
				'7' : { 'x' : -90, 'y' : 0 },
				'8' : { 'x' : -96, 'y' : 0 }
			},
			'decal' : {
				'1' : { 'x' : -98, 'y' : 10 },
				'2' : { 'x' : -89, 'y' : 0 },
				'3' : { 'x' : -90, 'y' : 10 },
				'4' : { 'x' : -120, 'y' : 20 },
				'5' : { 'x' : -111, 'y' : 0 },
				'6' : { 'x' : -111, 'y' : 20 },
				'7' : { 'x' : -90, 'y' : 0 },
				'8' : { 'x' : -96, 'y' : 0 }
			},
			'rims' : {
				// one here represent side ID, same adjustments for same side, same type
				'1' : { 'x' : -98, 'y' : 10 },
				'2' : { 'x' : -89, 'y' : 0 },
				'3' : { 'x' : -90, 'y' : 10 },
				'4' : { 'x' : -120, 'y' : 20 },
				'5' : { 'x' : -111, 'y' : 0 },
				'6' : { 'x' : -111, 'y' : 17 },
				'7' : { 'x' : -90, 'y' : 0 },
				'8' : { 'x' : -96, 'y' : 0 }
			},
			'grill' : {
				// one here represent side ID, same adjustments for same side, same type
				'1' : { 'x' : -98, 'y' : 10 },
				'2' : { 'x' : -89, 'y' : 0 },
				'3' : { 'x' : -90, 'y' : 10 },
				'4' : { 'x' : -120, 'y' : 20 },
				'5' : { 'x' : -111, 'y' : 0 },
				'6' : { 'x' : -111, 'y' : 20 },
				'7' : { 'x' : -90, 'y' : 0 },
				'8' : { 'x' : -96, 'y' : 0 }
			},
			'skirt' : {
				'1' : { 'x' : -98, 'y' : 10 },
				'2' : { 'x' : -89, 'y' : 0 },
				'3' : { 'x' : -90, 'y' : 10 },
				'4' : { 'x' : -120, 'y' : 20 },
				'5' : { 'x' : -111, 'y' : 0 },
				'6' : { 'x' : -111, 'y' : 20 },
				'7' : { 'x' : -90, 'y' : 0 },
				'8' : { 'x' : -96, 'y' : 0 }
			},
			'spoiler' : {
				'1' : { 'x' : -98, 'y' : 10 },
				'2' : { 'x' : -89, 'y' : 0 },
				'3' : { 'x' : -90, 'y' : 10 },
				'4' : { 'x' : -120, 'y' : 20 },
				'5' : { 'x' : -111, 'y' : 0 },
				'6' : { 'x' : -111, 'y' : 20 },
				'7' : { 'x' : -90, 'y' : 0 },
				'8' : { 'x' : -96, 'y' : 0 }
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
				'1' : { 'x' : -80, 'y' : 50 },
				'2' : { 'x' : -80, 'y' : 40 },
				'3' : { 'x' : -80, 'y' : 50 },
				'4' : { 'x' : -74, 'y' : 60 },
				'5' : { 'x' : -80, 'y' : 40 },
				'6' : { 'x' : -80, 'y' : 60 },
				'7' : { 'x' : -80, 'y' : 40 },
				'8' : { 'x' : -80, 'y' : 40 }
			},
			'tint' : {
				// one here represent side ID, same adjustments for same side, same type
				'1' : { 'x' : -80, 'y' : 50 },
				'2' : { 'x' : -80, 'y' : 40 },
				'3' : { 'x' : -80, 'y' : 50 },
				'4' : { 'x' : -74, 'y' : 60 },
				'5' : { 'x' : -80, 'y' : 40 },
				'6' : { 'x' : -80, 'y' : 60 },
				'7' : { 'x' : -80, 'y' : 40 },
				'8' : { 'x' : -80, 'y' : 40 }
			},
			'decal' : {
				'1' : { 'x' : -80, 'y' : 50 },
				'2' : { 'x' : -80, 'y' : 40 },
				'3' : { 'x' : -80, 'y' : 50 },
				'4' : { 'x' : -74, 'y' : 60 },
				'5' : { 'x' : -80, 'y' : 40 },
				'6' : { 'x' : -80, 'y' : 60 },
				'7' : { 'x' : -80, 'y' : 40 },
				'8' : { 'x' : -80, 'y' : 40 }
			},
			'rims' : {
				// one here represent side ID, same adjustments for same side, same type
				'1' : { 'x' : -80, 'y' : 50 },
				'2' : { 'x' : -80, 'y' : 40 },
				'3' : { 'x' : -80, 'y' : 50 },
				'4' : { 'x' : -74, 'y' : 60 },
				'5' : { 'x' : -80, 'y' : 40 },
				'6' : { 'x' : -80, 'y' : 60 },
				'7' : { 'x' : -80, 'y' : 40 },
				'8' : { 'x' : -80, 'y' : 40 }
			},
			'grill' : {
				// one here represent side ID, same adjustments for same side, same type
				'1' : { 'x' : -80, 'y' : 50 },
				'2' : { 'x' : -80, 'y' : 40 },
				'3' : { 'x' : -80, 'y' : 50 },
				'4' : { 'x' : -74, 'y' : 60 },
				'5' : { 'x' : -80, 'y' : 40 },
				'6' : { 'x' : -80, 'y' : 60 },
				'7' : { 'x' : -80, 'y' : 40 },
				'8' : { 'x' : -80, 'y' : 40 }
			},
			'skirt' : {
				'1' : { 'x' : -80, 'y' : 50 },
				'2' : { 'x' : -80, 'y' : 40 },
				'3' : { 'x' : -80, 'y' : 50 },
				'4' : { 'x' : -74, 'y' : 60 },
				'5' : { 'x' : -80, 'y' : 40 },
				'6' : { 'x' : -80, 'y' : 60 },
				'7' : { 'x' : -80, 'y' : 40 },
				'8' : { 'x' : -80, 'y' : 40 }
			},
			'spoiler' : {
				'1' : { 'x' : -80, 'y' : 50 },
				'2' : { 'x' : -80, 'y' : 40 },
				'3' : { 'x' : -80, 'y' : 50 },
				'4' : { 'x' : -74, 'y' : 60 },
				'5' : { 'x' : -80, 'y' : 40 },
				'6' : { 'x' : -80, 'y' : 60 },
				'7' : { 'x' : -80, 'y' : 40 },
				'8' : { 'x' : -80, 'y' : 40 }
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
				'1' : { 'x' : 15, 'y' : 60 },
				'2' : { 'x' : 98, 'y' : 60 },
				'3' : { 'x' : 98, 'y' : 60 },
				'4' : { 'x' : 0, 'y' : 70 },
				'5' : { 'x' : 15, 'y' : 60 },
				'6' : { 'x' : 0, 'y' : 70 },
				'7' : { 'x' : 25, 'y' : 60 },
				'8' : { 'x' : 6, 'y' : 60 }
			},
			'tint' : {
				// one here represent side ID, same adjustments for same side, same type
				'1' : { 'x' : -81, 'y' : 22 },
				'2' : { 'x' : -81, 'y' : 20 },
				'3' : { 'x' : -79, 'y' : 19 },
				'4' : { 'x' : -80, 'y' : 20 },
				'5' : { 'x' : -81, 'y' : 9 },
				'6' : { 'x' : -79, 'y' : 19 },
				'7' : { 'x' : -73, 'y' : 10 },
				'8' : { 'x' : -83, 'y' : 24 }
			},
			'decal' : {
				'1' : { 'x' : -81, 'y' : 22 },
				'2' : { 'x' : -81, 'y' : 20 },
				'3' : { 'x' : -79, 'y' : 19 },
				'4' : { 'x' : -80, 'y' : 20 },
				'5' : { 'x' : -80, 'y' : 9 },
				'6' : { 'x' : -79, 'y' : 19 },
				'7' : { 'x' : -77, 'y' : 7 },
				'8' : { 'x' : -83, 'y' : 21 }
			},
			'rims' : {
				// one here represent side ID, same adjustments for same side, same type
				'1' : { 'x' : -81, 'y' : 22 },
				'2' : { 'x' : -81, 'y' : 20 },
				'3' : { 'x' : -79, 'y' : 19 },
				'4' : { 'x' : -80, 'y' : 20 },
				'5' : { 'x' : -81, 'y' : 9 },
				'6' : { 'x' : -79, 'y' : 19 },
				'7' : { 'x' : -73, 'y' : 10 },
				'8' : { 'x' : -83, 'y' : 24 }
			},
			'grill' : {
				// one here represent side ID, same adjustments for same side, same type
				'1' : { 'x' : -84, 'y' : 20 },
				'2' : { 'x' : -81, 'y' : 20 },
				'3' : { 'x' : -79, 'y' : 19 },
				'4' : { 'x' : -80, 'y' : 20 },
				'5' : { 'x' : -81, 'y' : 9 },
				'6' : { 'x' : -93, 'y' : 21 },
				'7' : { 'x' : -73, 'y' : 10 },
				'8' : { 'x' : -83, 'y' : 24 }
			},
			'skirt' : {
				'1' : { 'x' : -81, 'y' : 22 },
				'2' : { 'x' : -81, 'y' : 20 },
				'3' : { 'x' : -79, 'y' : 19 },
				'4' : { 'x' : -79, 'y' : 20 },
				'5' : { 'x' : -81, 'y' : 11 },
				'6' : { 'x' : -111, 'y' : 20 },
				'7' : { 'x' : -75, 'y' : 12 },
				'8' : { 'x' : -83, 'y' : 25 }
			},
			'spoiler' : {
				'1' : { 'x' : -79, 'y' : 19 },
				'2' : { 'x' : -81, 'y' : 20 },
				'3' : { 'x' : -79, 'y' : 19 },
				'4' : { 'x' : -78, 'y' : 18 },
				'5' : { 'x' : -81, 'y' : 9 },
				'6' : { 'x' : -84, 'y' : 18 },
				'7' : { 'x' : -73, 'y' : 10 },
				'8' : { 'x' : -86, 'y' : 22 }
			}
		},
		// adjustment to dimensions
		'dimension' : {
			'color' : {
				// one here represent side ID, same adjustments for same side, same type
				// only need the width, height will be computed : img.height * adjustment / img.width
				'1' : { 'width' : 567 },
				'2' : { 'width' : 405 },
				'3' : { 'width' : 403 },
				'4' : { 'width' : 601 },
				'5' : { 'width' : 565 },
				'6' : { 'width' : 601 },
				'7' : { 'width' : 564 },
				'8' : { 'width' : 580 }
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
	'amaze' : {
		'offset' : {
			'color' : {
				// one here represent side ID, same adjustments for same side, same type
				'1' : { 'x' : -40, 'y' : 40 },
				'2' : { 'x' : -40, 'y' : 40 },
				'3' : { 'x' : -40, 'y' : 40 },
				'4' : { 'x' : -40, 'y' : 40 },
				'5' : { 'x' : -40, 'y' : 40 },
				'6' : { 'x' : -40, 'y' : 40 },
				'7' : { 'x' : -40, 'y' : 40 },
				'8' : { 'x' : -40, 'y' : 40 }
			},
			'tint' : {
				// one here represent side ID, same adjustments for same side, same type
				'1' : { 'x' : -40, 'y' : 40 },
				'2' : { 'x' : -40, 'y' : 40 },
				'3' : { 'x' : -40, 'y' : 40 },
				'4' : { 'x' : -40, 'y' : 40 },
				'5' : { 'x' : -40, 'y' : 40 },
				'6' : { 'x' : -40, 'y' : 40 },
				'7' : { 'x' : -40, 'y' : 40 },
				'8' : { 'x' : -40, 'y' : 40 }
			},
			'decal' : {
				'1' : { 'x' : -40, 'y' : 40 },
				'2' : { 'x' : -40, 'y' : 40 },
				'3' : { 'x' : -40, 'y' : 40 },
				'4' : { 'x' : -40, 'y' : 40 },
				'5' : { 'x' : -40, 'y' : 40 },
				'6' : { 'x' : -40, 'y' : 40 },
				'7' : { 'x' : -40, 'y' : 40 },
				'8' : { 'x' : -40, 'y' : 40 }
			},
			'rims' : {
				// one here represent side ID, same adjustments for same side, same type
				'1' : { 'x' : -40, 'y' : 40 },
				'2' : { 'x' : -40, 'y' : 40 },
				'3' : { 'x' : -40, 'y' : 40 },
				'4' : { 'x' : -40, 'y' : 40 },
				'5' : { 'x' : -40, 'y' : 40 },
				'6' : { 'x' : -40, 'y' : 40 },
				'7' : { 'x' : -40, 'y' : 40 },
				'8' : { 'x' : -40, 'y' : 40 }
			},
			'grill' : {
				// one here represent side ID, same adjustments for same side, same type
				'1' : { 'x' : -40, 'y' : 40 },
				'2' : { 'x' : -40, 'y' : 40 },
				'3' : { 'x' : -40, 'y' : 40 },
				'4' : { 'x' : -40, 'y' : 40 },
				'5' : { 'x' : -40, 'y' : 40 },
				'6' : { 'x' : -40, 'y' : 40 },
				'7' : { 'x' : -40, 'y' : 40 },
				'8' : { 'x' : -40, 'y' : 40 }
			},
			'skirt' : {
				'1' : { 'x' : -40, 'y' : 40 },
				'2' : { 'x' : -40, 'y' : 40 },
				'3' : { 'x' : -40, 'y' : 40 },
				'4' : { 'x' : -40, 'y' : 40 },
				'5' : { 'x' : -40, 'y' : 40 },
				'6' : { 'x' : -40, 'y' : 40 },
				'7' : { 'x' : -40, 'y' : 40 },
				'8' : { 'x' : -40, 'y' : 40 }
			},
			'spoiler' : {
				'1' : { 'x' : -40, 'y' : 40 },
				'2' : { 'x' : -40, 'y' : 40 },
				'3' : { 'x' : -40, 'y' : 40 },
				'4' : { 'x' : -40, 'y' : 40 },
				'5' : { 'x' : -40, 'y' : 40 },
				'6' : { 'x' : -40, 'y' : 40 },
				'7' : { 'x' : -40, 'y' : 40 },
				'8' : { 'x' : -40, 'y' : 40 }
			}
		},
		// adjustment to dimensions
		'dimension' : {
			'color' : {
				// one here represent side ID, same adjustments for same side, same type
				// only need the width, height will be computed : img.height * adjusment / img.width
				'1' : { 'width' : 658 },
				'2' : { 'width' : 658 },
				'3' : { 'width' : 658 },
				'4' : { 'width' : 658 },
				'5' : { 'width' : 658 },
				'6' : { 'width' : 658 },
				'7' : { 'width' : 658 },
				'8' : { 'width' : 658 }
			},
			'tint' : {
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
			'decal' : {
				'1' : { 'width' : 658 },
				'2' : { 'width' : 658 },
				'3' : { 'width' : 658 },
				'4' : { 'width' : 658 },
				'5' : { 'width' : 658 },
				'6' : { 'width' : 658 },
				'7' : { 'width' : 658 },
				'8' : { 'width' : 658 }
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
				'1' : { 'width' : 658 },
				'2' : { 'width' : 658 },
				'3' : { 'width' : 658 },
				'4' : { 'width' : 658 },
				'5' : { 'width' : 658 },
				'6' : { 'width' : 658 },
				'7' : { 'width' : 658 },
				'8' : { 'width' : 658 }
			},
			'skirt' : {
				'1' : { 'width' : 658 },
				'2' : { 'width' : 658 },
				'3' : { 'width' : 658 },
				'4' : { 'width' : 658 },
				'5' : { 'width' : 658 },
				'6' : { 'width' : 658 },
				'7' : { 'width' : 658 },
				'8' : { 'width' : 658 }
			},
			'spoiler' : {
				'1' : { 'width' : 658 },
				'2' : { 'width' : 658 },
				'3' : { 'width' : 658 },
				'4' : { 'width' : 658 },
				'5' : { 'width' : 658 },
				'6' : { 'width' : 658 },
				'7' : { 'width' : 658 },
				'8' : { 'width' : 658 }
			}
		}
	},
	'accord' : {
		'offset' : {
			'color' : {
				// one here represent side ID, same adjustments for same side, same type
				'1' : { 'x' : -31, 'y' : 64 },
				'2' : { 'x' : 12, 'y' : 84 },
				'3' : { 'x' : 12, 'y' : 84 },
				'4' : { 'x' : -10, 'y' : 74 },
				'5' : { 'x' : -22, 'y' : 64 },
				'6' : { 'x' : -7, 'y' : 74 },
				'7' : { 'x' : -26, 'y' : 64 },
				'8' : { 'x' : -31, 'y' : 64 }
			},
			'tint' : {
				// one here represent side ID, same adjustments for same side, same type
				'1' : { 'x' : -31, 'y' : 64 },
				'2' : { 'x' : 12, 'y' : 84 },
				'3' : { 'x' : 12, 'y' : 84 },
				'4' : { 'x' : -10, 'y' : 74 },
				'5' : { 'x' : -22, 'y' : 64 },
				'6' : { 'x' : -7, 'y' : 74 },
				'7' : { 'x' : -26, 'y' : 64 },
				'8' : { 'x' : -31, 'y' : 64 }
			},
			'decal' : {
				'1' : { 'x' : -31, 'y' : 64 },
				'2' : { 'x' : 12, 'y' : 84 },
				'3' : { 'x' : 12, 'y' : 84 },
				'4' : { 'x' : -10, 'y' : 74 },
				'5' : { 'x' : -22, 'y' : 64 },
				'6' : { 'x' : -7, 'y' : 74 },
				'7' : { 'x' : -26, 'y' : 64 },
				'8' : { 'x' : -31, 'y' : 64 }
			},
			'rims' : {
				// one here represent side ID, same adjustments for same side, same type
				'1' : { 'x' : -31, 'y' : 64 },
				'2' : { 'x' : 12, 'y' : 84 },
				'3' : { 'x' : 12, 'y' : 84 },
				'4' : { 'x' : -10, 'y' : 74 },
				'5' : { 'x' : -22, 'y' : 64 },
				'6' : { 'x' : -7, 'y' : 74 },
				'7' : { 'x' : -26, 'y' : 64 },
				'8' : { 'x' : -31, 'y' : 64 }
			},
			'grill' : {
				// one here represent side ID, same adjustments for same side, same type
				'1' : { 'x' : -31, 'y' : 64 },
				'2' : { 'x' : 12, 'y' : 84 },
				'3' : { 'x' : 12, 'y' : 84 },
				'4' : { 'x' : -10, 'y' : 74 },
				'5' : { 'x' : -22, 'y' : 64 },
				'6' : { 'x' : -7, 'y' : 74 },
				'7' : { 'x' : -26, 'y' : 64 },
				'8' : { 'x' : -31, 'y' : 64 }
			},
			'skirt' : {
				'1' : { 'x' : -31, 'y' : 64 },
				'2' : { 'x' : 12, 'y' : 84 },
				'3' : { 'x' : 12, 'y' : 84 },
				'4' : { 'x' : -10, 'y' : 74 },
				'5' : { 'x' : -22, 'y' : 64 },
				'6' : { 'x' : -7, 'y' : 74 },
				'7' : { 'x' : -26, 'y' : 64 },
				'8' : { 'x' : -31, 'y' : 64 }
			},
			'spoiler' : {
				'1' : { 'x' : -31, 'y' : 64 },
				'2' : { 'x' : 12, 'y' : 84 },
				'3' : { 'x' : 12, 'y' : 84 },
				'4' : { 'x' : -10, 'y' : 74 },
				'5' : { 'x' : -22, 'y' : 64 },
				'6' : { 'x' : -7, 'y' : 74 },
				'7' : { 'x' : -26, 'y' : 64 },
				'8' : { 'x' : -31, 'y' : 64 }
			}
		},
		// adjustment to dimensions
		'dimension' : {
			'color' : {
				// one here represent side ID, same adjustments for same side, same type
				// only need the width, height will be computed : img.height * adjusment / img.width
				'1' : { 'width' : 658 },
				'2' : { 'width' : 576 },
				'3' : { 'width' : 576 },
				'4' : { 'width' : 617 },
				'5' : { 'width' : 658 },
				'6' : { 'width' : 617 },
				'7' : { 'width' : 658 },
				'8' : { 'width' : 658 }
			},
			'tint' : {
				// one here represent side ID, same adjustments for same side, same type
				'1' : { 'width' : 658 },
				'2' : { 'width' : 576 },
				'3' : { 'width' : 576 },
				'4' : { 'width' : 617 },
				'5' : { 'width' : 658 },
				'6' : { 'width' : 617 },
				'7' : { 'width' : 658 },
				'8' : { 'width' : 658 }
			},
			'decal' : {
				'1' : { 'width' : 658 },
				'2' : { 'width' : 576 },
				'3' : { 'width' : 576 },
				'4' : { 'width' : 617 },
				'5' : { 'width' : 658 },
				'6' : { 'width' : 617 },
				'7' : { 'width' : 658 },
				'8' : { 'width' : 658 }
			},
			'rims' : {
				// one here represent side ID, same adjustments for same side, same type
				'1' : { 'width' : 658 },
				'2' : { 'width' : 576 },
				'3' : { 'width' : 576 },
				'4' : { 'width' : 617 },
				'5' : { 'width' : 658 },
				'6' : { 'width' : 617 },
				'7' : { 'width' : 658 },
				'8' : { 'width' : 658 }
			},
			'grill' : {
				// one here represent side ID, same adjustments for same side, same type
				'1' : { 'width' : 658 },
				'2' : { 'width' : 576 },
				'3' : { 'width' : 576 },
				'4' : { 'width' : 617 },
				'5' : { 'width' : 658 },
				'6' : { 'width' : 617 },
				'7' : { 'width' : 658 },
				'8' : { 'width' : 658 }
			},
			'skirt' : {
				'1' : { 'width' : 658 },
				'2' : { 'width' : 576 },
				'3' : { 'width' : 576 },
				'4' : { 'width' : 617 },
				'5' : { 'width' : 658 },
				'6' : { 'width' : 617 },
				'7' : { 'width' : 658 },
				'8' : { 'width' : 658 }
			},
			'spoiler' : {
				'1' : { 'width' : 658 },
				'2' : { 'width' : 576 },
				'3' : { 'width' : 576 },
				'4' : { 'width' : 617 },
				'5' : { 'width' : 658 },
				'6' : { 'width' : 617 },
				'7' : { 'width' : 658 },
				'8' : { 'width' : 658 }
			}
		}
	},
	'odyssey' : {
		'offset' : {
			'color' : {
				// one here represent side ID, same adjustments for same side, same type
				'1' : { 'x' : 0, 'y' : 40 },
				'2' : { 'x' : -10, 'y' : 40 },
				'3' : { 'x' : -10, 'y' : 40 },
				'4' : { 'x' : -10, 'y' : 40 },
				'5' : { 'x' : -10, 'y' : 40 },
				'6' : { 'x' : -10, 'y' : 40 },
				'7' : { 'x' : -10, 'y' : 40 },
				'8' : { 'x' : -10, 'y' : 40 }
			},
			'tint' : {
				// one here represent side ID, same adjustments for same side, same type
				'1' : { 'x' : 0, 'y' : 40 },
				'2' : { 'x' : -10, 'y' : 40 },
				'3' : { 'x' : -10, 'y' : 40 },
				'4' : { 'x' : -10, 'y' : 40 },
				'5' : { 'x' : -10, 'y' : 40 },
				'6' : { 'x' : -10, 'y' : 40 },
				'7' : { 'x' : -10, 'y' : 40 },
				'8' : { 'x' : -10, 'y' : 40 }
			},
			'decal' : {
				'1' : { 'x' : 0, 'y' : 40 },
				'2' : { 'x' : -10, 'y' : 40 },
				'3' : { 'x' : -10, 'y' : 40 },
				'4' : { 'x' : -10, 'y' : 40 },
				'5' : { 'x' : -10, 'y' : 40 },
				'6' : { 'x' : -10, 'y' : 40 },
				'7' : { 'x' : -10, 'y' : 40 },
				'8' : { 'x' : -10, 'y' : 40 }
			},
			'rims' : {
				// one here represent side ID, same adjustments for same side, same type
				'1' : { 'x' : 0, 'y' : 40 },
				'2' : { 'x' : -10, 'y' : 40 },
				'3' : { 'x' : -10, 'y' : 40 },
				'4' : { 'x' : -10, 'y' : 40 },
				'5' : { 'x' : -10, 'y' : 40 },
				'6' : { 'x' : -10, 'y' : 40 },
				'7' : { 'x' : -10, 'y' : 40 },
				'8' : { 'x' : -10, 'y' : 40 }
			},
			'grill' : {
				// one here represent side ID, same adjustments for same side, same type
				'1' : { 'x' : 0, 'y' : 40 },
				'2' : { 'x' : -10, 'y' : 40 },
				'3' : { 'x' : -10, 'y' : 40 },
				'4' : { 'x' : -10, 'y' : 40 },
				'5' : { 'x' : -10, 'y' : 40 },
				'6' : { 'x' : -10, 'y' : 40 },
				'7' : { 'x' : -10, 'y' : 40 },
				'8' : { 'x' : -10, 'y' : 40 }
			},
			'skirt' : {
				'1' : { 'x' : 0, 'y' : 40 },
				'2' : { 'x' : -10, 'y' : 40 },
				'3' : { 'x' : -10, 'y' : 40 },
				'4' : { 'x' : -10, 'y' : 40 },
				'5' : { 'x' : -10, 'y' : 40 },
				'6' : { 'x' : -10, 'y' : 40 },
				'7' : { 'x' : -10, 'y' : 40 },
				'8' : { 'x' : -10, 'y' : 40 }
			},
			'spoiler' : {
				'1' : { 'x' : 0, 'y' : 40 },
				'2' : { 'x' : -10, 'y' : 40 },
				'3' : { 'x' : -10, 'y' : 40 },
				'4' : { 'x' : -10, 'y' : 40 },
				'5' : { 'x' : -10, 'y' : 40 },
				'6' : { 'x' : -10, 'y' : 40 },
				'7' : { 'x' : -10, 'y' : 40 },
				'8' : { 'x' : -10, 'y' : 40 }
			}
		},
		// adjustment to dimensions
		'dimension' : {
			'color' : {
				// one here represent side ID, same adjustments for same side, same type
				// only need the width, height will be computed : img.height * adjusment / img.width
				'1' : { 'width' : 617 },
				'2' : { 'width' : 617 },
				'3' : { 'width' : 617 },
				'4' : { 'width' : 617 },
				'5' : { 'width' : 617 },
				'6' : { 'width' : 617 },
				'7' : { 'width' : 617 },
				'8' : { 'width' : 617 }
			},
			'tint' : {
				// one here represent side ID, same adjustments for same side, same type
				'1' : { 'width' : 617 },
				'2' : { 'width' : 617 },
				'3' : { 'width' : 617 },
				'4' : { 'width' : 617 },
				'5' : { 'width' : 617 },
				'6' : { 'width' : 617 },
				'7' : { 'width' : 617 },
				'8' : { 'width' : 617 }
			},
			'decal' : {
				'1' : { 'width' : 617 },
				'2' : { 'width' : 617 },
				'3' : { 'width' : 617 },
				'4' : { 'width' : 617 },
				'5' : { 'width' : 617 },
				'6' : { 'width' : 617 },
				'7' : { 'width' : 617 },
				'8' : { 'width' : 617 }
			},
			'rims' : {
				// one here represent side ID, same adjustments for same side, same type
				'1' : { 'width' : 617 },
				'2' : { 'width' : 617 },
				'3' : { 'width' : 617 },
				'4' : { 'width' : 617 },
				'5' : { 'width' : 617 },
				'6' : { 'width' : 617 },
				'7' : { 'width' : 617 },
				'8' : { 'width' : 617 }
			},
			'grill' : {
				// one here represent side ID, same adjustments for same side, same type
				'1' : { 'width' : 617 },
				'2' : { 'width' : 617 },
				'3' : { 'width' : 617 },
				'4' : { 'width' : 617 },
				'5' : { 'width' : 617 },
				'6' : { 'width' : 617 },
				'7' : { 'width' : 617 },
				'8' : { 'width' : 617 }
			},
			'skirt' : {
				'1' : { 'width' : 617 },
				'2' : { 'width' : 617 },
				'3' : { 'width' : 617 },
				'4' : { 'width' : 617 },
				'5' : { 'width' : 617 },
				'6' : { 'width' : 617 },
				'7' : { 'width' : 617 },
				'8' : { 'width' : 617 }
			},
			'spoiler' : {
				'1' : { 'width' : 617 },
				'2' : { 'width' : 617 },
				'3' : { 'width' : 617 },
				'4' : { 'width' : 617 },
				'5' : { 'width' : 617 },
				'6' : { 'width' : 617 },
				'7' : { 'width' : 617 },
				'8' : { 'width' : 617 }
			}
		}
	},
	'pilot' : {
		'offset' : {
			'color' : {
				// one here represent side ID, same adjustments for same side, same type
				'1' : { 'x' : 10, 'y' : 40 },
				'2' : { 'x' : 10, 'y' : 60 },
				'3' : { 'x' : 10, 'y' : 60 },
				'4' : { 'x' : 10, 'y' : 40 },
				'5' : { 'x' : 10, 'y' : 40 },
				'6' : { 'x' : 10, 'y' : 40 },
				'7' : { 'x' : 10, 'y' : 40 },
				'8' : { 'x' : 10, 'y' : 40 }
			},
			'tint' : {
				// one here represent side ID, same adjustments for same side, same type
				'1' : { 'x' : 10, 'y' : 40 },
				'2' : { 'x' : 10, 'y' : 60 },
				'3' : { 'x' : 10, 'y' : 60 },
				'4' : { 'x' : 10, 'y' : 40 },
				'5' : { 'x' : 10, 'y' : 40 },
				'6' : { 'x' : 10, 'y' : 40 },
				'7' : { 'x' : 10, 'y' : 40 },
				'8' : { 'x' : 10, 'y' : 40 }
			},
			'decal' : {
				'1' : { 'x' : 10, 'y' : 40 },
				'2' : { 'x' : 10, 'y' : 60 },
				'3' : { 'x' : 10, 'y' : 60 },
				'4' : { 'x' : 10, 'y' : 40 },
				'5' : { 'x' : 10, 'y' : 40 },
				'6' : { 'x' : 10, 'y' : 40 },
				'7' : { 'x' : 10, 'y' : 40 },
				'8' : { 'x' : 10, 'y' : 40 }
			},
			'rims' : {
				// one here represent side ID, same adjustments for same side, same type
				'1' : { 'x' : 10, 'y' : 40 },
				'2' : { 'x' : 10, 'y' : 60 },
				'3' : { 'x' : 10, 'y' : 60 },
				'4' : { 'x' : 10, 'y' : 40 },
				'5' : { 'x' : 10, 'y' : 40 },
				'6' : { 'x' : 10, 'y' : 40 },
				'7' : { 'x' : 10, 'y' : 40 },
				'8' : { 'x' : 10, 'y' : 40 }
			},
			'grill' : {
				// one here represent side ID, same adjustments for same side, same type
				'1' : { 'x' : 10, 'y' : 40 },
				'2' : { 'x' : 10, 'y' : 60 },
				'3' : { 'x' : 10, 'y' : 60 },
				'4' : { 'x' : 10, 'y' : 40 },
				'5' : { 'x' : 10, 'y' : 40 },
				'6' : { 'x' : 10, 'y' : 40 },
				'7' : { 'x' : 10, 'y' : 40 },
				'8' : { 'x' : 10, 'y' : 40 }
			},
			'skirt' : {
				'1' : { 'x' : 10, 'y' : 40 },
				'2' : { 'x' : 10, 'y' : 60 },
				'3' : { 'x' : 10, 'y' : 60 },
				'4' : { 'x' : 10, 'y' : 40 },
				'5' : { 'x' : 10, 'y' : 40 },
				'6' : { 'x' : 10, 'y' : 40 },
				'7' : { 'x' : 10, 'y' : 40 },
				'8' : { 'x' : 10, 'y' : 40 }
			},
			'spoiler' : {
				'1' : { 'x' : 10, 'y' : 40 },
				'2' : { 'x' : 10, 'y' : 60 },
				'3' : { 'x' : 10, 'y' : 60 },
				'4' : { 'x' : 10, 'y' : 40 },
				'5' : { 'x' : 10, 'y' : 40 },
				'6' : { 'x' : 10, 'y' : 40 },
				'7' : { 'x' : 10, 'y' : 40 },
				'8' : { 'x' : 10, 'y' : 40 }
			}
		},
		// adjustment to dimensions
		'dimension' : {
			'color' : {
				// one here represent side ID, same adjustments for same side, same type
				// only need the width, height will be computed : img.height * adjusment / img.width
				'1' : { 'width' : 576 },
				'2' : { 'width' : 576 },
				'3' : { 'width' : 576 },
				'4' : { 'width' : 576 },
				'5' : { 'width' : 576 },
				'6' : { 'width' : 576 },
				'7' : { 'width' : 576 },
				'8' : { 'width' : 576 }
			},
			'tint' : {
				// one here represent side ID, same adjustments for same side, same type
				'1' : { 'width' : 576 },
				'2' : { 'width' : 576 },
				'3' : { 'width' : 576 },
				'4' : { 'width' : 576 },
				'5' : { 'width' : 576 },
				'6' : { 'width' : 576 },
				'7' : { 'width' : 576 },
				'8' : { 'width' : 576 }
			},
			'decal' : {
				'1' : { 'width' : 576 },
				'2' : { 'width' : 576 },
				'3' : { 'width' : 576 },
				'4' : { 'width' : 576 },
				'5' : { 'width' : 576 },
				'6' : { 'width' : 576 },
				'7' : { 'width' : 576 },
				'8' : { 'width' : 576 }
			},
			'rims' : {
				// one here represent side ID, same adjustments for same side, same type
				'1' : { 'width' : 576 },
				'2' : { 'width' : 576 },
				'3' : { 'width' : 576 },
				'4' : { 'width' : 576 },
				'5' : { 'width' : 576 },
				'6' : { 'width' : 576 },
				'7' : { 'width' : 576 },
				'8' : { 'width' : 576 }
			},
			'grill' : {
				// one here represent side ID, same adjustments for same side, same type
				'1' : { 'width' : 576 },
				'2' : { 'width' : 576 },
				'3' : { 'width' : 576 },
				'4' : { 'width' : 576 },
				'5' : { 'width' : 576 },
				'6' : { 'width' : 576 },
				'7' : { 'width' : 576 },
				'8' : { 'width' : 576 }
			},
			'skirt' : {
				'1' : { 'width' : 576 },
				'2' : { 'width' : 576 },
				'3' : { 'width' : 576 },
				'4' : { 'width' : 576 },
				'5' : { 'width' : 576 },
				'6' : { 'width' : 576 },
				'7' : { 'width' : 576 },
				'8' : { 'width' : 576 }
			},
			'spoiler' : {
				'1' : { 'width' : 576 },
				'2' : { 'width' : 576 },
				'3' : { 'width' : 576 },
				'4' : { 'width' : 576 },
				'5' : { 'width' : 576 },
				'6' : { 'width' : 576 },
				'7' : { 'width' : 576 },
				'8' : { 'width' : 576 }
			}
		}
	}
};

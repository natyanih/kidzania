var selectCar;
var currentCar = {
    'name'        : null,
    'color'       : null,
    'tint'        : null,
    'decal'       : null,
    'rims'        : null,
    'grill'       : null,
    'skirt'       : null,
    'spoiler'     : null,
    'currentSide' : null,
    'raceBG'      : null
};

var adjustment = {
	'jazz' : {
		'offset' : {
			'color' : {
				// one here represent side ID, same adjustments for same side, same type
				'1' : {
					'x' : 20,
					'y' : 110
				}
			},
			'tint' : {
				// one here represent side ID, same adjustments for same side, same type
				'1' : {
					'x' : 20,
					'y' : 110
				}
			},
			'decal' : {
				// one here represent side ID, same adjustments for same side, same type
				'1' : {
					'x' : 20,
					'y' : 110
				}
			},
			'rims' : {
				// one here represent side ID, same adjustments for same side, same type
				'1' : {
					'x' : 20,
					'y' : 110
				}
			},
			'grill' : {
				// one here represent side ID, same adjustments for same side, same type
				'1' : {
					'x' : 20,
					'y' : 110
				}
			},
			'skirt' : {
				// one here represent side ID, same adjustments for same side, same type
				'1' : {
					'x' : 20,
					'y' : 110
				}
			},
			'spoiler' : {
				// one here represent side ID, same adjustments for same side, same type
				'1' : {
					'x' : 20,
					'y' : 110
				}
			}
		},
		// adjustment to dimensions
		'dimension' : {
			'color' : {
				'1' : {
					// only need the width, height will be computed : img.height * adjusment / img.width
					'width' : 500
				}
			},
			'tint' : {
				'1' : {
					// only need the width, height will be computed : img.height * adjusment / img.width
					'width' : 500
				}
			},
			'decal' : {
				'1' : {
					// only need the width, height will be computed : img.height * adjusment / img.width
					'width' : 500
				}
			},
			'rims' : {
				'1' : {
					// only need the width, height will be computed : img.height * adjusment / img.width
					'width' : 500
				}
			},
			'grill' : {
				'1' : {
					// only need the width, height will be computed : img.height * adjusment / img.width
					'width' : 500
				}
			},
			'skirt' : {
				'1' : {
					// only need the width, height will be computed : img.height * adjusment / img.width
					'width' : 500
				}
			},
			'spoiler' : {
				'1' : {
					// only need the width, height will be computed : img.height * adjusment / img.width
					'width' : 500
				}
			}
		}
	},
	'crv' : {
		'offset' : {
			'color' : {
				// one here represent side ID, same adjustments for same side, same type
				'1' : {
					'x' : 20,
					'y' : 110
				}
			},
			'tint' : {
				// one here represent side ID, same adjustments for same side, same type
				'1' : {
					'x' : 20,
					'y' : 110
				}
			},
			'decal' : {
				'1' : {
					'x' : 20,
					'y' : 110
				}
			},
			'rims' : {
				// one here represent side ID, same adjustments for same side, same type
				'1' : {
					'x' : 20,
					'y' : 110
				}
			},
			'grill' : {
				// one here represent side ID, same adjustments for same side, same type
				'1' : {
					'x' : 20,
					'y' : 110
				}
			},
			'skirt' : {
				'1' : {
					'x' : 20,
					'y' : 110
				}
			},
			'spoiler' : {
				'1' : {
					'x' : 20,
					'y' : 110
				}
			}
		},
		// adjustment to dimensions
		'dimension' : {
			'color' : {
				// one here represent side ID, same adjustments for same side, same type
				'1' : {
					// only need the width, height will be computed : img.height * adjusment / img.width
					'width' : 500
				}
			},
			'tint' : {
				// one here represent side ID, same adjustments for same side, same type
				'1' : {
					// only need the width, height will be computed : img.height * adjusment / img.width
					'width' : 500
				}
			},
			'decal' : {
				'1' : {
					'width' : 500
				}
			},
			'rims' : {
				// one here represent side ID, same adjustments for same side, same type
				'1' : {
					// only need the width, height will be computed : img.height * adjusment / img.width
					'width' : 500
				}
			},
			'grill' : {
				// one here represent side ID, same adjustments for same side, same type
				'1' : {
					// only need the width, height will be computed : img.height * adjusment / img.width
					'width' : 500
				}
			},
			'skirt' : {
				'1' : {
					'width' : 500
				}
			},
			'spoiler' : {
				'1' : {
					'width' : 500
				}
			}
		}
	},
	'city' : {
		'offset' : {
			'color' : {
				'1' : {
					'x' : 20,
					'y' : 110
				}
			},
			'tint' : {
				'1' : {
					'x' : 20,
					'y' : 110
				}
			},
			'decal' : {
				'1' : {
					'x' : 20,
					'y' : 110
				}
			},
			'rims' : {
				'1' : {
					'x' : 20,
					'y' : 110
				}
			},
			'grill' : {
				'1' : {
					'x' : 20,
					'y' : 110
				}
			},
			'skirt' : {
				'1' : {
					'x' : 20,
					'y' : 110
				}
			},
			'spoiler' : {
				'1' : {
					'x' : 20,
					'y' : 110
				}
			}
		},
		// adjustment to dimensions
		'dimension' : {
			'color' : {
				'1' : {
					// only need the width, height will be computed : img.height * adjusment / img.width
					'width' : 500
				}
			},
			'tint' : {
				'1' : {
					// only need the width, height will be computed : img.height * adjusment / img.width
					'width' : 500
				}
			},
			'decal' : {
				'1' : {
					// only need the width, height will be computed : img.height * adjusment / img.width
					'width' : 500
				}
			},
			'rims' : {
				'1' : {
					// only need the width, height will be computed : img.height * adjusment / img.width
					'width' : 500
				}
			},
			'grill' : {
				'1' : {
					// only need the width, height will be computed : img.height * adjusment / img.width
					'width' : 500
				}
			},
			'skirt' : {
				'1' : {
					// only need the width, height will be computed : img.height * adjusment / img.width
					'width' : 500
				}
			},
			'spoiler' : {
				'1' : {
					// only need the width, height will be computed : img.height * adjusment / img.width
					'width' : 500
				}
			}
		}
	}
};

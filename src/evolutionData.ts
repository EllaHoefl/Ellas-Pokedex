interface EvolutionStep {
	id: number;
	level?: number;
	item?: string;
	trade?: boolean;
}

export const evolutionData: {
	[key: number]: {
		to?: EvolutionStep[],
		from?: EvolutionStep
	}} = {
	1: {
		to: [{id: 2, level: 16}]
	},
	2: {
		from: {id: 1, level: 16},
		to: [{id: 3, level: 32}],
	},
	3: {
		from: {id: 2, level: 32}
	},
	4: {
		to: [{id: 5, level: 16}]
	},
	5: {
		from: {id: 4, level: 16},
		to: [{id: 6, level: 36}]
	},
	6: {
		from: {id: 5, level: 36}
	},
	7: {
		to: [{id: 8, level: 16}]
	},
	8: {
		from: {id: 7, level: 16},
		to: [{id: 9, level: 36}]
	},
	9: {
		from: {id: 8, level: 36}
	},
	10: {
		to: [{id: 11, level: 7}]
	},
	11: {
		from: {id: 10, level: 7},
		to: [{id: 12, level: 10}]
	},
	12: {
		from: {id: 11, level: 10}
	},
	13: {
		to: [{id: 14, level: 7}]
	},
	14: {
		from: {id: 13, level: 7},
		to: [{id: 15, level: 10}]
	},
	15: {
		from: {id: 14, level: 10}
	},
	16: {
		to: [{id: 17, level: 18}]
	},
	17: {
		from: {id: 16, level: 18},
		to: [{id: 18, level: 36}]
	},
	18: {
		from: {id: 17, level: 36}
	},
	19: {
		to: [{id: 20, level: 20}]
	},
	20: {
		from: {id: 19, level: 20}
	},
	21: {
		to: [{id: 22, level: 20}]
	},
	22: {
		from: {id: 21, level: 20},
	},
	23: {
		to: [{id: 24, level: 22}]
	},
	24: {
		from: {id:23, level: 22},
	},
	25: {
		to: [{id: 26, item: 'Thunderstone'}]
	},
	26: {
		from: {id: 25, item: 'Thunderstone'}
	},
	27: {
		to: [{id: 28, level: 22}]
	},
	28: {
		from: {id: 27, level: 22}
	},
	29: {
		to: [{id: 30, level: 16}]
	},
	30: {
		from: {id: 29, level: 16},
		to: [{id: 31, item: 'Moonstone'}]
	},
	31: {
		from: {id: 30, item: 'Moonstone'}
	},
	32: {
		to: [{id: 33, level: 16}]
	},
	33: {
		from: {id: 32, level: 16},
		to: [{id: 34, item: 'Moonstone'}]
	},
	34: {
		from: {id: 33, item: 'Moonstone'}
	},
	35: {
		to: [{id: 36, item: 'Moonstone'}]
	},
	36: {
		from: {id: 35, item: 'Moonstone'},
	},
	37: {
		to: [{id: 38, item: 'Firestone'}]
	},
	38: {
		from: {id: 37, item: 'Firestone'}
	},
	39: {
		to: [{id: 40, item: 'Moonstone'}]
	},
	40: {
		from: {id: 39, item: 'Moonstone'}
	},
	41: {
		to: [{id: 42, level: 22}]
	},
	42: {
		from: {id: 41, level: 22}
	},
	43: {
		to: [{id: 44, level: 21}]
	},
	44: {
		from: {id: 43, level: 21},
		to: [{id: 45, item: 'Leafstone'}]
	},
	45: {
		from: {id: 44, item: 'Leafstone'}
	},
	46: {
		to: [{id: 47, level: 24}]
	},
	47: {
		from: {id: 46, level: 46}
	},
	48: {
		to: [{id: 49, level: 31}]
	},
	49: {
		from: {id: 48, level: 31}
	},
	50: {
		to: [{id: 51, level: 26}]
	},
	51: {
		from: {id: 50, level: 50}
	},
	52: {
		to: [{id: 53, level: 28}]
	},
	53: {
		from: {id: 52, level: 28}
	},
	54: {
		to: [{id: 55, level: 33}]
	},
	55: {
		from: {id: 54, level: 33}
	},
	56: {
		to: [{id: 57, level: 28}]
	},
	57: {
		from: {id: 56, level: 28}
	},
	58: {
		to: [{id: 59, item: 'Firestone'}]
	},
	59: {
		from: {id: 58, item: 'Firestone'}
	},
	60: {
		to: [{id: 61, level: 25}]
	},
	61: {
		from: {id: 60, level: 25},
		to: [{id: 62, item: 'Waterstone'}]
	},
	62: {
		from: {id: 61, item: 'Waterstone'}
	},
	63: {
		to: [{id: 64, level: 16}]
	},
	64: {
		from: {id: 63, level: 16},
		to: [{id: 65, trade: true}]
	},
	65: {
		from: {id: 64, trade: true}
	},
	66: {
		to: [{id: 67, level: 28}]
	},
	67: {
		from: {id: 66, level: 28},
		to: [{id: 68, trade: true}]
	},
	68: {
		from: {id: 67, trade: true}
	},
	69: {
		to: [{id: 70, level: 21}]
	},
	70: {
		from: {id: 69, level: 21},
		to: [{id: 71, item: 'Leafstone'}]
	},
	71: {
		from: {id: 70, item: 'Leafstone'}
	},
	72: {
		to: [{id: 73, level: 30}]
	},
	73: {
		from: {id: 72, level: 30},
	},
	74: {
		to: [{id: 75, level: 25}]
	},
	75: {
		from: {id: 74, level: 25},
		to: [{id: 76, trade: true}]
	},
	76: {
		from: {id: 75, trade: true}
	},
	77: {
		to: [{id: 78, level: 40}]
	},
	78: {
		from: {id: 77, level: 40},
	},
	79: {
		to: [{id: 80, level: 37}]
	},
	80: {
		from: {id: 79, level: 37},
	},
	81: {
		to: [{id: 82, level: 30}]
	},
	82: {
		from: {id: 81, level: 30},
	},
	84: {
		to: [{id: 85, level: 31}]
	},
	85: {
		from: {id: 84, level: 31},
	},
	86: {
		to: [{id: 87, level: 34}]
	},
	87: {
		from: {id: 86, level: 34},
	},
	88: {
		to: [{id: 89, level: 38}]
	},
	89: {
		from: {id: 88, level: 38},
	},
	90: {
		to: [{id: 91, item: 'Waterstone'}]
	},
	91: {
		from: {id: 90, item: 'Waterstone'}
	},
	92: {
		to: [{id: 93, level: 25}]
	},
	93: {
		from: {id: 92, level: 25},
		to: [{id: 94, trade: true}]
	},
	94: {
		from: {id: 93, trade: true}
	},
	96: {
		to: [{id: 97, level: 26}]
	},
	97: {
		from: {id: 96, level: 26},
	},
	98: {
		to: [{id: 99, level: 28}]
	},
	99: {
		from: {id: 98, level: 28},
	},
	100: {
		to: [{id: 101, level: 30}]
	},
	101: {
		from: {id: 100, level: 30},
	},
	102: {
		to: [{id: 103, item: 'Leafstone'}]
	},
	103: {
		from: {id: 102, item: 'Leafstone'},
	},
	104: {
		to: [{id: 105, level: 28}]
	},
	105: {
		from: {id: 104, level: 28},
	},
	109: {
		to: [{id: 110, level: 35}]
	},
	110: {
		from: {id: 109, level: 35},
	},
	111: {
		to: [{id: 112, level: 42}]
	},
	112: {
		from: {id: 111, level: 42},
	},
	116: {
		to: [{id: 117, level: 32}]
	},
	117: {
		from: {id: 116, level: 32},
	},
	118: {
		to: [{id: 119, level: 33}]
	},
	119: {
		from: {id: 118, level: 33},
	},
	120: {
		to: [{id: 121, item: 'Waterstone'}]
	},
	121: {
		from: {id: 120, item: 'Waterstone'},
	},
	129: {
		to: [{id: 130, level: 20}]
	},
	130: {
		from: {id: 129, level: 20},
	},
	133: {
		to: [
			{id: 134, item: 'Waterstone'},
			{id: 135, item: 'Thunderstone'},
			{id: 136, item: 'Firestone'},
		]
	},
	134: {
		from: {id: 133, item: 'Waterstone'},
	},
	135: {
		from: {id: 133, item: 'Thunderstone'},
	},
	136: {
		from: {id: 133, item: 'Firestone'},
	},
	138: {
		to: [{id: 139, level: 40}],
	},
	139: {
		from: {id: 138, level: 40},
	},
	140: {
		to: [{id: 141, level: 40}],
	},
	141: {
		from: {id: 140, level: 40},
	},
	147: {
		to: [{id: 148, level: 30}],
	},
	148: {
		from: {id: 147, level: 30},
		to: [{id: 149, level: 55}],
	},
	149: {
		from: {id: 148, level: 55},
	}
};